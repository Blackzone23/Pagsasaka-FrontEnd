<template>
    <div>
        <Market_NavBar/>
        <div class="relative">
            <!-- Background Image -->
            <img :src="Mfarmer" alt="" class="object-fill h-[500px] 2xl:w-full 2xs:w-full  ">

        </div>
        <div class="flex items-center space-x-4 2xl:p-8 2xs:p-4 bg-green-900">
                <!-- Text Section -->
                <div class="w-1/3">
                    <h2 class="2xl:text-2xl 2xs:text-md xl:text-2xl lg:text-2xl font-bold text-white">Grab this now</h2>
                    <p class="mt-2 2xl:text-lg 2xs:text-xs lg:text-lg xl:text-lg text-gray-300">
                        Explore our curated selection of high-quality goods, featuring fresh produce, artisanal items, and everyday essentials, all while supporting local farmers and communities.
                    </p>
                    
                </div>

            <!-- Image Section -->
            <n-carousel :slides-per-view="5"  :space-between="10" :loop="false" draggable show-arrow>
            
                <!-- Image display -->
                    <div v-for="productItem in productItemList" :key="productItem.id"  class="border-2 border-[#608C54] relative group w-20 h-20 sm:w-32 xl:w-48 sm:h-32 md:w-32 md:h-32 xl:h-48 lg:w-56 lg:h-56 rounded-lg overflow-hidden">
                      
                            <img :src="productItem.product_img[0]" alt="Carousel Image" class="w-full h-full object-cover transition-transform duration-300 transform group-hover:scale-110"/>
                       
                        <!-- "View Product" Button -->
                        <div class="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                            <button @click="goToItemInfo(productItem.id)" class="px-2 py-1 2xl:px-4 md:px-2 2xl:py-2 text-xs sm:text-sm md:text-xs  text-white bg-green-500 rounded-lg">
                                View Product
                            </button>
                        </div>
                    </div>
            </n-carousel>
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
                        <div class="border border-gray-300 flex flex-col rounded-lg p-4">
                            <BaseLabel class="font-bold">Product Type</BaseLabel>
                            <!-- Example Filters -->
                            <div class="mb-4 text-xs">
                                <label class="block mb-2">
                                    <input type="checkbox" v-model="filters.all" @change="toggleAll" /> All
                                </label>
                                <label class="block mb-2">
                                    <input type="checkbox" v-model="filters.vegetable" @change="selectCategory('vegetable')" /> Vegetable
                                </label>
                                <label class="block mb-2">
                                    <input type="checkbox" v-model="filters.seed" @change="selectCategory('seed')" /> Seed
                                </label>
                                <label class="block mb-2">
                                    <input type="checkbox" v-model="filters.grains" @change="selectCategory('grains')" /> Grains
                                </label>
                                <label class="block mb-2">
                                    <input type="checkbox" v-model="filters.soil" @change="selectCategory('soil')" /> Soil
                                </label>
                                <label class="block mb-2">
                                    <input type="checkbox" v-model="filters.fruits" @change="selectCategory('fruits')" /> Fruits
                                </label>
                                <label class="block mb-2">
                                    <input type="checkbox" v-model="filters.pelletes" @change="selectCategory('pelletes')" /> Pellets
                                </label>
                                <label class="block mb-2">
                                    <input type="checkbox" v-model="filters.process" @change="selectCategory('process')" /> Processed
                                </label>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Main Content -->
                <div class="p-4 mt-12">
                    <!-- Product Grid -->
                    <div class="grid grid-cols-3 gap-4">
                        <div v-for="product in filteredProducts.slice(0, 6)" :key="product.id" class="border rounded-lg shadow-sm overflow-hidden hover:shadow-md transition-shadow">
                        <img :src="product.image" alt="Product Image" class="w-full h-40 object-cover" />
                        <div class="p-2">
                            <h3 class="text-sm font-semibold">{{ product.title }}</h3>
                            <div class="text-red-500 font-bold text-sm">₱{{ product.price }}</div>
                            <n-rate allow-half readonly :default-value="product.rating" />
                            <div v-if="product.location" class="text-gray-600 text-xs mt-2">
                            📍 {{ product.location }}
                            </div>
                        </div>
                        </div>
                    </div>

                    <!-- Pagination -->
                    <div class="flex justify-center text-sm mt-10">
                        <button @click="prevPage" :disabled="currentPage === 1" class="bg-gray-300 p-2 rounded">Previous</button>
                        <span>Page {{ currentPage }} of {{ totalPages }}</span>
                        <button @click="nextPage" :disabled="currentPage === totalPages" class="bg-gray-300 p-2 rounded">Next</button>
                    </div>
                </div>
            </div>
        </div>
        <div class="h-full w-full p-10">
            <div class="max-w-4xl mx-auto p-4 border-2 border-green-500 rounded-lg">
                <!-- Title Section -->
                <h2 class="text-3xl text-center font-bold text-green-600 mb-4">Delivery Policy</h2>

                <!-- Content Section -->
                <div class="flex items-center mb-6">
                    <!-- Image Section -->
                    <div class="mr-6">
                        <Icon icon="material-symbols-light:delivery-truck-speed" width="112" height="112"  style="color: #12a246" />
                    </div>
                    <!-- Text Section -->
                    <div>
                        <p class="text-gray-800 text-base mb-4">
                            We work with a team of regular drivers and third-party providers to handle all of our deliveries. Please make sure you are contactable by our drivers on the day and that clear instructions are given for the receiving of items to avoid delays and possible issues.
                        </p>
                        <p class="text-gray-800 text-base font-semibold">
                            We implement a 15-minute waiting time for all our deliveries. In the event that the recipient cannot be contacted, our personnel will return your order to us. You can pick it up in our office.
                        </p>
                        <p class="text-gray-800 text-base mt-4">
                            To reduce food waste, for orders involving fresh produce—<span class="font-bold">all items that are not picked up within the same week of the scheduled pickup or delivery will be considered good as sold.</span>
                        </p>
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
import { debounce } from 'lodash';
import { ref, computed, reactive, onMounted } from "vue";
import { useVuelidate } from "@vuelidate/core";
import { required, helpers } from "@vuelidate/validators";
import { Icon } from "@iconify/vue";
import { useRouter } from "vue-router";
import { useStore } from "vuex";


const store = useStore();
const router = useRouter();

const productItemList= computed(() => store.state.Consumer.productItem.data);

/******************************************************************
  FUNCTION FOR ADVERTISE PRODUCT
******************************************************************/
function getItemList() {
    store.dispatch('Consumer/getItemList');
}
onMounted(() => {
    getItemList();
})
async function goToItemInfo(productId){
    sessionStorage.setItem('ItemInfo', productId)
    router.push({name: 'Market_Page1'})
}

/******************************************************************
  FUNCTION FOR LIST OF PRODUCTS
******************************************************************/
const products = ref([
  { id: 1, title: "50pcs Green Purple Seedless Grape Seeds....", price: 40, rating: 2, location: "Manila, Philippines", image: "https://i0.wp.com/www.tulipgardencentre.co.za/wp-content/uploads/2022/05/Catawba.jpg?fit=689%2C520&ssl=1", category: "Seed" },
  { id: 2, title: "Blue Jasmine Rice 25kg", price: '1,679', rating: 4, location: "Manila, Philippines", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ4QqALaS15k-h3RC1ExCa928HA1LD5ju4KLQ&s", category: "grains" },
  { id: 3, title: "QUALITY LOAM SOIL / ORGANIC SOIL", price: 50, rating: 3, location: "Manila, Philippines", image: "https://down-ph.img.susercontent.com/file/58ab165cdd0a18de2a87b531db5431c6_tn", category: "soil" },
  { id: 4, title: "Pechay Seeds | Vegetable Seeds | Golden Plant and Seed Store", price: 55, rating: 5, location: "Manila, Philippines", image: "https://down-ph.img.susercontent.com/file/3a2563d65cb3dc5b0356298a07216f6a", category: "Seed" },
  { id: 5, title: "50pcs Green Purple Seedless Grape Seeds....", price: 46, rating: 3, location: "Manila, Philippines", image: "https://www.mtechgardens.com/cdn/shop/products/pv5AIs.jpg?v=1681897072", category: "fruit" },
  { id: 6, title: "Blood Worm Pellets", price: 125, rating: 3, location: "Manila, Philippines", image: "https://down-ph.img.susercontent.com/file/ph-11134207-7qul4-ljv0kx1q45n342", category: "pelletes" },
  { id: 7, title: "Basket of Apple", price: 200, rating: 2, location: "Manila, Philippines", image: "https://s3.envato.com/files/163445038/01(Ikea_Byholma1(brown)apple).jpg", category: "fruits" },
  { id: 8, title: "1kg of Onion", price: 130, rating: 2, location: "Manila, Philippines", image: "https://www.jiomart.com/images/product/original/590003515/onion-1-kg-product-images-o590003515-p590003515-0-202408070949.jpg?im=Resize=(1000,1000)", category: "vegetable" },
  { id: 9, title: "1pack of Corn Seeds", price: 500, rating: 1, location: "Manila, Philippines", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSo2vJtt0yKG4igoevwRpcBcOKYnshOgeI2qA&s", category: "Seed" },
  { id: 10, title: "Feeds for Pigs", price: 1000, rating: 1, location: "Manila, Philippines", image: "https://www.genmil.com.ph/wp-content/uploads/2021/06/KHPSPP.png", category: "pelletes" },
  { id: 11, title: "Tomato", price: 50, rating: 4, location: "Manila, Philippines", image: "https://lh5.googleusercontent.com/proxy/r7LOPGxHIUWak00os0ZLV_3HtXKKuTSrV_wsWEQMVnFnQmNwhBHDhxFu100NEA3_g_FPm0J8RV9wqiTbzGuosuwv8Ibvzf_ijrsXA-O7E8jFr3NLYuwvH_LrdwyOBeN3zzhG23fLMsVoqf-6FyM9dpSIeFdoH_4", category: "vegetable" },
  { id: 12, title: "Pics peanut butter", price: 800, rating: 4, location: "Manila, Philippines", image: "https://picspeanutbutter.nz/cdn/shop/files/Pic_sSmooth380g-Straight_1200x1200.jpg?v=1701380041", category: "process" },
]);


const filters = reactive({
  all: true,
  vegetable: false,
  seed: false,
  grains: false,
  soil: false,
  fruits: false,
  pelletes: false,
  process: false,
});

const filteredProducts = computed(() => {
  let filtered = products.value;

  // Apply filters based on selected checkboxes
  if (!filters.all) {
    const activeFilters = Object.keys(filters).filter(key => filters[key] && key !== 'all');
    if (activeFilters.length > 0) {
      filtered = filtered.filter(product => activeFilters.includes(product.category));
    }
  }

  return filtered.slice((currentPage.value - 1) * itemsPerPage, currentPage.value * itemsPerPage);
});

const currentPage = ref(1);
const itemsPerPage = 6;

const totalPages = computed(() => Math.ceil(filteredProducts.value.length / itemsPerPage));

const nextPage = () => {
  if (currentPage.value < totalPages.value) {
    currentPage.value++;
  }
};

const prevPage = () => {
  if (currentPage.value > 1) {
    currentPage.value--;
  }
};

const toggleAll = () => {
  if (filters.all) {
    Object.keys(filters).forEach(key => { filters[key] = true; });
  } else {
    Object.keys(filters).forEach(key => { filters[key] = false; });
  }
};

const selectCategory = (category) => {
  // Unselect all filters except the selected category
  Object.keys(filters).forEach(key => {
    if (key !== category && key !== 'all') {
      filters[key] = false;
    }
  });

  // Ensure 'all' is unchecked when a specific filter is selected
  filters.all = false;
};
/******************************************************************
  FUNCTION FOR IMAGE CAROUSEL
******************************************************************/
const isModalOpen = ref(false);



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

// const products = ref([]);

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