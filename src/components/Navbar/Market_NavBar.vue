<template>
    <!-- Loading screen and toast message -->
    <Loading v-if="showLoading" class="loading"></Loading>
    <Toast></Toast>

    <div class="bg-[#285a19] text-white p-2">
        <div class="bg-[#285a19] text-white">
            <div class="container mx-auto flex justify-between items-center 2xl:text-sm 2xs:text-xs p-4">
                
                <!-- Left Section: Logo and Links -->
                <div class="flex items-center space-x-4">
                    <a href="/about" class="hover:underline hidden md:inline">About</a>
                        <span class="hidden md:inline">|</span>
                        <span class="hidden md:inline">Follow us on</span>
                    <a href="#" class="hidden md:inline"><Icon icon="ic:twotone-facebook" width="20" height="20" style="color: white" /></a>
                    <a href="#" class="hidden md:inline"><Icon icon="mage:instagram-circle" width="20" height="20" style="color: white" /></a>
                </div>
        
                <!-- Burger icon -->
                <button class="md:hidden" @click="isMenuOpen = !isMenuOpen" aria-label="Toggle Menu">
                    <Icon icon="cil:hamburger-menu" width="24" height="24" style="color: white" />
                </button>
        
                <!-- Right section-->
                <div class="hidden md:flex items-center space-x-4">

                    <!-- Notifications and Help Section -->
                    <div class="flex items-center space-x-6">
                        <a href="#" class="flex items-center space-x-2 hover:underline">
                            <Icon icon="mdi:bell" width="16" height="16" style="color: #fff" />
                            <p>Notifications</p>
                        </a>
                        <a href="#" class="flex items-center space-x-2 hover:underline">
                            <Icon icon="mingcute:question-line" width="16" height="16" style="color: #fff" />
                            <span>Help</span>
                        </a>
                    </div>

                    <!-- User profile section -->
                    <div v-if="isLoggedIn" class="flex items-center space-x-2">
                        <a href="/profile" class="flex items-center space-x-2">
                            <img :src="userRaw.avatar" alt="User Profile" class="w-8 h-8 rounded-full cursor-pointer" />
                            <span> {{ userRaw.first_name }}  {{ userRaw.last_name }}</span>
                        </a>
                        <a href="#" class="hover:underline text-sm" @click.prevent="logout()">Logout</a>
                    </div>

                    <!-- Guest links -->
                    <div v-else class="space-x-4">
                        <a href="/signup" class="hover:underline">Sign up</a>
                        <a href="/login" class="hover:underline">Login</a>
                    </div>
                </div>
            </div>
        
            <!-- Dropdown Menu -->
            <div v-if="isMenuOpen" class="bg-[#285a19] md:hidden sm:show flex flex-col space-y-3 px-3 py-2 text-sm">
                    <a href="/about" class="hover:underline">About</a>  
                    <span>Follow us on:</span>
                <div class="flex space-x-3">
                    <a href="#"><Icon icon="ic:twotone-facebook" width="20" height="20" style="color: white" /></a>
                    <a href="#"><Icon icon="mage:instagram-circle" width="20" height="20" style="color: white" /></a>
                </div>
                <div class="flex items-center space-x-3">
                    <a href="#" class="flex items-center space-x-2 hover:underline text-white">
                        <Icon icon="mdi:bell" width="20" height="20" style="color: #fff"/> 
                        <span>Notifications</span>
                    </a>
                    <a href="#" class="flex items-center space-x-2 hover:underline text-white">
                        <Icon icon="mingcute:question-line" width="20" height="20" style="color: #fff" />
                        <span>Help</span>
                    </a>
                </div>
                
                 <!-- User profile section -->
                 <div v-if="isLoggedIn" class="flex flex-col space-y-3">
                        <a href="/profile" class="flex items-center space-x-2">
                            <img :src="userRaw.avatar" alt="User Profile" class="w-8 h-8 rounded-full cursor-pointer" />
                            <span>{{ userRaw.first_name }} {{ userRaw.last_name }}</span>
                        </a>
                        <a href="#" class="hover:underline text-sm" @click.prevent="logout()">Logout</a>
                    </div>

                    <!-- Guest links -->
                    <div v-else class="space-x-4">
                        <a href="/signup" class="hover:underline">Sign up</a>
                        <a href="/login" class="hover:underline">Login</a>
                    </div>
            </div>
        </div>

        <div class="flex items-center justify-center mt-2 space-y-2">
            <!-- Logo -->
            <div class="text-2xl font-bold">
                <a href="/market" class="flex items-center"><img :src="Logo" alt="Logo" class="2xl:h-20 2xs:h-14" /></a>
            </div>
    
            <!-- Search bar with cart -->
            <div class="flex items-center space-x-2">
                <BaseSearchField placeholder="Search..."></BaseSearchField>
                <a href="/cart" class="text-white hover:underline">
                    <Icon icon="bx:cart" width="35" height="35" style="color: white" />
                </a>
                <a href="/message" class="block md:hidden">
                    <Icon icon="raphael:chat" width="35" height="35" style="color: #fff" />
                </a>
            </div>
        </div>
    </div>
</template>


<script setup>
import Loading from '@/components/Alerts/Loading.vue'
import Toast from '@/components/Alerts/Toast.vue'
import Logo from '@/assets/Logo.png';
import BaseSearchField from '@/components/Input-Fields/BaseSearchField.vue';
import { debounce } from 'lodash';
import { ref, computed, onMounted} from "vue";
import { Icon } from "@iconify/vue";
import { useRouter } from "vue-router";
import { useStore } from "vuex";

const store = useStore();
const router = useRouter();
const userRaw = computed(() => store.state.userData.data?.user);

/*********************************************************************
FUNCTIONS FOR SEARCH
*********************************************************************/
// const searchQuery = ref('');

// // Search college
// const search = debounce(() => {
//     store.dispatch('Administrator/getCollege', { 
//         search: searchQuery.value, 
//     }).then(() => {
//         if (collegeList.value.length === 0) {
//             store.commit('setCurrentPage', 0);
//             store.commit('setTotalPages', 0);
//         }
//     });
// }, 500) // Adjust the debounce delay as needed (300 milliseconds in this example)


// State for dropdown menu
const isMenuOpen = ref(false);

// Get login status, profile picture, and user name from Vuex store
const showLoading = computed(() => store.state.showLoading.state);
const isLoggedIn = computed(() => store.state.isLoggedIn.value || sessionStorage.getItem('isLoggedIn') === 'true');


 // Log out Function
 async function logout() {
        await store.dispatch('logout')
            .then((response) => {
                if(response.isSuccess == true) {
                    sessionStorage.removeItem('isLoggedIn');
                    router.push({name: 'Login'}) 
            }
        })
    } 
</script>
