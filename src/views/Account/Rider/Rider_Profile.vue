<template>
    <div class="h-screen bg-gray-300">
        <!-- Header -->
        <header class="bg-[#285a19]  shadow p-4 flex justify-between items-center text-white">
                <h1 class="text-lg sm:text-xl 2xl:ml-0 md:ml-10 2xs:ml-10 font-bold">Welcome to Rider Profile</h1>
                <div class="relative inline-block text-left">
                <!-- Profile Picture and Settings Icon -->
                <div class="flex items-center space-x-2">
                    <img :src="riderRaw.avatar" alt="Profile" class="w-10 h-10 rounded-full object-cover  shadow-md"/>
                    <Icon icon="uil:setting" width="24" height="24" class="cursor-pointer text-white" @click="toggleDropdown"/>
                </div>

                <!-- Dropdown Menu -->
                <div v-if="dropdownVisible" class="absolute right-0 z-50 mt-2 w-48 bg-white rounded shadow-lg">
                    <a href="/rider_profile" class="block px-4 py-2 text-sm text-black hover:bg-gray-100">
                        Account Info
                    </a>
                    <button @click="logout" class="block w-full text-left px-4 py-2 text-sm text-black hover:bg-gray-100">
                        Logout
                    </button>
                </div>
            </div>
        </header>
  
      <!-- Profile Section -->
      <div class="w-full flex justify-center px-4 py-20">
            <div class="w-1/2 max-w-4xl p-6 bg-white shadow-lg rounded-lg">
                <div class="text-center">
                    <img
                    :src="riderRaw.profilePic"
                    alt="Profile Picture"
                    class="w-24 h-24 sm:w-32 sm:h-32 md:w-40 md:h-40 lg:w-44 lg:h-44 mx-auto rounded-full"
                    />
                    <h2 class="mt-4 text-lg sm:text-xl font-semibold">{{ riderRaw.first_name }} {{ riderRaw.middle_name }} {{ riderRaw.last_name }}</h2>
                    <p class="text-gray-600 text-sm sm:text-base">{{ riderRaw.email }}</p>
                    <p class="text-gray-600 text-sm sm:text-base">{{ riderRaw.phone_number }}</p>
                </div>
        
                <div class="flex justify-center mt-6 gap-4 text-xs sm:mt-10">
                    <button @click="openEditRiderModal" class="px-6 max-w-xs rounded-full sm:max-w-sm lg:max-w-md bg-green-800 text-white py-2  hover:bg-green-600" > Edit Profile</button>
                    <button class="bg-red-700 text-white px-2 py-2 rounded-full hover:bg-red-500 transition" @click="openPasswordModal"> Change Password</button>
                </div>
            </div>
      </div>
  
      <!-- Edit Modal -->
      <div v-if="isRiderEditing" class="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center px-4 z-50">
            <div class="bg-white p-6 rounded-lg shadow-lg w-full max-w-md">
                <BaseLabel class="text-xl font-semibold mb-4">Edit Profile</BaseLabel>
        
                <BaseLabel class="block mb-2">Name</BaseLabel>
                <BaseInputField v-model="riderData.first_name" class="w-full p-2 border rounded mb-4" type="text" />
        
                <BaseLabel class="block mb-2">Email</BaseLabel>
                <BaseInputField v-model="riderData.email" class="w-full p-2 border rounded mb-4" type="email" />
        
                <BaseLabel class="block mb-2">Phone</BaseLabel>
                <BaseInputField v-model="riderData.phone_number" class="w-full p-2 border rounded mb-4" type="text"/>
        
                <div class="flex justify-end gap-2 text-sm">
                    <button @click="closeEditRiderModal" class="bg-gray-400 text-white py-2 px-4 rounded hover:bg-gray-500">
                    Cancel
                    </button>
                    <button @click="saveProfileChanges" class="bg-green-800 text-white py-2 px-4 rounded hover:bg-green-600">
                    Save
                    </button>
                </div>
            </div>
      </div>
      <div v-if="ishowPasswordModal" class="fixed inset-0 z-50 flex items-center justify-center  bg-black bg-opacity-50">
        <div class="bg-white rounded-xl p-6 w-full max-w-md max-h-[90vh] overflow-y-auto shadow-lg">
            <h2 class="text-lg font-semibold mb-4">Change Password</h2>

            <div class="space-y-3">

                <div class="relative">
                <BaseLabel class="font-semibold">*New Password</BaseLabel>
                <BaseInputField v-model="passwordRiderData.password" :type="showPassword ? 'text' : 'password'" placeholder="Enter Your Password" class="w-full" />
                <button type="button" class="absolute right-3 2xl:top-10 lg:top-10 md:top-11  2xs:top-12 text-gray-500" @click="togglePasswordVisibility">
                    <Icon :icon="showPassword ? 'ic:twotone-visibility-off' : 'ic:twotone-visibility'" />
                </button>
                </div>

                <div class="relative">
                <BaseLabel class="font-semibold">*Re-enter Password</BaseLabel>
                <BaseInputField v-model="passwordRiderData.password_confirmation" :type="reshowPassword ? 'text' : 'password'" placeholder="Re-enter password" class="w-full" />
                <button type="button" class="absolute right-3 2xl:top-10 lg:top-10 md:top-11 2xs:top-12 text-gray-500" @click="retogglePasswordVisibility">
                    <Icon :icon="reshowPassword ? 'ic:twotone-visibility-off' : 'ic:twotone-visibility'" />
                </button>
                </div>

                <div class="flex justify-end space-x-2 pt-2">
                <button type="button" @click="closePasswordModal" class="bg-gray-400 text-white py-2 px-4 rounded hover:bg-gray-500">
                    Cancel
                </button>
                <button @click="savePasswordChanges" class="bg-green-800 text-white py-2 px-4 rounded hover:bg-green-600">
                    Save
                </button>
                </div>
            </div>
        </div>
    </div>
    </div>
</template>
  
  
<script setup>
  import BaseLabel from '@/components/Input-Fields/BaseLabel.vue';
  import BaseInputField from '@/components/Input-Fields/BaseInputField.vue';
  import Toast from "@/components/Alerts/Toast.vue";
  import Loading from "@/components/Alerts/Loading.vue";
  import { debounce } from 'lodash';
  import { ref, computed, reactive, onMounted, watch  } from "vue";
  import { useVuelidate } from "@vuelidate/core";
  import { required, helpers } from "@vuelidate/validators";
  import { Icon } from "@iconify/vue";
  import { useRouter } from "vue-router";
  import { useStore } from "vuex";

  const store = useStore();
  const router = useRouter();

  const riderRaw = computed(() => store.state.userData.data?.user || {})
/******************************************************************
 FUNCTION FOR RIDER INFO
******************************************************************/
  const riderData = reactive({
  first_name: riderRaw.value.first_name || '',
  middle_name: riderRaw.value.middle_name || '',
  last_name: riderRaw.value.last_name || '',
  email: riderRaw.value.email || '',
  phone_number: riderRaw.value.phone_number || '',
  });

  const saveProfileChanges = async () => {
  try {
    await store.dispatch('updateProfile', {
      id: riderRaw.value.id,
      first_name: riderData.first_name,
      middle_name: riderData.middle_name,
      last_name: riderData.last_name,
      phone_number: riderData.phone_number,
      delivery_address: riderData.delivery_address,
      email: riderData.email,
    });

    closeEditRiderModal();

  } catch (error) {
    if (error.response?.data?.errors) {
      const errors = error.response.data.errors;
      // Display the first error message for general feedback
      const firstField = Object.keys(errors)[0];
      if (firstField) {
        alert(errors[firstField][0]);
      }
    } else {
      console.error("Error updating profile:", error);
      alert("An unexpected error occurred.");
    }
  }
};
  

  const isRiderEditing = ref(false);
  
  const openEditRiderModal = () => {
    isRiderEditing.value = true;
  };
  
  const closeEditRiderModal = () => {
    isRiderEditing.value = false;
  };
/******************************************************************
 FUNCTION FOR UPDATE CHANGE PASSWORD
******************************************************************/

const passwordRiderData = reactive({
  password: riderRaw.value.password || '',
  password_confirmation: riderRaw.value.password_confirmation || '',

});

const showPassword = ref(false);

const togglePasswordVisibility = () => {
  showPassword.value = !showPassword.value;
};
//re-password
const reshowPassword = ref(false);

const retogglePasswordVisibility = () => {
  reshowPassword.value = !reshowPassword.value;
};


//edit modal
const ishowPasswordModal = ref(false)

const openPasswordModal = () => {
    ishowPasswordModal.value = true;
};

// Close the modal
const closePasswordModal = () => {
    ishowPasswordModal.value = false;
};

const savePasswordChanges = async () => {
  try {
    if (passwordRiderData.password !== passwordRiderData.password_confirmation) {
      alert("Passwords do not match");
      return;
    }

    await store.dispatch('updatePassword', {
      id: riderRaw.value.id,
      password: passwordRiderData.password,
      password_confirmation: passwordRiderData.password_confirmation,
    });

    closePasswordModal();
    // Optionally clear the fields after successful update
    passwordRiderData.password = '';
    passwordRiderData.password_confirmation = '';

  } catch (error) {
    if (error.response?.data?.errors) {
      const errors = error.response.data.errors;
      const firstField = Object.keys(errors)[0];
      if (firstField) {
        alert(errors[firstField][0]);
      }
    } else {
      console.error("Error updating password:", error);
      alert("An unexpected error occurred.");
    }
  }
};
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
  