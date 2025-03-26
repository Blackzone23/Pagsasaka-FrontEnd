<template>
    <!-- Loading screen and toast message -->
    <Loading v-if="showLoading" class="loading"></Loading>
    <Toast></Toast>

    <div>
        <Market_NavBar />
        <div class="p-5">
            <div class="flex flex-wrap gap-6">
                <div v-for="productItemInfo in productItemListinfo" :key="productItemInfo.id" 
                    class="flex flex-col md:flex-row w-full border-2 border-gray-300 p-5 rounded-md">

                    <!-- Left Side: Picture -->
                    <div class="w-full md:w-1/2 flex justify-center">
                        <img :src="productItemInfo.product_img[0]" alt="Product Image" 
                            class="rounded-lg shadow-lg w-full max-w-md h-auto md:h-[400px]" />
                    </div>

                    <!-- Right Side: Text -->
                    <div class="w-full md:w-1/2 mt-5">
                        <BaseLabel class="text-2xl md:text-4xl font-bold">{{ productItemInfo.product_name }}</BaseLabel>
                        
                        <div class="mt-2 text-sm md:text-base">
                            <p class="text-lg font-semibold text-black">₱{{ productItemInfo.price }}</p>
                            <p class="mt-2">Free & Easy Returns Enjoy Free Return</p>

                            <div class="mt-3">
                                <h1 class="font-bold text-lg">Shipping</h1>
                                <div class="text-lg">
                                    <p><span class="font-semibold">Stock:</span> {{ productItemInfo.stocks }}</p>
                                    <p><span class="font-semibold">Unit:</span> {{ productItemInfo.unit }}</p>
                                </div>
                            </div>

                            <!-- Quantity Section -->
                            <div class="flex items-center space-x-4 mt-3">
                                <h2 class="font-bold text-lg">Quantity:</h2>
                                <div class="flex items-center border border-gray-300 rounded-full p-1">
                                    <button
                                        @click="decreaseQuantity"> <Icon icon="zondicons:minus-solid" width="20" height="20"  style="color: #608C54" /> </button>
                                    <span class="font-bold mx-4">{{ quantity }}</span>
                                    <button
                                        @click="increaseQuantity"> <Icon icon="gridicons:add" width="24" height="24"  style="color: #608C54" /> </button>
                                </div>
                            </div>

                            <!-- Buttons -->
                            <div class="flex flex-wrap gap-3 items-center mt-4">
                                <button @click="addToCart(productItemInfo.id)" 
                                    class="bg-[#608C54] text-white font-bold px-4 py-2 hover:bg-[#4e7343] rounded flex items-center gap-2">
                                    <Icon icon="lineicons:cart-2" width="24" height="24" style="color: #fff" />
                                    Add to Cart
                                </button>
                                <button @click="goToCheckout" 
                                    class="bg-[#608C54] text-white font-bold py-2 px-5 rounded hover:bg-[#4e7343] flex items-center gap-2">
                                    <Icon icon="icon-park-twotone:buy" width="24" height="24" style="color: #fff" />
                                    Buy Now
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <!-- Seller Info -->
        <div class="p-4">
            <div class="h-full p-5 flex flex-col md:flex-row items-center border-2 border-gray-300 rounded-md space-y-5 md:space-y-0 md:space-x-5 w-full">
                
                <!-- Left Section: Profile Info -->
                <div class="flex flex-col md:flex-row items-center space-x-3 w-full md:w-auto">
                    <img :src="MVegetable" alt="Placeholder Image" class="w-16 h-16 rounded-full border border-gray-500">
                    <div class="flex flex-col text-md text-gray-600 text-center md:text-left">
                        <span class="font-semibold">{{ Biodata.name }}</span>
                        <span class="text-xs">{{ activeStatus }}</span>
                        <div class="mt-3 flex flex-wrap gap-2 justify-center md:justify-start">
                            <!-- Chat Now Button -->
                            <button class="flex items-center gap-1 px-4 py-2 bg-[#608C54] text-white text-sm font-medium rounded-lg hover:bg-gray-600 transition">
                                <Icon icon="mdi:chat" width="20" height="20" style="color: white" /> Chat Now
                            </button>
                            <!-- View Shop Button -->
                            <a href="/shop" class="flex items-center gap-1 px-4 py-2 bg-white text-sm font-medium rounded-lg hover:bg-gray-300 transition border border-gray-300">
                                <Icon icon="bx:store" width="20" height="20" style="color: black" /> View Shop
                            </a>
                        </div>
                    </div>
                </div>

                <!-- Divider for Desktop -->
                <div class="hidden md:block border-l border-gray-300 h-20"></div>

                <!-- Right Section: Metrics -->
                <div class="w-full md:flex-1 grid grid-cols-2 md:grid-cols-4 gap-4 items-center text-gray-600 text-center">
                    <div class="flex flex-col items-center">
                        <h1 class="text-md font-semibold">Rating</h1>
                        <span class="text-xs">4.5</span>
                    </div>
                    <div class="flex flex-col items-center">
                        <h1 class="text-md font-semibold">Products</h1>
                        <span class="text-xs">2</span>
                    </div>
                    <div class="flex flex-col items-center">
                        <h1 class="text-md font-semibold">Joined</h1>
                        <span class="text-xs">4 months ago</span>
                    </div>
                    <div class="flex flex-col items-center">
                        <h1 class="text-md font-semibold">Followers</h1>
                        <span class="text-xs">123</span>
                    </div>
                </div>
            </div>
        </div>



        <!-- Product Description -->
        <div class="p-5">
            <div class="border-2 p-5 border-gray-300 rounded-md">
                <h1 class="text-lg font-semibold">Product Description</h1>
                <p class="text-md leading-relaxed">
                    Our Salad Pack is packed with fiber and essential nutrients—quick and easy to prepare. 
                    Whether you’re a busy professional, a fitness enthusiast, or just someone looking to make healthy eating more convenient, 
                    this pack is designed to simplify your life without compromising nutrition.
                </p>
            </div>
        </div>

        <!-- Reviews -->
        <div class="p-4">
            <div class="border-2 border-gray-300 p-4 rounded-md">
                <h2 class="text-lg font-semibold">Total Reviews</h2>
                <div class="text-5xl">5.0</div>

                <div :class="isScrollable ? 'max-h-96 overflow-y-auto' : ''" class="mt-4">
                    <div v-for="review in reviews" :key="review.id" class="p-4 border-2 border-gray-300 rounded-md">
                        <div class="flex items-center gap-4">
                            <img :src="review.image" alt="" class="w-12 h-12 rounded-full object-cover">
                            <div>
                                <h3 class="font-bold">{{ review.name }}</h3>
                                <p class="text-sm text-gray-500">{{ review.date }}</p>
                            </div>
                        </div>
                        <p class="mt-2 text-gray-700">{{ review.text }}</p>
                    </div>
                </div>

                <button @click="isScrollable = !isScrollable" 
                    class="bg-[#608C54] text-white py-2 px-4 rounded shadow hover:bg-gray-600 transition mt-2">
                    {{ isScrollable ? 'Collapse Reviews' : 'See More Reviews' }}
                </button>
            </div>
        </div>
        <Footer/>
    </div>
</template>

<script setup>
import Loading from '@/components/Alerts/Loading.vue'
import Toast from '@/components/Alerts/Toast.vue'
import Market_NavBar from '@/components/Navbar/Market_NavBar.vue';
import MVegetable from '@/assets/MVegetable.png';
import BaseLabel from '@/components/Input-Fields/BaseLabel.vue';
import BaseOptionDefaultField from '@/components/Input-Fields/BaseOptionDefaultField.vue';
import BaseOptionField from '@/components/Input-Fields/BaseOptionField.vue';
import BaseSelectField from '@/components/Input-Fields/BaseSelectField.vue';
import Footer from '@/components/Input-Fields/Footer.vue';
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
const productItemListinfo = computed(() => store.state.Consumer.productItem.productItemInfo);


/******************************************************************
  FUNCTION FOR LAYER 1
******************************************************************/
function getItemListInfo() {
    store.dispatch('Consumer/getItemListInfo', sessionStorage.getItem('ItemInfo'));
}


const quantity = ref(1);

const increaseQuantity = () => {
  quantity.value++;
};

const decreaseQuantity = () => {
  if (quantity.value > 1) {
    quantity.value--;
  }
};
const addToCart = async (productId) => {
    try {
        await store.dispatch('Consumer/getAddToCart', { id: productId, quantity: quantity.value });
        router.push('/cart'); // Navigate to cart page after adding to cart
    } catch (error) {
        console.error('Error adding to cart:', error);
    }
};

function goToCheckout() {
    router.push('/checkout');
}

onMounted(() => {
    getItemListInfo();
});

/******************************************************************
  FUNCTION FOR LAYER 2
******************************************************************/
const Biodata = reactive({
  name: "Janromil Dela Cruz",
  lastActive: new Date(Date.now() - 5 * 60 * 1000), // Last active 5 minutes ago
});

// Computed property to determine active status
const activeStatus = computed(() => {
  const now = new Date();
  const lastActive = new Date(Biodata.lastActive);
  const diffMs = now - lastActive; // Difference in milliseconds
  const diffMinutes = Math.floor(diffMs / (1000 * 60));
  const diffHours = Math.floor(diffMs / (1000 * 60 * 60));

  if (diffMinutes < 1) {
    return "Active now";
  } else if (diffMinutes < 60) {
    return `${diffMinutes} minutes ago`;
  } else if (diffHours < 24) {
    return `${diffHours} hours ago`;
  } else {
    const days = Math.floor(diffHours / 24);
    return `${days} days ago`;
  }
});
/******************************************************************
  FUNCTION FOR LAYER 3
******************************************************************/
const reviews = [
  {
    id: 1,
    image: "https://via.placeholder.com/50",
    name: "Ace Tayson",
    date: "24-10-2023",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    id: 2,
    image: "https://via.placeholder.com/50",
    name: "Ivor Pacute",
    date: "24-10-2023",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    id: 3,
    image: "https://via.placeholder.com/50",
    name: "Robbie14369",
    date: "24-10-2023",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    id: 3,
    image: "https://via.placeholder.com/50",
    name: "Robbie14369",
    date: "24-10-2023",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
];

const ratings = {
  5: 190,
  4: 7,
  3: 1,
  2: 2,
  1: 0,
};

const isScrollable = ref(false); // Controls scrollable behavior
</script>

