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

    <!-- Payout Modal (Placeholder) -->
    <div v-if="showPayoutModal" class="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div class="bg-white p-6 rounded-lg w-full max-w-md">
        <h2 class="text-lg font-bold mb-4">Request a Payout</h2>
        <p class="text-xs text-red-500 mb-2">Earliest available payout: 05 May 2025</p>
        <p class="text-xs mb-4">To the extent possible, additional slots are made regularly.</p>

        <div class="flex flex-col md:flex-row gap-4">
          <!-- Calendar -->
          <div class="flex-1">
            <div class="flex justify-between items-center mb-2">
              <button @click="previousMonth" class="text-blue-500"></button>
              <span class="font-semibold">{{ currentMonth }} {{ currentYear }}</span>
              <button @click="nextMonth" class="text-blue-500"></button>
            </div>
            <div class="grid grid-cols-7 gap-1 text-center text-xs">
              <div v-for="day in daysOfWeek" :key="day" class="font-semibold">{{ day }}</div>
              <div v-for="day in calendarDays" :key="day.date" :class="{
                  'bg-green-200': day.isAvailable && !day.isSelected && !day.isPast,
                  'bg-red-200': !day.isAvailable && !day.isSelected && !day.isPast,
                  'bg-blue-500 text-white': day.isSelected,
                  'text-gray-400': day.isPast || day.isEmpty,
                  'p-2 rounded cursor-pointer': !day.isEmpty
                }" @click="selectDate(day)">
                {{ day.day }}
              </div>
            </div>
          </div>

          <!-- Time Slots -->
          <div class="flex-1">
            <h3 class="font-semibold mb-2">Time</h3>
            <div v-for="slot in slotList" :key="slot.id" class="flex justify-between items-center mb-2">
              <label class="flex items-center">
                <input type="radio" :value="slot.time" v-model="selectedTime" class="mr-2"
                  :disabled="!slot.isAvailable || !selectedDate" />
                <span>{{ slot.time }}</span>
              </label>
              <span :class="{
                  'text-green-500': slot.isAvailable && selectedDate,
                  'text-red-500': !slot.isAvailable && selectedDate,
                  'text-gray-400': !selectedDate
                }">
                {{ slot.isAvailable && selectedDate ? `Available${slot.availableSlots ? ' Slots: ' + slot.availableSlots : ''}` : !selectedDate ? '' : 'Fully Booked' }}
              </span>
            </div>
          </div>
        </div>

        <!-- Legend -->
        <div class="flex gap-2 mt-4 text-xs">
          <div class="flex items-center">
            <span class="w-4 h-4 bg-green-200 inline-block mr-1"></span> Available
          </div>
          <div class="flex items-center">
            <span class="w-4 h-4 bg-red-200 inline-block mr-1"></span> Fully Booked
          </div>
        </div>

        <!-- Buttons -->
        <div class="flex justify-end gap-2 mt-4">
          <button @click="closePaymentModal" class="bg-blue-500 text-white py-2 px-4 rounded-md">Back</button>
          <button @click="confirmPayout" :disabled="!selectedDate || !selectedTime"
            class="bg-blue-500 text-white py-2 px-4 rounded-md disabled:bg-gray-300">Confirm</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import Loading from '@/components/Alerts/Loading.vue'
import Toast from '@/components/Alerts/Toast.vue'
import BaseSearchField from "@/components/Input-Fields/BaseSearchField.vue";
import { ref, computed, reactive, onMounted, watch } from "vue";
import { useVuelidate } from "@vuelidate/core";
import { required, helpers } from "@vuelidate/validators";
import { Icon } from "@iconify/vue";
import { useRouter } from "vue-router";
import { useStore } from "vuex";

const store = useStore();
const router = useRouter();
const showLoading = computed(() => store.state.showLoading.state);
const sellerRaw  = computed(() => store.state.userData.data?.user || {})
const paymentList= computed(() => store.state.User.payment.data);
const slotList= computed(() => store.state.User.slot.data);
const selectedDate = ref(null);
const selectedTime = ref(null);
/******************************************************************
FUNCTION FOR GET PAYMENT
******************************************************************/
function getPayMent() {
    store.dispatch('User/getPayMent');
}

watch(selectedDate, (newDate) => {
  if (newDate) {
    getSlots();
  }
});

onMounted(() => {
  getPayMent();
})

const hasPayments = computed(() => {
  return paymentList.value && paymentList.value.length > 0;
});

/******************************************************************
FUNCTION FOR GET SLOTS
******************************************************************/
function getSlots() {
  if (selectedDate.value) {
    const formattedDate = selectedDate.value.toISOString().split('T')[0]; // "YYYY-MM-DD"
    store.dispatch('User/getSlots', { date: formattedDate });
  }
}

onMounted(() => {
    getSlots();
})

const refreshPage = () => {
  // Reloads the page to refresh the content
  window.location.reload();
};

const exportCSV = () => {
  console.log('Exporting CSV...');
};

const showPayoutModal = ref(false)

const openPaymentModal = () => {
    showPayoutModal.value = true;
};

// Close the modal
const closePaymentModal = () => {
  selectedDate.value = null;
  selectedTime.value = null;
  showPayoutModal.value = false;
};

const previousMonth = () => {
  currentDate.value = new Date(currentDate.value.getFullYear(), currentDate.value.getMonth() - 1, 1);
  selectedDate.value = null;
  selectedTime.value = null;
};

const nextMonth = () => {
  currentDate.value = new Date(currentDate.value.getFullYear(), currentDate.value.getMonth() + 1, 1);
  selectedDate.value = null;
  selectedTime.value = null;
};

const selectDate = (day) => {
  if (day.isEmpty || day.isPast || !day.isAvailable) return;
  selectedDate.value = day.date;
  selectedTime.value = null;
};

const daysOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
const currentDate = ref(new Date(2025, 4, 1)); // Start at May 2025
const currentMonth = computed(() => currentDate.value.toLocaleString('default', { month: 'long' }));
const currentYear = computed(() => currentDate.value.getFullYear());


// const timeSlots = ref([
//   { time: '10:00-11:00', isAvailable: false, availableSlots: 0 },
//   { time: '11:00-12:00', isAvailable: false, availableSlots: 0 },
//   { time: '12:00-13:00', isAvailable: true, availableSlots: 2 },
//   { time: '13:00-14:00', isAvailable: true, availableSlots: 2 },
//   { time: '14:00-15:00', isAvailable: false, availableSlots: 0 },
//   { time: '15:00-16:00', isAvailable: false, availableSlots: 0 },
//   { time: '16:00-17:00', isAvailable: true, availableSlots: 13 },
// ]);

const calendarDays = computed(() => {
  const year = currentDate.value.getFullYear();
  const month = currentDate.value.getMonth();
  const firstDay = new Date(year, month, 1).getDay();
  const daysInMonth = new Date(year, month + 1, 0).getDate();
  const today = new Date(2025, 3, 20); // Reference date: April 20, 2025
  const days = [];

  for (let i = 0; i < firstDay; i++) {
    days.push({ day: '', isEmpty: true });
  }

  for (let day = 1; day <= daysInMonth; day++) {
    const date = new Date(year, month, day);
    const isPast = date < today;
    const isAvailable = !isPast && Math.random() > 0.5; // Random availability for demo
    const isSelected =
      selectedDate.value &&
      selectedDate.value.getDate() === day &&
      selectedDate.value.getMonth() === month &&
      selectedDate.value.getFullYear() === year;
    days.push({ day, date, isAvailable, isSelected, isPast });
  }

  return days;
});

/******************************************************************
FUNCTION FOR LOG OUT
******************************************************************/
const dropdownVisible = ref(false);
  
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
</style>