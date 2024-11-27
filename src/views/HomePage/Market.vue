<template>
    <div>
        <Market_NavBar/>
        <div class="relative">
            <!-- Background Image -->
            <img :src="Mfarmer" alt="" class="2xl:w-full 2xs:w-full  2xl:h-full 2xs:h-[300px]  xl:h-[500px]">
            
            <!-- Box Overlay -->
            <div class="absolute inset-0 flex items-center 2xl:p-48 2xs:p-24 ">
                <div class="bg-white shadow-lg rounded-md 2xl:w-96 2xs:w-[400px] sm:w-[300px] xl:w-[400px] 2xl:h-72 2xs:h-[270px]  sm:h-[200px] xl:h-[290px] border-4 text-center relative">

                    <h1 class="text-center 2xl:text-3xl 2xs:text-md lg:text-xl font-semibold py-2">Pagsasaka Box</h1>
                        <p class="text-center 2xl:text-sm 2xs:text-xs lg:text-sm py-2 text-gray-500">
                        This month’s Pagsasaka Box connects <br> consumers and farmers, featuring seasonal <br>
                        produce, livestock, sustainable farming <br> practices, and essential tools for efficient,
                        local <br> sourcing.
                        </p>
                    <!-- Button to open modal -->
                    <button @click="isModalOpen = true" class="px-2 2xl:mt-5 2xs:mt-2 py-2 bg-green-600 text-white rounded-md hover:bg-green-500 transition 2xl:text-sm 2xs:text-xs">
                        Open Pagsasaka Box
                    </button>

                    <!-- Modal -->
                    <div v-if="isModalOpen" class="fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-50 z-50">
                        <div class="bg-white shadow-lg rounded-md 2xl:w-[800px] 2xs:w-[400px] lg:w-[800px] md:w-[500px] border-4 relative">

                            <!-- Close button -->
                            <button @click="isModalOpen = false" class="absolute top-2 right-2 text-gray-400 hover:text-gray-600">
                                <Icon icon="fontisto:close" width="1.2rem" height="1.2rem" style="color: #5D5F5D" />
                            </button>

                            <!-- Flex Container -->
                            <div class="flex justify-between p-8 space-x-4">
                                <!-- Information Section -->
                                <div class="flex-1 2xl:text-sm 2xs:text-xs space-y-4 text-start">
                                    <BaseLabel class="2xl:text-2xl 2xs:text-xl font-semibold">Pagsasaka Box</BaseLabel>
                                    <p class="text-gray-500">
                                        Our CSA packages feature a selection of fresh, locally-grown produce that varies with the seasons.
                                    </p>
                                    <p class="text-gray-500">
                                        Each week or month, you’ll receive a mix of vegetables, fruits, herbs, and occasionally eggs or grains.
                                    </p>
                                    <p class="text-gray-500">
                                        Please note that the specific items may change based on weather conditions and seasonal availability, ensuring you enjoy the freshest options while supporting local agriculture. Thank you for supporting your local farmers!
                                    </p>
                                </div>

                                <div class="flex-1 text-xs flex flex-col items-center space-y-4">
                                    <div class="flex flex-col bg-green-100 p-8 space-y-6 rounded-md max-h-[500px] overflow-y-auto">
                                        <!-- Weekly Section -->
                                        <div class="text-start space-y-4 text-gray-500">
                                            <BaseLabel class="2xl:text-2xl 2xs:text-xl font-semibold">Weekly Package (500 PHP)</BaseLabel>
                                            <p>a. Vegetables: 1 kg of tomatoes</p>
                                            <p>500 grams of eggplant</p>
                                            <p>500 grams of kangkong (water spinach)</p>
                                            <p>500 grams of carrots</p>
                                            <p>1 small head of cabbage</p>

                                            <p>b. Fruits: 1 kg of bananas</p>
                                            <p>500 grams of seasonal mangoes or papayas</p>

                                            <p>c. Herbs: 1 bunch of fresh herbs (e.g., basil or cilantro)</p>

                                            <p>d. Additional Item: 5-6 pieces of farm-fresh eggs</p>

                                            <div class="mt-8">
                                                <a href="/page7" class="2xl:px-4 2xs:px-2 2xl:text-sm 2xs:text-xs py-2 bg-[#DAA520] text-sm text-white rounded-md hover:bg-gray-400 transition">
                                                    Grab it now!
                                                </a>
                                            </div>
                                        </div>

                                        <!-- Monthly Section -->
                                        <div class="text-start space-y-4 text-gray-500">
                                            <BaseLabel class="2xl:text-2xl 2xs:text-xl  font-semibold">Monthly Package (1,000 PHP)</BaseLabel>
                                            <p>a. Vegetables: 2 kg of assorted vegetables (e.g., 1 kg of tomatoes, 500 grams of eggplant, 500 grams of bell peppers, 1 kg of leafy greens, 1 small head of cabbage)</p>

                                            <p>b. Fruits: 2 kg of seasonal fruits (e.g., 1 kg of mangoes, 1 kg of bananas)</p>

                                            <p>c. Herbs: 1 bunch of fresh herbs (e.g., basil or cilantro)</p>

                                            <p>d. Additional Item: 5-6 pieces of farm-fresh eggs, 500 grams of local rice</p>

                                            <div class="mt-8">
                                                <a href="/page7" class="2xl:px-4 2xs:px-2 2xl:text-sm 2xs:text-xs py-2 bg-[#DAA520] text-sm text-white rounded-md hover:bg-gray-400 transition">
                                                    Grab it now!
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="flex items-center space-x-4 2xl:p-8 2xs:p-4 bg-white">
                <!-- Text Section -->
                <div class="w-1/3">
                    <h2 class="2xl:text-2xl 2xs:text-md xl:text-2xl lg:text-2xl font-bold">Grab this now</h2>
                    <p class="mt-2 2xl:text-lg 2xs:text-xs lg:text-lg xl:text-lg text-gray-600">
                        Explore our curated selection of high-quality goods, featuring fresh produce, artisanal items, and everyday essentials, all while supporting local farmers and communities.
                    </p>
                </div>

            <!-- Image Section -->
            <div class="flex flex-col md:flex-row space-y-4 md:space-y-0 space-x-0 md:space-x-4 items-center">
                <!-- Previous button -->
                <button @click="prevImage" :disabled="currentImageIndex === 0" class="px-2 py-1 md:px-4 md:py-2 rounded-lg disabled:opacity-50" >
                    <Icon icon="ei:arrow-left" class="w-6 h-6 sm:w-8 xl:w-14 sm:h-8 md:w-12 md:h-12 lg:w-16 lg:h-16 xl:h-14" />
                </button>

                <!-- Image display -->
                <div class="relative flex space-x-2 md:space-x-4 overflow-x-auto">
                    <div v-for="(image, index) in visibleImages" :key="index" class="relative group w-20 h-20 sm:w-32 xl:w-48 sm:h-32 md:w-32 md:h-32 xl:h-48 lg:w-56 lg:h-56 rounded-lg overflow-hidden">
                        <img :src="image" alt="Carousel Image" class="w-full h-full object-cover transition-transform duration-300 transform group-hover:scale-110"/>

                        <!-- "View Product" Button -->
                        <div class="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                            <a href="/marketpage1" class="px-2 py-1 2xl:px-4 md:px-2 2xl:py-2 text-xs sm:text-sm md:text-xs  text-white bg-green-500 rounded-lg">
                                View Product
                            </a>
                        </div>
                    </div>
                </div>

                <!-- Next button -->
                <button @click="nextImage" :disabled="currentImageIndex + 2 >= images.length" class="px-2 py-1 md:px-4 md:py-2 rounded-lg disabled:opacity-50">
                    <Icon icon="ei:arrow-right" class="w-6 h-6 sm:w-8 xl:w-14 sm:h-8 md:w-12 md:h-12 lg:w-16 lg:h-16 xl:h-14" />
                </button>
            </div>
        </div>
        <div class="bg-gray-100 min-h-screen p-4">
            <!-- Main Layout -->
            <div class="flex flex-col md:flex-row">
                <!-- Filter Section -->
                <div class="w-full md:w-1/4 bg-white shadow-md rounded-lg p-4 mb-4 md:mb-0">
                    <div class="space-y-2 bg-white shadow-md rounded-lg p-4">
                        <!-- Box Grouping -->
                        <div class="border border-gray-300 rounded-lg p-4">
                            <!-- Example Filters -->
                            <div class="mb-4 text-xs">
                                <Icon icon="mdi-light:truck" width="52" height="52"  style="color: #346a3d" />
                                <BaseLabel class="block text-lg font-medium text-gray-700">Delivery every day </BaseLabel>
                                <div>
                                    <p>Learn More on our</p>
                                    <a href="/delivery-guide" class="px-4 py-2 text-[#608C54] hover:underline">Delivery Guide</a>
                                </div>
                            </div>
                        </div>
                        <div class="border border-gray-300 rounded-lg p-4">
                            <!-- Example Filters -->
                            <div class="mb-4 text-xs">
                                <Icon icon="ix:box-open" width="52" height="52"  style="color: #346a3d" />
                                <BaseLabel class="block text-lg font-medium text-gray-700">Delivery every day </BaseLabel>
                                <div>
                                    <p>Check out our<a href="/pagsasaka-box" class="px-4 py-2 text-[#608C54] hover:underline">Pagsasaka Box</a>to view this week's produce.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Main Content -->
                <div class="w-full md:w-3/4">
                    <div class="bg-white shadow-md rounded-lg p-4">
                        <h1 class="text-xl font-bold mb-4">Products</h1>
                        <div>
                            <!-- Product Posting Form -->
                            <div class="mb-4 items-center">
                                <BaseInputField v-model="newProduct.name" type="text" placeholder="Enter product name" class="border p-2 rounded w-full"/>
                                <BaseInputField type="file" accept="image/*" @change="handleImageUpload" class="border  rounded w-full mt-2"/>
                                <BaseInputField v-model="newProduct.price" type="number" placeholder="Enter price" class="border p-2 rounded w-full mt-2"/>
                                <BaseInputField v-model="newProduct.rating" type="number" placeholder="Enter rating (1-5)" class="border p-2 rounded w-full mt-2"/>
                                <BaseInputField v-model="newProduct.location" type="text" placeholder="Enter location" class="border p-2 rounded w-full mt-2"/>

                                <button @click="postProduct" class="mt-2 bg-blue-500 text-white py-2 px-4 rounded" :disabled="!newProduct.image">Post Product</button>
                            </div>

                            <!-- Product Grid -->
                            <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                                <div v-for="(product, index) in products" :key="index" class="border p-4 rounded shadow">
                                    <img :src="product.image" alt="Product Image" class="w-full h-40 object-cover rounded"/>
                                    <p class="text-gray-700">Price: ₱{{ product.price }}</p>
                                    <p class="text-lg font-semibold mt-2">{{ product.name }}</p>
                                    <p class="text-yellow-500">Rating: {{ product.rating }} ★</p>
                                    <p class="text-gray-500 text-sm">Location: {{ product.location }}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <Footer/>
    </div>
</template>

<script setup>
import Footer from '@/components/Input-Fields/Footer.vue';
import Mfarmer from '@/assets/Mfarmer.png';
import MVegetable from '@/assets/MVegetable.png';
import MVegetable2 from '@/assets/MVegetable2.png';
import MVegetable3 from '@/assets/MVegetable3.png';
import MVegetable4 from '@/assets/MVegetable4.png';
import Market_NavBar from '@/components/Navbar/Market_NavBar.vue';
import BaseLabel from '@/components/Input-Fields/BaseLabel.vue';
import BaseInputField from '@/components/Input-Fields/BaseInputField.vue';
import BaseCheckBox from '@/components/Input-Fields/BaseCheckBox.vue';
import { reactive, computed, ref } from 'vue';
import { required, email, helpers } from '@vuelidate/validators';
import { Icon } from '@iconify/vue';
import { useRouter } from 'vue-router';
import { useStore } from 'vuex';



/******************************************************************
  FUNCTION FOR IMAGE CAROUSEL
******************************************************************/
const isModalOpen = ref(false);

const images = ref([
  MVegetable,
  MVegetable2, 
  MVegetable3, 
  MVegetable4   
])

const currentImageIndex = ref(0)

// Compute the visible images (2 at a time)
const visibleImages = computed(() => {
  return images.value.slice(currentImageIndex.value, currentImageIndex.value + 2);
});

const nextImage = () => {
  if (currentImageIndex.value + 2 < images.value.length) {
    currentImageIndex.value++;
  }
};

const prevImage = () => {
  if (currentImageIndex.value > 0) {
    currentImageIndex.value--;
  }
};

/******************************************************************
  FUNCTION FOR SHOW PRODUCT
******************************************************************/

const newProduct = ref({
  name: "",
  image: null,
  price: "",
  rating: "",
  location: "",
});

const products = ref([]);

// Handle file upload
const handleImageUpload = (event) => {
  const file = event.target.files[0];
  if (file) {
    const reader = new FileReader();
    reader.onload = (e) => {
      newProduct.value.image = e.target.result; // Convert file to base64 data URL
    };
    reader.readAsDataURL(file);
  }
};

// Add product function
const postProduct = () => {
  if (
    newProduct.value.name.trim() &&
    newProduct.value.image &&
    newProduct.value.price &&
    newProduct.value.rating &&
    newProduct.value.location.trim()
  ) {
    products.value.push({ ...newProduct.value }); // Add a copy of the product
    newProduct.value = { name: "", image: null, price: "", rating: "", location: "" }; // Reset form
  }
};
</script>

<style scoped>
.group-hover:scale-110 {
  transform: scale(1.1);
}


</style>