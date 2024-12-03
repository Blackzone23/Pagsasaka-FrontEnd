<template>
    <!-- Loading screen and toast message -->
    <Loading v-if="showLoading" class="loading"></Loading>
    <Toast></Toast>
    <div>
        <Market_NavBar/>
        <div class="p-10 w-full h-full">
            <BaseLabel class="text-4xl font-bold">My Profile</BaseLabel>
            <div class="flex items-center space-x-10">
                <!-- Profile Image -->
                <img :src="profileImage" alt="Profile" class="w-32 h-32 rounded-full object-cover border-4 border-white shadow-md"/>

                <!-- User Name -->
                <div>
                    <BaseLabel class="text-xl font-semibold text-gray-800">Norman Cruz</BaseLabel>
                </div>
            </div>
            <div class="w-full mt-8">
                <!-- Tabs Buttons -->
                <div class="flex justify-center border-b border-gray-300 gap-8">
                    <button v-for="tab in tabs" :key="tab" @click="activeTab = tab" :class="['px-6 py-2 text-gray-600 font-medium border-b-2 transition-colors', activeTab === tab ? 'border-green-500 text-green-500': 'border-transparent hover:border-green-500 hover:text-green-500']">
                        {{ tab }}
                    </button>
                </div>

                <!-- Tab Content -->
                <div class="mt-4">
                    <!--My Profile-->
                    <div v-if="activeTab === 'My Profile'" class="tab-content">
                        <div class="flex">
                            <!-- Left Side: Profile Info -->
                            <div class="flex-1">
                                <div>
                                    <BaseLabel class="font-bold text-xl">My Profile</BaseLabel>
                                    <p class="text-sm">Manage and protect your account</p>
                                </div>
                                <div class="text-sm">
                                    <div class="flex items-center space-x-2">
                                        <BaseLabel class="w-32">Name:</BaseLabel>
                                        <span class="mt-3">NormanCruz143</span>
                                    </div>
                                    <div class="flex items-center space-x-2">
                                        <BaseLabel class="w-32">Phone number:</BaseLabel>
                                        <span class="mt-3">09123123123</span>
                                    </div>
                                    <div class="flex items-center space-x-2">
                                        <BaseLabel class="w-32">Email Address:</BaseLabel>
                                        <span class="mt-3">NormanCruz143@gmail.com</span>
                                    </div>
                                    <div class="flex items-center space-x-2">
                                        <BaseLabel class="w-32">Gender:</BaseLabel>
                                        <div class="flex space-x-4">
                                            <BaseRadioButton v-for="option in ['Male', 'Female', 'Others']" :key="option" :name="'gender'" :label="option" :value="option" v-model="tinIdSelected" class="text-sm"/>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <!-- Right Side: Box -->
                            <div class="w-1/4 ml-4 p-4 border rounded-lg shadow-md">
                                <h3 class="font-semibold text-lg mb-2">Payment Methods</h3>
                                <p class="text-sm">You can add additional information here.</p>
                            </div>
                        </div>
                        <div class="mt-4">
                            <button class="rounded-full bg-[#608C54] py-2 w-28 hover:bg-gray-200 text-white">Save</button>
                        </div>
                    </div>

                    <!--My Purchase-->
                    <div v-if="activeTab === 'My Purchase'" class="tab-content">
                        <div class="p-6">
                            <!-- Tabs -->
                            <div class="flex justify-center space-x-4 border-b border-gray-300 bg-[#608C54] rounded-md">
                                <button v-for="tab in purchasetabs" :key="tab" @click="currentTab = tab" :class="[  'px-4 py-2 text-sm font-semibold', currentTab === tab ? 'border-b-2 border-green-600 text-green-700' : 'text-white']">
                                {{ tab }}
                                </button>
                            </div>

                            <!-- Content for each tab -->
                            <div class="mt-6">
                                <!--To Pay-->
                                <div v-if="currentTab === 'To Pay'">
                                    <div class="mt-4 bg-green-100 border border-green-300 rounded-lg p-4">
                                        <div class="flex items-center">
                                            <!-- Image -->
                                            <img src="https://via.placeholder.com/80" alt="Product Image" class="w-20 h-20 rounded object-cover border"/>

                                            <!-- Details -->
                                            <div class="ml-4 flex-grow">
                                                <h3 class="text-sm font-semibold">Salad package</h3>
                                                <p class="text-xs text-gray-600">Variants: 500 Grams</p>
                                                <div class="mt-2 flex items-center justify-between">
                                                    <div>
                                                    <p class="text-sm font-medium text-gray-700">Seller <span class="font-bold">Janromil Dela Cruz</span></p>
                                                    </div>
                                                    <div class="flex items-center gap-3">
                                                        <h1 class="text-sm">Order Total:</h1>
                                                        <p class="text-sm font-semibold text-green-700">₱820</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <!-- Order Status -->
                                        <div>
                                            <!-- Order Status Section -->
                                            <div class="mt-4 flex items-center justify-between">
                                                <span class="text-sm font-medium text-gray-500">Pending</span>
                                                <div class="flex space-x-2">
                                                    <button class="px-3 py-1 text-sm font-semibold text-green-700 border border-green-600 rounded hover:bg-green-50">
                                                    Contact Seller
                                                    </button>
                                                    <button class="px-3 py-1 text-sm font-semibold text-red-600 border border-red-500 rounded hover:bg-red-50" @click="openshowCancelModalModal">
                                                    Cancel Order
                                                    </button>
                                                </div>
                                            </div>

                                            <!-- Cancel Order Modal -->
                                            <div v-if="isshowCancelModal" class="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
                                                <div class="bg-white p-7 rounded-lg shadow-lg w-[500px] items-center">
                                                    <div class="text-end">
                                                        <button @click="closeshowCancelModalModal" class="text-gray-400 hover:text-gray-600">
                                                            <Icon icon="icon-park-solid:close-one" width="20" height="20" />
                                                        </button>
                                                    </div>
                                                    <div class="flex justify-center items-center mb-4">   
                                                        <h3 class="text-xl font-semibold ml-4">Select Cancellation Reason</h3>
                                                    </div>

                                                    <!-- Notification Section -->
                                                    <div class="mt-4 p-4 bg-[#608C54] rounded-md flex flex-col items-center text-center">
                                                        <!-- Bell Icon -->
                                                        <Icon icon="noto:bell" width="50" height="50" class="mb-4" />
                                                        <!-- Text -->
                                                        <p class="text-sm text-white"> Please select a cancellation reason. Once your order is successfully canceled, your refund will be processed immediately and may take 10 to 45 minutes to reflect in your account.</p>
                                                    </div>
                                                    <div class="text-sm mt-3">
                                                        <BaseRadioButton v-for="option in ['Need to change delivery address', 'Seller is not responsive to my inquries', 'Others /Change of mind']" :key="option" :name="'tinIdOption'" :label="option" :value="option" v-model="tinIdSelected"></BaseRadioButton>
                                                    </div>
                                                    <!-- Buttons -->
                                                    <div class="mt-4 flex justify-end space-x-2">
                                                        <button @click="closeshowCancelModalModal" class="px-4 py-2 text-sm font-semibold text-gray-700 border border-gray-300 rounded hover:bg-gray-100">
                                                            Close
                                                        </button>
                                                        <button @click="Save" class="px-4 py-2 text-sm font-semibold text-red-700 bg-red-100 border border-red-500 rounded hover:bg-red-200" >
                                                            Confirm
                                                        </button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <!--To Ship-->
                                <div v-else-if="currentTab === 'To Ship'">
                                    <div class="mt-4 bg-green-100 border border-green-300 rounded-lg p-4">
                                        <div class="flex items-center">
                                            <!-- Image -->
                                            <img src="https://via.placeholder.com/80" alt="Product Image" class="w-20 h-20 rounded object-cover border"/>

                                            <!-- Details -->
                                            <div class="ml-4 flex-grow">
                                                <h3 class="text-sm font-semibold">Salad package</h3>
                                                <p class="text-xs text-gray-600">Variants: 500 Grams</p>
                                                <div class="mt-2 flex items-center justify-between">
                                                    <div>
                                                    <p class="text-sm font-medium text-gray-700">Seller <span class="font-bold">Janromil Dela Cruz</span></p>
                                                    </div>
                                                    <div class="flex items-center gap-3">
                                                        <h1 class="text-sm">Order Total:</h1>
                                                        <p class="text-sm font-semibold text-green-700">₱820</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <!-- Order Status -->
                                        <div>
                                            <!-- Order Status Section -->
                                            <div class="mt-4 flex items-center justify-between">
                                               <div class="flex items-center gap-3">
                                                <h1 class="text-sm">Seller Preparing your Goods:</h1>
                                                <span class="text-sm font-medium text-gray-500">Pending</span>
                                               </div>
                                                <div class="flex space-x-2">
                                                    <button class="px-3 py-1 text-sm font-semibold text-green-700 border border-green-600 rounded hover:bg-green-50">
                                                    Contact Seller
                                                    </button>
                                                    <button class="px-3 py-1 text-sm font-semibold text-red-600 border border-red-500 rounded hover:bg-red-50" @click="openshowCancelModalModal">
                                                    Cancel Order
                                                    </button>
                                                </div>
                                            </div>

                                            <!-- Cancel Order Modal -->
                                            <div v-if="isshowCancelModal" class="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
                                                <div class="bg-white p-7 rounded-lg shadow-lg w-[500px] items-center">
                                                    <div class="text-end">
                                                        <button @click="closeshowCancelModalModal" class="text-gray-400 hover:text-gray-600">
                                                            <Icon icon="icon-park-solid:close-one" width="20" height="20" />
                                                        </button>
                                                    </div>
                                                    <div class="flex justify-center items-center mb-4">   
                                                        <h3 class="text-xl font-semibold ml-4">Select Cancellation Reason</h3>
                                                    </div>

                                                    <!-- Notification Section -->
                                                    <div class="mt-4 p-4 bg-[#608C54] rounded-md flex flex-col items-center text-center">
                                                        <!-- Bell Icon -->
                                                        <Icon icon="noto:bell" width="50" height="50" class="mb-4" />
                                                        <!-- Text -->
                                                        <p class="text-sm text-white"> Please select a cancellation reason. Once your order is successfully canceled, your refund will be processed immediately and may take 10 to 45 minutes to reflect in your account.</p>
                                                    </div>
                                                    <div class="text-sm mt-3">
                                                        <BaseRadioButton v-for="option in ['Need to change delivery address', 'Seller is not responsive to my inquries', 'Others /Change of mind']" :key="option" :name="'tinIdOption'" :label="option" :value="option" v-model="tinIdSelected"></BaseRadioButton>
                                                    </div>
                                                    <!-- Buttons -->
                                                    <div class="mt-4 flex justify-end space-x-2">
                                                        <button @click="closeshowCancelModalModal" class="px-4 py-2 text-sm font-semibold text-gray-700 border border-gray-300 rounded hover:bg-gray-100">
                                                            Close
                                                        </button>
                                                        <button @click="Save" class="px-4 py-2 text-sm font-semibold text-red-700 bg-red-100 border border-red-500 rounded hover:bg-red-200" >
                                                            Confirm
                                                        </button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <!--To Receive-->
                                <div v-else-if="currentTab === 'To Receive'">
                                    <div class="mt-4 bg-green-100 border border-green-300 rounded-lg p-4">
                                        <div class="flex items-center">
                                            <!-- Image -->
                                            <img src="https://via.placeholder.com/80" alt="Product Image" class="w-20 h-20 rounded object-cover border"/>

                                            <!-- Details -->
                                            <div class="ml-4 flex-grow">
                                                <h3 class="text-sm font-semibold">Salad package</h3>
                                                <p class="text-xs text-gray-600">Variants: 500 Grams</p>
                                                <div class="mt-2 flex items-center justify-between">
                                                    <div>
                                                    <p class="text-sm font-medium text-gray-700">Seller <span class="font-bold">Janromil Dela Cruz</span></p>
                                                    </div>
                                                    <p class="text-sm font-semibold text-green-700">₱820</p>
                                                </div>
                                            </div>
                                        </div>

                                        <!-- Order Status -->
                                        <div class="mt-4 flex items-center justify-between">
                                            <div class="flex items-center gap-3">
                                                <h1 class="text-sm">Seller Has shipped your goods:</h1>
                                                <span class="text-sm font-medium text-gray-500">To Receive</span>
                                            </div>
                                            <div class="flex space-x-2">
                                                <button class="px-3 py-1 text-sm font-semibold text-green-700 border border-green-600 rounded hover:bg-green-50">
                                                    Contact Seller
                                                </button>
                                                <button class="px-3 py-1 text-sm font-semibold text-red-600 border border-red-500 rounded hover:bg-red-50">
                                                    Track Order
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <!--Completed-->
                                <div v-else-if="currentTab === 'Completed'">
                                <p class="text-sm text-gray-600">You have completed your orders!</p>
                                </div>

                                <!--Cancelled-->
                                <div v-else-if="currentTab === 'Cancelled'">
                                <p class="text-sm text-gray-600">These are the cancelled orders.</p>
                                </div>

                                <!--Return Refund-->
                                <div v-else-if="currentTab === 'Return Refund'">
                                <p class="text-sm text-gray-600">Check your return and refund items here.</p>
                                </div>
                            </div>

                            <!-- Pagination (Optional, if applicable to all tabs) -->
                            <div v-if="hasPagination(currentTab)" class="mt-6 flex justify-center items-center space-x-2">
                                <button class="px-3 py-1 text-sm font-medium text-gray-500 border border-gray-300 rounded hover:bg-gray-100" :disabled="currentPage === 1" @click="prevPage">
                                     Previous
                                </button>
                                <button v-for="page in totalPages" :key="page" @click="currentPage = page" :class="[  'px-3 py-1 text-sm font-medium rounded', currentPage === page ? 'bg-green-600 text-white' : 'text-gray-600 border border-gray-300 hover:bg-gray-100']" >
                                     {{ page }}
                                </button>
                                <button class="px-3 py-1 text-sm font-medium text-gray-500 border border-gray-300 rounded hover:bg-gray-100" :disabled="currentPage === totalPages" @click="nextPage">
                                     Next
                                </button>
                            </div>
                        </div>
                    </div>

                    <!--Addresses-->
                    <div v-if="activeTab === 'Addresses'" class="tab-content">
                        <div>
                            <!-- Add New Address Button -->
                            <button type="button" class="flex items-center justify-center text-white rounded-md bg-[#608C54] py-2 w-52 hover:bg-gray-700 gap-2" @click="openModal" >
                                <Icon icon="lets-icons:add-duotone" width="24" height="24"  style="color: #fefffe" />Add new address
                            </button>

                            <!--Add Modal -->
                            <div v-if="isAddAddressModalOpen" class="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
                                <div class="bg-white rounded-lg shadow-lg max-w-lg w-full p-6">
                                    <!-- Modal Header -->
                                    <div class="flex justify-between items-center mb-4">
                                    <h3 class="text-xl font-semibold">Add Address</h3>
                                    <button @click="closeModal" class="text-gray-400 hover:text-gray-600">
                                        <Icon icon="icon-park-solid:close-one" width="20" height="20" />
                                    </button>
                                    </div>

                                    <!-- Modal Content -->
                                    <form>
                                        <!-- Division -->
                                        <div class="mb-4">
                                            <BaseLabel>Full Name:</BaseLabel>
                                            <BaseInputField v-model="address.fullname" />
                                            <BaseError></BaseError>
                                        </div>

                                        <!-- Note -->
                                        <div class="mb-4">
                                            <BaseLabel>Phone Number:</BaseLabel>
                                            <BaseInputField v-model="address.phone_number" />
                                            <BaseError></BaseError>
                                        </div>

                                        <div class="mb-4">
                                            <BaseLabel>Region,Province,City,Barangay:</BaseLabel>
                                            <BaseInputField v-model="address.fulladdress" />
                                            <BaseError></BaseError>
                                        </div>

                                        <div class="mb-4">
                                            <BaseLabel>Postal code:</BaseLabel>
                                            <BaseInputField v-model="address.postalcode" />
                                            <BaseError></BaseError>
                                        </div>

                                        <div class="mb-4">
                                            <BaseRadioButton v-for="option in ['Set as default']" :key="option" :name="'set'" :label="option" :value="option"  v-model="address.isDefault" class="text-sm"/>
                                        </div>
                                        <!-- Save Button -->
                                        <div class="flex justify-end space-x-2">
                                            <button type="button" class="px-4 py-2 bg-gray-200 rounded-md text-gray-700 hover:bg-gray-300" @click="closeModal" >Cancel </button>
                                            <button type="submit" class="px-6 py-2 bg-[#608C54] text-white rounded-md hover:bg-[#4e7143]">Save</button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                        <div>
                            <!--Update Modal -->
                            <div v-if="isUpdateAddressModalOpen" class="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
                                <div class="bg-white rounded-lg shadow-lg max-w-lg w-full p-6">
                                    <!-- Modal Header -->
                                    <div class="flex justify-between items-center mb-4">
                                    <h3 class="text-xl font-semibold">Update Address</h3>
                                    <button @click="closeUpdateAddressPowerModal" class="text-gray-400 hover:text-gray-600">
                                        <Icon icon="icon-park-solid:close-one" width="20" height="20" />
                                    </button>
                                    </div>

                                    <!-- Modal Content -->
                                    <form>
                                        <!-- Division -->
                                        <div class="mb-4">
                                            <BaseLabel>Full Name:</BaseLabel>
                                            <BaseInputField v-model="updateaddress.fullname" />
                                            <BaseError></BaseError>
                                        </div>

                                        <!-- Note -->
                                        <div class="mb-4">
                                            <BaseLabel>Phone Number:</BaseLabel>
                                            <BaseInputField v-model="updateaddress.phone_number" />
                                            <BaseError></BaseError>
                                        </div>

                                        <div class="mb-4">
                                            <BaseLabel>Region,Province,City,Barangay:</BaseLabel>
                                            <BaseInputField v-model="updateaddress.fulladdress" />
                                            <BaseError></BaseError>
                                        </div>

                                        <div class="mb-4">
                                            <BaseLabel>Postal code:</BaseLabel>
                                            <BaseInputField v-model="updateaddress.postalcode" />
                                            <BaseError></BaseError>
                                        </div>

                                        <div class="mb-4">
                                            <BaseRadioButton v-for="option in ['Set as default']" :key="option" :name="'set'" :label="option" :value="option"  v-model="address.isDefault" class="text-sm"/>
                                        </div>
                                        <!-- Save Button -->
                                        <div class="flex justify-end space-x-2">
                                            <button type="button" class="px-4 py-2 bg-gray-200 rounded-md text-gray-700 hover:bg-gray-300" @click="closeUpdateAddressPowerModal" >Cancel </button>
                                            <button type="submit" class="px-6 py-2 bg-[#608C54] text-white rounded-md hover:bg-[#4e7143]">Save</button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                        <!-- Save Address-->
                        <div class="mt-6 space-y-4">
                            <h3 class="text-lg font-semibold">Saved Addresses</h3>
                            <ul>
                                <li v-for="(item, index) in addresses" :key="index" class="border-b py-4">
                                <p>
                                    <span class="font-semibold text-[#608C54]">Full Name:</span> {{ item.fullname }}
                                </p>
                                <p>
                                    <span class="font-semibold text-[#608C54]">Phone Number:</span> {{ item.phone_number }}
                                </p>
                                <p>
                                    <span class="font-semibold text-[#608C54]">Address:</span> {{ item.fulladdress }}
                                </p>
                                <p>
                                    <span class="font-semibold text-[#608C54]">Postal Code:</span> {{ item.postalcode }}
                                </p>
                                <p v-if="item.isDefault">
                                    <span class="font-semibold text-[#608C54]">Status:</span> Default
                                </p>
                                <div class="flex space-x-2 mt-2 justify-end">
                                     <!-- Edit Button -->
                                     <button class="text-blue-500 hover:text-blue-700" @click="openUpdateAddressModal(index.id)">
                                        <Icon icon="bi:pencil-square" width="20" height="20"  style="color: #2543bf" />
                                    </button>

                                    <!-- Delete Button -->
                                    <button class="text-red-500 hover:text-red-700" @click="openDeleteProductModal(index.id)">
                                        <Icon icon="mi:delete" width="24" height="24"  style="color: #ed0f1c" />
                                    </button>
                                </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                     <!--Change Password-->
                    <div v-if="activeTab === 'Change Password'" class="tab-content">
                        <div class="flex items-center justify-center">
                            <div class="w-96 h-80 border rounded-lg shadow-lg flex flex-col justify-center relative">
                                <!-- Back Button -->
                                <button v-if="currentStep !== 'verifyIdentity'" @click="goBack" class="absolute top-2 left-2 flex items-center text-sm text-gray-600 hover:text-gray-800">
                                    <Icon icon="mdi:arrow-left" width="20" height="20" />
                                    <span class="ml-1">Back</span>
                                </button>

                                <!-- Step: Verify Identity -->
                                <div v-if="currentStep === 'verifyIdentity'" class="flex flex-col items-center">
                                    <div class="justify-center flex">
                                    <Icon icon="mdi:shield-check-outline" width="100" height="100" style="color: #608C54" />
                                    </div>
                                    <p class="text-sm text-center mt-4">To protect your account security, please verify your identity with one of the methods below.</p>
                                    <div class="justify-center flex mt-3">
                                    <button class="bg-[#608C54] text-white flex items-center space-x-2 py-2 px-8 rounded-md text-sm hover:bg-gray-300" @click="goToStep('verifyPassword')">
                                        <Icon icon="si:lock-line" width="24" height="24" style="color: #eae2ed" />
                                        Verify by Password
                                    </button>
                                    </div>
                                </div>

                                <!-- Step: Verify Password -->
                                <div v-if="currentStep === 'verifyPassword'" class="flex flex-col items-center">
                                    <h1 class="text-lg font-semibold mb-4">Enter your Pagsasaka password</h1>
                                    <div class="relative">
                                    <BaseInputField :type="isPasswordVisible ? 'text' : 'password'" v-model="password" placeholder="Enter your password" class="pr-10" />
                                    <button type="button" @click="togglePasswordVisibility" class="absolute inset-y-0 right-0 flex items-center pr-2">
                                        <Icon :icon="isPasswordVisible ? 'mdi:eye' : 'mdi:eye-off'" class="text-gray-500" />
                                    </button>
                                    </div>
                                    <div class="justify-center flex mt-5">
                                    <button class="bg-[#608C54] text-white flex items-center space-x-2 py-2 px-8 rounded-md text-sm hover:bg-gray-300" @click="goToStep('changePassword')">
                                        <Icon icon="si:lock-line" width="24" height="24" style="color: #eae2ed" /> Verify
                                    </button>
                                    </div>
                                </div>

                                <!-- Step: Change Password -->
                                <div v-if="currentStep === 'changePassword'" class="flex flex-col items-center">
                                    <h1 class="text-lg font-semibold">Change your Password</h1>
                                    <div class="relative">
                                        <BaseLabel>New Password:</BaseLabel>
                                        <BaseInputField :type="isPasswordVisible ? 'text' : 'password'" v-model="newPassword" placeholder="Enter new password" class="pr-10" />
                                        <button type="button" @click="togglePasswordVisibility" class="absolute inset-y-0 right-0 flex items-center pr-2 mt-14">
                                            <Icon :icon="isPasswordVisible ? 'mdi:eye' : 'mdi:eye-off'" class="text-gray-500" />
                                        </button>
                                    </div>
                                    <div class="relative mt-3">
                                        <BaseLabel>Confirm your new password</BaseLabel>
                                        <BaseInputField :type="isPasswordVisible ? 'text' : 'password'" v-model="newPassword" placeholder="Enter new password" class="pr-10" />
                                        <button type="button" @click="togglePasswordVisibility" class="absolute inset-y-0 right-0 flex items-center pr-2 mt-14">
                                            <Icon :icon="isPasswordVisible ? 'mdi:eye' : 'mdi:eye-off'" class="text-gray-500" />
                                        </button>
                                    </div>
                                    <div class="justify-center flex mt-4 items-center">
                                        <button class="bg-[#608C54] text-white flex items-center space-x-2 py-2 px-8 rounded-md text-sm hover:bg-gray-300" @click="submitPasswordChange">
                                            <Icon icon="si:lock-line" width="24" height="24" style="color: #eae2ed" /> Confirm
                                        </button>
                                    </div>
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
import Market_NavBar from '@/components/Navbar/Market_NavBar.vue';
import BaseLabel from '@/components/Input-Fields/BaseLabel.vue';
import BaseInputField from '@/components/Input-Fields/BaseInputField.vue';
import BaseRadioButton from '@/components/Input-Fields/BaseRadioButton.vue';
import BaseError from '@/components/Input-Fields/BaseError.vue';
import Footer from '@/components/Input-Fields/Footer.vue';
import Loading from '@/components/Alerts/Loading.vue';
import Toast from '@/components/Alerts/Toast.vue';
import { reactive, computed, ref } from 'vue';
import { required, email, helpers } from '@vuelidate/validators';
import { Icon } from '@iconify/vue';
import { useRouter } from 'vue-router';
import { useStore } from 'vuex';

const store = useStore();
const router = useRouter();

const activeTab = ref('My Profile'); // Default active tab
const tabs = ref(['My Profile', 'My Purchase','Addresses','Change Password']); // List of tabs

// Reactive states
const address = reactive({
  fullname: "",
  phone_number: "",
  fulladdress:"",
  postalcode:"",
  isDefault: false,
});
const addresses = ref([
{
    fullname: 'John Doe',
    phone_number: '123-456-7890',
    fulladdress: '123 Main St, Springfield, IL, USA',
    postalcode: '62701',
    isDefault: true,
  },
  {
    fullname: 'Jane Smith',
    phone_number: '987-654-3210',
    fulladdress: '456 Elm St, Springfield, IL, USA',
    postalcode: '62702',
    isDefault: false,
  },
  {
    fullname: 'Alice Johnson',
    phone_number: '555-123-4567',
    fulladdress: '789 Oak St, Springfield, IL, USA',
    postalcode: '62703',
    isDefault: false,
  },
]);

// Open the modal
const isAddAddressModalOpen = ref(false);
const openModal = () => {
  isAddAddressModalOpen.value = true;
};

// Close the modal
const closeModal = () => {
  isAddAddressModalOpen.value = false;
};

/******************************************************************
 FUNCTION FOR UPDATE PRODUCT
******************************************************************/
const updateaddress = ref({
  fullname: "",
  phone_number: "",
  fulladdress:"",
  postalcode:"",
  isDefault: false,
});
const isUpdateAddressModalOpen = ref(false);

const openUpdateAddressModal = () => {
    isUpdateAddressModalOpen.value = true;
};

// Function to handle closing modal
function closeUpdateAddressPowerModal() {
    isUpdateAddressModalOpen.value = false;
}

/******************************************************************
 FUNCTION FOR CHANGE PASSWORD
******************************************************************/

// States for the steps
const currentStep = ref('verifyIdentity');
const isPasswordVisible = ref(false);
const password = ref('');
const newPassword = ref('');

// Methods
const goToStep = (step) => {
  currentStep.value = step;
};

const togglePasswordVisibility = () => {
  isPasswordVisible.value = !isPasswordVisible.value;
};

const submitPasswordChange = () => {
  console.log('Password changed to:', newPassword.value);
};

const goBack = () => {
  if (currentStep.value === 'changePassword') {
    currentStep.value = 'verifyPassword';
  } else {
    currentStep.value = 'verifyIdentity';
  }
};
/******************************************************************
 FUNCTION FOR MY PURCHASE TAB
******************************************************************/

const purchasetabs = ["To Pay", "To Ship", "To Receive", "Completed", "Cancelled", "Return Refund"];
const currentTab = ref(purchasetabs[0]); // Default to "To Pay"

const currentPage = ref(1);
const totalPages = 3;

// Pagination logic
function prevPage() {
  if (currentPage.value > 1) currentPage.value--;
}

function nextPage() {
  if (currentPage.value < totalPages) currentPage.value++;
}

// Utility to check if pagination is needed for specific tabs
function hasPagination(tab) {
  return ["To Ship", "To Receive", "Cancelled"].includes(tab);
}
/******************************************************************
 FUNCTION FOR 
******************************************************************/
const isshowCancelModal = ref(false);

const openshowCancelModalModal = () => {
    isshowCancelModal.value = true;
};

// Function to handle closing modal
function closeshowCancelModalModal() {
    isshowCancelModal.value = false;
}

</script>