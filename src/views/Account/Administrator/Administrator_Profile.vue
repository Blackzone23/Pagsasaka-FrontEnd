<template>
	<div class="min-h-screen bg-gray-300">
	  <!-- Profile Section -->
	  <div class="flex justify-center px-4 py-10 sm:py-16 md:py-20">
		<div class="w-full sm:w-3/4 md:w-2/3 lg:w-1/2 xl:w-2/5 2xl:w-2/5 p-4 mt-[150px] sm:p-6 bg-white shadow-lg rounded-lg">
		  <div class="text-center">
			<img
			  :src="adminRaw.profilePic"
			  alt="Profile Picture"
			  class="mx-auto rounded-full
				w-24 h-24
				sm:w-32 sm:h-32
				md:w-36 md:h-36
				lg:w-40 lg:h-40
				xl:w-44 xl:h-44
				2xl:w-48 2xl:h-48"
			/>
			<h2 class="mt-4 text-base sm:text-lg md:text-xl font-semibold">
			  {{ adminRaw.first_name }} {{ adminRaw.middle_name }} {{ adminRaw.last_name }}
			</h2>
			<p class="text-gray-600 text-xs sm:text-sm md:text-base">{{ adminRaw.email }}</p>
			<p class="text-gray-600 text-xs sm:text-sm md:text-base">{{ adminRaw.phone_number }}</p>
		  </div>
  
		  <div class="flex flex-col sm:flex-row justify-center items-center gap-3 mt-6 sm:mt-10 text-sm">
			<button @click="openEditAdminModal"
			  class="w-full sm:w-auto px-6 py-2 bg-green-800 text-white rounded-full hover:bg-green-600 transition">
			  Edit Profile
			</button>
			<button @click="openPasswordModal"
			  class="w-full sm:w-auto px-6 py-2 bg-red-700 text-white rounded-full hover:bg-red-500 transition">
			  Change Password
			</button>
		  </div>
		</div>
	  </div>
  
	  <!-- Edit Modal -->
	  <div v-if="isAdminEditing" class="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center px-4 z-50">
			<div class="bg-white p-6 rounded-lg shadow-lg w-full max-w-sm sm:max-w-md">
				<BaseLabel class="text-lg sm:text-xl font-semibold mb-4">Edit Profile</BaseLabel>
		
				<BaseLabel class="block mb-2">First Name</BaseLabel>
				<BaseInputField v-model="adminData.first_name" class="w-full mb-4" type="text" />
		
				<BaseLabel class="block mb-2">Email</BaseLabel>
				<BaseInputField v-model="adminData.email" class="w-full mb-4" type="email" />
		
				<BaseLabel class="block mb-2">Phone</BaseLabel>
				<BaseInputField v-model="adminData.phone_number" class="w-full mb-4" type="text" />
		
				<div class="flex justify-end gap-2 text-sm">
					<button @click="closeEditAdminModal" class="bg-gray-400 text-white py-2 px-4 rounded hover:bg-gray-500">
					Cancel
					</button>
					<button @click="saveProfileChanges" class="bg-green-800 text-white py-2 px-4 rounded hover:bg-green-600">
					Save
					</button>
				</div>
			</div>
	  </div>
  
	  <!-- Change Password Modal -->
	  <div v-if="ishowPasswordModal" class="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 px-4">
			<div class="bg-white rounded-xl p-6 w-full max-w-sm sm:max-w-md max-h-[90vh] overflow-y-auto shadow-lg">
			<h2 class="text-lg font-semibold mb-4">Change Password</h2>
	
			<div class="space-y-4">
				<div class="relative">
					<BaseLabel class="font-semibold">*New Password</BaseLabel>
					<BaseInputField v-model="passwordAdminData.password" :type="showPassword ? 'text' : 'password'" placeholder="Enter Your Password" class="w-full" />
					<button type="button" class="absolute right-3 2xl:top-10 lg:top-10 md:top-11  2xs:top-12 text-gray-500" @click="togglePasswordVisibility">
						<Icon :icon="showPassword ? 'ic:twotone-visibility-off' : 'ic:twotone-visibility'" />
					</button>
					</div>

					<div class="relative">
					<BaseLabel class="font-semibold">*Re-enter Password</BaseLabel>
					<BaseInputField v-model="passwordAdminData.password_confirmation" :type="reshowPassword ? 'text' : 'password'" placeholder="Re-enter password" class="w-full" />
					<button type="button" class="absolute right-3 2xl:top-10 lg:top-10 md:top-11 2xs:top-12 text-gray-500" @click="retogglePasswordVisibility">
						<Icon :icon="reshowPassword ? 'ic:twotone-visibility-off' : 'ic:twotone-visibility'" />
					</button>
					</div>
	
				<div class="flex justify-end space-x-2">
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

  const adminRaw = computed(() => store.state.userData.data?.user)
  
  /******************************************************************
 FUNCTION FOR RIDER INFO
******************************************************************/
const adminData = reactive({
  first_name: adminRaw.value.first_name || '',
  middle_name: adminRaw.value.middle_name || '',
  last_name: adminRaw.value.last_name || '',
  email: adminRaw.value.email || '',
  phone_number: adminRaw.value.phone_number || '',
  });

  const saveProfileChanges = async () => {
  try {
    await store.dispatch('updateProfile', {
      id: adminRaw.value.id,
      first_name: adminData.first_name,
      middle_name: adminData.middle_name,
      last_name: adminData.last_name,
      phone_number: adminData.phone_number,
      delivery_address: adminData.delivery_address,
      email: adminData.email,
    });

    closeEditAdminModal();

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
  

  const isAdminEditing = ref(false);
  
  const openEditAdminModal = () => {
    isAdminEditing.value = true;
  };
  
  const closeEditAdminModal = () => {
    isAdminEditing.value = false;
  };
/******************************************************************
 FUNCTION FOR UPDATE CHANGE PASSWORD
******************************************************************/

const passwordAdminData = reactive({
  password: adminRaw.value.password || '',
  password_confirmation: adminRaw.value.password_confirmation || '',

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
    if (passwordAdminData.password !== passwordAdminData.password_confirmation) {
      alert("Passwords do not match");
      return;
    }

    await store.dispatch('updatePassword', {
      id: adminRaw.value.id,
      password: passwordAdminData.password,
      password_confirmation: passwordAdminData.password_confirmation,
    });

    closePasswordModal();
    // Optionally clear the fields after successful update
    passwordAdminData.password = '';
    passwordAdminData.password_confirmation = '';

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
  </script>
  