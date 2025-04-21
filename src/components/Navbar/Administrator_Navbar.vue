<template>
    <div class="relative min-h-screen">
        <!-- Sidebar / Drawer -->
        <div class="h-full w-64 bg-[#285a19] fixed 2xl:relative z-50 transition-transform duration-300 ease-in-out transform" :class="{'-translate-x-full pointer-events-none': !isOpen && screenSize < 1536, 'translate-x-0': isOpen || screenSize >= 1536}" >
            <nav class="p-5">
                <!-- Logo -->
                <div class="flex justify-center">
                <img :src="Logo" alt="Logo" class="2xl:h-28 2xs:h-28 w-58">  
                </div>

                <!-- Navigation Links -->
                <div class="space-y-14 flex flex-col items-start text-lg font-semibold text-white ml-10 mt-10">
                <div class="flex items-center space-x-2">
                    <Icon icon="material-symbols:dashboard" width="24" height="24" style="color: white" />
                    <router-link :to="{ name: 'Admin_Dashboard' }" active-class="text-gray-400" class="hover:text-gray-400">Dashboard</router-link>
                </div>
                <div class="flex items-center space-x-2">
                    <Icon icon="icon-park-outline:ad-product" width="24" height="24" style="color: white" />
                    <router-link :to="{ name: 'Administrator_List' }" active-class="text-gray-400" class="hover:text-gray-400">Rider List</router-link>
                </div>

                <div class="flex items-center space-x-2">
                  <Icon icon="material-symbols-light:payments-sharp" width="24" height="24"  style="color: white" />
                    <router-link :to="{ name: 'Payouts' }" active-class="text-gray-400" class="hover:text-gray-400">Payouts</router-link>
                </div>


                <div class="flex items-center space-x-2">
                  <Icon icon="material-symbols-light:order-approve-outline-sharp" width="24" height="24"  style="color: white" />
                    <router-link :to="{ name: 'Approve' }" active-class="text-gray-400" class="hover:text-gray-400">Approve</router-link>
                </div>


                </div>
            </nav>
        </div>

        <!-- Header/Navbar -->
        <header class="bg-[#285a19] shadow p-4 flex justify-between items-center text-white z-40 fixed top-0 right-0 w-full 2xl:w-[calc(100%-16rem)] 2xl:ml-64">
            <!-- Drawer Toggle Button for Small Screens -->
            <button class="2xl:hidden p-2 rounded-md" @click="isOpen = !isOpen">
                <Icon icon="material-symbols:menu" width="32" height="32" />
            </button>
            <h1 class="text-lg sm:text-xl font-bold">{{ headerTitle }}</h1>

            <!-- Settings Dropdown -->
            <div class="flex items-center space-x-2">
                    <img :src="adminRaw.avatar" alt="Profile" class="w-10 h-10 rounded-full object-cover  shadow-md"/>
                    <Icon icon="uil:setting" width="24" height="24" class="cursor-pointer text-white" @click="toggleDropdown"/>
                </div>

                <!-- Dropdown Menu -->
                <div v-if="dropdownVisible" class="absolute right-4 z-50 mt-[130px] w-48 bg-white rounded shadow-lg">
                    <a href="/admin_profile" class="block px-4 py-2 text-sm text-black hover:bg-gray-100">
                        Account Info
                    </a>
                    <button @click="logout" class="block w-full text-left px-4 py-2 text-sm text-black hover:bg-gray-100">
                        Logout
                    </button>
                </div>
        </header>

        <!-- Overlay when Sidebar is Open -->
        <div v-if="isOpen && screenSize < 1536" class="fixed inset-0 bg-black bg-opacity-50 2xl:hidden z-40" @click="isOpen = false"></div>
    </div>
</template>

<script setup>
import { ref, computed, reactive, onMounted, watch,onUnmounted  } from "vue";
import Logo from '@/assets/Logo.png';
import { Icon } from "@iconify/vue";
import { useRouter } from 'vue-router';
import { useStore } from 'vuex';
const store = useStore();
const router = useRouter();

const isOpen = ref(false);
const screenSize = ref(window.innerWidth);
const adminRaw = computed(() => store.state.userData.data?.user)

// Update screenSize on resize
const updateScreenSize = () => {
    screenSize.value = window.innerWidth;
    if (screenSize.value >= 1536) {
        isOpen.value = true; // Always keep sidebar open on 2xl
    }
};

onMounted(() => {
    window.addEventListener("resize", updateScreenSize);
    updateScreenSize();
});

onUnmounted(() => {
    window.removeEventListener("resize", updateScreenSize);
});

const headerTitle = ref('');

const updateHeaderTitle = (routeName) => {
  switch (routeName) {
    case 'Admin_Dashboard':
      headerTitle.value = 'Welcome to Dashboard';
      break;
    case 'Administrator_List':
      headerTitle.value = 'Welcome to Admin List';
      break;
    case 'Administrator_Profile':
      headerTitle.value = 'Welcome to Admin Profile';
      break;
    default:
      headerTitle.value = 'Welcome to List of Orders';
  }
};

watch(
  () => router.currentRoute.value.name,
  (newVal) => {
    updateHeaderTitle(newVal);
  },
  { immediate: true }
);

/******************************************************************
 FUNCTION FOR LOGOUT
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
