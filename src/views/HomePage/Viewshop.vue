<template>
    <div>
        <Market_NavBar/>
        <div class="w-full h-auto relative">
            <!-- Background Image -->
            <div class="w-full h-56">
                <img :src="marketbg" alt="Background" class="w-full h-full object-cover rounded-t-lg" />
            </div>

            <!-- Profile Card -->
            <div class="bg-white p-6 rounded-lg shadow-lg flex items-center gap-4 mx-auto -mt-16 relative z-10" style="width: 90%; max-width: 700px;">
                <!-- Profile Image -->
                <img :src="profileImage" alt="Profile" class="w-20 h-20 rounded-full object-cover border-4 border-white shadow-md"/>

                <!-- User Info -->
                <div class="flex-1">
                    <!-- <h2 class="text-lg font-semibold text-gray-800">{{ farmerInfo.name }}</h2> -->
                </div>

                <!-- Buttons -->
                <div class="flex flex-col gap-2">
                    <button class="px-4 py-2 bg-green-500 text-white text-sm font-medium rounded-lg hover:bg-green-600 transition-colors">
                        Chat Now
                    </button>
                </div>
            </div>
        </div>
       <!-- Tabs Section -->
        <div class="w-full mt-8">
                <!-- Tabs Buttons -->
                <div class="flex justify-center border-b border-gray-300 gap-4">
                    <button v-for="tab in tabs" :key="tab" @click="activeTab = tab" :class="['px-6 py-2 text-gray-600 font-medium border-b-2 transition-colors', activeTab === tab ? 'border-green-500 text-green-500': 'border-transparent hover:border-green-500 hover:text-green-500']">
                        {{ tab }}
                    </button>
                </div>

                <!-- Tab Content -->
                <div class="mt-4">
                    <div v-if="activeTab === 'Store'" class="tab-content">
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
                                        <!-- <div class="border border-gray-300 flex flex-col rounded-lg p-4">
                                            <BaseLabel class="font-bold">Product Type</BaseLabel>
                                            
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
                                        </div> -->
                                    </div>
                                </div>
                                <!-- Main Content -->
                                <div class="p-4 mt-12">
                                    <!-- Product Grid -->
                                    <div class="grid grid-cols-3 gap-4">
                                        <div v-for="farmerInfo in viewList.slice(0, 6)" :key="farmerInfo.id" class="border rounded-lg shadow-sm overflow-hidden hover:shadow-md transition-shadow">
                                        <img :src="farmerInfo.product_img" alt="Product Image" class="w-full h-40 object-cover" />
                                        <div class="p-2">
                                            <h3 class="text-sm font-semibold">{{ farmerInfo.product_name }}</h3>
                                            <div class="text-red-500 font-bold text-sm">₱{{ farmerInfo.price }}</div>
                                            <div class="flex justify-between items-center mt-2">
                                            <div v-if="product.rating" class="text-yellow-500 text-xs flex items-center">
                                                <Icon v-for="star in 5" :key="star" :icon="star <= farmerInfo.rating ? 'mdi:star' : 'mdi:star-outline'" class="mr-1"/>
                                            </div>
                                            </div>
                                            <div v-if="farmerInfo.location" class="text-gray-600 text-xs mt-2">
                                            📍 {{ farmerInfo.location }}
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
                    </div>
                    <div v-if="activeTab === 'Profile'" class="tab-content">
                        <div class="w-full px-4 py-6 bg-white rounded-lg shadow-md grid grid-cols-4 gap-4 items-center text-center">
                            <!-- Main Categories -->
                            <div class="flex flex-col items-center">
                                <h3 class="text-sm font-medium text-gray-800 flex items-center gap-1">
                                    <span>Main Categories</span>
                                    <Icon icon="mdi:information-outline" width="16" height="16" />
                                </h3>
                                <div class="mt-2 flex items-center gap-1 text-sm font-medium text-gray-600">
                                <BaseLabel class="mt-2 text-sm text-gray-600">Vegetables</BaseLabel>
                                </div>
                            </div>
                            <!-- Joined -->
                            <div>
                                <h1 class="text-sm font-medium text-gray-800">Joined</h1>
                                <BaseLabel class="mt-2 text-sm text-gray-600">4 months ago</BaseLabel>
                            </div>

                            <!-- Shipped on time -->
                            <div>
                                <h3 class="text-sm font-medium text-gray-800">Shipped on time</h3>
                                <BaseLabel class="mt-2 text-sm text-gray-600">100%</BaseLabel>
                            </div>

                            <!-- Chat -->
                            <div>
                                <h3 class="text-sm font-medium text-gray-800">Chat</h3>
                                <BaseLabel class="mt-2 text-sm text-gray-600">Active in 30 mins ago</BaseLabel>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        <Footer/>
    </div>
</template>

<script setup>
import Market_NavBar from '@/components/Navbar/Market_NavBar.vue';
import Footer from '@/components/Input-Fields/Footer.vue';
import BaseLabel from '@/components/Input-Fields/BaseLabel.vue';
import marketbg from '@/assets/marketbg.png';
import { ref, computed, reactive, onMounted } from "vue";
import { required, email, helpers } from '@vuelidate/validators';
import { Icon } from '@iconify/vue';
import { useRouter } from 'vue-router';
import { useStore } from 'vuex';


const store = useStore();
const router = useRouter();

const viewList = computed(() => store.state.Consumer.farmerInfo.data);
const activeTab = ref('Store'); // Default active tab
const tabs = ref(['Store', 'Profile']); // List of tabs

function getFarmerInfoList() {
    store.dispatch('Consumer/getFarmerInfoList');
}

onMounted(() => {
    getFarmerInfoList();
});


// const filters = reactive({
//   all: true,
//   vegetable: false,
//   seed: false,
//   grains: false,
//   soil: false,
//   fruits: false,
//   pelletes: false,
//   process: false,
// });

// const filteredProducts = computed(() => {
//   let filtered = products.value;

//   // Apply filters based on selected checkboxes
//   if (!filters.all) {
//     const activeFilters = Object.keys(filters).filter(key => filters[key] && key !== 'all');
//     if (activeFilters.length > 0) {
//       filtered = filtered.filter(product => activeFilters.includes(product.category));
//     }
//   }

//   return filtered.slice((currentPage.value - 1) * itemsPerPage, currentPage.value * itemsPerPage);
// });

// const currentPage = ref(1);
// const itemsPerPage = 6;

// const totalPages = computed(() => Math.ceil(filteredProducts.value.length / itemsPerPage));

// const nextPage = () => {
//   if (currentPage.value < totalPages.value) {
//     currentPage.value++;
//   }
// };

// const prevPage = () => {
//   if (currentPage.value > 1) {
//     currentPage.value--;
//   }
// };

// const toggleAll = () => {
//   if (filters.all) {
//     Object.keys(filters).forEach(key => { filters[key] = true; });
//   } else {
//     Object.keys(filters).forEach(key => { filters[key] = false; });
//   }
// };

// const selectCategory = (category) => {
//   // Unselect all filters except the selected category
//   Object.keys(filters).forEach(key => {
//     if (key !== category && key !== 'all') {
//       filters[key] = false;
//     }
//   });

//   // Ensure 'all' is unchecked when a specific filter is selected
//   filters.all = false;
// };
</script>