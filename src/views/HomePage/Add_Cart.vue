<template>
    <!-- Wrapper with full height and flex column -->
    <div class="min-h-screen flex flex-col">
      <!-- Loading screen and toast message -->
      <Loading v-if="showLoading" class="loading" />
      <Toast />
    
      <Market_NavBar />
    
      <!-- Main content that grows to fill space -->
      <div class="flex-grow">
			<!-- Show Skeletons While Loading -->
			<div v-if="loading">
			<n-skeleton text :repeat="2" />
			<div class="p-4 w-full h-full">
				<n-skeleton height="30px" width="50%" class="mb-4" />
				<n-skeleton height="20px" width="80%" class="mb-4" />
				<n-skeleton height="40px" width="100%" class="mb-4" />
				<n-skeleton height="200px" width="100%" class="mb-4" />
				<n-skeleton height="50px" width="100%" class="mb-4" />
			</div>
			<n-skeleton text style="width: 70%" />
			</div>
		
			<!-- Show Empty Cart Message -->
			<div v-else-if="cartList.length === 0" class="flex flex-col items-center justify-center py-20 text-gray-500 text-center gap-2">
			<p class="text-xl">Your cart is currently empty.</p>
			<Icon icon="mynaui:sad-ghost-solid" width="100" height="100"  style="color: #9faba4" />        
			</div>

		
			<!-- Show Actual Content Once Loaded -->
			<div v-else>
				<div class="p-4 w-full h-full">
					<!-- Header -->
					<div class="flex justify-between items-center mb-4">
						<h2 class="text-lg font-bold text-[#608C54] flex items-center">
							Add to cart
							<span class="ml-2 w-24 border-dotted border-b-2 border-[#608C54]"></span>
							<Icon icon="bitcoin-icons:cart-filled" width="24" height="24" style="color: #608C54" />
						</h2>
					</div>
			
					<!-- Table Header (Hidden on Mobile) -->
					<div class="hidden md:grid md:grid-cols-6 gap-4 items-center bg-gray-100 p-3 text-sm font-medium border-t border-b border-gray-300">
						<p class="col-span-2 text-gray-500">Product</p>
						<p class="col-span-1 text-gray-500 text-center">Unit Price</p>
						<p class="col-span-1 text-gray-500 text-center">Quantity</p>
						<p class="col-span-1 text-gray-500 text-center">Total Price</p>
					</div>
			
					<!-- Product List -->
					<div class="h-[400px] max-h-[400px] overflow-y-auto border border-gray-300 rounded-lg">
						<div v-for="cartItem in cartList" :key="cartItem.id" class="grid grid-cols-1 md:grid-cols-6 gap-4 items-center p-4 border-b border-gray-300">
							<!-- Checkbox & Product -->
							<div class="flex items-center md:col-span-2 space-x-4">
								<BaseCheckBox v-model="cartItem.selected"  :id="`cart-item-${cartItem.id}`" class="mr-2" />
								<img v-if="cartItem?.product_img?.length" :src="cartItem.product_img[0]" alt="Product" class="w-16 h-16 rounded-lg" />
								<div>
									<h3 class="font-semibold">{{ cartItem.product_name }}</h3>
									<p class="text-gray-500 text-sm">Variants: {{ cartItem.unit }}</p>
								</div>
							</div>
				
							<!-- Price Info -->
							<div class="md:col-span-1 text-center">
								<p class="text-gray-700 font-medium">₱{{ cartItem.price }}</p>
							</div>
				
							<!-- Quantity -->
							<div class="md:col-span-1 text-center">
								<div class="flex items-center justify-center text-sm text-white space-x-2">
									<button @click="decreaseQuantity(cartItem.id)">
									<Icon icon="zondicons:minus-solid" width="20" height="20" style="color: #608C54" />
									</button>
									<BaseInputField v-model="cartItem.quantity" class="w-14 text-center border rounded" />
									<button @click="increaseQuantity(cartItem.id)">
									<Icon icon="gridicons:add" width="24" height="24" style="color: #608C54" />
									</button>
								</div>
							</div>
				
							<!-- Total Price -->
							<div class="md:col-span-1 text-center">
								<p class="text-gray-700 font-medium">₱{{ cartItem.price * cartItem.quantity }}</p>
							</div>
						</div>
					</div>
			
					<!-- Checkout Section -->
					<div class="flex flex-col md:flex-row justify-between items-center p-4 border-t border-gray-300 mt-4 space-y-4 md:space-y-0">
						<div class="flex items-center space-x-3">
							<BaseCheckBox v-model="selectAll" @change="toggleSelectAll" />
							<p>Select All ({{ selectedItemsCount  }})</p>
							<button v-if="selectedCount > 0" @click="deleteSelectedItems" class="text-red-800 hover:text-red-600">{{ selectedCount === 1 ? 'Delete' : 'Delete All' }}</button>
						</div>
						<div class="text-right space-y-1">
							<p class="font-bold text-lg">Total ({{ selectedItemsCount }} items): ₱{{ calculateGrandTotal }}</p>
						</div>
					</div>
			
					<!-- Checkout Button -->
					<div class="text-end mt-4 flex justify-end">
						<button @click="checkoutSelected"  class="bg-[#608C54] text-white px-6 py-2 rounded-lg block md:inline-block">Check Out</button>
					</div>
				</div>
			</div>
		</div>
      <!-- Footer always at the bottom -->
      <Footer />
    </div>
</template>
  
<script setup>
    import Market_NavBar from "@/components/Navbar/Market_NavBar.vue";
    import Footer from "@/components/Input-Fields/Footer.vue";
    import BaseCheckBox from "@/components/Input-Fields/BaseCheckBox.vue";
    import BaseInputField from "@/components/Input-Fields/BaseInputField.vue";
    import Toast from "@/components/Alerts/Toast.vue";
    import Loading from "@/components/Alerts/Loading.vue";
    import { debounce } from 'lodash';
    import { ref, computed, reactive, onMounted, watch  } from "vue";
    import { useVuelidate } from "@vuelidate/core";
    import { required, helpers } from "@vuelidate/validators";
    import { Icon } from "@iconify/vue";
    import { useRouter } from "vue-router";
    import { useStore } from "vuex";

    const store = useStore();
    const router = useRouter();


    // Fetch Cart Items from Vuex Store
    const showLoading = computed(() => store.state.showLoading.state);
    const cartList = computed(() => store.state.Consumer.cartItem.data);

    /******************************************************************
     FUNCTION FOR GETTING LIST
    ******************************************************************/
    function getCartList() {
        store.dispatch('Consumer/getCartList')
        .then(() => {
            // Ensure all items are selected after they are fetched
            cartList.value.forEach(cartItem => {
                if (cartItem.selected === undefined) {
                    cartItem.selected = false;  // Default to false for new items
                }
            });
            // Reset `selectAll` after fetching
            selectAll.value = cartList.value.every(item => item.selected);
        });
    }

    onMounted(() => {
        getCartList();
        
        // Ensure newly added cart items are checked by default
        watch(cartList, (newCartList) => {
            newCartList.forEach(cartItem => {
                if (cartItem.selected === undefined) {
                    cartItem.selected = true;
                }
            });
        });
    });
    
    /******************************************************************
     FUNCTION FOR QUANTITY
    ******************************************************************/
    // Track "Select All" state
    const selectAll = ref(false);

    function toggleSelectAll() {
        cartList.value.forEach(cartItem => {
            cartItem.selected = selectAll.value;
        });
    }

    // Watch individual item selections to update `selectAll` state
    watch(
        () => cartList.value.map(item => item.selected),
        (selectedStates) => {
            const selectedCount = selectedStates.filter(Boolean).length;
            // If all items are selected, set `selectAll` to true
            selectAll.value = selectedCount === cartList.value.length;
            // Automatically check 'Select All' when two or more items are selected
            if (selectedCount >= 2) {
                selectAll.value = true;
            }
        },
        { deep: true }
    );

    
    //selected count
    const selectedItemsCount = computed(() =>
      cartList.value.filter((cartItem) => cartItem.selected).length
    );

    //calculation
    const calculateGrandTotal = computed(() => {
      return cartList.value
      .filter((cartItem) => cartItem.selected)
      .reduce((sum, cartItem) => sum + cartItem.price * cartItem.quantity, 0)
      .toFixed(2);
    });

    // Increase item quantity
    function increaseQuantity(id) {
    const product = cartList.value.find((cartItem) => cartItem.id === id);
    if (product) product.quantity++;
    }

    // Decrease item quantity
    function decreaseQuantity(id) {
    const product = cartList.value.find((cartItem) => cartItem.id === id);
    if (product && product.quantity > 1) product.quantity--;
    }
    

    /******************************************************************
     FUNCTION FOR DELETE
    ******************************************************************/
    const selectedCount = computed(() =>
    cartList.value.filter(cartItem => cartItem.selected).length
);
 
    // Delete selected items
    async function deleteSelectedItems() {
    const selectedIds = cartList.value
        .filter(cartItem => cartItem.selected)
        .map(cartItem => cartItem.id);

    await Promise.all(
        selectedIds.map(id => store.dispatch("Consumer/deleteCart", id))
    );

    await store.dispatch("Consumer/getCartList");
}

    /******************************************************************
     FUNCTION FOR DELETE
    ******************************************************************/

   //checkout button
   const checkoutSelected = async () => {
  const selectedItems = cartList.value.filter(cartItem => cartItem.selected);
  if (selectedItems.length === 0) {
    // Maybe trigger a toast
    return;
  }

  for (const cartItem of selectedItems) {
    try {
      await store.dispatch('Consumer/Checkout', { id: cartItem.id });
    } catch (error) {
      console.error('Checkout failed for item:', cartItem.id, error);
    }
  }

  router.push('/checkout');
};
    
    const loading = ref(true);

    onMounted(() => {
    setTimeout(() => {
    loading.value = false; // Simulate loading completion
    }, 2000); // Adjust delay as needed
    });

</script>