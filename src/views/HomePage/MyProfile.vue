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
                <div class="overflow-x-auto whitespace-nowrap border-b border-gray-300">
                    <div class="flex gap-4 sm:gap-6 md:gap-8 w-max">
                        <button v-for="tab in tabs" :key="tab" 
                            @click="activeTab = tab" 
                            class="px-4 py-2 sm:px-5 md:px-6 text-gray-600 font-medium border-b-2 transition-colors"
                            :class="activeTab === tab 
                                ? 'border-green-500 text-green-500' 
                                : 'border-transparent hover:border-green-500 hover:text-green-500'">
                            {{ tab }}
                        </button>
                    </div>
                </div>


                <!-- Tab Content -->
                <div class="mt-4">
                    <!--My Profile-->
                    <div v-if="activeTab === 'My Profile'" class="tab-content p-4">
                        <div class="flex flex-col md:flex-row justify-center space-y-4 md:space-y-0 md:space-x-6">
                            <!-- Left Side: Profile Info -->
                            <div class="flex-1">
                                <div class="mb-2 font-bold">
                                    <h1 class="text-xs md:text-sm">Manage and protect your account</h1>
                                </div>
                                <div class="text-sm">
                                    <!-- Name -->
                                    <div class="flex flex-col md:flex-row items-center md:items-start space-y-2 md:space-y-0">
                                        <BaseLabel class="w-full md:w-32 text-sm md:text-base">Name:</BaseLabel>
                                        <div class="flex items-center w-full px-2 py-1">
                                            <BaseInputField v-model="tempValue" class="w-full outline-none"/>
                                            <Icon icon="mdi:pencil" class="text-gray-500 hover:text-blue-500 cursor-pointer ml-2" @click="editField()" />
                                        </div>
                                    </div>

                                    <!-- Phone -->
                                    <div class="flex flex-col md:flex-row items-center md:items-start space-y-2 md:space-y-0">
                                        <BaseLabel class="w-full md:w-32 text-sm md:text-base">Phone number:</BaseLabel>
                                        <div class="flex items-center w-full  px-2 py-1">
                                            <BaseInputField v-model="tempValue" class="w-full outline-none"/>
                                            <Icon icon="mdi:pencil" class="text-gray-500 hover:text-blue-500 cursor-pointer ml-2" @click="editField()" />
                                        </div>
                                    </div>

                                    <!-- Email -->
                                    <div class="flex flex-col md:flex-row items-center md:items-start space-y-2 md:space-y-0">
                                        <BaseLabel class="w-full md:w-32 text-sm md:text-base">Email Address:</BaseLabel>
                                        <div class="flex items-center w-full  px-2 py-1">
                                            <BaseInputField v-model="tempValue" class="w-full outline-none"/>
                                            <Icon icon="mdi:pencil" class="text-gray-500 hover:text-blue-500 cursor-pointer ml-2" @click="editField()" />
                                        </div>
                                    </div>

                                    <!-- Gender -->
                                    <div class="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-2">
                                        <BaseLabel class="w-full md:w-32 text-sm md:text-base">Gender:</BaseLabel>
                                        <div class="flex space-x-2 md:space-x-4 mt-1">
                                            <BaseRadioButton v-for="option in ['Male', 'Female', 'Others']" :key="option" :name="'gender'" :label="option" :value="option" v-model="profile.gender" class="text-xs md:text-sm"/>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="mt-4 flex justify-center md:justify-start">
                            <button class="rounded-full bg-[#608C54] py-2 px-6 w-32 md:w-28 hover:bg-gray-200 text-white">Save</button>
                        </div>
                    </div>


                    <!--My Purchase-->
                    <div v-if="activeTab === 'My Purchase'" class="tab-content">
                        <div class="p-4">
                            <!-- Floating Chat Button -->
                            <button @click="openshowChatModal" class="bg-yellow-100 border-2 border-gray-300 rounded-full p-3 flex items-center justify-center fixed bottom-4 right-4 shadow-md hover:bg-yellow-300">
                            <Icon icon="tabler:message" width="28" height="28" style="color: #608C54" />
                            </button>
                        </div>

                        <!-- Expanded Floating Chat Modal -->
                        <div v-if="isshowChatModal" class="fixed bottom-4 right-4 2xl:w-[900px] 2xs:w-[500px] 2xl:h-[85vh] 2xs:h-[65vh] bg-white rounded-lg shadow-lg flex flex-col border z-50">
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

                                    <div class="mt-3 flex-1 overflow-auto ">
                                        <div v-for="(chat, index) in chats" :key="index" class="flex items-center p-3 border-b cursor-pointer hover:bg-gray-100 transition duration-200" @click="selectChat(chat)">
                                            <img :src="chat.avatar || '/default-avatar.png'" class="w-12 h-12 rounded-full border mr-3" alt="Avatar" />
                                        <div class="flex-1">
                                            <span class=" font-semibold">{{ chat.name }}</span>
                                            <p class="text-xs text-gray-500 truncate">{{ chat.message }}</p>
                                        </div>
                                            <span v-if="chat.unread" class="text-xs bg-red-500 text-white px-2 py-1 rounded-full">
                                            {{ chat.unread }}
                                            </span>
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
                                    <span>{{ selectedChat.name }}</span>
                                    <button class="text-gray-600">&#8942;</button>
                                    </div>

                                    <!-- Messages Area -->
                                    <div class="flex-1 bg-gray-50 p-4 overflow-auto space-y-4 2xl:text-sm 2xs:text-sm">
                                    <div v-for="(message, index) in chatMessages" :key="index"  class="flex items-start space-x-3"  :class="{'justify-end': message.sender === 'You', 'justify-start': message.sender !== 'You'}">

                                        <!-- Avatar (Only for others' messages) -->
                                        <div v-if="message.sender !== 'You'" class="w-8 h-8 rounded-full bg-gray-300"></div>
                                    
                                        <div class="p-3 rounded-lg shadow-md w-auto max-w-xs" :class="{'bg-green-500 text-white': message.sender === 'You', 'bg-gray-200 text-black': message.sender !== 'You'}">
                                        <p class="text-sm font-bold" :class="{'text-white': message.sender === 'You', 'text-green-600': message.sender !== 'You'}">
                                        {{ message.sender }}
                                        </p>
                                        <p class="text-xs">
                                        {{ message.text }}
                                        </p>
                                        <p class="text-xs mt-1 text-black">
                                        {{ message.time }}
                                        </p>
                                        </div>

                                        <!-- Avatar Placeholder for Sent Messages (Align Right) -->
                                        <div v-if="message.sender === 'You'" class="w-8 h-8 rounded-full bg-gray-300"></div>
                                    </div>
                                    </div>

                                    <!-- Input Area -->
                                    <div class="p-4 border-t bg-white flex items-center">
                                    <!-- Upload Image Icon on the Left -->
                                    <label class="cursor-pointer flex items-center space-x-2 text-gray-600 hover:text-gray-800 mr-2">
                                    <!-- <Icon icon="ep:picture-filled" width="20" height="20" style="color: #747272" /> -->
                                    <!-- <input type="file" class="hidden" @change="uploadImage" /> -->
                                    </label>

                                    <!-- Message Input -->
                                    <input v-model="newMessage" type="text" placeholder="Type a message here" class="flex-1 p-2 border rounded-md text-sm" @keyup.enter="sendMessage" />

                                    <!-- Send Button -->
                                    <button class="ml-1 bg-green-600 text-white px-4 py-2 rounded-md transition duration-200 hover:bg-green-700" @click="sendMessage">
                                    Send
                                    </button>
                                    </div>
                                </div>
                                </div>
                            </div>
                        </div>
                        
                        <div class="p-6">
                           <!-- Scrollable Tabs -->
                            <div class="overflow-x-auto whitespace-nowrap border-b border-gray-300 bg-[#608C54] rounded-md p-2">
                                <div class="flex space-x-4 w-max">
                                    <button v-for="tab in purchasetabs" :key="tab"
                                        @click="currentTab = tab"
                                        class="px-4 py-2 text-sm font-semibold"
                                        :class="[currentTab === tab ? 'border-b-2 border-green-600 text-green-700' : 'text-white']">
                                        {{ tab }}
                                    </button>
                                </div>
                            </div>


                            <!-- Content for each tab -->
                            <div class="mt-6">
                                <!--To Pay-->
                                <div v-if="currentTab === 'To Pay'">
                                    <div class="mt-4 bg-green-100 border border-green-300 rounded-lg p-4">
                                        <div class="flex flex-wrap md:flex-nowrap items-center">
                                            <!-- Image -->
                                            <img src="https://via.placeholder.com/80" alt="Product Image"
                                                class="w-16 h-16 sm:w-20 sm:h-20 2xl:w-24 2xl:h-24 rounded object-cover border" />

                                            <!-- Details -->
                                            <div class="ml-3 sm:ml-4 flex-grow">
                                                <h3 class="text-xs sm:text-sm 2xl:text-lg font-semibold">Salad package</h3>
                                                <p class="text-[10px] sm:text-xs 2xl:text-sm text-gray-600">Variants: 500 Grams</p>
                                                <div class="mt-2 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                                                    <p class="text-xs sm:text-sm 2xl:text-base font-medium text-gray-700">
                                                        Seller: <span class="font-bold">Janromil Dela Cruz</span>
                                                    </p>
                                                    <div class="flex items-center gap-2 sm:gap-3">
                                                        <h1 class="text-xs sm:text-sm 2xl:text-base">Order Total:</h1>
                                                        <p class="text-xs sm:text-sm 2xl:text-lg font-semibold text-green-700">₱820</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <!-- Order Status -->
                                        <div>
                                            <div class="mt-4 flex flex-col sm:flex-row sm:justify-between gap-2 sm:gap-4">
                                                <div class="flex items-center gap-2 sm:gap-3">
                                                    <span class="text-xs sm:text-sm 2xl:text-base font-medium text-gray-500">Pending</span>
                                                </div>
                                                <div class="flex space-x-2">
                                                    <button class="px-3 py-1 text-xs sm:text-sm 2xl:text-base font-semibold text-green-700 border border-green-600 rounded hover:bg-green-50" @click="openshowChatModal">
                                                        Contact Seller
                                                    </button>
                                                    <button class="px-3 py-1 text-xs sm:text-sm 2xl:text-base font-semibold text-red-600 border border-red-500 rounded hover:bg-red-50" @click="openshowCancelModal">
                                                        Cancel Order
                                                    </button>
                                                </div>
                                            </div>
                                            <!-- Cancel Order Modal -->
                                            <div v-if="isshowCancelModal" class="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
                                                <div class="bg-white p-5 md:p-7 rounded-lg shadow-lg w-full max-w-[90%] md:max-w-[500px]">
                                                    <div class="text-end">
                                                        <button @click="closeshowCancelModal" class="text-gray-400 hover:text-gray-600">
                                                            <Icon icon="icon-park-solid:close-one" width="20" height="20" />
                                                        </button>
                                                    </div>
                                                    <h3 class="text-lg md:text-xl font-semibold text-center mb-4">Select Cancellation Reason</h3>

                                                    <!-- Notification Section -->
                                                    <div class="mt-4 p-4 bg-[#608C54] rounded-md flex flex-col items-center text-center">
                                                        <Icon icon="noto:bell" width="50" height="50" class="mb-4" />
                                                        <p class="text-sm md:text-base text-white">
                                                            Please select a cancellation reason. Once your order is successfully canceled, your refund will be processed immediately and may take 10 to 45 minutes to reflect in your account.
                                                        </p>
                                                    </div>

                                                    <div class="text-sm mt-3">
                                                        <BaseRadioButton v-for="option in ['Need to change delivery address', 'Seller is not responsive to my inquiries', 'Others / Change of mind']"
                                                            :key="option" :name="'tinIdOption'" :label="option" :value="option" v-model="tinIdSelected">
                                                        </BaseRadioButton>
                                                    </div>

                                                    <!-- Buttons -->
                                                    <div class="mt-4 flex justify-end space-x-2">
                                                        <button @click="closeshowCancelModal"
                                                            class="px-4 py-2 text-sm font-semibold text-gray-700 border border-gray-300 rounded hover:bg-gray-100">
                                                            Close
                                                        </button>
                                                        <button @click="Save"
                                                            class="px-4 py-2 text-sm font-semibold text-red-700 bg-red-100 border border-red-500 rounded hover:bg-red-200">
                                                            Confirm
                                                        </button>
                                                    </div>
                                                </div>
                                            </div>

                                            <!-- Confirmation Modal -->
                                            <div v-if="isConfirmationModalVisible" class="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
                                                <div class="bg-white p-5 md:p-7 rounded-lg shadow-lg w-full max-w-[90%] md:max-w-[400px]">
                                                    <div class="text-end">
                                                        <button @click="closeConfirmationModal" class="text-gray-400 hover:text-gray-600">
                                                            <Icon icon="icon-park-solid:close-one" width="20" height="20" />
                                                        </button>
                                                    </div>
                                                    <div class="border rounded-md p-3 shadow">
                                                        <h2 class="text-center text-lg font-semibold">Refund Details</h2>
                                                    </div>
                                                    <div class="mt-4 border rounded-md p-3 shadow space-y-4 text-xs md:text-sm">
                                                        <div class="flex items-center gap-3">
                                                            <img src="https://via.placeholder.com/50" alt="Product" class="w-12 h-12 rounded-md">
                                                            <div>
                                                                <p class="font-semibold">Banana</p>
                                                                <p class="text-gray-500">Variant: Kg</p>
                                                            </div>
                                                            <p class="ml-auto font-semibold">₱820</p>
                                                        </div>

                                                        <!-- Refund Details -->
                                                        <div class="mt-3 space-y-2">
                                                            <p><span class="font-semibold">Refund Amount:</span> ₱820</p>
                                                            <p><span class="font-semibold">Refund to:</span> GCASH</p>
                                                            <p><span class="font-semibold">Request by:</span> Buyer</p>
                                                            <p><span class="font-semibold">Request at:</span> 02-31-2024 13:30</p>
                                                            <p class="flex items-center">
                                                                <span class="font-semibold">Request ID:</span>
                                                                <span class="ml-2">27693649M26485</span>
                                                                <button @click="copyRequestId" class="ml-2 text-blue-600 font-semibold text-xs">COPY</button>
                                                            </p>
                                                            <p><span class="font-semibold">Reason:</span> Others / Change of mind</p>
                                                        </div>
                                                    </div>
                                                    <!-- Button -->
                                                    <div class="mt-4 flex justify-center">
                                                        <button @click="closeConfirmationModal"
                                                            class="px-5 py-2 text-sm font-semibold text-white bg-green-600 rounded hover:bg-green-700">
                                                            Okay
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
                                        <div class="flex flex-wrap md:flex-nowrap items-center">
                                            <!-- Image -->
                                            <img src="https://via.placeholder.com/80" alt="Product Image"
                                                class="w-16 h-16 sm:w-20 sm:h-20 2xl:w-24 2xl:h-24 rounded object-cover border" />

                                            <!-- Details -->
                                            <div class="ml-3 sm:ml-4 flex-grow">
                                                <h3 class="text-xs sm:text-sm 2xl:text-lg font-semibold">Salad package</h3>
                                                <p class="text-[10px] sm:text-xs 2xl:text-sm text-gray-600">Variants: 500 Grams</p>
                                                <div class="mt-2 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                                                    <p class="text-xs sm:text-sm 2xl:text-base font-medium text-gray-700">
                                                        Seller: <span class="font-bold">Janromil Dela Cruz</span>
                                                    </p>
                                                    <div class="flex items-center gap-2 sm:gap-3">
                                                        <h1 class="text-xs sm:text-sm 2xl:text-base">Order Total:</h1>
                                                        <p class="text-xs sm:text-sm 2xl:text-lg font-semibold text-green-700">₱820</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <!-- Order Status -->
                                        <div class="mt-4">
                                            <div class="mt-4 flex flex-col sm:flex-row sm:justify-between gap-2 sm:gap-4">
                                                <div class="flex items-center gap-2 sm:gap-3">
                                                    <h1 class="text-xs sm:text-sm 2xl:text-base">Seller Preparing your Goods:</h1>
                                                    <span class="text-xs sm:text-sm 2xl:text-base font-medium text-gray-500">To Ship</span>
                                                </div>
                                                <div class="flex space-x-2">
                                                    <button class="px-3 py-1 text-xs sm:text-sm 2xl:text-base font-semibold text-green-700 border border-green-600 rounded hover:bg-green-50" @click="openshowChatModal">
                                                        Contact Seller
                                                    </button>
                                                    <button class="px-3 py-1 text-xs sm:text-sm 2xl:text-base font-semibold text-red-600 border border-red-500 rounded hover:bg-red-50" @click="openshowCancelModal">
                                                        Cancel Order
                                                    </button>
                                                </div>
                                            </div>

                                            <!-- Cancel Order Modal -->
                                            <div v-if="isshowCancelModal" class="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 p-4">
                                                <div class="bg-white p-5 rounded-lg shadow-lg w-full max-w-md md:max-w-lg lg:max-w-xl">
                                                    <div class="text-end">
                                                        <button @click="closeshowCancelModal" class="text-gray-400 hover:text-gray-600">
                                                            <Icon icon="icon-park-solid:close-one" width="20" height="20" />
                                                        </button>
                                                    </div>
                                                    <h3 class="text-lg font-semibold text-center">Select Cancellation Reason</h3>

                                                    <!-- Notification Section -->
                                                    <div class="mt-4 p-4 bg-[#608C54] rounded-md text-center text-white">
                                                        <Icon icon="noto:bell" width="50" height="50" class="mb-4" />
                                                        <p class="text-sm">Please select a cancellation reason. Once canceled, your refund will be processed immediately and may take 10 to 45 minutes to reflect in your account.</p>
                                                    </div>

                                                    <div class="text-sm mt-3">
                                                        <BaseRadioButton v-for="option in ['Need to change delivery address', 'Seller is not responsive to my inquiries', 'Others / Change of mind']"
                                                            :key="option" :name="'tinIdOption'" :label="option" :value="option" v-model="tinIdSelected">
                                                        </BaseRadioButton>
                                                    </div>

                                                    <!-- Buttons -->
                                                    <div class="mt-4 flex justify-end space-x-2">
                                                        <button @click="closeshowCancelModal" class="px-4 py-2 text-sm font-semibold text-gray-700 border border-gray-300 rounded hover:bg-gray-100">Close</button>
                                                        <button @click="Save" class="px-4 py-2 text-sm font-semibold text-red-700 bg-red-100 border border-red-500 rounded hover:bg-red-200">Confirm</button>
                                                    </div>
                                                </div>
                                            </div>

                                            <!-- Confirmation Modal -->
                                            <div v-if="isConfirmationModalVisible" class="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 p-4">
                                                <div class="bg-white p-5 rounded-lg shadow-lg w-full max-w-sm md:max-w-md">
                                                    <div class="text-end">
                                                        <button @click="closeConfirmationModal" class="text-gray-400 hover:text-gray-600">
                                                            <Icon icon="icon-park-solid:close-one" width="20" height="20" />
                                                        </button>
                                                    </div>
                                                    <h2 class="text-center text-lg font-semibold">Refund Details</h2>

                                                    <div class="mt-4 border-2 rounded-md p-3 shadow space-y-4">
                                                        <div class="flex items-center gap-3">
                                                            <img src="https://via.placeholder.com/50" alt="Product" class="w-12 h-12 rounded-md">
                                                            <div>
                                                                <p class="font-semibold">Banana</p>
                                                                <p class="text-sm text-gray-500">Variant: Kg</p>
                                                            </div>
                                                            <p class="ml-auto font-semibold">₱820</p>
                                                        </div>
                                                        <div class="text-sm text-gray-600 space-y-2">
                                                            <p><span class="font-semibold">Refund Amount:</span> ₱820</p>
                                                            <p><span class="font-semibold">Refund to:</span> GCASH</p>
                                                            <p><span class="font-semibold">Request by:</span> Buyer</p>
                                                            <p><span class="font-semibold">Request at:</span> 02-31-2024 13:30</p>
                                                            <p class="flex items-center">
                                                                <span class="font-semibold">Request ID:</span>
                                                                <span class="ml-2">27693649M26485</span>
                                                                <button @click="copyRequestId" class="ml-2 text-blue-600 font-semibold text-xs">COPY</button>
                                                            </p>
                                                            <p><span class="font-semibold">Reason:</span> Others / Change of mind</p>
                                                        </div>
                                                    </div>
                                                    <div class="mt-4 flex justify-center">
                                                        <button @click="closeConfirmationModal" class="px-5 py-2 text-sm font-semibold text-white bg-green-600 rounded hover:bg-green-700">Okay</button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>


                                <!--To Receive-->
                                <div v-else-if="currentTab === 'To Receive'">
                                    <div class="mt-4 bg-green-100 border border-green-300 rounded-lg p-4">
                                        <div class="flex flex-wrap md:flex-nowrap items-center">
                                            <!-- Image -->
                                            <img src="https://via.placeholder.com/80" alt="Product Image"
                                                class="w-16 h-16 sm:w-20 sm:h-20 2xl:w-24 2xl:h-24 rounded object-cover border" />

                                            <!-- Details -->
                                            <div class="ml-3 sm:ml-4 flex-grow">
                                                <h3 class="text-xs sm:text-sm 2xl:text-lg font-semibold">Salad package</h3>
                                                <p class="text-[10px] sm:text-xs 2xl:text-sm text-gray-600">Variants: 500 Grams</p>
                                                <div class="mt-2 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                                                    <p class="text-xs sm:text-sm 2xl:text-base font-medium text-gray-700">
                                                        Seller: <span class="font-bold">Janromil Dela Cruz</span>
                                                    </p>
                                                    <div class="flex items-center gap-2 sm:gap-3">
                                                        <h1 class="text-xs sm:text-sm 2xl:text-base">Order Total:</h1>
                                                        <p class="text-xs sm:text-sm 2xl:text-lg font-semibold text-green-700">₱820</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <!-- Order Status Section -->
                                        <div class="mt-4 flex flex-col sm:flex-row sm:justify-between gap-2 sm:gap-4">
                                            <div class="flex items-center gap-2 sm:gap-3">
                                                <h1 class="text-xs sm:text-sm 2xl:text-base">Seller Has shipped your goods:</h1>
                                                <span class="text-xs sm:text-sm 2xl:text-base font-medium text-gray-500">To Receive</span>
                                            </div>
                                            <div class="flex space-x-2">
                                                <button class="px-3 py-1 text-xs sm:text-sm 2xl:text-base font-semibold text-green-700 border border-green-600 rounded hover:bg-green-50" @click="openshowChatModal">
                                                    Contact Seller
                                                </button>
                                                <button class="px-3 py-1 text-xs sm:text-sm 2xl:text-base font-semibold text-red-600 border border-red-500 rounded hover:bg-red-50" @click="openTrackModal">
                                                  Track Order
                                                </button>
                                            </div>
                                        </div>

                                        <div v-if="isshowTrackModal" class="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 p-4">
                                            <div class="bg-white p-7 rounded-lg shadow-lg w-full max-w-4xl flex flex-col md:flex-row relative">
                                                <button @click="closeTrackModal" class="absolute top-2 right-2 text-gray-400 hover:text-gray-600">
                                                    <Icon icon="icon-park-solid:close-one" width="20" height="20" />
                                                </button>

                                                <div class="flex-1 p-6">
                                                    <div class="flex justify-center items-center mb-4">
                                                        <h3 class="text-xl font-semibold ml-4">Tracking Details</h3>
                                                    </div>

                                                    <div class="p-6 bg-white shadow-lg rounded-lg text-sm h-80 overflow-y-auto">
                                                        <div class="flex items-center justify-center mb-6 overflow-x-auto">
                                                            <div class="flex w-full items-center space-x-4">
                                                                <div v-for="(step, index) in steps" :key="index" class="flex items-center">
                                                                    <!-- Step Circle -->
                                                                    <div class="flex flex-col items-center">
                                                                        <div class="w-10 h-10 md:w-14 md:h-14 flex items-center justify-center rounded-full border-2"
                                                                            :class="step.completed ? 'bg-green-300 text-white border-green-500' : 'bg-gray-200 text-gray-500 border-gray-300'">
                                                                            <Icon :icon="step.icon" class="text-lg md:text-xl" />
                                                                        </div>
                                                                        <span class="text-xs text-center mt-2"
                                                                            :class="step.completed ? 'text-green-600' : 'text-gray-400'">
                                                                            {{ step.label }}
                                                                        </span>
                                                                    </div>

                                                                    <!-- Connector Line -->
                                                                    <div v-if="index < steps.length - 1" class="w-12 md:w-20 h-1"
                                                                        :class="steps[index + 1].completed ? 'bg-green-500' : 'bg-gray-300'">
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>

                                                        <div class="grid grid-cols-1 md:grid-cols-2 gap-2">
                                                            <div>
                                                                <ul class="border-l-2 border-gray-300 pl-2">
                                                                    <li v-for="(status, index) in trackingDetails" :key="index" class="mb-4 relative">
                                                                        <span class="absolute -left-3 w-2 h-2 rounded-full" :class="status.completed ? 'bg-green-500' : 'bg-gray-400'"></span>
                                                                        <p class="text-gray-700">{{ status.text }}</p>
                                                                        <p class="text-xs text-gray-500">{{ status.time }}</p>
                                                                    </li>
                                                                </ul>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>

                                                <div class="w-full md:w-1/3 p-4 bg-green-100 rounded-lg flex flex-col items-center">
                                                    <img :src="imageUrl" alt="Product Image" class="rounded-lg mb-4 w-full" />
                                                    <h3 class="text-lg font-semibold">{{ product.name }}</h3>
                                                    <p class="text-gray-600">Variants: {{ product.variant }}</p>
                                                    <p class="text-lg font-bold mt-2">Qty {{ product.quantity }}</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <!--Completed-->
                                <div v-else-if="currentTab === 'Completed'">
                                    <div class="mt-4 bg-green-100 border border-green-300 rounded-lg p-4">
                                        <div class="flex flex-wrap md:flex-nowrap items-center">
                                            <!-- Image -->
                                            <img src="https://via.placeholder.com/80" alt="Product Image"
                                                class="w-16 h-16 sm:w-20 sm:h-20 2xl:w-24 2xl:h-24 rounded object-cover border" />

                                            <!-- Details -->
                                            <div class="ml-3 sm:ml-4 flex-grow">
                                                <h3 class="text-xs sm:text-sm 2xl:text-lg font-semibold">Salad package</h3>
                                                <p class="text-[10px] sm:text-xs 2xl:text-sm text-gray-600">Variants: 500 Grams</p>
                                                <div class="mt-2 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                                                    <p class="text-xs sm:text-sm 2xl:text-base font-medium text-gray-700">
                                                        Seller: <span class="font-bold">Janromil Dela Cruz</span>
                                                    </p>
                                                    <div class="flex items-center gap-2 sm:gap-3">
                                                        <h1 class="text-xs sm:text-sm 2xl:text-base">Order Total:</h1>
                                                        <p class="text-xs sm:text-sm 2xl:text-lg font-semibold text-green-700">₱820</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <!-- Order Status Section -->
                                        <div class="mt-4 flex flex-col sm:flex-row sm:justify-between gap-2 sm:gap-4">
                                            <div class="flex items-center gap-2 sm:gap-3">
                                                <h1 class="text-xs sm:text-sm 2xl:text-base">Parcel has been delivered:</h1>
                                                <span class="text-xs sm:text-sm 2xl:text-base font-medium text-gray-500">Completed</span>
                                            </div>
                                            <div class="flex space-x-2">
                                                <button class="px-8 py-1 text-xs sm:text-sm 2xl:text-base font-semibold text-green-700 border border-green-600 rounded hover:bg-green-50" @click="openRateModal">
                                                    Rate
                                                </button>
                                                <button class="px-3 py-1 text-xs sm:text-sm 2xl:text-base font-semibold text-red-600 border border-red-500 rounded hover:bg-red-50" @click="openRefundModal">
                                                    Request/Refund
                                                </button>
                                            </div>
                                        </div>


                                        <!-- Rate Modal -->
                                        <div v-if="isshowRateModal" class="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 p-4">
                                            <div class="bg-white rounded-lg p-6 w-full max-w-sm sm:max-w-md md:max-w-lg lg:max-w-xl 2xl:max-w-2xl relative">
                                                <button @click="closeRateModal" class="absolute top-3 right-3 text-gray-400 hover:text-gray-600">
                                                    <Icon icon="icon-park-solid:close-one" width="20" height="20" />
                                                </button>

                                                <h2 class="text-lg font-semibold">Rate Products</h2>
                                                <div class="bg-green-700 text-white p-4 rounded-lg flex items-center gap-3 mt-4">
                                                    <img :src="product" alt="Product Image" class="w-12 h-12 sm:w-14 sm:h-14 rounded-md" />
                                                    <div>
                                                        <p class="font-bold">{{ productName }}</p>
                                                        <p class="text-xs sm:text-sm">Variants: {{ productVariant }}</p>
                                                    </div>
                                                </div>
                                                <div class="mt-4 flex items-center space-x-2">
                                                    <p class="font-semibold text-sm">Product Quantity</p>
                                                    <n-rate clearable allow-half />
                                                </div>
                                                <textarea v-model="review"
                                                    class="w-full p-3 mt-3 border rounded-md text-xs sm:text-sm"
                                                    placeholder="Share your thoughts on the product to help other buyers"></textarea>
                                                <button @click="submitReview"
                                                    class="w-full bg-green-700 hover:bg-green-500 text-white py-2 mt-4 rounded-lg font-semibold">
                                                    Submit
                                                </button>
                                            </div>
                                        </div>

                                        <!-- Refund Modal -->
                                        <div v-if="isshowRefundModal" class="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 p-4">
                                            <div class="bg-white p-5 rounded-lg w-full max-w-sm sm:max-w-md md:max-w-lg lg:max-w-2xl 2xl:max-w-3xl h-auto relative flex flex-col md:flex-row gap-6 max-h-[80vh] overflow-y-auto">
                                                <button @click="closeRefundModal" class="absolute top-3 right-2 text-gray-400 hover:text-gray-600">
                                                    <Icon icon="icon-park-solid:close-one" width="20" height="20" />
                                                </button>

                                                <!-- Left Column -->
                                                <div class="w-full md:w-1/2 flex flex-col">
                                                    <div class="flex items-start gap-3">
                                                        <img :src="productImage" alt="Product Image" class="w-16 h-16 sm:w-20 sm:h-20 object-cover rounded" />
                                                        <div>
                                                            <p class="font-semibold text-xs sm:text-sm">{{ productName }}</p>
                                                            <p class="text-xs sm:text-sm text-gray-600">Variants: {{ productVariant }}</p>
                                                        </div>
                                                    </div>

                                                    <hr class="my-2 border-gray-300" />

                                                    <div class="mt-1">
                                                        <BaseLabel class="font-medium text-xs sm:text-sm">*Reason:</BaseLabel>
                                                        <BaseSelectField v-model="reason" class="w-full mt-1 p-2 border rounded text-xs sm:text-sm">
                                                            <BaseOptionField value="">Select Reason</BaseOptionField>
                                                            <BaseOptionField value="damaged">Damaged</BaseOptionField>
                                                            <BaseOptionField value="wrong-item">Wrong Item</BaseOptionField>
                                                        </BaseSelectField>
                                                    </div>

                                                    <textarea v-model="description"
                                                        class="text-xs sm:text-sm w-full mt-1 p-2 border rounded resize-none h-20"
                                                        placeholder="Leave your comment here (optional)"></textarea>

                                                    <hr class="my-2 border-gray-300" />

                                                    <div class="text-xs text-gray-600">
                                                        *Upload a clear photo/video showing the received parcel and product(s)
                                                    </div>

                                                    <input type="file" @change="uploadFile($event, 'photo')" accept="image/*"
                                                        class="w-full mt-3 text-xs sm:text-sm" />
                                                </div>

                                                <!-- Right Column -->
                                                <div class="w-full md:w-1/2 flex flex-col">
                                                    <BaseLabel class="font-medium text-xs sm:text-sm">Solution:</BaseLabel>
                                                    <BaseSelectField v-model="solution" class="w-full mt-1 p-2 border rounded text-xs sm:text-sm">
                                                        <BaseOptionField value="">Type</BaseOptionField>
                                                        <BaseOptionField value="refund">Refund</BaseOptionField>
                                                        <BaseOptionField value="replacement">Replacement</BaseOptionField>
                                                    </BaseSelectField>

                                                    <hr class="my-3 border-gray-300" />

                                                    <BaseLabel class="font-medium text-xs sm:text-sm">Refund Amount:</BaseLabel>
                                                    <p class="text-gray-700 text-xs sm:text-sm">{{ refundAmount }}</p>

                                                    <hr class="my-1 border-gray-300" />

                                                    <BaseLabel class="font-medium text-xs sm:text-sm">Choose return method</BaseLabel>
                                                    <BaseRadioButton v-for="option in ['Pick Up', 'Drop-off']" :key="option"
                                                        :name="'returnOption'" :label="option" :value="option" v-model="returnMethod" />

                                                    <hr class="my-2 border-gray-300" />

                                                    <BaseLabel class="font-medium text-xs sm:text-sm">Payment Method:</BaseLabel>
                                                    <button class="border px-4 py-2 mt-1 text-xs sm:text-sm w-full hover:bg-gray-50">Gcash</button>

                                                    <BaseLabel class="font-medium text-xs sm:text-sm">Email address</BaseLabel>
                                                    <BaseInputField type="text" v-model="emailaddress" class="w-full mt-1 p-2 border rounded text-xs sm:text-sm" />

                                                    <button @click="submitRefundRequest" class="bg-green-600 text-white border py-2 px-6 rounded mt-3 text-xs sm:text-sm">
                                                        Confirm
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <!--Cancelled-->
                                <div v-else-if="currentTab === 'Cancelled'">
                                    <div class="mt-4 bg-green-100 border border-green-300 rounded-lg p-4">
                                        <div class="flex flex-wrap md:flex-nowrap items-center">
                                            <!-- Image -->
                                            <img src="https://via.placeholder.com/80" alt="Product Image"
                                                class="w-16 h-16 sm:w-20 sm:h-20 2xl:w-24 2xl:h-24 rounded object-cover border" />

                                            <!-- Details -->
                                            <div class="ml-3 sm:ml-4 flex-grow">
                                                <h3 class="text-xs sm:text-sm 2xl:text-lg font-semibold">Salad package</h3>
                                                <p class="text-[10px] sm:text-xs 2xl:text-sm text-gray-600">Variants: 500 Grams</p>
                                                <div class="mt-2 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                                                    <p class="text-xs sm:text-sm 2xl:text-base font-medium text-gray-700">
                                                        Seller: <span class="font-bold">Janromil Dela Cruz</span>
                                                    </p>
                                                    <div class="flex items-center gap-2 sm:gap-3">
                                                        <h1 class="text-xs sm:text-sm 2xl:text-base">Order Total:</h1>
                                                        <p class="text-xs sm:text-sm 2xl:text-lg font-semibold text-green-700">₱820</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <!-- Order Status Section -->
                                        <div class="mt-4 flex flex-col sm:flex-row sm:justify-between gap-2 sm:gap-4">
                                            <div class="flex items-center gap-2 sm:gap-3">
                                                <h1 class="text-xs sm:text-sm 2xl:text-base">Cancelled by You:</h1>
                                                <span class="text-xs sm:text-sm 2xl:text-base font-medium text-gray-500">Cancelled</span>
                                            </div>
                                            <div class="flex space-x-2">
                                                <button class="px-3 py-1 text-xs sm:text-sm 2xl:text-base font-semibold text-green-700 border border-green-600 rounded hover:bg-green-50">
                                                    Buy Again
                                                </button>
                                                <button class="px-3 py-1 text-xs sm:text-sm 2xl:text-base font-semibold text-red-600 border border-red-500 rounded hover:bg-red-50">
                                                    View Cancellation Details
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>


                                <!--Return Refund-->
                                <div v-else-if="currentTab === 'Return Refund'">
                                    <div class="mt-4 bg-green-100 border border-green-300 rounded-lg p-4 hover:bg-gray-100">
                                        <div class="flex flex-wrap md:flex-nowrap items-center">
                                            <!-- Image -->
                                            <img src="https://via.placeholder.com/80" alt="Product Image"
                                                class="w-16 h-16 sm:w-20 sm:h-20 2xl:w-24 2xl:h-24 rounded object-cover border" />

                                            <!-- Details -->
                                            <div class="ml-3 sm:ml-4 flex-grow">
                                                <h3 class="text-xs sm:text-sm 2xl:text-lg font-semibold">Salad package</h3>
                                                <p class="text-[10px] sm:text-xs 2xl:text-sm text-gray-600">Variants: 500 Grams</p>
                                                <div class="mt-2 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                                                    <p class="text-xs sm:text-sm 2xl:text-base font-medium text-gray-700">
                                                        Seller: <span class="font-bold">Janromil Dela Cruz</span>
                                                    </p>
                                                    <div class="flex items-center gap-2 sm:gap-3">
                                                        <h1 class="text-xs sm:text-sm 2xl:text-base">Order Total:</h1>
                                                        <p class="text-xs sm:text-sm 2xl:text-lg font-semibold text-green-700">₱820</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <!-- Order Status Section -->
                                        <div class="mt-4 flex flex-col sm:flex-row sm:justify-between gap-2 sm:gap-4">
                                            <div class="flex items-center gap-2 sm:gap-3">
                                                <h1 class="text-xs sm:text-sm 2xl:text-base">Click here for the status:</h1>
                                                <span class="text-xs sm:text-sm 2xl:text-base font-medium text-gray-500">Return Refund</span>
                                            </div>
                                        </div>
                                    </div>
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
                                    <h1 class="2xl:text-lg 2xs;text-sm font-semibold">Change your Password</h1>
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
import BaseSearchField from '@/components/Input-Fields/BaseSearchField.vue';
import Footer from '@/components/Input-Fields/Footer.vue';
import Loading from '@/components/Alerts/Loading.vue';
import Toast from '@/components/Alerts/Toast.vue';
import { reactive, computed, ref } from 'vue';
import { required, email, helpers } from '@vuelidate/validators';
import { Icon } from '@iconify/vue';
import { useRouter } from 'vue-router';
import { useStore } from 'vuex';
import BaseSelectField from '@/components/Input-Fields/BaseSelectField.vue';
import BaseOptionField from '@/components/Input-Fields/BaseOptionField.vue';

const store = useStore();
const router = useRouter();

const activeTab = ref('My Profile'); // Default active tab
const tabs = ref(['My Profile', 'My Purchase','Addresses','Change Password']); // List of tabs

/******************************************************************
 FUNCTION FOR UPDATE PROFILE
******************************************************************/
const profile = ref({
  name: '',
  phone: '',
  email: '',
  gender: '',
});

const editingField = ref(null); // Track which field is being edited

const editField = (field) => {
  editingField.value = field;
  tempValue.value = profile.value[field]; // Store the current value
};

/******************************************************************
 FUNCTION FOR ADDRESS
******************************************************************/
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
 FUNCTION FOR TRACK YOUR ORDER
******************************************************************/
const steps = ref([
  { label: 'Order Placed', icon: 'mdi:cart', completed: true },
  { label: 'Order Shipped Out', icon: 'mdi:truck', completed: true },
  { label: 'Order Receive', icon: 'mdi:package', completed: true },
  { label: 'Order Complete', icon: 'mdi:check-circle', completed: false }
]);

const trackingDetails = ref([
  { text: 'Order Complete', time: '17 Oct 20:14', completed: true },
  { text: 'Parcel delivered', time: '17 Oct 20:02', completed: true },
  { text: 'Parcel is out for delivery', time: '17 Oct 19:50', completed: true },
  { text: 'Delivery driver has been assigned', time: '17 Oct 19:40', completed: true },
  { text: 'Parcel has arrived at the delivery hub: Majon Delivery Hub', time: '17 Oct 19:14', completed: true },
  { text: 'Parcel has departed from the sorting facility', time: '17 Oct 17:58', completed: true },
  { text: 'Parcel is loaded into truck, to leave sorting center soon', time: '17 Oct 17:36', completed: true },
  { text: 'Parcel has arrived at sorting facility', time: '17 Oct 17:04', completed: true },
  { text: 'Parcel has been received at drop off point: Malolos Warehouse', time: '17 Oct 16:45', completed: true },
  { text: 'Seller is preparing to ship your parcel', time: '17 Oct 16:20', completed: true },
  { text: 'Order is placed', time: '17 Oct 16:14', completed: true }
]);

const product = ref({
  name: 'Salad package',
  variant: '500 Grams',
  quantity: 2
});

const imageUrl = ref('https://via.placeholder.com/300'); // Replace with actual image URL
const isshowTrackModal = ref(false);

const openTrackModal = () => {
    isshowTrackModal.value = true;
};

// Function to handle closing modal
function closeTrackModal() {
    isshowTrackModal.value = false;
}

/******************************************************************
 FUNCTION FOR RATE
******************************************************************/
const isshowRateModal = ref(false);

const openRateModal = () => {
    isshowRateModal.value = true;
};

// Function to handle closing modal
function closeRateModal() {
    isshowRateModal.value = false;
}
/******************************************************************
 FUNCTION FOR REQUEST REFUND
******************************************************************/

const isshowRefundModal = ref(false);

const openRefundModal = () => {
    isshowRefundModal.value = true;
};

// Function to handle closing modal
function closeRefundModal() {
    isshowRefundModal.value = false;
}

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
  return ["To Ship", "To Receive","Completed", "Cancelled","Return Refund"].includes(tab);
}
/******************************************************************
 FUNCTION FOR CANCEL MODAL
******************************************************************/
const isshowCancelModal = ref(false);
const isConfirmationModalVisible = ref(false);

const openshowCancelModal = () => {
    isshowCancelModal.value = true;
};

const closeshowCancelModal = () => {
    isshowCancelModal.value = false;
};

// Function to handle confirmation
const Save = () => {
    isshowCancelModal.value = false;
    isConfirmationModalVisible.value = true; // Show the second modal
};

// Function to close the confirmation modal
const closeConfirmationModal = () => {
    isConfirmationModalVisible.value = false;
};
/******************************************************************
  FUNCTION FOR CHAT
******************************************************************/
const isshowChatModal = ref(false);
const newMessage = ref('');
const selectedChat = ref(null); // Set to null initially

const openshowChatModal = () => {
    isshowChatModal.value = true;
};

const closeshowChatModal = () => {
    isshowChatModal.value = false;
};

const chats = ref([
  { name: 'cpx_mall', message: '[Shop AI Assistant] Hello!', unread: null },
  { name: 'junseven89', message: 'Unsupported message', unread: 2 },
  { name: 'trxph', message: 'Hi, thanks for following!', unread: 21 },
  { name: 'Demasia', message: 'Hello dear friend...', unread: 3 },
  { name: 'sportsclubph', message: 'Hi, thanks for browsing!', unread: 3 },
  { name: 'sportsclubph', message: 'Hi, thanks for browsing!', unread: 3 },
  { name: 'sportsclubph', message: 'Hi, thanks for browsing!', unread: 3 },
  { name: 'sportsclubph', message: 'Hi, thanks for browsing!', unread: 3 },
]);

const chatMessages = ref([]);

const selectChat = (chat) => {
  selectedChat.value = chat;
  chatMessages.value = [
    { sender: chat.name, text: 'Hello, how can I assist you?', time: '10:30 AM' },
    { sender: 'You', text: 'I want to check my order.', time: '10:32 AM' },
  ];
};

const sendMessage = () => {
  if (newMessage.value.trim()) {
    chatMessages.value.push({
      sender: 'You',
      text: newMessage.value,
      time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
    });
    newMessage.value = '';
  }
};

const uploadImage = (event) => {
  const file = event.target.files[0];
  if (file) {
    console.log("Selected file:", file.name);
    // Handle file upload logic here
  }
};

</script>
<style scoped>
.group-hover:scale-110 {
  transform: scale(1.1);
}



</style>