<template>
  <!-- Loading screen and toast message -->
  <Loading v-if="showLoading" class="loading"></Loading>
  <Toast></Toast>

  <div class="h-screen w-full">
    <!-- Header -->
    <header class="bg-[#285a19] shadow p-4 flex justify-between items-center text-white">
      <h1 class="text-lg sm:text-xl 2xl:ml-0 md:ml-10 2xs:ml-10 font-bold">Payment Transaction</h1>
      <div class="flex items-center space-x-4">
        <div class="relative inline-block text-left">
          <!-- Profile Picture and Settings Icon -->
          <div class="flex items-center space-x-2">
            <img :src="sellerRaw.avatar" alt="Profile" class="w-10 h-10 rounded-full object-cover shadow-md" />
            <Icon icon="uil:setting" width="24" height="24" class="cursor-pointer text-white" @click="toggleDropdown" />
          </div>

          <!-- Dropdown Menu -->
          <div v-if="dropdownVisible" class="absolute right-0 z-50 mt-2 w-48 bg-white rounded shadow-lg">
            <a href="/seller-profile" class="block px-4 py-2 text-sm text-black hover:bg-gray-100"> Account Info </a>
            <button @click="logout" class="block w-full text-left px-4 py-2 text-sm text-black hover:bg-gray-100">
              Logout
            </button>
          </div>
        </div>
      </div>
    </header>

    <div class="container mx-auto p-4">
      <!-- Buttons -->
      <div class="flex flex-wrap items-center gap-4 mb-4">
        <button @click="refreshPage"
          class="bg-[#608C54] py-2 px-4 sm:px-6 text-white rounded-md flex items-center gap-1 hover:bg-gray-700 transition">
          <Icon icon="material-symbols-light:refresh" width="20" height="20" />
          <span class="hidden sm:inline">Refresh</span>
        </button>
        <button @click="exportCSV"
          class="bg-gray-300 py-2 px-4 rounded-md text-sm sm:text-base hover:bg-gray-400 transition">
          Export to CSV
        </button>
        <button @click="showPayoutModal = true"
          class="bg-[#285a19] py-2 px-4 rounded-md text-sm sm:text-base text-white hover:bg-gray-700 transition">
          Request a Payout
        </button>
        <div class="text-sm sm:text-base font-semibold">Total Sales: ₱{{ totalSales }}</div>
      </div>

      <!-- Description -->
      <div class="mb-3 space-y-3">
        <p class="text-xs sm:text-sm md:text-base">View the payment history here. It might take some time for payments to
          appear in the portal.</p>
      </div>

      <!-- Table Wrapper for Scrollability -->
      <div class="overflow-x-auto">
        <div class="max-h-[400px] overflow-y-auto">
          <table class="w-full border-collapse border border-gray-300 rounded-md min-w-[600px]">
            <thead class="sticky top-0 bg-gray-300 z-10">
              <tr class="text-xs sm:text-sm md:text-md">
                <th class="px-3 sm:px-4 py-2 text-left border-b border-gray-300">
                  Date <Icon icon="marketeq:up-down-arrow" width="16" height="16" />
                </th>
                <th class="px-3 sm:px-4 py-2 text-left border-b border-gray-300">
                  Product Name <Icon icon="marketeq:up-down-arrow" width="16" height="16" />
                </th>
                <th class="px-3 sm:px-4 py-2 text-left border-b border-gray-300">
                  Payment Method <Icon icon="marketeq:up-down-arrow" width="16" height="16" />
                </th>
                <th class="px-3 sm:px-4 py-2 text-left border-b border-gray-300">
                  Amount <Icon icon="marketeq:up-down-arrow" width="16" height="16" />
                </th>
              </tr>
            </thead>
            <tbody>
              <tr v-if="!hasPayments" class="text-center">
                <td colspan="4" class="px-3 sm:px-4 py-2 text-xs sm:text-sm">No transactions found.</td>
              </tr>
              <tr v-else v-for="payment in paymentList" :key="payment.id"
                class="border-b border-gray-200 hover:bg-gray-200 text-xs sm:text-sm">
                <td class="px-3 sm:px-4 py-2">{{ payment.date }}</td>
                <td class="px-3 sm:px-4 py-2">{{ payment.product_name }}</td>
                <td class="px-3 sm:px-4 py-2">
                  <span class="text-blue-500">{{ payment.payment_method }}</span>
                </td>
                <td class="px-3 sm:px-4 py-2">₱{{ payment.amount }}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>

    <!-- Updated Payout Modal -->
    <div v-if="showPayoutModal" class="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div class="bg-white p-6 rounded-lg w-full max-w-md">
        <h2 class="text-lg font-bold mb-4">Request a Payout</h2>
        
        <div class="grid grid-cols-1 gap-6">
          <!-- Date Section -->
          <div>
            <div class="text-sm font-medium">Date</div>
            <div class="text-xs text-green-600">Earliest available appointment: 05 May 2025</div>
            <div class="text-xs text-red-500">To the extent possible, additional slots are made regularly.</div>
            
            <!-- Month Navigation -->
            <div class="flex justify-between items-center my-2">
              <button @click="previousMonth" class="text-blue-500 font-bold">«</button>
              <span class="font-medium">{{ currentMonth }} {{ currentYear }}</span>
              <button @click="nextMonth" class="text-blue-500 font-bold">»</button>
            </div>
            
            <!-- Calendar -->
            <div class="mb-2">
              <!-- Days of week header -->
              <div class="grid grid-cols-7 text-center text-xs">
                <div v-for="day in daysOfWeek" :key="day" class="py-1">
                  {{ day.substring(0, 2) }}
                </div>
              </div>
              
              <!-- Calendar days -->
              <div class="grid grid-cols-7 gap-1 text-center text-xs">
                <div v-for="day in calendarDays" :key="day.day + day.isEmpty" 
                    :class="[
                      'py-1 px-1',
                      day.isEmpty ? 'text-gray-300' : 'cursor-pointer',
                      day.isSelected ? 'bg-blue-500 text-white' : '',
                      !day.isEmpty && !day.isSelected ? 
                        day.isAvailable ? 'bg-green-100' : 'bg-red-100' : ''
                    ]"
                    @click="day.isEmpty || !day.isAvailable ? null : selectDate(day)">
                  {{ day.day }}
                </div>
              </div>
            </div>
            
            <!-- Legend -->
            <div class="flex gap-4 mt-1 text-xs">
              <div class="flex items-center">
                <span class="w-4 h-4 bg-green-100 inline-block mr-1"></span> Available
              </div>
              <div class="flex items-center">
                <span class="w-4 h-4 bg-red-100 inline-block mr-1"></span> Fully Booked
              </div>
            </div>
          </div>
          
          <!-- Time Section -->
          <div>
            <div class="text-sm font-medium mb-2">Time</div>
            <div class="space-y-2">
              <div v-for="(slot, index) in timeSlots" :key="index" class="flex justify-between items-center">
                <label class="flex items-center">
                  <input type="radio" :value="slot.time" v-model="selectedTime" class="mr-2" 
                    :disabled="!slot.isAvailable || !selectedDate" />
                  <span class="text-sm">{{ slot.time }}</span>
                </label>
                <span 
                  :class="{
                    'text-green-600': slot.isAvailable && selectedDate,
                    'text-red-500': !slot.isAvailable && selectedDate,
                    'text-gray-400': !selectedDate
                  }"
                  class="text-sm">
                  {{ 
                    slot.isAvailable && selectedDate ? 
                      slot.availableSlots ? `Available Slots: ${slot.availableSlots}` : 'Available' : 
                      !selectedDate ? '' : 'Fully Booked' 
                  }}
                </span>
              </div>
            </div>
          </div>
        </div>

        <!-- Buttons -->
        <div class="flex justify-between mt-6">
          <button @click="closePaymentModal" class="bg-blue-500 hover:bg-blue-600 text-white py-2 px-8 rounded">
            BACK
          </button>
          <button 
            @click="confirmPayout" 
            :disabled="!selectedDate || !selectedTime"
            :class="[
              'py-2 px-8 rounded text-white',
              !selectedDate || !selectedTime ? 'bg-gray-300' : 'bg-blue-500 hover:bg-blue-600'
            ]">
            NEXT
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import Loading from '@/components/Alerts/Loading.vue';
import Toast from '@/components/Alerts/Toast.vue';
import { ref, computed, onMounted, watch } from "vue";
import { useRouter } from "vue-router";
import { useStore } from "vuex";
import { Icon } from "@iconify/vue";
import jsPDF from 'jspdf'; // Import jsPDF for PDF generation

const store = useStore();
const router = useRouter();
const showLoading = computed(() => store.state.showLoading.state);
const sellerRaw = computed(() => store.state.userData.data?.user || {});
const paymentList = computed(() => store.state.User.payment.data);
const dropdownVisible = ref(false);
const showPayoutModal = ref(false);
const selectedDate = ref(null);
const selectedTime = ref(null);

// Define toast timing constants
const toastDuration = 3000; // 3 seconds
const toastDelay = 0; // No delay

// Compute totalSales
const totalSales = computed(() => {
  return paymentList.value
    ? paymentList.value.reduce((sum, payment) => sum + parseFloat(payment.amount || 0), 0).toFixed(2)
    : '0.00';
});

/******************************************************************
FUNCTION FOR GET PAYMENT
******************************************************************/
function getPayMent() {
  store.dispatch('User/getPayMent');
}

onMounted(() => {
  getPayMent();
});

const hasPayments = computed(() => {
  return paymentList.value && paymentList.value.length > 0;
});

/******************************************************************
CALENDAR AND TIME SLOT FUNCTIONS
******************************************************************/
const daysOfWeek = ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'];
const currentDate = ref(new Date(2025, 4, 1)); // Start at May 2025
const currentMonth = computed(() => currentDate.value.toLocaleString('default', { month: 'long' }));
const currentYear = computed(() => currentDate.value.getFullYear());

// Sample time slots data structure
const timeSlots = ref([
  { time: '10:00-11:00', isAvailable: true, availableSlots: null },
  { time: '11:00-12:00', isAvailable: true, availableSlots: null },
  { time: '12:00-13:00', isAvailable: true, availableSlots: 2 },
  { time: '13:00-14:00', isAvailable: true, availableSlots: 2 },
  { time: '14:00-15:00', isAvailable: true, availableSlots: null },
  { time: '15:00-16:00', isAvailable: true, availableSlots: null },
  { time: '16:00-17:00', isAvailable: true, availableSlots: 13 },
]);

// Create calendar days based on current month/year
const calendarDays = computed(() => {
  const year = currentDate.value.getFullYear();
  const month = currentDate.value.getMonth();
  const firstDay = new Date(year, month, 1).getDay();
  const daysInMonth = new Date(year, month + 1, 0).getDate();
  const today = new Date(2025, 3, 25); // Reference date: April 25, 2025
  const days = [];

  // Add empty slots for days before the first of the month
  for (let i = 0; i < firstDay; i++) {
    days.push({ day: '', isEmpty: true });
  }

  // Generate the days of the month
  for (let day = 1; day <= daysInMonth; day++) {
    const date = new Date(year, month, day);
    const isPast = date < today;
    
    // Generate availability - in real app this would come from API
    // May 5th (earliest available date) and other specific dates based on screenshots
    const isAvailable = 
      (month === 4 && (day === 5 || day === 6 || day === 13 || day === 14 || day === 15 || day === 16)) || 
      (month === 3 && (day === 28 || day === 29 || day === 30));
    
    const isSelected = selectedDate.value && 
                      date.getDate() === selectedDate.value.getDate() &&
                      date.getMonth() === selectedDate.value.getMonth() &&
                      date.getFullYear() === selectedDate.value.getFullYear();
                      
    days.push({ 
      day, 
      date, 
      isAvailable: !isPast && isAvailable, 
      isSelected, 
      isPast,
      isEmpty: false
    });
  }

  return days;
});

// Navigation functions
const previousMonth = () => {
  currentDate.value = new Date(currentDate.value.getFullYear(), currentDate.value.getMonth() - 1, 1);
  selectedDate.value = null;
  selectedTime.value = null;
  updateTimeSlotAvailability();
};

const nextMonth = () => {
  currentDate.value = new Date(currentDate.value.getFullYear(), currentDate.value.getMonth() + 1, 1);
  selectedDate.value = null;
  selectedTime.value = null;
  updateTimeSlotAvailability();
};

const selectDate = (day) => {
  if (day.isEmpty || day.isPast || !day.isAvailable) return;
  selectedDate.value = day.date;
  selectedTime.value = null;
  updateTimeSlotAvailability();
};

// Update time slot availability based on selected date
const updateTimeSlotAvailability = () => {
  if (!selectedDate.value) return;
  
  const date = selectedDate.value.getDate();
  const month = selectedDate.value.getMonth();
  
  // For April 25th specifically (shown as fully booked in image 2)
  if (month === 3 && date === 25) {
    timeSlots.value = timeSlots.value.map(slot => ({ ...slot, isAvailable: false }));
    return;
  }
  
  // For May 8th (selected date in image 1)
  if (month === 4 && date === 8) {
    timeSlots.value = [
      { time: '10:00-11:00', isAvailable: true, availableSlots: null },
      { time: '11:00-12:00', isAvailable: true, availableSlots: null },
      { time: '12:00-13:00', isAvailable: true, availableSlots: 2 },
      { time: '13:00-14:00', isAvailable: true, availableSlots: 2 },
      { time: '14:00-15:00', isAvailable: true, availableSlots: null },
      { time: '15:00-16:00', isAvailable: true, availableSlots: null },
      { time: '16:00-17:00', isAvailable: true, availableSlots: 13 },
    ];
    return;
  }
  
  // Default behavior for other dates
  timeSlots.value = timeSlots.value.map(slot => {
    // Randomly set availability (in real app would be from API)
    const isAvailable = Math.random() > 0.3;
    const availableSlots = isAvailable ? (Math.random() > 0.7 ? Math.floor(Math.random() * 15) + 1 : null) : null;
    return { ...slot, isAvailable, availableSlots };
  });
};

// Watch for date changes
watch(selectedDate, () => {
  if (selectedDate.value) {
    updateTimeSlotAvailability();
  }
});

/******************************************************************
UTILITY FUNCTIONS
******************************************************************/
const refreshPage = () => {
  window.location.reload();
};

const exportCSV = async () => {
  try {
    store.dispatch('toggleLoader', true); // Show loading state

    // Call the getCSV action
    const blob = await store.dispatch('User/getCSV');

    // Check if the response is a JSON error (e.g., no data found)
    const text = await blob.text();
    try {
      const jsonResponse = JSON.parse(text);
      if (!jsonResponse.isSuccess) {
        throw new Error(jsonResponse.message || 'Failed to export CSV');
      }
    } catch (e) {
      if (e.message && e.message !== 'Failed to export CSV') {
        // Not a JSON response, so it's likely the CSV file
        const csvBlob = new Blob([text], { type: 'text/csv;charset=utf-8' });

        // Create a download link
        const url = window.URL.createObjectURL(csvBlob);
        const link = document.createElement('a');
        link.href = url;

        // Set the filename
        link.setAttribute('download', `payment_history_${new Date().toISOString().split('T')[0]}.csv`);

        // Trigger the download
        document.body.appendChild(link);
        link.click();

        // Clean up
        document.body.removeChild(link);
        window.URL.revokeObjectURL(url);

        // Show success toast
        store.commit('showToast', {
          showToast: true,
          toastMessage: 'CSV exported successfully',
          toastType: 'success'
        });

        setTimeout(() => {
          store.commit('showToast', {
            showToast: false,
            toastMessage: '',
            toastType: 'default'
          });
        }, toastDuration);
      } else {
        // JSON error was thrown, rethrow to catch block
        throw e;
      }
    }
  } catch (error) {
    // Suppress console error for known cases like "No payment history found"
    if (error.message !== 'No payment history found.') {
      console.error('Export CSV error:', error);
    }
    store.commit('showToast', {
      showToast: true,
      toastMessage: error.message || 'Failed to export CSV',
      toastType: 'error'
    });

    setTimeout(() => {
      store.commit('showToast', {
        showToast: false,
        toastMessage: '',
        toastType: 'default'
      });
    }, toastDuration);
  } finally {
    store.dispatch('toggleLoader', false); // Hide loading state
  }
};

/******************************************************************
PAYOUT MODAL FUNCTIONS
******************************************************************/
// Open the modal
const openPaymentModal = () => {
  showPayoutModal.value = true;
};

// Close the modal
const closePaymentModal = () => {
  selectedDate.value = null;
  selectedTime.value = null;
  showPayoutModal.value = false;
};

// Confirm payout with PDF generation
const confirmPayout = () => {
  if (!selectedDate.value || !selectedTime.value) {
    store.commit('showToast', {
      showToast: true,
      toastMessage: 'Please select a date and time',
      toastType: 'error'
    });
    setTimeout(() => {
      store.commit('showToast', { showToast: false, toastMessage: '', toastType: 'default' });
    }, toastDuration);
    return;
  }

  store.dispatch('toggleLoader', true);

  // Format the selected date
  const formattedDate = selectedDate.value.toLocaleDateString('en-US', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  // Schedule slip data
  const scheduleSlip = {
    sellerName: sellerRaw.value.name || 'N/A',
    date: formattedDate,
    time: selectedTime.value,
    totalSales: `₱${totalSales.value}`,
    appointmentType: 'Payout Request',
  };

  // Generate PDF
  const doc = new jsPDF();
  doc.setFontSize(16);
  doc.text('Schedule Slip', 20, 20);
  doc.setFontSize(12);
  doc.text(`Seller: ${scheduleSlip.sellerName}`, 20, 40);
  doc.text(`Date: ${scheduleSlip.date}`, 20, 50);
  doc.text(`Time: ${scheduleSlip.time}`, 20, 60);
  doc.text(`Total Sales: ${scheduleSlip.totalSales}`, 20, 70);
  doc.text(`Appointment Type: ${scheduleSlip.appointmentType}`, 20, 80);

  // Save PDF
  const pdfName = `schedule-slip-${scheduleSlip.date.replace(/, /g, '-')}.pdf`;
  doc.save(pdfName);

  // Simulate API call
  setTimeout(() => {
    store.dispatch('toggleLoader', false);
    
    // Show success message
    store.commit('showToast', {
      showToast: true,
      toastMessage: 'Payout request submitted and schedule slip downloaded',
      toastType: 'success'
    });
    
    setTimeout(() => {
      store.commit('showToast', {
        showToast: false,
        toastMessage: '',
        toastType: 'default'
      });
    }, toastDuration);
    
    closePaymentModal();
  }, 1000);
};

/******************************************************************
FUNCTION FOR LOG OUT
******************************************************************/
// Toggle the dropdown visibility
const toggleDropdown = () => {
  dropdownVisible.value = !dropdownVisible.value;
};

const logout = async () => {
  try {
    const response = await store.dispatch('logout');
    if (response.isSuccess) {
      router.push({ name: 'Login' }); // Redirect to the Login page
    }
  } catch (error) {
    console.error('Logout error:', error); // Handle any errors
  }
};
</script>

<style scoped>
/* Add any specific styles you need here */
</style>