<template>
     <!-- Loading screen and toast message -->
     <Loading v-if="showLoading" class="loading"></Loading>
    <Toast></Toast>

    <div>
        <Market_NavBar/>
        <div class="relative">
            <!-- Background Image -->
            <img :src="Mfarmer" alt="" class="object-fill 2xl:h-[500px] w-full  ">

        </div>
        <div class="flex flex-col items-center space-y-4 2xl:p-8 2xs:p-4 bg-[#285a19]">
            <!-- Text Section -->
            <div class="text-center w-full">
                <h2 class="2xl:text-2xl 2xs:text-sm xl:text-2xl lg:text-2xl font-bold text-white">Grab this now</h2>
                <p class="mt-2 2xl:text-lg 2xs:text-xs lg:text-lg xl:text-lg text-gray-300 max-w-3xl mx-auto">
                    Explore our curated selection of high-quality goods, featuring fresh produce, artisanal items, and everyday essentials, all while supporting local farmers and communities.
                </p>
            </div>

            <!-- Image Section -->
            <div class="flex justify-center 2xs:w-full">
                <n-carousel :slides-per-view="slidesPerView" :space-between="20" :loop="false" draggable show-arrow>
                    <div v-for="productItem in productItemList" :key="productItem.id" 
                        class="border-2 border-[#608C54] relative group w-20 h-20 sm:w-32 xl:w-48 sm:h-32 md:w-32 md:h-32 xl:h-48 lg:w-56 lg:h-56 2xs:w-56 2xs:h-56 rounded-lg overflow-hidden mx-auto">
                        
                        <img :src="productItem.product_img[0]" alt="Carousel Image" 
                            class="w-full h-full object-cover transition-transform duration-300 transform group-hover:scale-110" />

                        <div class="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                            <button @click="goToItemInfo(productItem.id)" 
                                class="px-2 py-1 2xl:px-4 md:px-2 2xl:py-2 text-xs sm:text-sm md:text-xs text-white bg-green-500 rounded-lg">
                                View Product
                            </button>
                        </div>
                    </div>
                </n-carousel>
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
                    <div class="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-5 grid-rows-2 gap-4">
                        <div v-for="moreProduct in moreProductList.slice(0, 10)" 
                            :key="moreProduct.id"  
                            class="relative border rounded-lg shadow-sm overflow-hidden hover:shadow-md transition-shadow group">
                            
                            <img :src="moreProduct.product_img[0]"  alt="Product Image"  
                                class="w-full h-40 object-cover" />

                            <!-- Hover Overlay -->
                            <div class="absolute inset-0 flex items-center justify-center bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity">
                                <button @click="goToItemInfo(moreProduct.id)" 
                                    class="px-2 py-1 2xl:px-4 md:px-2 2xl:py-2 text-xs sm:text-sm md:text-xs text-white bg-green-500 rounded-lg">
                                    View Product
                                </button>
                            </div>

                            <div class="p-2">
                                <h3 class="text-sm font-semibold">{{ moreProduct.product_name }}</h3>
                                <p class="text-xs font-semibold">{{ moreProduct.description }}</p>
                                <div class="text-red-500 font-bold text-sm">₱{{ moreProduct.price }}</div>
                                <n-rate allow-half readonly :default-value="moreProduct.rating" size="small" />
                                <div v-if="moreProduct.location" class="text-gray-600 text-xs mt-2">
                                    📍 {{ moreProduct.location }}
                                </div>
                            </div>
                        </div>
                    </div>


                    <!-- Pagination -->
                    <div class="mt-10 mr-4 flex justify-center text-sm">
                        <button type="button" class="py-2 px-4 bg-gray-100 rounded-tl-lg rounded-bl-lg hover:bg-gray-200 text-gray-600" 
                            @click="goToPreviousPage" :disabled="currentPage === 1">Previous</button>
                        <span class="py-2 px-4 bg-gray-100 flex text-sm items-center border-l border-r border-gray-300"> 
                            {{ currentPage }} of {{ totalPages }}
                        </span>
                        <button type="button" class="py-2 px-4 bg-gray-100 rounded-tr-lg rounded-br-lg hover:bg-gray-200 text-gray-600" 
                            @click="goToNextPage" :disabled="currentPage === totalPages">Next</button>
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
                    <div class="mr-6 hidden sm:block">
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

            <div class="p-4">
              <!-- Floating Chat Button -->
                <button @click="openshowChatModal"  class="hidden md:flex bg-yellow-100 border-2 border-gray-300 rounded-full p-3  fixed bottom-4 right-4 shadow-md hover:bg-yellow-300 items-center justify-center">
                    <Icon icon="tabler:message" width="28" height="28" style="color: #608C54" />
                </button>
            </div>

            <!-- Expanded Floating Chat Modal -->
            <div v-if="isshowChatModal" class="fixed bottom-4 right-4 2xl:w-[900px] 2xs:w-[470px] 2xl:h-[85vh] 2xs:h-[65vh] bg-white rounded-lg shadow-lg flex flex-col border z-50">
                <!-- Header -->
                <div class="p-4 border-b rounded-sm bg-gray-100 flex justify-between items-center">
                    <span class="text-xl font-bold text-green-600">Chat</span>
                    <button @click="closeshowChatModal" class="text-gray-600 text-lg">
                        <Icon icon="icon-park-solid:close-one" width="20" height="20" />
                    </button>
                </div>

              <div class="flex flex-1 overflow-hidden">
                <!-- Sidebar (Users List) -->
                <div class="w-1/3 bg-white border-r border-gray-300 p-4 flex flex-col">
                  <div class="flex">
                  <BaseSearchField placeholder="Search..." class="2xl:w-[270px] 2xs:w-[137px] "></BaseSearchField>
                  </div>

                  <!--Conversation List-->
                  <div class="mt-3 flex-1 overflow-auto">
                        <div v-for="conversation in conversationStart" :key="conversation.id" class="flex items-center p-3 border-b cursor-pointer hover:bg-gray-100 transition duration-200" @click="selectChat(conversation.id)">
                            <img :src="conversation.chat_partner_avatar" class="w-12 h-12 rounded-full border mr-3" alt="Avatar" />
                            <div class="flex-1">
                                <span class="font-semibold">{{ conversation.chat_partner_name }}</span>
                                <p class="text-xs text-gray-500 truncate">{{ conversation.message }}</p>
                            </div>
                            <span v-if="conversation.unread_messages_count" class="text-xs bg-red-500 text-white px-2 py-1 rounded-full">
                                {{ conversation.unread_messages_count }}
                            </span>

                            <!-- Delete Button -->
                            <button class="text-white rounded" @click="openDeleteModal(conversation.id, $event)">
                                <Icon icon="mdi-light:delete" width="20" height="20" style="color: #ad1414" />
                            </button>

                            <!-- Modal -->
                            <div v-if="isModalVisible" class="fixed inset-0 bg-gray-500 bg-opacity-75 flex justify-center items-center z-50">
                                <div class="bg-white p-6 rounded shadow-lg w-96">
                                <h3 class="text-xl font-semibold text-center">Are you sure you want to delete this conversation?</h3>
                                <div class="flex justify-around mt-4">
                                    <button @click="deleteConversation" class="px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700">Yes, Delete</button>
                                    <button @click="closeDeleteModal($event)" class="px-4 py-2 bg-gray-300 text-gray-800 rounded hover:bg-gray-400">Cancel</button>
                                </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Chat Window -->
                <div class="w-full flex flex-col">
                  <!-- If No Chat is Selected -->
                  <div v-if="!selectedChat" class="flex-1 flex items-center justify-center text-gray-400">
                    <p class="text-xl">Welcome to Pagsasaka Chat</p>
                  </div>

                  <!-- If a Chat is Selected -->
                  <div v-else class="flex flex-col flex-1">
                    <div class="p-4 border-b text-lg font-bold flex justify-between items-center bg-gray-100">
                      <span>{{ selectedChat.chat_partner_name }}</span>
                      <button @click="closeChat" class="text-gray-500">Close</button>
                    </div>

                    <!-- Base code for rendering messages -->
                    <div class="flex-1 bg-gray-50 p-4 overflow-auto space-y-4 2xl:text-sm 2xs:text-sm max-h-[400px]">
                        <div v-for="message in messageStart" :key="message.id" class="flex items-start space-x-3" 
                            :class="{'justify-end': message.sender.id === userName, 'justify-start': message.sender.id !== userName}">
                            
                            <!-- Avatar (Only for others' messages) -->
                            <img v-if="message.sender.id !== userName" :src="message.sender.avatar || defaultAvatar" class="w-8 h-8 rounded-full" />
                            <div class="p-3 rounded-lg shadow-md w-auto max-w-xs" :class="{'bg-green-500 text-white': message.sender.id === userName, 'bg-gray-200 text-black': message.sender.id !== userName}">
                                <p class="text-sm font-bold" :class="{'text-white': message.sender.id === userName, 'text-green-600': message.sender.id !== userName}">
                                    {{ message.sender.first_name }} {{ message.sender.last_name }}
                                </p>
                                <p class="text-xs">
                                    {{ message.message }}
                                </p>
                            </div>

                            <!-- Avatar Placeholder for Sent Messages (Align Right) -->
                            <div v-if="message.sender.id === userName" class="w-8 h-8 rounded-full bg-gray-300"></div>
                        </div>
                    </div>

                    <!-- Input Area for Sending a Message -->
                    <div class="p-4 border-t bg-white flex items-center">
                        <!-- Message Input -->
                        <input    v-model="messageText" type="text" placeholder="Type a message here" class="flex-1 p-2 border rounded-md text-sm"/>

                        <!-- Send Button -->
                        <button class="ml-2 bg-green-600 text-white px-4 py-2 rounded-md transition duration-200 hover:bg-green-700" @click="sendMessage">
                            Send
                        </button>
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
import Market_NavBar from '@/components/Navbar/Market_NavBar.vue';
import BaseLabel from '@/components/Input-Fields/BaseLabel.vue';
import BaseSearchField from '@/components/Input-Fields/BaseSearchField.vue';
import Toast from "@/components/Alerts/Toast.vue";
import Loading from "@/components/Alerts/Loading.vue";
import { debounce } from 'lodash';
import { ref, computed, reactive, onMounted } from "vue";
import { useVuelidate } from "@vuelidate/core";
import { required, helpers } from "@vuelidate/validators";
import { Icon } from "@iconify/vue";
import { useRouter } from "vue-router";
import { useStore } from "vuex";
import { useWindowSize } from "@vueuse/core";
import { decryptData } from '@/components/composable/CryptoUtility';

const store = useStore();
const router = useRouter();

const showLoading = computed(() => store.state.showLoading.state);
const conversationStart= computed(() => store.state.Consumer.conversation.data);
const messageStart= computed(() => store.state.Consumer.message.data);
const productItemList= computed(() => store.state.Consumer.productItem.data);
const moreProductList= computed(() => store.state.Consumer.moreProduct.data);
const currentPage = computed(() => store.state.currentPage);
const totalPages = computed(() => store.state.totalPages);

/*********************************************************************
FUNCTIONS FOR SEARCH
*********************************************************************/
// const searchQuery = ref('');

// // Search college
// const search = debounce(() => {
//     store.dispatch('Administrator/getCollege', { 
//         search: searchQuery.value, 
//     }).then(() => {
//         if (collegeList.value.length === 0) {
//             store.commit('setCurrentPage', 0);
//             store.commit('setTotalPages', 0);
//         }
//     });
// }, 500) // Adjust the debounce delay as needed (300 milliseconds in this example)


/******************************************************************
  FUNCTION FOR GETTING CONVERSATION LIST
******************************************************************/
function getConversation() {
    store.dispatch('Consumer/getConversation')
}

onMounted(() => {
    getConversation();
})

/******************************************************************
  FUNCTION FOR RESPONSIVE
******************************************************************/

const { width } = useWindowSize();

const slidesPerView = computed(() => {
  if (width.value >= 1536) return 5; // 2xl (>= 1536px) → Show 5 images
  if (width.value >= 1280) return 4; // xl (>= 1280px) → Show 4 images
  if (width.value >= 1024) return 3; // lg (>= 1024px) → Show 3 images
  if (width.value >= 768) return 4;  // md (>= 768px) → Show 2 images
  if (width.value >= 640) return 3;  // sm (>= 640px) → Show 2 images
  if (width.value >= 480) return 1;  // sm (>= 640px) → Show 2 images
  return 1; // 2xs (< 640px) → Show 1 image
});

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
async function getMoreList() {
    await store.dispatch('Consumer/getMoreList', {
        currentPage: currentPage.value, // Pass as part of an object
    });
}

onMounted(() => {
  getMoreList();
})

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

// const filteredProducts = computed(() => {
//   let moreProductList = products.value;

//   // Apply filters based on selected checkboxes
//   if (!filters.all) {
//     const activeFilters = Object.keys(filters).filter(key => filters[key] && key !== 'all');
//     if (activeFilters.length > 0) {
//       filtered = filtered.filter(product => activeFilters.includes(product.category));
//     }
//   }

//   return filtered.slice((currentPage.value - 1) * itemsPerPage, currentPage.value * itemsPerPage);
// });

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

/******************************************************************
PAGINATION
******************************************************************/
function goToPreviousPage() {
    if (currentPage.value > 1) {
        store.commit('setCurrentPage', currentPage.value - 1);
        getMoreList();
    }
}

function goToNextPage() {
    if (currentPage.value < totalPages.value) {
        store.commit('setCurrentPage', currentPage.value + 1);
        getMoreList();
    }
}




/******************************************************************
  FUNCTION FOR CHAT
******************************************************************/
const isshowChatModal = ref(false);
const selectedChat = ref(null);
const messageText = ref('');

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
    console.log("Selected chat ID: ", id);  // Debugging the id value
    const selected = conversationStart.value.find(c => c.id === id);
    selectedChat.value = selected;
    store.dispatch('Consumer/getMessages', id);
};

const sendMessage = async () => {
    if (!messageText.value.trim() || !selectedChat.value) return;

    const payload = {
        conversation_id: selectedChat.value.id,
        message: messageText.value,
    };

    try {
        await store.dispatch('Consumer/sendMessage', payload);
        await store.dispatch('Consumer/getMessages', selectedChat.value.id);
        messageText.value = '';
    } catch (error) {
        console.error('Failed to send message:', error);
    }
};


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

    // Refresh the conversation list
    getConversation();

    // If the deleted conversation is currently selected, clear it
    if (selectedChat.value?.id === conversationIdToDelete.value) {
      selectedChat.value = null;
      messageStart.value = [];
    }

  } catch (error) {
    console.error("Failed to delete conversation:", error);
  }
};

</script>


<style scoped>
.group-hover:scale-110 {
  transform: scale(1.1);
}

</style>