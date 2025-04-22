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
                                    <button @click="decreaseQuantity">
                                        <Icon icon="zondicons:minus-solid" width="20" height="20" style="color: #608C54" />
                                    </button>
                                    <span class="font-bold mx-4">{{ quantity }}</span>
                                    <button @click="increaseQuantity">
                                        <Icon icon="gridicons:add" width="24" height="24" style="color: #608C54" />
                                    </button>
                                </div>
                            </div>

                            <!-- Buttons -->
                            <div class="flex flex-wrap gap-3 items-center mt-4">
                                <button @click="addToCart(productItemInfo.id)" 
                                    class="bg-[#608C54] text-white font-bold px-4 py-2 hover:bg-[#4e7343] rounded flex items-center gap-2">
                                    <Icon icon="lineicons:cart-2" width="24" height="24" style="color: #fff" />
                                    Add to Cart
                                </button>
                                <button @click="buynow(productItemInfo.id)" 
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
                <div v-for="productItemInfo in productItemListinfo" :key="productItemInfo.id" class="flex flex-col md:flex-row items-center space-x-3 w-full md:w-auto">
                    <img :src="productItemInfo.seller_avatar" alt="Placeholder Image" class="w-16 h-16 rounded-full border border-gray-500">
                    <div class="flex flex-col text-md text-gray-600 text-center md:text-left">
                        <span class="font-semibold">{{ productItemInfo.seller_name }}</span>
                        <div class="mt-3 flex flex-wrap gap-2 justify-center md:justify-start">
                            <button 
                                @click="startChatWithShop"
                                class="flex items-center gap-1 px-4 py-2 bg-[#608C54] text-white text-sm font-medium rounded-lg hover:bg-green-700 transition"
                                aria-label="Start chat with seller"
                            >
                                <Icon icon="mdi:chat" width="20" height="20" style="color: white" /> Chat Now
                            </button>
                            <!-- <button @click="goToItemInfo(productItemInfo.id)" class="flex items-center gap-1 px-4 py-2 bg-white text-sm font-medium rounded-lg hover:bg-gray-300 transition border border-gray-300">
                                <Icon icon="bx:store" width="20" height="20" style="color: black" /> View Shop
                            </button> -->
                        </div>
                    </div>
                    <!-- Divider for Desktop -->
                    <div class="hidden md:block border-l border-gray-300 h-20"></div>

                    <!-- Right Section: Metrics -->
                    <div class="w-full md:flex-1 grid grid-cols-2 md:grid-cols-4 gap-4 items-center text-gray-600 text-center">
                        <div class="flex flex-col items-center">
                            <h1 class="text-md font-semibold">Total Products</h1>
                            <span class="text-xs">{{ productItemInfo.total_products }}</span>
                        </div>
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
                <div class="flex items-center gap-4">
                    <h2 class="text-lg font-semibold">Total Reviews: {{ productRating?.total_ratings || 0 }}</h2>
                    <n-rate allow-half readonly :value="productRating?.average_rating || 0" size="small" />
                </div>

                <div :class="isScrollable ? 'max-h-96 overflow-y-auto' : ''" class="mt-4">
                    <div v-for="rating in productRating?.ratings?.data || []" :key="rating.id" 
                        class="p-4 border-2 border-gray-300 rounded-md mb-2">
                        <div class="flex items-center gap-4">
                            <img :src="rating.account?.avatar || defaultAvatar" alt="Reviewer Avatar" 
                                class="w-12 h-12 rounded-full object-cover" />
                            <div>
                                <n-rate allow-half readonly :value="rating.rating" size="small" />
                                <h3 class="font-bold">{{ rating.account?.first_name }} {{ rating.account?.last_name }}</h3>
                                <p class="text-sm text-gray-500">{{ formatDate(rating.created_at) }}</p>
                            </div>
                        </div>
                        <p class="mt-2 text-gray-700">{{ rating.comment }}</p>
                        <p v-if="rating.seller_response" class="mt-1 text-gray-500">Seller: {{ rating.seller_response }}</p>
                    </div>
                </div>

                <div class="space-x-4">
                    <button v-if="productRating?.total_ratings > 0" @click="isScrollable = !isScrollable" 
                        class="bg-[#608C54] text-white py-2 px-4 rounded shadow hover:bg-green-700 transition mt-2">
                        {{ isScrollable ? 'Collapse Reviews' : 'See More Reviews' }}
                    </button>
                    <button @click="opeCommentModal" 
                        class="bg-gray-700 text-white py-2 px-4 rounded shadow hover:bg-gray-600 transition mt-4">
                        Add New Comment
                    </button>
                </div>
            </div>

            <!-- Add Comment Modal -->
            <div v-if="isCommentModalOpen" class="fixed inset-0 bg-gray-600 bg-opacity-50 flex justify-center items-center">
                <div class="bg-white p-6 rounded-md w-96">
                    <h2 class="text-lg font-semibold mb-4">Add Your Review</h2>
                    <n-rate v-model:value="ratingData.rating" allow-half size="large" class="mb-4" />
                    <BaseError v-if="$validateratingrules.rating.$error">
                        {{ $validateratingrules.rating.$errors[0].$message }}
                    </BaseError>
                    <textarea v-model="ratingData.comment" placeholder="Write your comment..." rows="4" 
                        class="w-full border-2 border-gray-300 p-2 rounded-md"></textarea>
                    <BaseError v-if="$validateratingrules.comment.$error">
                        {{ $validateratingrules.comment.$errors[0].$message }}
                    </BaseError>
                    <div class="mt-4 flex gap-2">
                        <button @click="createComment" 
                            class="bg-green-800 text-white py-2 px-4 rounded shadow hover:bg-green-600 transition">
                            Submit
                        </button>
                        <button @click="closeCommentModal" 
                            class="bg-red-800 text-white py-2 px-4 rounded shadow hover:bg-red-600 transition">
                            Cancel
                        </button>
                    </div>
                </div>
            </div>
        </div>

        <!-- Chat -->
        <div class="p-4">
            <button @click="openshowChatModal" 
                class="hidden md:flex bg-yellow-100 border-2 border-gray-300 rounded-full p-3 fixed bottom-4 right-4 shadow-md hover:bg-yellow-300 items-center justify-center">
                <Icon icon="tabler:message" width="28" height="28" style="color: #608C54" />
            </button>
        </div>

        <!-- Expanded Floating Chat Modal -->
        <div v-if="isshowChatModal" class="fixed bottom-4 right-4 2xl:w-[900px] 2xs:w-[470px] 2xl:h-[85vh] 2xs:h-[65vh] bg-white rounded-lg shadow-lg flex flex-col border z-50">
            <div class="p-4 border-b rounded-sm bg-gray-100 flex justify-between items-center">
                <span class="text-xl font-bold text-green-600">Chat</span>
                <button @click="closeshowChatModal" class="text-gray-600 text-lg">
                    <Icon icon="icon-park-solid:close-one" width="20" height="20" />
                </button>
            </div>

            <div class="flex flex-1 overflow-hidden">
                <div class="w-1/3 bg-white border-r border-gray-300 p-4 flex flex-col">
                    <div class="flex">
                        <BaseSearchField placeholder="Search..." class="2xl:w-[270px] 2xs:w-[137px]"></BaseSearchField>
                    </div>
                    <div class="mt-3 flex-1 overflow-auto">
                        <div v-for="conversation in conversationStart" :key="conversation.id" 
                            class="flex items-center p-3 border-b cursor-pointer hover:bg-gray-100 transition duration-200" 
                            @click="selectChat(conversation.id)">
                            <img :src="conversation.chat_partner_avatar || defaultAvatar" class="w-12 h-12 rounded-full border mr-3" alt="Avatar" />
                            <div class="flex-1">
                                <span class="font-semibold">{{ conversation.chat_partner_name }}</span>
                                <p class="text-xs text-gray-500 truncate">{{ conversation.message || 'No messages' }}</p>
                            </div>
                            <span v-if="conversation.unread_messages_count" 
                                class="text-xs bg-red-500 text-white px-2 py-1 rounded-full">
                                {{ conversation.unread_messages_count }}
                            </span>
                            <button @click="openDeleteModal(conversation.id, $event)">
                                <Icon icon="mdi-light:delete" width="20" height="20" style="color: #ad1414" />
                            </button>
                            <div v-if="isModalVisible" class="fixed inset-0 bg-gray-500 bg-opacity-75 flex justify-center items-center z-50">
                                <div class="bg-white p-6 rounded shadow-lg w-96">
                                    <h3 class="text-xl font-semibold text-center">Are you sure you want to delete this conversation?</h3>
                                    <div class="flex justify-around mt-4">
                                        <button @click="deleteConversation" 
                                            class="px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700">Yes, Delete</button>
                                        <button @click="closeDeleteModal($event)" 
                                            class="px-4 py-2 bg-gray-300 text-gray-800 rounded hover:bg-gray-400">Cancel</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="w-full flex flex-col">
                    <div v-if="!selectedChat" class="flex-1 flex items-center justify-center text-gray-400">
                        <p class="text-xl">Welcome to Pagsasaka Chat</p>
                    </div>
                    <div v-else class="flex flex-col h-full">
                        <div class="p-4 border-b flex justify-between items-center bg-gray-100">
                            <h2 class="text-lg font-semibold">{{ selectedChat.chat_partner_name }}</h2>
                            <button @click="closeChat" class="text-gray-500">Close</button>
                        </div>
                        <div class="flex-1 bg-gray-50 p-4 overflow-auto space-y-4 2xl:text-sm 2xs:text-sm max-h-[400px]">
                            <div v-for="message in messageStart" :key="message.id" class="flex items-start space-x-3" 
                                :class="{'justify-end': message.sender.id === userId, 'justify-start': message.sender.id !== userId}">
                                <img v-if="message.sender.id !== userId" :src="message.sender.avatar || defaultAvatar" 
                                    class="w-8 h-8 rounded-full" />
                                <div class="p-3 rounded-lg shadow-md w-auto max-w-xs" 
                                    :class="{'bg-green-500 text-white': message.sender.id === userId, 'bg-gray-200 text-black': message.sender.id !== userId}">
                                    <p class="text-sm font-bold" 
                                        :class="{'text-white': message.sender.id === userId, 'text-green-600': message.sender.id !== userId}">
                                        {{ message.sender.id === userId ? 'You' : message.sender.first_name + ' ' + message.sender.last_name }}
                                    </p>
                                    <p class="text-xs">{{ message.message }}</p>
                                </div>
                                <img v-if="message.sender.id === userId" :src="userAvatar || defaultAvatar" class="w-8 h-8 rounded-full" />
                            </div>
                        </div>
                        <div class="p-4 border-t bg-gray-50 flex items-center">
                            <input v-model="messageData.message" type="text" placeholder="Type a message..." 
                                class="flex-1 p-2 border rounded-md text-sm"/>
                            <button @click="sendMessage" 
                                class="ml-2 bg-green-500 text-white px-4 py-2 rounded-md transition duration-200 hover:bg-green-700">
                                Send
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>         
    </div>
    <Footer/>
</template>

<script setup>
import Loading from '@/components/Alerts/Loading.vue';
import Toast from '@/components/Alerts/Toast.vue';
import Market_NavBar from '@/components/Navbar/Market_NavBar.vue';
import BaseLabel from '@/components/Input-Fields/BaseLabel.vue';
import BaseSearchField from '@/components/Input-Fields/BaseSearchField.vue';
import Footer from '@/components/Input-Fields/Footer.vue';
import BaseError from "@/components/Input-Fields/BaseError.vue";
import { debounce } from 'lodash';
import { ref, computed, reactive, onMounted } from "vue";
import { useVuelidate } from "@vuelidate/core";
import { required, helpers } from "@vuelidate/validators";
import { Icon } from "@iconify/vue";
import { useRouter } from "vue-router";
import { useStore } from "vuex";
import { toastDelay, toastDuration } from '@/components/composable/GlobalVariables';

const store = useStore();
const router = useRouter();

const showLoading = computed(() => store.state.showLoading.state);
const productItemListinfo = computed(() => store.state.Consumer.productItem.productItemInfo);
const productRatings = computed(() => store.state.Consumer.productRatings);
const conversationStart = computed(() => store.state.Consumer.conversation.data);
const messageStart = computed(() => store.state.Consumer.message.data);
const userId = computed(() => store.state.userData.data?.user?.id || null); // Assuming user ID is stored in userData
const userAvatar = computed(() => store.state.userData.data?.user?.avatar || defaultAvatar.value); // Assuming user avatar is stored in userData

const defaultAvatar = ref('path/to/default/avatar.png');
const isScrollable = ref(false);
const productRating = computed(() => {
    const productId = sessionStorage.getItem('ItemInfo');
    return productRatings.value?.[productId] || null;
});

function getFarmerInfoList() {
    const productId = sessionStorage.getItem('ItemInfo');
    store.dispatch('Consumer/getFarmerInfoList', productId);
}

onMounted(() => {
    getFarmerInfoList();
});

async function goToItemInfo(productId) {
    sessionStorage.setItem('ItemInfo', productId);
    router.push({ name: 'Viewshop' });
}

/******************************************************************
  FUNCTION FOR LIST
******************************************************************/
function getItemListInfo() {
    const productId = sessionStorage.getItem('ItemInfo');
    store.dispatch('Consumer/getItemListInfo', productId);
}

/******************************************************************
  FUNCTION FOR PRODUCT RATINGS
******************************************************************/
async function fetchProductRatings(force = false) {
    const productId = sessionStorage.getItem('ItemInfo');
    if (productId && (force || !productRatings.value?.[productId])) {
        await store.dispatch('Consumer/getProductRatings', productId);
    }
}
function formatDate(dateString) {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });
}

onMounted(() => {
    getItemListInfo();
    fetchProductRatings();
});

/******************************************************************
  FUNCTION FOR QUANTITY AND ADD TO CART
******************************************************************/
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
        await store.dispatch('Consumer/getBuyNow', { id: productId, quantity: quantity.value });
        const cartItem = store.state.Consumer.cartItem.data.find(item => item.id === productId);
        if (cartItem) {
            cartItem.selected = true;
        }
    } catch (error) {
        console.error('Error adding to checkout:', error);
    }
};

/******************************************************************
  FUNCTION FOR CHECKOUT
******************************************************************/
const buynow = async (productId) => {
    try {
        await store.dispatch('Consumer/getBuyNow', { id: productId, quantity: quantity.value });
        const cartItem = store.state.Consumer.cartItem.data.find(item => item.id === productId);
        if (cartItem) {
            cartItem.selected = true;
        }
        router.push('/cart');
    } catch (error) {
        console.error('Error adding to checkout:', error);
    }
};

/******************************************************************
  FUNCTION FOR LAYER 2
******************************************************************/
const Biodata = reactive({
    name: "Janromil Dela Cruz",
    lastActive: new Date(Date.now() - 5 * 60 * 1000),
});

const activeStatus = computed(() => {
    const now = new Date();
    const lastActive = new Date(Biodata.lastActive);
    const diffMs = now - lastActive;
    const diffMinutes = Math.floor(diffMs / (1000 * 60));
    const diffHours = Math.floor(diffMs / (1000 * 60 * 60));

    if (diffMinutes < 1) return "Active now";
    if (diffMinutes < 60) return `${diffMinutes} minutes ago`;
    if (diffHours < 24) return `${diffHours} hours ago`;
    const days = Math.floor(diffHours / 24);
    return `${days} days ago`;
});

/******************************************************************
  FUNCTION FOR CHAT
******************************************************************/
const isshowChatModal = ref(false);
const selectedChat = ref(null);
const messageData = reactive({ message: '' });

const closeChat = () => {
    selectedChat.value = null;
};

const openshowChatModal = () => {
    isshowChatModal.value = true;
};

const closeshowChatModal = () => {
    isshowChatModal.value = false;
};

const selectChat = (id) => {
    console.log("Selected chat ID:", id);
    const selected = conversationStart.value.find(c => c.id === id);
    selectedChat.value = selected;
    store.dispatch('Consumer/getMessages', id);
};

const sendMessage = async () => {
    if (!messageData.message.trim() || !selectedChat.value) return;

    const payload = {
        id: selectedChat.value.id,
        message: messageData.message,
    };

    try {
        await store.dispatch('Consumer/sendMessage', payload);
        await store.dispatch('Consumer/getMessages', selectedChat.value.id);
        messageData.message = '';
    } catch (error) {
        console.error('Failed to send message:', error);
    }
};

const startChatWithShop = () => {
    isshowChatModal.value = true;
    console.log('productItemListinfo:', productItemListinfo.value);
    if (!productItemListinfo.value || productItemListinfo.value.length === 0) {
        console.error('productItemListinfo is empty or undefined');
        setTimeout(() => {
            store.commit('showToast', { showToast: true, toastMessage: 'Product data not loaded', toastType: 'error' }, { root: true });
        }, toastDelay);
        setTimeout(() => {
            store.commit('showToast', { showToast: false, toastMessage: '', toastType: 'default' }, { root: true });
        }, toastDuration);
        return;
    }
    const user2Id = productItemListinfo.value[0]?.account_id;
    if (!user2Id) {
        console.error('Seller ID not found in productItemListinfo[0].account_id');
        setTimeout(() => {
            store.commit('showToast', { showToast: true, toastMessage: 'Seller ID not found', toastType: 'error' }, { root: true });
        }, toastDelay);
        setTimeout(() => {
            store.commit('showToast', { showToast: false, toastMessage: '', toastType: 'default' }, { root: true });
        }, toastDuration);
        return;
    }
    console.log('Starting chat with user2_id:', user2Id);
    store.dispatch('Consumer/startChatWithShop', { user2_id: user2Id })
        .then((response) => {
            if (!response) {
                console.error('No response received from startChatWithShop');
                return;
            }
            console.log('startChatWithShop response:', response);
            const createdConversation = {
                id: response.id,
                chat_partner_name: response.chat_partner_name,
                chat_partner_avatar: response.chat_partner_avatar,
                message: response.message || '',
                unread_messages_count: response.unread_messages_count || 0,
            };
            selectedChat.value = createdConversation;
            messageData.conversation_id = createdConversation.id;
            store.dispatch('Consumer/getMessages', createdConversation.id);
        })
        .catch((error) => {
            console.error('Failed to start chat:', error);
        });
};

/******************************************************************
  FUNCTION FOR GETTING CONVERSATION LIST
******************************************************************/
function getConversation() {
    store.dispatch('Consumer/getConversation');
}

onMounted(() => {
    getConversation();
});

/******************************************************************
  FUNCTION FOR ADD COMMENT
******************************************************************/
const isCommentModalOpen = ref(false);

const opeCommentModal = () => {
    ratingData.rating = 0;
    ratingData.comment = '';
    isCommentModalOpen.value = true;
};

const closeCommentModal = () => {
    isCommentModalOpen.value = false;
};

const ratingData = reactive({
    rating: 0,
    comment: '',
});

const ratingRules = computed(() => ({
    rating: {
        required: helpers.withMessage('Please select a rating', required),
        minValue: helpers.withMessage('Rating must be at least 1 star', (value) => value >= 1),
    },
    comment: { required: helpers.withMessage('Comment is required', required) },
}));

const $validateratingrules = useVuelidate(ratingRules, ratingData);

async function createComment() {
    const validationResult = await $validateratingrules.value.$validate();
    if (validationResult) {
        try {
            await store.dispatch('Consumer/createComment', {
                ...ratingData,
                product_id: sessionStorage.getItem('ItemInfo'),
            });
            closeCommentModal();
            await fetchProductRatings(true);
        } catch (error) {
            console.error('Failed to create comment:', error);
        }
    }
}

/******************************************************************
  FUNCTION FOR DELETE MESSAGE
******************************************************************/
const isModalVisible = ref(false);
const conversationIdToDelete = ref(null);

const openDeleteModal = (id, event) => {
    event.stopPropagation();
    isModalVisible.value = true;
    conversationIdToDelete.value = id;
};

const closeDeleteModal = (event) => {
    event.stopPropagation();
    isModalVisible.value = false;
    conversationIdToDelete.value = null;
};

const deleteConversation = async () => {
    if (!conversationIdToDelete.value) return;

    try {
        await store.dispatch('Consumer/deleteConversation', conversationIdToDelete.value);
        isModalVisible.value = false;
        conversationIdToDelete.value = null;
        getConversation();
        if (selectedChat.value?.id === conversationIdToDelete.value) {
            selectedChat.value = null;
            messageStart.value = [];
        }
    } catch (error) {
        console.error("Failed to delete conversation:", error);
    }
};
</script>