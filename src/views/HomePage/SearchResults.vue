<!-- src/views/HomePage/SearchResults.vue -->
<template>
  <div>
    <Loading v-if="showLoading" class="loading"></Loading>
    <Toast></Toast>

    <Market_NavBar />

    <div class="bg-gray-100 min-h-screen p-4">
      <div class="container mx-auto">
        <h2 class="text-xl font-semibold mb-4">
          Search Results for "{{ searchQuery }}"
        </h2>

        <!-- Product Grid -->
        <div v-if="moreProductList.length" class="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-5 gap-4">
          <div v-for="product in moreProductList" :key="product.id" class="relative border rounded-lg shadow-sm overflow-hidden hover:shadow-md transition-shadow group" @mouseenter="fetchProductRatings(product.id)">
            <img :src="product.product_img[0]" alt="Product Image" class="w-full h-40 object-cover" />
            <!-- Hover Overlay -->
            <div class="absolute inset-0 flex items-center justify-center bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity">
              <button @click="goToItemInfo(product.id)" class="px-4 py-2 text-sm text-white bg-green-500 rounded-lg">
                View Product
              </button>
            </div>
            <div class="p-2">
              <h3 class="text-sm font-semibold">{{ product.product_name }}</h3>
              <p class="text-xs font-semibold">{{ product.description }}</p>
              <div class="text-red-500 font-bold text-sm">₱{{ product.price }}</div>
              <n-rate allow-half readonly :value="getProductRating(product.id)?.average_rating || 0" size="small" />
              <div class="text-gray-600 text-xs mt-1">
                {{ getProductRating(product.id)?.total_ratings || 0 }} reviews
              </div>
              <div v-if="product.location" class="text-gray-600 text-xs mt-2">
                📍 {{ product.location }}
              </div>
            </div>
          </div>
        </div>
        <div v-else class="text-center text-gray-600">
          No products found for "{{ searchQuery }}".
        </div>

        <!-- Pagination -->
        <div v-if="moreProductList.length" class="mt-10 flex justify-center text-sm">
          <button type="button" class="py-2 px-4 bg-gray-100 rounded-tl-lg rounded-bl-lg hover:bg-gray-200 text-gray-600" @click="goToPreviousPage" :disabled="currentPage === 1">
            Previous
          </button>
          <span class="py-2 px-4 bg-gray-100 flex text-sm items-center border-l border-r border-gray-300">
            {{ currentPage }} of {{ totalPages }}
          </span>
          <button type="button" class="py-2 px-4 bg-gray-100 rounded-tr-lg rounded-br-lg hover:bg-gray-200 text-gray-600" @click="goToNextPage" :disabled="currentPage === totalPages">
            Next
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import Loading from '@/components/Alerts/Loading.vue';
import Toast from '@/components/Alerts/Toast.vue';
import Market_NavBar from '@/components/Navbar/Market_NavBar.vue';
import { ref, computed, onMounted, watch } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import { useStore } from 'vuex';
import { Icon } from '@iconify/vue';

const store = useStore();
const route = useRoute();
const router = useRouter();

const showLoading = computed(() => store.state.showLoading.state);
const moreProductList = computed(() => store.state.Consumer.moreProduct.data);
const currentPage = computed(() => store.state.currentPage);
const totalPages = computed(() => store.state.totalPages);
const productRatings = computed(() => store.state.Consumer.productRatings);
const searchQuery = computed(() => route.query.q || '');

// Fetch search results
async function fetchSearchResults() {
  await store.dispatch('Consumer/getMoreList', {
    currentPage: currentPage.value,
    search: searchQuery.value,
  });
}

// Fetch search results on mount
onMounted(() => {
  if (searchQuery.value) {
    fetchSearchResults();
  }
});

// Watch for changes to searchQuery and re-fetch results
watch(searchQuery, (newQuery) => {
  if (newQuery) {
    store.commit('setCurrentPage', 1); // Reset to page 1 for new search
    fetchSearchResults();
  }
});

// Fetch product ratings
async function fetchProductRatings(productId) {
  if (!productRatings.value?.[productId]) {
    await store.dispatch('Consumer/getProductRatings', productId);
  }
}

// Get product rating
function getProductRating(productId) {
  return productRatings.value?.[productId] || null;
}

// Navigate to product details
async function goToItemInfo(productId) {
  sessionStorage.setItem('ItemInfo', productId);
  router.push({ name: 'Market_Page1' });
}

// Pagination
function goToPreviousPage() {
  if (currentPage.value > 1) {
    store.commit('setCurrentPage', currentPage.value - 1);
    fetchSearchResults();
  }
}

function goToNextPage() {
  if (currentPage.value < totalPages.value) {
    store.commit('setCurrentPage', currentPage.value + 1);
    fetchSearchResults();
  }
}
</script>