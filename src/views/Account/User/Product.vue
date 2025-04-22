<template>
    <!-- Loading screen and toast message -->
    <Loading v-if="showLoading" class="loading"></Loading>
    <Toast></Toast>

    <div class="flex h-[800px] bg-gray-100">
        <div class="flex-1 flex flex-col">
              <!-- Header -->
            <header class="bg-[#285a19]  shadow p-4 flex justify-between items-center text-white">
                <h1 class="text-lg sm:text-xl 2xl:ml-0 md:ml-10 2xs:ml-10 font-bold">List of Products</h1>
                <div class="flex items-center space-x-4">
                    <div class="flex space-x-2">
                    <!-- Settings Icon with Dropdown -->
                    <div class="relative inline-block text-left">
                        <!-- Profile Picture and Settings Icon -->
                        <div class="flex items-center space-x-2">
                        <img :src="sellerRaw.avatar" alt="Profile" class="w-10 h-10 rounded-full object-cover  shadow-md"/>
                        <Icon icon="uil:setting" width="24" height="24" class="cursor-pointer text-white" @click="toggleDropdown"/>
                        </div>

                        <!-- Dropdown Menu -->
                        <div v-if="dropdownVisible" class="absolute right-0 z-50 mt-2 w-48 bg-white rounded shadow-lg">
                        <a href="/seller-profile" class="block px-4 py-2 text-sm text-black hover:bg-gray-100">
                            Account Info
                        </a>
                        <button @click="logout" class="block w-full text-left px-4 py-2 text-sm text-black hover:bg-gray-100">
                            Logout
                        </button>
                        </div>
                    </div>
                    </div>
                </div>
            </header>

            <!-- Dashboard Content -->
            <main class="p-2 flex flex-col gap-2 mt-2">
                <div class="flex items-center space-x-4 justify-end">
                    <div class="space-x-4 items-center flex">
                        <!-- Button to toggle drafts or all products -->
                        <button class="px-4 py-2 bg-[#285a19]  text-white rounded-md text-sm" @click="openAddProductModal">
                            + Add New Product
                        </button>
                    </div>
                </div>

                <!-- Add New Product Modal -->
                <div v-if="isAddProductModalOpen" class="fixed inset-0 flex items-center justify-center bg-gray-500 bg-opacity-40 z-50">
                    <div class="bg-white rounded-lg 2xl:w-[900px] 2xs:w-[400px] md:w-[700px] p-4 border-4 border-gray-300 flex flex-col 2xl:h-[650px] 2xs:h-[500px] 2xs:overflow-y-auto">
                        <!-- Header -->
                        <div class="flex justify-between items-center">
                            <BaseLabel class="font-bold text-2xl">Add New Product</BaseLabel>
                            <button class="text-gray-500 hover:text-gray-700" @click="closeAddProductModal">
                                <Icon icon="fontisto:close" width="1.2rem" height="1.2rem" style="color: #5D5F5D" />
                            </button>
                        </div>

                        <div class="flex flex-col md:flex-row mt-4 gap-6">
                            <!-- Left Section: Form Fields -->
                            <div class="md:w-1/2 space-y-4">
                                <BaseLabel class="font-semibold">Product Type:</BaseLabel>
                                <BaseSelectField v-model="productData.category_id">
                                    <BaseOptionDefaultField>Select Category</BaseOptionDefaultField>
                                    <BaseOptionField v-for="category in categoryDropdown" :key="category.id" :value="category.id">
                                        {{ category.category_name }}
                                    </BaseOptionField>
                                </BaseSelectField>
                                <BaseError v-if="$validateAddCategoryRules.category_id.$error">{{ $validateAddCategoryRules.category_id.$errors[0].$message }}</BaseError>

                                <BaseLabel class="font-semibold">Product Name:</BaseLabel>
                                <BaseInputField v-model="productData.product_name" placeholder="Ex. Sibuyas" />
                                <BaseError v-if="$validateAddCategoryRules.product_name.$error">{{ $validateAddCategoryRules.product_name.$errors[0].$message }}</BaseError>

                                <BaseLabel class="font-semibold">Description:</BaseLabel>
                                <textarea v-model="productData.description"  class="rounded-lg text-sm border-gray-500 shadow-md p-3 w-full h-28 resize-none" placeholder="Type the description"></textarea>
                                <BaseError v-if="$validateAddCategoryRules.description.$error">{{ $validateAddCategoryRules.description.$errors[0].$message }}</BaseError>

                                <!-- Price & Stocks -->
                                <div class="flex flex-col 2xs:flex-col md:flex-row md:space-x-4">
                                    <div class="flex flex-col">
                                        <BaseLabel class="text-sm font-semibold">Price:</BaseLabel>
                                        <div class="relative"> 
                                            <span class="absolute left-1 2xl:top-3 md:top-4 lg:top-2 2xs:top-4 xs:top-4 text-gray-500 flex items-center">
                                                <Icon icon="fa6-solid:peso-sign" width="16" height="16" style="color: #000" />
                                            </span>
                                            <BaseInputField v-model="productData.price" class="pl-8 border border-gray-400 rounded-md w-full text-center focus:outline-none focus:ring-1 focus:ring-teal-500" @input="validateNumber" />
                                        </div>
                                        <BaseError v-if="$validateAddCategoryRules.price.$error">{{ $validateAddCategoryRules.price.$errors[0].$message }}</BaseError>
                                    </div>

                                    <div class="flex flex-col">
                                        <BaseLabel class="text-sm font-semibold">Stocks:</BaseLabel>
                                        <BaseInputField v-model="productData.stocks" class="border border-gray-400 rounded-md w-full text-center focus:outline-none focus:ring-1 focus:ring-teal-500" @input="validateNumber" />
                                        <BaseError v-if="$validateAddCategoryRules.stocks.$error">{{ $validateAddCategoryRules.stocks.$errors[0].$message }}</BaseError>
                                    </div>

                                    <!---Unit-->
                                    <div class="flex flex-col">
                                        <BaseLabel class="text-sm font-semibold">Unit:</BaseLabel>
                                        <BaseSelectField  v-model="productData.unit">
                                            <BaseOptionDefaultField>Select type</BaseOptionDefaultField>
                                            <BaseOptionField value="kg">kg</BaseOptionField>
                                            <BaseOptionField value="net">net</BaseOptionField>
                                            <BaseOptionField value="box">box</BaseOptionField>
                                        </BaseSelectField>
                                        <BaseError v-if="$validateAddCategoryRules.unit.$error">{{ $validateAddCategoryRules.unit.$errors[0].$message }}</BaseError>
                                    </div>
                                </div>
                            </div>

                            <!-- Right Section: Image Upload -->
                            <div class="md:w-1/2 space-y-4">
                                <BaseLabel class="text-lg font-semibold">Product Image</BaseLabel>

                                <!-- Main Image Upload -->
                                <BaseLabel class="font-semibold">Main Image</BaseLabel>
                                <div class="h-40 border-dashed border-2 border-gray-300 flex items-center justify-center rounded-md relative">
                                    <span v-if="!mainImagePreview" class="text-gray-400">Upload Main Image</span>
                                    <img v-else :src="mainImagePreview" class="h-full w-full object-cover rounded-md" />
                                    <input type="file" accept="image/*" class="absolute inset-0 opacity-0 cursor-pointer" @change="onMainImageUpload" />
                                </div>
                                <BaseError v-if="$validateAddCategoryRules.product_img.$error">{{ $validateAddCategoryRules.product_img.$errors[0].$message }}</BaseError>

                                <!-- Thumbnail Upload -->
                                <BaseLabel class="font-semibold">Thumbnails</BaseLabel>
                                <div class="grid grid-cols-3 gap-2">
                                    <div v-for="(thumbnail, index) in thumbnailPreviews" :key="index" class="h-20 border-dashed border-2 border-gray-300 flex items-center justify-center rounded-md relative">
                                        <img :src="thumbnail" class="h-full w-full object-cover rounded-md" />
                                    </div>
                                    <div v-if="productData.product_img.length < 4" class="h-20 border-dashed border-2 border-gray-300 flex items-center justify-center rounded-md relative">
                                        <span class="text-gray-400">+</span>
                                        <input type="file" accept="image/*" class="absolute inset-0 opacity-0 cursor-pointer" @change="onThumbnailUpload" />
                                    </div>
                                </div>
                                <BaseError v-if="$validateAddCategoryRules.product_img.$error">{{ $validateAddCategoryRules.product_img.$errors[0].$message }}</BaseError>

                                <div class="items-center flex text-xs text-gray-500 space-x-2">
                                    <Icon icon="cuida:alert-outline" width="24" height="24" style="color: #ec0404" />
                                    <p>You need at least 3 images. Pay attention to the quality of the pictures you add.</p>
                                </div>

                                <!-- Visibility Selection -->
                                <div class="flex space-x-5">
                                    <BaseRadioButton v-for="option in ['Published']" :key="option" :name="'visibility'" :label="option" :value="option" v-model="productData.visibility" class="text-xs"></BaseRadioButton>
                                </div>
                                <BaseError v-if="$validateAddCategoryRules.visibility.$error">{{ $validateAddCategoryRules.visibility.$errors[0].$message }}</BaseError>
                            </div>
                        </div>

                        <!-- Submit Buttons -->
                        <div class="mt-6 flex justify-end space-x-2 text-xs">
                            <!-- <button type="submit" class="px-2 py-2 bg-white border-2 rounded-md hover:bg-gray-400">
                                Save as Draft
                            </button> -->
                            <button @click="createProduct" class="px-6 py-2 bg-[#007C80] text-white rounded-md hover:bg-gray-400">
                                Publish
                            </button>
                        </div>
                    </div>
                </div>

                <!-- Update Product Modal -->
                <div v-if="isUpdateProductModalOpen" class="fixed inset-0 flex items-center justify-center bg-gray-500 bg-opacity-40 z-50">
                    <div class="bg-white rounded-lg 2xl:w-[900px] 2xs:w-[400px] md:w-[700px] p-4 border-4 border-gray-300 flex flex-col 2xl:h-[650px] 2xs:h-[500px] 2xs:overflow-y-auto">
                        <!-- Header -->
                        <div class="flex justify-between items-center">
                            <BaseLabel class="font-bold text-2xl">Update Product</BaseLabel>
                            <button class="text-gray-500 hover:text-gray-700" @click="closeUpdateProductModal">
                                <Icon icon="fontisto:close" width="1.2rem" height="1.2rem" style="color: #5D5F5D" />
                            </button>
                        </div>

                        <div class="flex flex-col md:flex-row mt-4 gap-6">
                            <!-- Left Section: Form Fields -->
                            <div class="md:w-1/2 space-y-4">
                                <BaseLabel class="font-semibold">Product Type:</BaseLabel>
                                <BaseSelectField v-model="updatedProduct.category_id">
                                    <BaseOptionDefaultField>Select Category</BaseOptionDefaultField>
                                    <BaseOptionField v-for="category in categoryDropdown" :key="category.id" :value="category.id">
                                        {{ category.category_name }}
                                    </BaseOptionField>
                                </BaseSelectField>
                                <BaseError v-if="$validateUpdateProductRules.category_id.$error">
                                    {{ $validateUpdateProductRules.category_id.$errors[0].$message }}
                                </BaseError>

                                <BaseLabel class="font-semibold">Product Name:</BaseLabel>
                                <BaseInputField v-model="updatedProduct.product_name" placeholder="Ex. Sibuyas" />
                                <BaseError v-if="$validateUpdateProductRules.product_name.$error">
                                    {{ $validateUpdateProductRules.product_name.$errors[0].$message }}
                                </BaseError>

                                <BaseLabel class="font-semibold">Description:</BaseLabel>
                                <textarea v-model="updatedProduct.description"  class="rounded-lg text-sm border-gray-500 shadow-md p-3 w-full h-28 resize-none" placeholder="Type the description"></textarea>
                                <BaseError v-if="$validateUpdateProductRules.description.$error">
                                    {{ $validateUpdateProductRules.description.$errors[0].$message }}
                                </BaseError>

                                <!-- Price & Stocks -->
                                <div class="flex flex-col 2xs:flex-col md:flex-row md:space-x-4">
                                    <div class="flex flex-col">
                                        <BaseLabel class="text-sm font-semibold">Price:</BaseLabel>
                                        <div class="relative"> 
                                            <span class="absolute left-1 2xl:top-2 lg:top-2 2xs:top-4 text-gray-500 flex items-center">
                                                <Icon icon="fa6-solid:peso-sign" width="16" height="16" style="color: #000" />
                                            </span>
                                            <BaseInputField v-model="updatedProduct.price" class="pl-8 border border-gray-400 rounded-md w-full text-center focus:outline-none focus:ring-1 focus:ring-teal-500" @input="validateNumber" />
                                        </div>
                                        <BaseError v-if="$validateUpdateProductRules.price.$error">
                                            {{ $validateUpdateProductRules.price.$errors[0].$message }}
                                        </BaseError>
                                    </div>

                                    <div class="flex flex-col">
                                        <BaseLabel class="text-sm font-semibold">Stocks:</BaseLabel>
                                        <BaseInputField v-model="updatedProduct.stocks" class="border border-gray-400 rounded-md w-full text-center focus:outline-none focus:ring-1 focus:ring-teal-500" @input="validateNumber" />
                                        <BaseError v-if="$validateUpdateProductRules.stocks.$error">
                                            {{ $validateUpdateProductRules.stocks.$errors[0].$message }}
                                        </BaseError>
                                    </div>

                                     <!---Unit-->
                                     <div class="flex flex-col">
                                        <BaseLabel class="text-sm font-semibold">Unit:</BaseLabel>
                                        <BaseSelectField  v-model="updatedProduct.unit">
                                            <BaseOptionDefaultField>Select type</BaseOptionDefaultField>
                                            <BaseOptionField value="kg">kg</BaseOptionField>
                                            <BaseOptionField value="net">net</BaseOptionField>
                                            <BaseOptionField value="box">box</BaseOptionField>
                                        </BaseSelectField>
                                        <BaseError v-if="$validateUpdateProductRules.unit.$error">{{ $validateUpdateProductRules.unit.$errors[0].$message }}</BaseError>
                                    </div>
                                </div>
                            </div>

                            <!-- Right Section: Image Upload -->
                            <div class="md:w-1/2 space-y-4">
                                <BaseLabel class="text-lg font-semibold">Product Image</BaseLabel>

                                <!-- Main Image Upload -->
                                <BaseLabel class="font-semibold">Main Image</BaseLabel>
                                <div class="h-40 border-dashed border-2 border-gray-300 flex items-center justify-center rounded-md relative">
                                    <span v-if="!mainImagePreview" class="text-gray-400">Upload Main Image</span>
                                    <img v-else :src="mainImagePreview" class="h-full w-full object-cover rounded-md" />
                                    <input type="file" accept="image/*" class="absolute inset-0 opacity-0 cursor-pointer" @change="onupdateMainImageUpload" />
                                </div>
                                <BaseError v-if="$validateUpdateProductRules.product_img.$error">
                                    {{ $validateUpdateProductRules.product_img.$errors[0].$message }}
                                </BaseError>

                                <!-- Thumbnail Upload -->
                                <BaseLabel class="font-semibold">Thumbnails</BaseLabel>
                                <div class="grid grid-cols-3 gap-2">
                                    <div v-for="(thumbnail, index) in thumbnailPreviews" :key="index" class="h-20 border-dashed border-2 border-gray-300 flex items-center justify-center rounded-md relative">
                                        <img :src="thumbnail" class="h-full w-full object-cover rounded-md" />
                                    </div>
                                    <div v-if="updatedProduct.product_img.length < 4" class="h-20 border-dashed border-2 border-gray-300 flex items-center justify-center rounded-md relative">
                                        <span class="text-gray-400">+</span>
                                        <input type="file" accept="image/*" class="absolute inset-0 opacity-0 cursor-pointer" @change="onupdateThumbnailUpload" />
                                    </div>
                                </div>
                                <BaseError v-if="$validateUpdateProductRules.product_img.$error">
                                    {{ $validateUpdateProductRules.product_img.$errors[0].$message }}
                                </BaseError>

                                <div class="items-center flex text-xs text-gray-500 space-x-2">
                                    <Icon icon="cuida:alert-outline" width="24" height="24" style="color: #ec0404" />
                                    <p>You need at least 3 images. Pay attention to the quality of the pictures you add.</p>
                                </div>

                                <!-- Visibility Selection -->
                                <div class="flex space-x-5">
                                    <BaseRadioButton v-for="option in ['Published']" :key="option" :name="'visibility'" :label="option" :value="option" v-model="updatedProduct.visibility" class="text-xs"></BaseRadioButton>
                                </div>
                                <BaseError v-if="$validateUpdateProductRules.visibility.$error">
                                    {{ $validateUpdateProductRules.visibility.$errors[0].$message }}
                                </BaseError>
                            </div>
                        </div>

                        <!-- Submit Buttons -->
                        <div class="mt-6 flex justify-end space-x-2 text-xs">
                            <!-- <button type="submit" class="px-2 py-2 bg-white border-2 rounded-md hover:bg-gray-400">
                                Save as Draft
                            </button> -->
                            <button @click="updateProduct" class="px-6 py-2 bg-[#007C80] text-white rounded-md hover:bg-gray-400">
                                Update
                            </button>
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
                                <button  class="bg-red-500 text-white px-14 py-2 rounded hover:bg-red-600"  @click="deleteProduct">
                                    Delete
                                </button>
                                </div>
                        </div>
                    </div>
                </div>

                <!-- Table Section -->
                <div class="w-full overflow-x-auto">
                <div class="h-full">
                    <div class="max-h-[500px] overflow-y-auto border rounded">
                        <table class="w-full table-auto">
                            <!-- Table Header -->
                            <thead class="bg-gray-200 sticky top-0 z-10 text-xs sm:text-sm">
                            <tr>
                                <th class="px-2 sm:px-4 py-2 sm:py-3 text-left bg-gray-200">Product</th>
                                <th class="px-2 sm:px-4 py-2 sm:py-3 text-start bg-gray-200">Description</th>
                                <th class="px-2 sm:px-4 py-2 sm:py-3 text-start bg-gray-200">Stocks</th>
                                <th class="px-2 sm:px-4 py-2 sm:py-3 text-start bg-gray-200">Price</th>
                                <th class="px-2 sm:px-4 py-2 sm:py-3 text-end bg-gray-200">Action</th>
                            </tr>
                            </thead>

                            <!-- Table Body -->
                            <tbody>
                                <tr v-for="product in productList" :key="product.id" class="border-b hover:bg-gray-100 2xl:text-sm 2xs:text-xs">
                                    <td class="p-1 sm:p-4 flex items-center space-x-2 gap-2">
                                    <img :src="product.product_img[0]" class="w-8 h-8 sm:w-12 sm:h-12" />
                                    <span class="hidden sm:table-cell">{{ product.product_name }}</span>
                                    </td>
                                    <td class="px-2 sm:px-2 py-2 text-start">{{ product.description }}</td>
                                    <td class="px-2 sm:px-2 py-2 text-start">
                                    {{ product.stocks }} {{ product.unit }}
                                    </td>
                                    <td class="px-2 sm:px-4 py-2 text-start">₱{{ product.price }}</td>
                                    <td class="px-2 sm:px-4 py-2 flex items-center space-x-2 justify-end">
                                    <!-- Edit Button -->
                                    <button class="text-blue-500 hover:text-blue-700" @click="openUpdateProductModal(product.id)">
                                        <Icon icon="lucide:pencil-line" width="1rem" height="1rem" class="sm:w-5 sm:h-5"/>
                                    </button>

                                    <!-- Delete Button -->
                                    <button class="text-red-500 hover:text-red-700" @click="openDeleteProductModal(product.id)">
                                        <Icon icon="octicon:trash-24"  width="1rem"  height="1rem"  class="sm:w-5 sm:h-5" />
                                    </button>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>

            </main>
            <!-- Pagination -->
            <div class="mt-2 mr-4 flex justify-end text-xs">
                <button type="button" class="py-2 px-4 bg-gray-200 rounded-tl-lg rounded-bl-lg hover:bg-gray-200 text-gray-600" @click="goToPreviousPage" :disabled="currentPage === 1">Prev</button>
                <span class=" py-2 px-4 bg-gray-100 flex text-xs items-center border-l border-r border-gray-300"> {{ currentPage }} of {{ totalPages }}</span>
                <button type="button" class="py-2 px-4 bg-gray-200 rounded-tr-lg rounded-br-lg hover:bg-gray-200 text-gray-600" @click="goToNextPage" :disabled="currentPage === totalPages">Next</button>
            </div>
        </div>
    </div>
</template>

<script setup>
import Loading from '@/components/Alerts/Loading.vue'
import Toast from '@/components/Alerts/Toast.vue'
import BaseLabel from "@/components/Input-Fields/BaseLabel.vue";
import BaseInputField from "@/components/Input-Fields/BaseInputField.vue";
import BaseOptionDefaultField from "@/components/Input-Fields/BaseOptionDefaultField.vue";
import BaseOptionField from "@/components/Input-Fields/BaseOptionField.vue";
import BaseSelectField from "@/components/Input-Fields/BaseSelectField.vue";
import BaseRadioButton from "@/components/Input-Fields/BaseRadioButton.vue";
import BaseError from "@/components/Input-Fields/BaseError.vue";
import { debounce } from 'lodash';
import { ref, computed, reactive, onMounted } from "vue";
import { useVuelidate } from "@vuelidate/core";
import { required, helpers } from "@vuelidate/validators";
import { Icon } from "@iconify/vue";
import { useRouter } from "vue-router";
import { useStore } from "vuex";

const store = useStore();
const router = useRouter();

const showLoading = computed(() => store.state.showLoading.state);
const productList= computed(() => store.state.User.product.data);
const categoryDropdown= computed(() => store.state.User.categoryDropdown.data)
const currentPage = computed(() => store.state.currentPage);
const totalPages = computed(() => store.state.totalPages);
const sellerRaw  = computed(() => store.state.userData.data?.user || {})

const selectedProducts = ref([]);
// const searchQuery = ref('');

// // Search category
// const search = debounce(() => {
//     store.dispatch('User/getProductList', { 
//         search: searchQuery.value, 
//     }).then(() => {
//         if (productList.value.length === 0) {
//             store.commit('setCurrentPage', 0);
//             store.commit('setTotalPages', 0);
//         }
//     });
// }, 500) // Adjust the debounce delay as needed (300 milliseconds in this example)


/******************************************************************
 FUNCTION FOR GETTING PRODUCT LIST
******************************************************************/
// function getProductList() {
//     store.dispatch('User/getProductList');
// }

async function getProductList() {
    await store.dispatch('User/getProductList', {
        currentPage: currentPage.value, // Pass as part of an object
    });
}

/******************************************************************
 FUNCTION FOR GETTING PRODUCT DROPDOWN
******************************************************************/
store.dispatch('User/getCategoryDropdown')

/******************************************************************
 FUNCTION FOR ADDING NEW PRODUCT
******************************************************************/
// V-model for adding Product
const productData = reactive({
  category_id: '',
  product_name: '',
  description: '',
  price: '',
  stocks:'',
  unit:'',
  product_img: [],
  visibility: '',
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

// Validation rules
const productDataRules = computed(() => {
  return {
    category_id: {
          required: helpers.withMessage('Category name is required', required),
      },
      product_name: {
          required: helpers.withMessage('Product Name is required', required)
      },
      description: {
          required: helpers.withMessage('Description is required', required)
      },
      price: {
          required: helpers.withMessage('Price is required', required)
      },
      stocks: {
          required: helpers.withMessage('Stocks is required', required)
      },
      unit: {
          required: helpers.withMessage('unit is required', required)
      },
      product_img: {
          required: helpers.withMessage('3 Product Image is required', required)
      },
      visibility: {
          required: helpers.withMessage('Visibility is required', required)
      }
  };
});

const $validateAddCategoryRules = useVuelidate(productDataRules, productData);

async function createProduct() {
    const validationResult = await $validateAddCategoryRules.value.$validate();
    if (validationResult) {
        const formData = new FormData();
        formData.append('category_id', productData.category_id);
        formData.append('product_name', productData.product_name);
        formData.append('description', productData.description);
        formData.append('price', productData.price);
        formData.append('stocks', productData.stocks);
        formData.append('unit', productData.unit);
        formData.append('visibility', productData.visibility);

        // Append images
        productData.product_img.forEach((file, index) => {
            formData.append(`product_img[${index}]`, file);
        });

        await store.dispatch("User/createProduct", formData)
        .then((response) => {
            if (response.isSuccess == true) {
                closeAddProductModal();
                getProductList();
            }
        });
    }
}

const onMainImageUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
        // Replace the first image in the array (main image)
        productData.product_img.splice(0, 1, file); // Store the actual file
        mainImagePreview.value = URL.createObjectURL(file); // Store the preview URL
    }
};

const onThumbnailUpload = (event) => {
    const file = event.target.files[0];
    if (file && productData.product_img.length < 4) {
        productData.product_img.push(file); // Store the actual file
        thumbnailPreviews.value.push(URL.createObjectURL(file)); // Store the preview URL
    }
};

// Reactive variables for image previews
const mainImagePreview = ref(null); // For main image preview
const thumbnailPreviews = ref([]); // For thumbnail previews

/******************************************************************
 FUNCTION FOR UPDATE PRODUCT
******************************************************************/
const updatedProduct = reactive({
  id:'',
  category_id: '',
  product_name: '',
  description: '',
  price: '',
  stocks:'',
  unit:'',
  product_img: [],
  visibility: '',
});
const isUpdateProductModalOpen = ref(false);

const openUpdateProductModal = (id) => {
    const selectedProduct = productList.value.find((product) => product.id === id);

  if (selectedProduct) {
    updatedProduct.id = selectedProduct.id;
    updatedProduct.category_id = selectedProduct.category_id;
    updatedProduct.product_name = selectedProduct.product_name;
    updatedProduct.description = selectedProduct.description
    updatedProduct.price = selectedProduct.price;
    updatedProduct.stocks = selectedProduct.stocks;
    updatedProduct.unit = selectedProduct.unit;
    updatedProduct.product_img = selectedProduct.product_img;
    updatedProduct.visibility = selectedProduct.visibility;
    console.log(updatedProduct.visibility); // Check if the visibility is correctly set

     // Set image previews
     mainImagePreview.value = selectedProduct.product_img[0] || ''; // Assuming first image is the main image
    thumbnailPreviews.value = selectedProduct.product_img.slice(1) || []; // Remaining images are thumbnails
      // Open the modal
      isUpdateProductModalOpen.value = true;  
  }
};

// Function to handle closing modal
function closeUpdateProductModal() {
    isUpdateProductModalOpen.value = false;
}

function onupdateMainImageUpload(event) {
  const file = event.target.files[0];
  if (file) {
    const reader = new FileReader();
    reader.onload = () => {
      mainImagePreview.value = reader.result;
    };
    reader.readAsDataURL(file);
    updatedProduct.product_img[0] = file; // Update main image in product data
  }
}

function onupdateThumbnailUpload(event) {
  const file = event.target.files[0];
  if (file) {
    const reader = new FileReader();
    reader.onload = () => {
      thumbnailPreviews.value.push(reader.result);
    };
    reader.readAsDataURL(file);
    updatedProduct.product_img.push(file); // Add to product data
  }
}
// Validation rules
const updateProductRules = computed(() => {
    return {
    category_id: {
          required: helpers.withMessage('Category name is required', required),
      },
      product_name: {
          required: helpers.withMessage('Product Name is required', required)
      },
      description: {
          required: helpers.withMessage('Description is required', required)
      },
      price: {
          required: helpers.withMessage('Price is required', required)
      },
      stocks: {
          required: helpers.withMessage('Stocks is required', required)
      },
      unit: {
          required: helpers.withMessage('unit is required', required)
      },
      product_img: {
          required: helpers.withMessage('3 Product Image is required', required)
      },
      visibility: {
          required: helpers.withMessage('Visibility is required', required)
      }
  };
});

const $validateUpdateProductRules = useVuelidate(updateProductRules, updatedProduct);

// Function for update product
async function updateProduct() {
  const validationResult = await $validateUpdateProductRules.value.$validate();
  if (validationResult) {
      await store.dispatch('User/updateProduct', updatedProduct)
      .then((response) => {
          if(response.isSuccess == true) {
            closeUpdateProductModal();
            getProductList();
          }
      })
  }
}


/******************************************************************
 FUNCTION FOR DELETING PRODUCT
******************************************************************/
// State to toggle modal visibility
const isDeleteModalVisible = ref(false);
const toDelete = ref(null);

// Open delete modal
const openDeleteProductModal = (id) => {
    toDelete.value = id;
  isDeleteModalVisible.value = true;
};

// Close delete modal
const closeDeleteProductModal = () => {
  isDeleteModalVisible.value = false;
};

// Function for delete division
async function deleteProduct() {
    if (toDelete.value != "") {
        await store.dispatch('User/deleteProduct', toDelete.value)
        .then((response) => {
            if (response.isSuccess) {
                closeDeleteProductModal();  
                getProductList(); 
            }
        })    
    }
}


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
 FUNCTION FOR NUMBER ONLY
******************************************************************/

  const validateNumber = (event) => {
  const input = event.target;
  input.value = input.value.replace(/[^0-9]/g, ''); // Allow only digits
};

/******************************************************************
PAGINATION
******************************************************************/
function goToPreviousPage() {
    if (currentPage.value > 1) {
        store.commit('setCurrentPage', currentPage.value - 1);
        getProductList();
    }
}

function goToNextPage() {
    if (currentPage.value < totalPages.value) {
        store.commit('setCurrentPage', currentPage.value + 1);
        getProductList();
    }
}


/******************************************************************
 FUNCTION FOR SELECT ALL PRODUCT
******************************************************************/
// Select All State
const selectAll = ref(false);

// Handle Select for Individual Checkboxes
function handleSelect(productId, isChecked) {
    if (isChecked) {
        selectedProducts.value.push(productId); // Add product ID if checked
    } else {
        selectedProducts.value = selectedProducts.value.filter(
            (id) => id !== productId
        ); // Remove product ID if unchecked
    }
    // Update "Select All" state
    updateSelectAllState();
}

// Toggle Select All
function toggleSelectAll(isChecked) {
    selectAll.value = isChecked;
    if (isChecked) {
        selectedProducts.value = productList.value.map((product) => product.id);
    } else {
        selectedProducts.value = [];
    }
}

// Update Select All State Based on Selected Products
function updateSelectAllState() {
    selectAll.value =
        selectedProducts.value.length === productList.value.length &&
        productList.value.length > 0;
}

/******************************************************************
FUNCTION FOR CLEARING INPUT FIELDS AND RESET VALIDATION
******************************************************************/
function clearValues() {
    productData.category_id = '';
    productData.product_name = '';
    productData.description = '';
    productData.price = '';
    productData.stocks = '';
    productData.unit = '';
    productData.product_img = []; // Reset to an empty array
    productData.visibility = '';
    updatedProduct.category_id = '';
    updatedProduct.product_name = '';
    updatedProduct.description = '';
    updatedProduct.price = '';
    updatedProduct.stocks = '';
    updatedProduct.unit = '';
    updatedProduct.product_img = []; // Reset to an empty array
    updatedProduct.visibility = '';
    
    mainImagePreview.value = null; // Reset main image preview
    thumbnailPreviews.value = []; // Reset thumbnail previews
    
    $validateAddCategoryRules.value.$reset();
    $validateUpdateProductRules.value.$reset();
}

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

onMounted(() => {
    getProductList();
})

</script>
