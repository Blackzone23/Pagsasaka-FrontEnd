<template>
    <div class="flex h-screen bg-gray-100">
        <div class="flex-1 flex flex-col">
              <!-- Header -->
            <header class="bg-[#608C54] shadow p-4 flex justify-between items-center text-white">
                <h1 class="text-xl font-bold">Product</h1>
                <div class="flex items-center space-x-4">
                    <div class="flex space-x-2">
                    <!-- Settings Icon with Dropdown -->
                    <div class="relative">
                        <Icon icon="uil:setting" width="24" height="24" style="color: white" @click="toggleDropdown" />
                        <!-- Dropdown Menu -->
                        <div v-if="dropdownVisible" class="absolute right-0 mt-2 bg-white shadow-lg rounded p-2 w-48">
                            <button class="w-full text-left px-4 py-2 text-sm text-black" @click="logout()">Logout</button>
                        </div>
                    </div>
                    </div>
                </div>
            </header>

            <!-- Dashboard Content -->
            <main class="p-4 flex flex-col gap-4 mt-8">
                <div class="flex items-center space-x-4 justify-end">
                    <div class="space-x-4 items-center flex">
                        <!-- Button to toggle drafts or all products -->
                        <button  class="px-4 py-2 bg-[#608C54] text-white rounded-md text-sm flex items-center space-x-2"  @click="toggleView">

                            <!-- Toggle Icons Based on isShowingDrafts -->
                            <Icon  v-if="isShowingDrafts" icon="oui:return-key" width="20" height="20"  style="color: white" />

                            <Icon  v-else icon="material-symbols:drafts"  width="20"  height="20" style="color: white"  />
                            <!-- Toggle Text Based on isShowingDrafts -->
                            <span>{{ isShowingDrafts ? 'Back to Product List' : 'Saved Drafts' }}</span>
                        </button>
                        <button class="px-4 py-2 bg-[#608C54] text-white rounded-md text-sm" @click="openAddProductModal">
                            + Add New Product
                        </button>
                    </div>
                </div>

                <!-- Add New Product Modal -->
                <div v-if="isAddProductModalOpen" class="fixed inset-0 flex items-center justify-center">
                    <div class="bg-white rounded-lg w-[800px] p-6 border-4 border-gray-300 flex">
                        <div class="w-1/2 pr-4 mt-3">
                            <div class="flex items-center justify-between">
                                <BaseLabel class="font-bold text-2xl">Add New Product</BaseLabel>
                            </div>

                            <!-- Form Fields -->
                            <div class="flex flex-col mt-2  ">
                                <BaseLabel class="font-semibold">Product Type:</BaseLabel>
                                <BaseSelectField>
                                    <BaseOptionDefaultField>Category</BaseOptionDefaultField>
                                    <BaseOptionField></BaseOptionField>
                                </BaseSelectField>

                                <BaseLabel class="mt-4 font-semibold">Product Name:</BaseLabel>
                                <BaseInputField placeholder="Ex. Sibuyas" />

                                <BaseLabel class="mt-4 font-semibold">Description</BaseLabel>
                                <BaseInputField class="rounded-lg border-gray-500 shadow-md pb-20" placeholder="Type the description"> </BaseInputField>
                            </div>
                            <div class="flex space-x-4 mt-2">
                                <!-- Amount Field -->
                                <div class="flex flex-col">
                                    <BaseLabel class="text-sm font-semibold">Price:</BaseLabel>
                                    <div class="relative">
                                        <!-- Peso Sign -->
                                        <span class="absolute left-2 top-1/2 transform -translate-y-1/2 text-gray-500">₱</span>
                                        <BaseInputField  class="pl-6 border border-gray-400 rounded-md w-32 h-10 text-center focus:outline-none focus:ring-1 focus:ring-teal-500"  @input="validateNumber" />
                                    </div>
                                </div>
                                <!-- Stocks Field -->
                                <div class="flex flex-col">
                                    <BaseLabel class="text-sm font-semibold">Stocks:</BaseLabel>
                                    <BaseInputField  class="border border-gray-400 rounded-md w-32 h-10 text-center focus:outline-none focus:ring-1 focus:ring-teal-500"  @input="validateNumber"/>
                                </div>
                            </div>
                        </div>

                        <!-- Image Upload Section -->
                        <div class="w-1/2 pl-4 border-l border-gray-300">
                            <div class="text-end">
                                <!-- Close Button -->
                                <button class="text-gray-500 hover:text-gray-700" @click="closeAddProductModal">
                                <Icon icon="fontisto:close" width="1.2rem" height="1.2rem" style="color: #5D5F5D" />
                                </button>
                            </div>
                            <div class="mb-4">
                                <BaseLabel class="text-lg font-semibold">Product Image</BaseLabel>
                            </div>

                            <!-- Main Image Upload -->
                            <div class="mb-4">
                                <div class="h-40 w-full border-dashed border-2 border-gray-300 flex items-center justify-center rounded-md">
                                <span class="text-gray-400">Upload Main Image</span>
                                <!-- Add functionality for file input -->
                                <input type="file" accept="image/*" class="absolute opacity-0 cursor-pointer" />
                                </div>
                            </div>

                            <!-- Thumbnail Uploads -->
                            <div class="grid grid-cols-3 gap-2">
                                <div class="h-20 border-dashed border-2 border-gray-300 flex items-center justify-center rounded-md">

                                    <span class="text-gray-400">+</span>
                                    <!-- Add functionality for file input -->
                                    <input type="file" accept="image/*" class="absolute opacity-0 cursor-pointer" />

                                </div>
                                <div class="h-20 border-dashed border-2 border-gray-300 flex items-center justify-center rounded-md">

                                    <span class="text-gray-400">+</span>
                                    <!-- Add functionality for file input -->
                                    <input type="file" accept="image/*" class="absolute opacity-0 cursor-pointer" />

                                </div>
                                <div class="h-20 border-dashed border-2 border-gray-300 flex items-center justify-center rounded-md">

                                    <span class="text-gray-400">+</span>
                                    <!-- Add functionality for file input -->
                                    <input type="file" accept="image/*" class="absolute opacity-0 cursor-pointer" />

                                </div>
                            </div>
                            <div class="items-center flex text-xs mt-2 text-gray-500 space-x-2">
                                <Icon icon="cuida:alert-outline" width="24" height="24"  style="color: #ec0404" />
                                <p>You need at least 3 images. Pay attention to the quality of the pictures you add</p>
                            </div>
                            <div>
                                <BaseLabel class="font-bold">Visibility</BaseLabel>
                                <div class="flex space-x-5">
                                <BaseRadioButton v-for="option in ['Published', 'Schedule']" :key="option" :name="'visibility'" :label="option" :value="option" v-model="tinIdSelected" class="text-xs"></BaseRadioButton>
                                </div>
                            </div>
                            <!-- Submit Buttons -->
                            <div class="mt-6 flex justify-end space-x-2 text-xs">
                                <button type="submit" class="px-2 py-2 bg-white border-2 rounded-md hover:bg-gray-400">
                                Save as Draft
                                </button>
                                <button type="submit" class="px-6 py-2 bg-[#007C80] text-white rounded-md hover:bg-gray-400">
                                Publish
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Update Product Modal -->
                <div v-if="isUpdateProductModalOpen" class="fixed inset-0 flex items-center justify-center">
                    <div class="bg-white rounded-lg w-[800px] p-6 border-4 border-gray-300 flex">
                        <!-- Form Section -->
                        <div class="w-1/2 pr-4 mt-3">
                            <div class="flex items-center justify-between">
                                <BaseLabel class="font-bold text-2xl">Update Product</BaseLabel>
                            </div>

                            <!-- Form Fields -->
                            <div class="flex flex-col mt-2">
                                <BaseLabel class="font-semibold">Product Type:</BaseLabel>
                                <BaseSelectField v-model="updatedProduct.productType">
                                    <BaseOptionDefaultField>Category</BaseOptionDefaultField>
                                    <BaseOptionField v-for="(category, index) in categories" :key="index">{{ category }}</BaseOptionField>
                                </BaseSelectField>

                                <BaseLabel class="mt-4 font-semibold">Product Name:</BaseLabel>
                                <BaseInputField v-model="updatedProduct.productName" placeholder="Ex. Sibuyas" />

                                <BaseLabel class="mt-4 font-semibold">Description</BaseLabel>
                                <BaseInputField class="rounded-lg border-gray-500 shadow-md pb-20" v-model="updatedProduct.description" placeholder="Type the description" />
                            </div>

                            <div class="flex space-x-4 mt-2">
                                <!-- Amount Field -->
                                <div class="flex flex-col">
                                    <BaseLabel class="text-sm font-semibold">Price:</BaseLabel>
                                    <div class="relative">
                                        <!-- Peso Sign -->
                                        <span class="absolute left-2 top-1/2 transform -translate-y-1/2 text-gray-500">₱</span>
                                        <BaseInputField  class="pl-6 border border-gray-400 rounded-md w-32 h-10 text-center focus:outline-none focus:ring-1 focus:ring-teal-500"  @input="validateNumber" />
                                    </div>
                                </div>
                                <!-- Stocks Field -->
                                <div class="flex flex-col">
                                    <BaseLabel for="stocks" class="text-sm font-semibold ">Stocks</BaseLabel>
                                    <BaseInputField id="stocks" v-model="updatedProduct.stocks"  class="border border-gray-400 rounded-md w-32 h-10 text-center focus:outline-none focus:ring-1 focus:ring-teal-500 "  @input="validateNumber"/>
                                </div>
                            </div>
                        </div>

                        <!-- Image Upload Section -->
                        <div class="w-1/2 pl-4 border-l border-gray-300">
                            <div class="text-end">
                                <!-- Close Button -->
                                <button class="text-gray-500 hover:text-gray-700" @click="closeUpdateProductPowerModal">
                                    <Icon icon="fontisto:close" width="1.2rem" height="1.2rem" style="color: #5D5F5D" />
                                </button>
                            </div>
                            <div class="mb-4">
                                <BaseLabel class="text-lg font-semibold">Product Image</BaseLabel>
                            </div>

                            <!-- Main Image Upload -->
                            <div class="mb-4">
                                <div class="h-40 w-full border-dashed border-2 border-gray-300 flex items-center justify-center rounded-md">
                                    <span class="text-gray-400">Upload Main Image</span>
                                    <!-- Update existing file input with v-model binding -->
                                    <input type="file" accept="image/*" @change="handleMainImageChange" class="absolute opacity-0 cursor-pointer" />
                                </div>
                            </div>

                            <!-- Thumbnail Uploads -->
                            <div class="grid grid-cols-3 gap-2">
                                <div v-for="(image, index) in updatedProduct.thumbnails" :key="index" class="h-20 border-dashed border-2 border-gray-300 flex items-center justify-center rounded-md">
                                    <span class="text-gray-400">+</span>
                                    <input type="file" accept="image/*" @change="handleThumbnailChange(index)" class="absolute opacity-0 cursor-pointer" />
                                </div>
                            </div>
                            <div class="items-center flex text-xs mt-2 text-gray-500 space-x-2">
                                <Icon icon="cuida:alert-outline" width="24" height="24" style="color: #ec0404" />
                                <p>You need at least 3 images. Pay attention to the quality of the pictures you add</p>
                            </div>

                            <div>
                                <BaseLabel class="font-bold">Visibility</BaseLabel>
                                <div class="flex space-x-5">
                                    <BaseRadioButton v-for="option in ['Published', 'Schedule']" :key="option" :name="'tinIdOption'" :label="option" :value="option" v-model="updatedProduct.visibility" class="text-xs"></BaseRadioButton>
                                </div>
                            </div>

                            <!-- Submit Buttons -->
                            <div class="mt-16 flex justify-end space-x-2 text-xs">
                                <button @click="saveAsDraft" class="px-2 py-2 bg-white border-2 rounded-md hover:bg-gray-400">
                                    Save as Draft
                                </button>
                                <button @click="publishProduct" class="px-6 py-2 bg-[#007C80] text-white rounded-md hover:bg-gray-400">
                                    Publish
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <!-- Delete Modal -->
                    <div v-if="isDeleteModalVisible" class="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
                        <div class="bg-white p-6 rounded-lg shadow-lg w-96 text-center">
                                <div class="flex justify-center">
                                <Icon  icon="material-symbols:delete-outline"  width="50" height="50"  style="color: #ff0000" />
                                </div>
                                <!-- Message -->
                                <p class="text-sm text-gray-600 mt-4">Are you sure you want to delete this item? This action cannot be undone</p>

                                <!-- Buttons -->
                                <div class="flex gap-2 mt-4">
                                <!-- Cancel Button -->
                                <button class="bg-[#608C54] text-white px-14 py-2 rounded hover:bg-gray-400" @click="closeDeleteProductModal">
                                    Cancel
                                </button>

                                <!-- Confirm Button -->
                                <button  class="bg-red-500 text-white px-14 py-2 rounded hover:bg-red-600"  @click="confirmDelete">
                                    Delete
                                </button>
                                </div>
                        </div>
                    </div>
                </div>

                <!-- Table Section -->
                <div class="w-full">
                    <div class="overflow-xs-auto">
                        <table class="w-full">
                            <!-- Table Header -->
                            <thead>
                                <tr class="bg-gray-200 text-sm text-start">
                                <th class="p-4 w-10">
                                    <BaseInputField type="checkbox"  v-model="selectAll" @change="toggleSelectAll" />
                                </th>
                                <th class="px-4 py-3 text-left">Product</th>
                                <th class="px-4 py-3 text-left">Created at</th>
                                <th class="px-4 py-3 text-left">Stocks</th>
                                <th class="px-4 py-3 text-left">Price</th>
                                <th class="px-4 py-3 text-end">Action</th>
                                </tr>
                            </thead>

                            <!-- Table Body -->
                            <tbody>
                                <tr v-for="product in filteredProducts" :key="product.id" class="border-b hover:bg-gray-100 text-sm">
                                    <td class="p-4"><input type="checkbox" /></td>
                                    <td class="p-4 flex items-center space-x-4">
                                        <img :src="product.image" alt="Product Image" class="w-12 h-12 rounded-md" />
                                        <span>{{ product.name }}</span>
                                    </td>
                                    <td class="px-4 py-2">{{ product.createdAt }}</td>
                                    <td class="px-4 py-2"> {{ product.status }} kg</td>
                                    <td class="px-4 py-2 font-bold">{{ product.amount }}</td>
                                    <td class="px-4 py-2 space-x-2 text-end">
                                        <!-- Edit Button -->
                                        <button class="text-blue-500 hover:text-blue-700" @click="openUpdateProductModal(product.id)">
                                        <Icon icon="lucide:pencil-line" width="1.2rem" height="1.2rem" style="color: #578CCB" />
                                        </button>

                                        <!-- Delete Button -->
                                        <button class="text-red-500 hover:text-red-700" @click="openDeleteProductModal(product.id)">
                                        <Icon icon="octicon:trash-24" width="1.2rem" height="1.2rem" style="color: #DA3B64"/>
                                        </button>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </main>
        </div>
    </div>
</template>

<script setup>
import UserDashBoard_Navbar from "@/components/Navbar/UserDashBoard_Navbar.vue";
import BaseLabel from "@/components/Input-Fields/BaseLabel.vue";
import BaseInputField from "@/components/Input-Fields/BaseInputField.vue";
import BaseOptionDefaultField from "@/components/Input-Fields/BaseOptionDefaultField.vue";
import BaseOptionField from "@/components/Input-Fields/BaseOptionField.vue";
import BaseSelectField from "@/components/Input-Fields/BaseSelectField.vue";
import BaseRadioButton from "@/components/Input-Fields/BaseRadioButton.vue";
import { ref, computed, reactive, onMounted } from "vue";
import { useVuelidate } from "@vuelidate/core";
import { required, helpers } from "@vuelidate/validators";
import { Icon } from "@iconify/vue";
import { useRouter } from "vue-router";
import { useStore } from "vuex";

const store = useStore();
const router = useRouter();

/******************************************************************
 FUNCTION FOR ADDING NEW PRODUCT
******************************************************************/

// V-model for adding Product
const productData = reactive({
  first_name: "",
  last_name: "",
});

// Modal for adding Product
const isAddProductModalOpen = ref(false);

const openAddProductModal = () => {
  isAddProductModalOpen.value = true;
};

const closeAddProductModal = () => {
  isAddProductModalOpen.value = false;
  clearValues();
};


// Function for adding Product
async function createProduct() {
  const validationResult = await $validateAddManPowerRules.value.$validate();
  if (validationResult) {
    await store.dispatch("User/createProduct", manPowerData).then(
      (response) => {
        if (response.isSuccess == true) {
          closeAddProductModal();
          getProductList();
          router.push({ name: "Administrator_ManpowerList" });
        }
      }
    );
  }
}


/******************************************************************
 FUNCTION FOR UPDATE PRODUCT
******************************************************************/
const updatedProduct = ref({
    productType: '',
    productName: '',
    description: '',
    amount: null,
    stocks: null,
    mainImage: null,
    thumbnails: [],
    visibility: 'Published', // default value
});
const isUpdateProductModalOpen = ref(false);

const openUpdateProductModal = () => {
  isUpdateProductModalOpen.value = true;
};

// Function to handle closing modal
function closeUpdateProductPowerModal() {
    isUpdateProductModalOpen.value = false;
}

// Function to handle main image change
function handleMainImageChange(event) {
    const file = event.target.files[0];
    updatedProduct.value.mainImage = file;
}

// Function to handle thumbnail image change
function handleThumbnailChange(index) {
    return (event) => {
        const file = event.target.files[0];
        updatedProduct.value.thumbnails[index] = file;
    };
}

// Sample products data
const products = ref([
  { id: 1, name: 'Product A', image: '/img/product-a.jpg', createdAt: '2024-01-01', status: 100, amount: '₱500' },
  { id: 2, name: 'Product B', image: '/img/product-b.jpg', createdAt: '2024-02-01', status: 50, amount: '₱300' },
]);

/******************************************************************
 FUNCTION FOR PURCHASE PRODUCT
******************************************************************/
// Function to simulate purchasing a product
const purchaseProduct = (productId, quantity) => {
  const product = products.value.find((p) => p.id === productId);
  if (product && product.status >= quantity) {
    product.status -= quantity;
  } else {
    alert('Insufficient stock!');
  }
};

/******************************************************************
 FUNCTION FOR SAVE DRAFT
******************************************************************/

const isShowingDrafts = ref(false); // Toggle state for drafts or all products
// Filter products based on current view
const filteredProducts = computed(() => {
  return isShowingDrafts.value
    ? products.value.filter((product) => product.isDraft)
    : products.value;
});

// Toggle between drafts and all products
const toggleView = () => {
  isShowingDrafts.value = !isShowingDrafts.value;
};

/******************************************************************
 FUNCTION FOR DELETING PRODUCT
******************************************************************/
// State to toggle modal visibility
const isDeleteModalVisible = ref(false);

// Open delete modal
const openDeleteProductModal = () => {
  isDeleteModalVisible.value = true;
};

// Close delete modal
const closeDeleteProductModal = () => {
  isDeleteModalVisible.value = false;
};

// Handle delete confirmation
const confirmDelete = () => {
  console.log("Item deleted!");
  closeDeleteModal();
};


/******************************************************************
 FUNCTION FOR NUMBER ONLY
******************************************************************/

  const validateNumber = (event) => {
  const input = event.target;
  input.value = input.value.replace(/[^0-9]/g, ''); // Allow only digits
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
