<template>
  <Loading v-if="showLoading" class="loading"></Loading>
  <Toast></Toast>

  <div class="h-screen w-full">
    <header class="bg-[#285a19] shadow p-4 flex justify-between items-center text-white">
      <h1 class="text-lg sm:text-xl 2xl:ml-0 md:ml-10 2xs:ml-10 font-bold">Payment Transaction</h1>
      <div class="flex items-center space-x-4">
        <div class="relative inline-block text-left">
          <div class="flex items-center space-x-2">
            <img :src="sellerRaw.avatar" alt="Profile" class="w-10 h-10 rounded-full object-cover shadow-md" />
            <Icon icon="uil:setting" width="24" height="24" class="cursor-pointer text-white" @click="toggleDropdown" />
          </div>
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
      <div class="flex flex-wrap items-center justify-between gap-4 mb-4">
        <div class="flex flex-wrap items-center gap-4">
          <button @click="refreshData" class="bg-[#608C54] py-2 px-4 sm:px-6 text-white rounded-md flex items-center gap-1 hover:bg-gray-700 transition">
            <Icon icon="material-symbols-light:refresh" width="20" height="20" />
            <span class="hidden sm:inline">Refresh</span>
          </button>
          <button @click="exportCSV" class="bg-gray-300 py-2 px-4 rounded-md text-sm sm:text-base hover:bg-gray-400 transition">
            Export to CSV
          </button>
          <button @click="checkEligibilityAndOpenModal" :disabled="!isPayoutEligible" class="bg-[#285a19] py-2 px-4 rounded-md text-sm sm:text-base text-white hover:bg-gray-700 transition" :class="{ 'bg-gray-300 cursor-not-allowed': !isPayoutEligible }">
            Request a Payout
          </button>
          <div class="text-sm sm:text-base font-semibold">Total Sales: ₱{{ totalSales }}</div>
        </div>
        <div v-if="payoutSchedule" class="text-sm sm:text-base font-semibold">
          <div>Payout Schedule:</div>
          <div>Date: {{ payoutSchedule.date }}</div>
          <div>Time: {{ payoutSchedule.time_slot }}</div>
          <div>Status: {{ payoutSchedule.status }}</div>
        </div>
      </div>

      <div class="mb-3 space-y-3">
        <p class="text-xs sm:text-sm md:text-base">View the payment history here. It might take some time for payments to appear in the portal.</p>
      </div>

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
              <tr v-else v-for="payment in paymentList" :key="payment.id" class="border-b border-gray-200 hover:bg-gray-200 text-xs sm:text-sm">
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

    <div v-if="showPayoutModal" class="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div class="bg-white p-6 rounded-lg w-full max-w-md">
        <h2 class="text-lg font-bold mb-4">Request a Payout</h2>
        <div class="grid grid-cols-1 gap-6">
          <div>
            <div class="text-sm font-medium">Date</div>
            <div class="text-xs text-green-600">Earliest available appointment: {{ earliestAvailableDate }}</div>
            <div class="text-xs text-red-500">To the extent possible, additional slots are made regularly.</div>
            <div class="flex justify-between items-center my-2">
              <button @click="previousMonth" class="text-blue-500 font-bold">«</button>
              <span class="font-medium">{{ currentMonth }} {{ currentYear }}</span>
              <button @click="nextMonth" class="text-blue-500 font-bold">»</button>
            </div>
            <div class="mb-2">
              <div class="grid grid-cols-7 text-center text-xs">
                <div v-for="day in daysOfWeek" :key="day" class="py-1">
                  {{ day.substring(0, 2) }}
                </div>
              </div>
              <div class="grid grid-cols-7 gap-1 text-center text-xs">
                <div v-for="day in calendarDays" :key="day.day + day.isEmpty" :class="[
                    'py-1 px-1',
                    day.isEmpty ? 'text-gray-300' : 'cursor-pointer',
                    day.isSelected ? 'bg-blue-500 text-white' : '',
                    !day.isEmpty && !day.isSelected ? 
                      day.isAvailable ? 'bg-green-100' : 'bg-red-100' : ''
                  ]" @click="day.isEmpty || !day.isAvailable || day.isPast || !isWeekday(day.date) ? null : selectDate(day)">
                  {{ day.day }}
                </div>
              </div>
            </div>
            <div class="flex gap-4 mt-1 text-xs">
              <div class="flex items-center">
                <span class="w-4 h-4 bg-green-100 inline-block mr-1"></span> Available
              </div>
              <div class="flex items-center">
                <span class="w-4 h-4 bg-red-100 inline-block mr-1"></span> Fully Booked
              </div>
            </div>
          </div>
          <div>
            <div class="text-sm font-medium mb-2">Time</div>
            <div class="space-y-2">
              <div v-for="(slot, index) in timeSlots" :key="index" class="flex justify-between items-center">
                <label class="flex items-center">
                  <input type="radio" :value="slot.time" v-model="selectedTime" class="mr-2" :disabled="!slot.isAvailable || !selectedDate" />
                  <span class="text-sm">{{ slot.time }}</span>
                </label>
                <span :class="{
                    'text-green-600': slot.isAvailable && selectedDate,
                    'text-red-500': !slot.isAvailable && selectedDate,
                    'text-gray-400': !selectedDate
                  }" class="text-sm">
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
        <div class="flex justify-between mt-6">
          <button @click="closePaymentModal" class="bg-blue-500 hover:bg-blue-600 text-white py-2 px-8 rounded">
            BACK
          </button>
          <button @click="confirmPayout" :disabled="!selectedDate || !selectedTime" :class="[
              'py-2 px-8 rounded text-white',
              !selectedDate || !selectedTime ? 'bg-gray-300' : 'bg-blue-500 hover:bg-blue-600'
            ]">
            CONFIRM
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
import jsPDF from 'jspdf';

const store = useStore();
const router = useRouter();
const showLoading = computed(() => store.state.showLoading.state);
const sellerRaw = computed(() => store.state.userData.data?.user || {});
const paymentList = computed(() => store.state.User.payment.data);
const dropdownVisible = ref(false);
const showPayoutModal = ref(false);
const selectedDate = ref(null);
const selectedTime = ref(null);
const isPayoutEligible = ref(false);
const eligibilityResponse = ref(null);
const payoutSchedule = ref(null);

const toastDuration = 3000;

const totalSales = computed(() => {
  return eligibilityResponse.value?.totalSales || '0.00';
});

const refreshData = async () => {
  await getPayMent();
  await checkPayoutEligibility();
  await fetchPayoutSchedule();
};

async function getPayMent() {
  try {
    await store.dispatch('User/getPayMent');
  } catch (error) {
    console.error('Failed to fetch payment list:', error);
  }
}

async function fetchPayoutSchedule() {
  try {
    const response = await store.dispatch('User/getPendingPayments');
    const payouts = response.data || [];
    const sellerPayout = payouts.find(p => p.account_id === sellerRaw.value.id);
    if (sellerPayout) {
      payoutSchedule.value = {
        date: sellerPayout.date,
        time_slot: sellerPayout.time_slot,
        status: sellerPayout.status
      };
    } else {
      const approvedResponse = await store.dispatch('User/getApprovedPayments');
      const approvedPayouts = approvedResponse.data || [];
      const approvedPayout = approvedPayouts.find(p => p.account_id === sellerRaw.value.id);
      payoutSchedule.value = approvedPayout ? {
        date: approvedPayout.date,
        time_slot: approvedPayout.time_slot,
        status: approvedPayout.status
      } : null;
    }
  } catch (error) {
    console.error('Failed to fetch payout schedule:', error);
    payoutSchedule.value = null;
  }
}

onMounted(() => {
  refreshData();
});

const hasPayments = computed(() => {
  return paymentList.value && paymentList.value.length > 0;
});

const daysOfWeek = ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'];
const currentDate = ref(new Date(2025, 4, 1));
const currentMonth = computed(() => currentDate.value.toLocaleString('default', { month: 'long' }));
const currentYear = computed(() => currentDate.value.getFullYear());

const earliestAvailableDate = computed(() => {
  const today = new Date();
  const earliest = new Date(today);
  earliest.setDate(today.getDate() + 1);
  while (!isWeekday(earliest)) {
    earliest.setDate(earliest.getDate() + 1);
  }
  return earliest.toLocaleDateString('en-US', { day: 'numeric', month: 'long', year: 'numeric' });
});

const timeSlots = ref([]);

const calendarDays = computed(() => {
  const year = currentDate.value.getFullYear();
  const month = currentDate.value.getMonth();
  const firstDay = new Date(year, month, 1).getDay();
  const daysInMonth = new Date(year, month + 1, 0).getDate();
  const today = new Date();
  const days = [];

  for (let i = 0; i < firstDay; i++) {
    days.push({ day: '', isEmpty: true });
  }

  for (let day = 1; day <= daysInMonth; day++) {
    const date = new Date(year, month, day);
    const isPast = date < new Date(today.getFullYear(), today.getMonth(), today.getDate());
    const isAvailable = !isPast && isWeekday(date) && (slotAvailability.value[date.toISOString().split('T')[0]]?.totalAvailable || 0) > 0;
    const isSelected = selectedDate.value && 
                      date.getDate() === selectedDate.value.getDate() &&
                      date.getMonth() === selectedDate.value.getMonth() &&
                      date.getFullYear() === selectedDate.value.getFullYear();
    days.push({ 
      day, 
      date, 
      isAvailable, 
      isSelected, 
      isPast,
      isEmpty: false
    });
  }

  return days;
});

const slotAvailability = ref({});

const previousMonth = () => {
  currentDate.value = new Date(currentDate.value.getFullYear(), currentDate.value.getMonth() - 1, 1);
  selectedDate.value = null;
  selectedTime.value = null;
  fetchAvailableSlots();
};

const nextMonth = () => {
  currentDate.value = new Date(currentDate.value.getFullYear(), currentDate.value.getMonth() + 1, 1);
  selectedDate.value = null;
  selectedTime.value = null;
  fetchAvailableSlots();
};

const selectDate = (day) => {
  if (day.isEmpty || day.isPast || !day.isAvailable) return;
  selectedDate.value = day.date;
  selectedTime.value = null;
  updateTimeSlotAvailability();
};

const isWeekday = (date) => {
  const day = date.getDay();
  return day !== 0 && day !== 6;
};

const updateTimeSlotAvailability = () => {
  if (!selectedDate.value) {
    timeSlots.value = [];
    return;
  }

  const dateStr = selectedDate.value.toISOString().split('T')[0];
  const slots = slotAvailability.value[dateStr]?.slots || [];
  timeSlots.value = [
    '10:00-11:00',
    '11:00-12:00',
    '12:00-13:00',
    '13:00-14:00',
    '14:00-15:00',
    '15:00-16:00',
    '16:00-17:00',
  ].map(time => {
    const slot = slots.find(s => s.time_slot === time) || {};
    return {
      time,
      isAvailable: slot.is_available || false,
      availableSlots: slot.available_slots || null,
    };
  });
};

const fetchAvailableSlots = async () => {
  const year = currentDate.value.getFullYear();
  const month = currentDate.value.getMonth();
  const startDate = new Date(year, month, 1).toISOString().split('T')[0];
  const endDate = new Date(year, month + 1, 0).toISOString().split('T')[0];
  try {
    const slots = await store.dispatch('User/getSlots', { date: `${startDate}/${endDate}` });
    const availability = {};
    slots.forEach(slot => {
      const date = slot.date;
      if (!availability[date]) {
        availability[date] = { slots: [], totalAvailable: 0 };
      }
      availability[date].slots.push(slot);
      if (slot.is_available) {
        availability[date].totalAvailable += slot.available_slots || 1;
      }
    });
    slotAvailability.value = availability;
  } catch (error) {
    console.error('Failed to fetch slots:', error);
  }
};

watch(selectedDate, () => {
  if (selectedDate.value) {
    updateTimeSlotAvailability();
  }
});

watch(currentDate, () => {
  fetchAvailableSlots();
});

const exportCSV = async () => {
  try {
    store.dispatch('toggleLoader', true);
    const blob = await store.dispatch('User/getCSV');
    const text = await blob.text();
    try {
      const jsonResponse = JSON.parse(text);
      if (!jsonResponse.isSuccess) {
        throw new Error(jsonResponse.message || 'Failed to export CSV');
      }
    } catch (e) {
      if (e.message && e.message !== 'Failed to export CSV') {
        const csvBlob = new Blob([text], { type: 'text/csv;charset=utf-8' });
        const url = window.URL.createObjectURL(csvBlob);
        const link = document.createElement('a');
        link.href = url;
        link.setAttribute('download', `payment_history_${new Date().toISOString().split('T')[0]}.csv`);
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        window.URL.revokeObjectURL(url);
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
        throw e;
      }
    }
  } catch (error) {
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
    store.dispatch('toggleLoader', false);
  }
};

const checkPayoutEligibility = async () => {
  try {
    const response = await store.dispatch('User/checkPayoutEligibility');
    eligibilityResponse.value = response;
    isPayoutEligible.value = response.eligible;
  } catch (error) {
    console.error('Eligibility check failed:', error);
    eligibilityResponse.value = null;
    isPayoutEligible.value = false;
  }
};

const checkEligibilityAndOpenModal = async () => {
  await checkPayoutEligibility();
  if (isPayoutEligible.value) {
    showPayoutModal.value = true;
    fetchAvailableSlots();
  } else {
    store.commit('showToast', {
      showToast: true,
      toastMessage: `You are not eligible for a payout. Total sales (₱${totalSales.value}) must be at least ₱500 or you have a pending payout request.`,
      toastType: 'error'
    });
    setTimeout(() => {
      store.commit('showToast', { showToast: false, toastMessage: '', toastType: 'default' });
    }, toastDuration);
  }
};

const closePaymentModal = () => {
  selectedDate.value = null;
  selectedTime.value = null;
  showPayoutModal.value = false;
  slotAvailability.value = {};
  timeSlots.value = [];
};

const generateRandomCode = () => {
  const words = [
    'apple', 'banana', 'cherry', 'date', 'elderberry', 'fig', 'grape', 'honeydew', 'kiwi', 'lemon',
    'mango', 'nectarine', 'orange', 'papaya', 'quince', 'raspberry', 'strawberry', 'tangerine', 'ugli', 'watermelon'
  ];
  const shuffled = words.sort(() => 0.5 - Math.random());
  return shuffled.slice(0, 10).join('-');
};

const confirmPayout = async () => {
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

  if (!isPayoutEligible.value || parseFloat(totalSales.value) < 500) {
    store.commit('showToast', {
      showToast: true,
      toastMessage: `You are not eligible for a payout. Total sales (₱${totalSales.value}) must be at least ₱500.`,
      toastType: 'error'
    });
    setTimeout(() => {
      store.commit('showToast', { showToast: false, toastMessage: '', toastType: 'default' });
    }, toastDuration);
    return;
  }

  store.dispatch('toggleLoader', true);

  const formattedDate = selectedDate.value.toLocaleDateString('en-US', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
  const dateStr = selectedDate.value.toISOString().split('T')[0];
  const validationCode = generateRandomCode();

  const payoutData = {
    date: dateStr,
    time_slot: selectedTime.value,
    total_sales: parseFloat(totalSales.value),
    validation_code: validationCode,
  };

  try {
    const response = await store.dispatch('User/requestPayout', payoutData);
    if (!response.isSuccess) {
      throw new Error(response.message || 'Failed to request payout');
    }

    const scheduleSlip = {
      sellerName: sellerRaw.value.name || 'N/A',
      date: formattedDate,
      time: selectedTime.value,
      totalSales: `₱${totalSales.value}`,
      appointmentType: 'Payout Request',
      validationCode: validationCode,
      queueNumber: response.payout.queue_number,
    };

    const doc = new jsPDF();
    doc.setFontSize(16);
    doc.text('Schedule Slip', 20, 20);
    doc.setFontSize(12);
    doc.text(`Seller: ${scheduleSlip.sellerName}`, 20, 40);
    doc.text(`Date: ${scheduleSlip.date}`, 20, 50);
    doc.text(`Time: ${scheduleSlip.time}`, 20, 60);
    doc.text(`Total Sales: ${scheduleSlip.totalSales}`, 20, 70);
    doc.text(`Appointment Type: ${scheduleSlip.appointmentType}`, 20, 80);
    doc.text(`Validation Code: ${scheduleSlip.validationCode}`, 20, 90);
    doc.text(`Queue Number: ${scheduleSlip.queueNumber}`, 20, 100);

    const pdfName = `schedule-slip-${dateStr}.pdf`;
    doc.save(pdfName);

    store.commit('showToast', {
      showToast: true,
      toastMessage: 'Payout request submitted and schedule slip downloaded',
      toastType: 'success'
    });
    setTimeout(() => {
      store.commit('showToast', { showToast: false, toastMessage: '', toastType: 'default' });
    }, toastDuration);
    closePaymentModal();
    await refreshData();
  } catch (error) {
    console.error('Payout request failed:', error);
    store.commit('showToast', {
      showToast: true,
      toastMessage: error.message || 'Failed to request payout. Please try again.',
      toastType: 'error'
    });
    setTimeout(() => {
      store.commit('showToast', { showToast: false, toastMessage: '', toastType: 'default' });
    }, toastDuration);
  } finally {
    store.dispatch('toggleLoader', false);
  }
};

const toggleDropdown = () => {
  dropdownVisible.value = !dropdownVisible.value;
};

const logout = async () => {
  try {
    const response = await store.dispatch('logout');
    if (response.isSuccess) {
      router.push({ name: 'Login' });
    }
  } catch (error) {
    console.error('Logout error:', error);
  }
};
</script>

<style scoped>
</style>