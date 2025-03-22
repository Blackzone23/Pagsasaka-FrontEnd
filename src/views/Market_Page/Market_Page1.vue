<template>
    <!-- Loading screen and toast message -->
    <Loading v-if="showLoading" class="loading"></Loading>
    <Toast></Toast>

    <div>
        <Market_NavBar/>
        <div class="p-5">
            <div class="flex flex-wrap gap-6">
                <div v-for="productItemInfo in productItemListinfo" :key="productItemInfo.id" class="flex h-full w-full border-2 border-gray-300 p-5 rounded-md">
                    <!-- Left Side: Picture -->
                    <div class="w-1/2 flex justify-center mt-12">
                        <img :src="productItemInfo.product_img[0]" alt="Product Image" class="rounded-lg shadow-lg h-[400px] w-[600px]" />
                    </div>

                    <!-- Right Side: Text -->
                    <div class="w-1/2 items-center mt-5">
                        <BaseLabel class="text-4xl font-bold">{{ productItemInfo.product_name }}</BaseLabel>
                        <div class="flex items-center mt-2">
                            <!-- Star Icons -->
                            <!-- <Icon v-for="n in 5" :key="n" :icon="n <= productItem.rating ? 'mdi:star' : 'mdi:star-outline'" class="w-6 h-6" :class="n <= product.rating ? 'text-yellow-400' : 'text-gray-400'" /> -->
                            <!-- <span class="ml-2 text-xs text-black">({{ productItemInfo.rating }})</span> -->
                        </div>
                        <div class="mt-2 text-xs">
                            <p class="text-lg font-semibold text-black">₱{{ productItemInfo.price }}</p>
                            <div class="flex items-center">
                                <p>Free & Easy Returns Enjoy Free Return</p>
                                <Icon icon="fluent:book-question-mark-20-filled" width="24" height="24" style="color: black" />
                            </div>
                            <div class="space-y-3 mt-1">
                                <h1 class="font-bold text-lg">Shipping</h1>
                                <div class="flex space-x-4 text-lg">
                                    <!-- <h2>Shipping To:</h2> -->
                                    <!-- <span class="font-semibold">{{ productItemInfo.shippingto }}</span> -->
                                </div>
                                <div class="flex space-x-4 text-lg">
                                    <!-- <h2>Shipping Fee:</h2> -->
                                    <!-- <span class="font-semibold">{{ productItemInfo.shipping.fee }}</span> -->
                                </div>
                                <div class="flex space-x-4 text-lg">
                                    <!-- <h2>Weight:</h2> -->
                                    <!-- <span class="font-semibold">{{ productItemInfo.shipping.weight }}</span> -->
                                </div>
                                <BaseLabel class="font-poppins font-bold">Min Order Quantity 1 KG</BaseLabel>
                                <div class="flex space-x-4 text-lg">
                                    <h2>Stock:</h2>
                                    <span class="font-semibold">{{ productItemInfo.stocks }}</span>
                                </div>
                                <div class="flex space-x-4 text-lg">
                                    <h2>Unit:</h2>
                                    <span class="font-semibold">{{ productItemInfo.unit }}</span>
                                </div>

                                <!-- Quantity Section -->
                                <div class="flex items-center space-x-4 mt-2">
                                    <h2 class="font-bold text-lg">Quantity:</h2>
                                    <div class="flex items-center border border-gray-300 rounded-full p-1">
                                        <button class="bg-[#608C54] hover:bg-gray-300 text-white font-bold py-1 px-2 rounded-full"
                                            @click="decreaseQuantity">
                                            -
                                        </button>
                                        <span class="font-bold mx-4">{{ quantity }}</span>
                                        <button class="bg-[#608C54] hover:bg-gray-300 text-white font-bold py-1 px-2 rounded-full"
                                            @click="increaseQuantity">
                                            +
                                        </button>
                                    </div>
                                </div>

                                <div class="flex space-x-5 items-center p-8 text-lg">
                                    <button @click="addToCart(productItemInfo.id)" class="bg-[#608C54] text-white font-bold px-4 py-2 hover:bg-[#4e7343] transition-colors duration-300 rounded flex items-center gap-2"><Icon icon="lineicons:cart-2" width="24" height="24"  style="color: #fff" />
                                        Add to Cart
                                    </button>
                                    <button @click="goToCheckout" class="bg-[#608C54] text-white font-bold py-2 px-7 rounded hover:bg-[#4e7343] transition-colors duration-300 flex items-center gap-2"><Icon icon="icon-park-twotone:buy" width="24" height="24"  style="color: #fff" />
                                    Buy Now
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div class="p-4">
            <div class="h-full p-5 flex items-center border-2 border-gray-300 space-x-3 w-full rounded-md">
                <!-- Left Section: Profile Info -->
                <div class="flex items-center space-x-3">
                    <img :src="MVegetable" alt="Placeholder Image" class="w-16 h-16 rounded-full border border-gray-500">
                    <div class="flex flex-col text-md text-gray-600">
                        <span>{{ Biodata.name }}</span>
                        <span class="text-xs">{{ activeStatus }}</span>
                        <div class="mt-3 flex space-x-2">
                            <!-- Chat Now Button -->
                            <button class="flex gap-1 px-4 py-2 bg-[#608C54] text-white text-sm font-medium rounded-lg hover:bg-gray-300 transition-colors">
                                <Icon icon="mdi:chat" width="20" height="20" style="color: white" /> Chat Now
                            </button>
                            <!-- View Shop Button -->
                            <a href="/shop" class="flex gap-1 px-4 py-2 bg-white text-sm font-medium rounded-lg hover:bg-gray-300 transition-colors border border-gray-300">
                                <Icon icon="bx:store" width="20" height="20" style="color: black" /> View Shop
                            </a>
                            <!-- <button class="flex gap-1 px-4 py-2 bg-white text-sm font-medium rounded-lg hover:bg-gray-300 transition-colors border border-gray-300">
                                <Icon icon="bx:store" width="20" height="20" style="color: black" /> View Shop
                            </button> -->
                        </div>
                    </div>
                </div>
                <div class="border-l border-gray-300 h-20 mx-8"></div>
                <!-- Right Section: Metrics -->
                <div class="flex-1 grid grid-cols-3 gap-4 items-center text-gray-600 text-center ml-auto">
                    <div>
                        <h1 class="text-md font-semibold">Rating</h1>
                        <span class="text-xs">4.5</span>
                    </div>
                    <div>
                        <h1 class="text-md font-semibold">Products</h1>
                        <span class="text-xs">2</span>
                    </div>
                    <div>
                        <h1 class="text-md font-semibold">Response Rate</h1>
                        <span class="text-xs">56%</span>
                    </div>
                    <div>
                        <h1 class="text-md font-semibold">Response Time</h1>
                        <span class="text-xs">Within Hours</span>
                    </div>
                    <div>
                        <h1 class="text-md font-semibold">Joined</h1>
                        <span class="text-xs">4 months ago</span>
                    </div>
                    <div>
                        <h1 class="text-md font-semibold">Followers</h1>
                        <span class="text-xs">123</span>
                    </div>
                </div>
            </div>
        </div>

        <div class="p-5 ">
            <div class="h-full w-full space-y-10 border-2 p-5 border-gray-300 rounded-md">
                <h1 class="text-lg font-semibold">Product Specifications</h1>
                <div class="flex space-x-4">
                    <h1>Stock:</h1>
                    <span>133</span>
                </div>
                <div class="flex space-x-4">
                    <h1>Ships From</h1>
                    <span>Quezon City, Metro Manila</span>
                </div>
                <h1 class="text-lg font-semibold">Product Description</h1>
                <p class="text-md">Our Salad Pack is not just packed with fiber and essential nutrients—it’s also incredibly quick and easy to prepare. Whether you’re a busy professional, a fitness enthusiast, or just someone looking to make healthy eating more convenient, this pack is designed to simplify your life without compromising on nutrition. <br> 
                Perfect for anyone seeking ease in their meals, it’s versatile enough to be enjoyed in various ways. Subscribers love using it as a nutritious main salad, a light and refreshing snack, or even mixed into their breakfast smoothies for an extra kick of greens. No matter how you incorporate it into your day, it’s sure to enhance your healthy eating routine.<br>
                Each pack weighs 500 grams and includes a mix of 2 to 3 varieties of our freshest herb and salad greens. To add a touch of vibrance and flavor, we top it off with a sprinkling of fruit, citrus, or raw vegetables, giving you a fresh, flavorful addition to any meal. Everything in the pack is designed to be eaten raw, making meal prep not only healthy but effortless.</p>
            </div>
        </div>

        <div class="p-4">
            <div class="h-full w-full flex border-2 border-gray-300 p-2 rounded-md">
                <!-- Left Box -->
                <div class="w-[500px] h-52 bg-white p-4 rounded-lg shadow-md mr-4 border-2 border-gray-300">
                    <h2 class="font-semibold">Total Reviews</h2>
                    <h1 class="text-5xl">5.0</h1>
                    <!-- Content for the left box -->
                </div>

                <!-- Right Boxes -->
                <div class="space-y-4 flex-1">
                    <div :class="isScrollable ? 'max-h-96 overflow-y-auto' : ''" class="space-y-4 bg-white shadow rounded p-4 border-2 border-gray-300 transition-all">

                    <div v-for="review in reviews" :key="review.id" class="bg-white shadow rounded p-4 border-2 border-gray-300">
                        <div class="flex items-center gap-4">
                            <img :src="review.image" alt="" class="w-12 h-12 rounded-full object-cover" />
                            <div class="w-[600px]">
                                <h3 class="font-bold">{{ review.name }}</h3>
                                <p class="text-sm text-gray-500">{{ review.date }}</p>
                            </div>
                            <div class="ml-auto flex items-center space-x-1">
                                <button class="text-gray-500 hover:text-gray-800">
                                    <Icon icon="mdi:bookmark-outline" class="w-6 h-6" />
                                </button>
                                <button class="text-gray-500 hover:text-gray-800">
                                    <Icon icon="mdi:alert-circle-outline" class="w-6 h-6" />
                                </button>
                            </div>
                        </div>
                        <p class="mt-2 text-gray-700">{{ review.text }}</p>
                    </div>
                    </div>

                    <!-- See More Reviews Button -->
                    <button @click="isScrollable = !isScrollable" class="bg-[#608C54] text-white py-2 px-4 rounded shadow hover:bg-gray-600 transition mt-2">
                        {{ isScrollable ? 'Collapse Reviews' : 'See More Reviews' }}
                    </button>
                </div>

                <!-- Right Filter Box -->
                <div class="w-72 ml-1">
                    <BaseSelectField>
                        <BaseOptionDefaultField class="text-center">Most Relevant</BaseOptionDefaultField>
                        <BaseOptionField class="text-center">Option 1</BaseOptionField>
                        <BaseOptionField class="text-center">Option 2</BaseOptionField>
                        <BaseOptionField class="text-center">Option 3</BaseOptionField>
                    </BaseSelectField>
                    <div class="text-sm mt-2 space-y-2">
                        <p class="bg-gray-200 px-3 py-1 rounded">Easy to understand</p>
                        <p class="bg-gray-200 px-3 py-1 rounded">User friendly</p>
                        <p class="bg-gray-200 px-3 py-1 rounded">Good experience</p>
                        <p class="bg-gray-200 px-3 py-1 rounded">Amazing</p>
                    </div>
                </div>
            </div>
        </div>
        <div class="p-4">
            <div class="h-full w-full border-2 border-gray-300 p-4 rounded-md">
                <h1 class="text-3xl font-bold">Best sellers in this month</h1>
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