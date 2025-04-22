<template>
    <!-- Loading screen and toast message -->
    <Loading v-if="showLoading" class="loading"></Loading>
    <Toast></Toast>
    <div>
        <Market_NavBar/>
        <div class="p-10 w-full h-full">
            <BaseLabel class="text-4xl font-bold">My Profile</BaseLabel>
            <div class="flex items-center space-x-10">
                <!-- Profile Image Upload -->
                <label class="cursor-pointer relative">
                    <input type="file" accept="image/*" class="hidden" @change="handleImageUpload"/>
                    <img :src="imageData.avatar" alt="Profile" class="w-32 h-32 rounded-full object-cover border-4 border-white shadow-md hover:opacity-80 transition duration-200"/>
                    <!-- Optional overlay icon -->
                    <div class="absolute bottom-0 right-0 bg-white p-1 rounded-full shadow">
                        <Icon icon="ic:twotone-plus" width="24" height="24"  style="color: #9faba4" />
                    </div>
                </label>

                <!-- User Name -->
                <div>
                    <BaseLabel class="text-xl font-semibold text-gray-800">
                        {{ consumerRaw.first_name }} {{ consumerRaw.middle_name }} {{ consumerRaw.last_name }}
                    </BaseLabel>
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
                        <!--My Purchase-->
                        <div v-if="activeTab === 'My Purchase'" class="tab-content">
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

                        <div class="p-6">
                           <!-- Scrollable Tabs -->
                            <div class="overflow-x-auto whitespace-nowrap border-b border-gray-300 bg-[#285a19] rounded-md p-2">
                                <div class="flex space-x-4 w-max">
                                    <button v-for="tab in purchasetabs" :key="tab"
                                        @click="currentTab = tab"
                                        class="px-4 py-2 text-sm font-semibold"
                                        :class="[currentTab === tab ? 'border-b-2 border-green-600 text-green-600' : 'text-white']">
                                        {{ tab }}
                                    </button>
                                </div>
                            </div>


                            <!-- Content for each tab -->
                            <div class="mt-6">
                                <!--To Pay-->
                                <div v-if="currentTab === 'To Pay'">
                                    <div class="mt-4 space-y-4 max-h-[500px] overflow-y-auto">
                                        <div v-for="purchase in purchaseList" :key="purchase.id" class="bg-green-100 border border-green-300 rounded-lg p-4">
                                            <div class="flex flex-wrap md:flex-nowrap items-center mb-4">
                                                <!-- Image -->
                                                <img :src="purchase.product_images[0] || 'https://via.placeholder.com/80'" alt="Product Image" class="w-16 h-16 sm:w-20 sm:h-20 2xl:w-24 2xl:h-24 rounded object-cover border"/>

                                                <!-- Details -->
                                                <div class="ml-3 sm:ml-4 flex-grow">
                                                    <h3 class="text-xs sm:text-sm 2xl:text-lg font-semibold">
                                                    {{ purchase.product_name }}
                                                    </h3>
                                                    <p class="text-[10px] sm:text-xs 2xl:text-sm text-gray-600">
                                                    Variants: {{ purchase.unit }}
                                                    </p>
                                                    <div class="mt-2 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                                                        <p class="text-xs sm:text-sm 2xl:text-base font-medium text-gray-700">
                                                            Seller: <span class="font-semibold">{{ purchase.farmer_name }}</span>
                                                        </p>
                                                        <div class="flex items-center gap-2 sm:gap-3">
                                                            <h1 class="text-xs sm:text-sm 2xl:text-base">Quantity:</h1>
                                                            <p
                                                            class="text-xs sm:text-sm 2xl:text-lg font-semibold text-green-700"
                                                            >
                                                            {{ purchase.quantity }}
                                                            </p>
                                                            <h1 class="text-xs sm:text-sm 2xl:text-base">Order Total:</h1>
                                                            <p
                                                            class="text-xs sm:text-sm 2xl:text-lg font-semibold text-green-700"
                                                            >
                                                            ₱{{ purchase.total_amount }}
                                                            </p>
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
                                                        <!-- <button class="px-3 py-1 text-xs sm:text-sm 2xl:text-base font-semibold text-green-700 border border-green-600 rounded hover:bg-green-50" @click="startChatWithShop">
                                                            Contact Seller
                                                        </button> -->
                                                        <!-- <button class="px-3 py-1 text-xs sm:text-sm 2xl:text-base font-semibold text-red-600 border border-red-500 rounded hover:bg-red-50" @click="openshowCancelModal(purchase.id)">
                                                            Cancel Order
                                                        </button> -->
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <!-- Cancel Order Modal -->
                                        <div v-if="isshowCancelModal" class="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
                                            <div class="bg-white p-5 md:p-7 rounded-lg shadow-lg w-full max-w-[90%] md:max-w-[500px]" >
                                                <div class="text-end">
                                                    <button  @click="closeshowCancelModal" class="text-gray-400 hover:text-gray-600" >
                                                    <Icon icon="icon-park-solid:close-one" width="20" height="20" />
                                                    </button>
                                                </div>
                                                <h3 class="text-lg md:text-xl font-semibold text-center mb-4">
                                                    Select Cancellation Reason
                                                </h3>

                                                <!-- Notification Section -->
                                                <div class="mt-4 p-4 bg-[#608C54] rounded-md flex flex-col items-center text-center">
                                                    <Icon icon="noto:bell" width="50" height="50" class="mb-4" />
                                                    <p class="text-sm md:text-base text-white">
                                                    Please select a cancellation reason. Once your order is successfully
                                                    canceled, your refund will be processed immediately and may take 10 to
                                                    45 minutes to reflect in your account.
                                                    </p>
                                                </div>

                                                <div class="text-sm mt-3">
                                                    <BaseRadioButton v-for="option in ['Need to change delivery address', 'Seller is not responsive to my inquiries', 'Others / Change of mind']" :key="option" :name="'tinIdOption'" :label="option" :value="option" v-model="cancelData.reasons"/>
                                                </div>

                                                <!-- Buttons -->
                                                <div class="mt-4 flex justify-end space-x-2">
                                                    <button @click="closeshowCancelModal" class="px-4 py-2 text-sm font-semibold text-gray-700 border border-gray-300 rounded hover:bg-gray-100" > Close</button>
                                                    <button @click="Save" class="px-4 py-2 text-sm font-semibold text-red-700 bg-red-100 border border-red-500 rounded hover:bg-red-200"> Confirm </button>
                                                </div>
                                            </div>
                                        </div>

                                        <!-- Confirmation Modal -->
                                        <!-- <div v-if="isConfirmationModalVisible"  class="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
                                            <div class="bg-white p-5 md:p-7 rounded-lg shadow-lg w-full max-w-[90%] md:max-w-[400px]" >
                                                <div class="text-end">
                                                    <button
                                                    @click="closeConfirmationModal"
                                                    class="text-gray-400 hover:text-gray-600"
                                                    >
                                                    <Icon icon="icon-park-solid:close-one" width="20" height="20" />
                                                    </button>
                                                </div>
                                                <div class="border rounded-md p-3 shadow">
                                                    <h2 class="text-center text-lg font-semibold">Refund Details</h2>
                                                </div>
                                                <div class="mt-4 border rounded-md p-3 shadow space-y-4 text-xs md:text-sm">
                                                    <div class="flex items-center gap-3">
                                                    <img
                                                        src="https://via.placeholder.com/50"
                                                        alt="Product"
                                                        class="w-12 h-12 rounded-md"
                                                    />
                                                    <div>
                                                        <p class="font-semibold">Banana</p>
                                                        <p class="text-gray-500">Variant: Kg</p>
                                                    </div>
                                                    <p class="ml-auto font-semibold">₱820</p>
                                                    </div>

                                                   
                                                    <div class="mt-3 space-y-2">
                                                        <p><span class="font-semibold">Refund Amount:</span> ₱820</p>
                                                        <p><span class="font-semibold">Refund to:</span> GCASH</p>
                                                        <p><span class="font-semibold">Request by:</span> Buyer</p>
                                                        <p><span class="font-semibold">Request at:</span> 02-31-2024 13:30</p>
                                                        <p class="flex items-center">
                                                            <span class="font-semibold">Request ID:</span>
                                                            <span class="ml-2">27693649M26485</span>
                                                            <button  @click="copyRequestId"  class="ml-2 text-blue-600 font-semibold text-xs">COPY </button>
                                                        </p>
                                                        <p><span class="font-semibold">Reason:</span> Others / Change of mind</p>
                                                    </div>
                                                </div>
                                              
                                                <div class="mt-4 flex justify-center">
                                                    <button @click="closeConfirmationModal" class="px-5 py-2 text-sm font-semibold text-white bg-green-600 rounded hover:bg-green-700" > Okay </button>
                                                </div>
                                            </div>
                                        </div> -->
                                    </div>
                                </div>


                                <!--To Ship-->
                                <div v-else-if="currentTab === 'To Ship'">
                                    <div class="mt-4 space-y-4 max-h-[500px] overflow-y-auto">
                                        <div v-for="toShip in toShipList" :key="toShip.id" class="bg-green-100 border border-green-300 rounded-lg p-4">
                                            <div class="flex flex-wrap md:flex-nowrap items-center mb-4">
                                                <!-- Image -->
                                                <img :src="toShip.product_images[0] || 'https://via.placeholder.com/80'" alt="Product Image" class="w-16 h-16 sm:w-20 sm:h-20 2xl:w-24 2xl:h-24 rounded object-cover border"/>

                                                <!-- Details -->
                                                <div class="ml-3 sm:ml-4 flex-grow">
                                                    <h3 class="text-xs sm:text-sm 2xl:text-lg font-semibold">
                                                    {{ toShip.product_name }}
                                                    </h3>
                                                    <p class="text-[10px] sm:text-xs 2xl:text-sm text-gray-600">
                                                    Variants: {{ toShip.unit }}
                                                    </p>
                                                    <div class="mt-2 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                                                        <p class="text-xs sm:text-sm 2xl:text-base font-medium text-gray-700">
                                                            Seller: <span class="font-semibold">{{ toShip.farmer_name }}</span>
                                                        </p>
                                                        <div class="flex items-center gap-2 sm:gap-3">
                                                            <h1 class="text-xs sm:text-sm 2xl:text-base">Quantity:</h1>
                                                            <p
                                                            class="text-xs sm:text-sm 2xl:text-lg font-semibold text-green-700"
                                                            >
                                                            {{ toShip.quantity }}
                                                            </p>
                                                            <h1 class="text-xs sm:text-sm 2xl:text-base">Order Total:</h1>
                                                            <p
                                                            class="text-xs sm:text-sm 2xl:text-lg font-semibold text-green-700"
                                                            >
                                                            ₱{{ toShip.total_amount }}
                                                            </p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                            <!-- Order Status -->
                                            <div>
                                                <div class="mt-4 flex flex-col sm:flex-row sm:justify-between gap-2 sm:gap-4">
                                                    <div class="flex items-center gap-2 sm:gap-3">
                                                        <h1 class="text-xs sm:text-sm 2xl:text-base">Seller Preparing your Goods:</h1>
                                                        <span class="text-xs sm:text-sm 2xl:text-base font-medium text-gray-500">Waiting for Courier</span>
                                                    </div>
                                                    <div class="flex space-x-2">
                                                        <!-- <button class="px-3 py-1 text-xs sm:text-sm 2xl:text-base font-semibold text-green-700 border border-green-600 rounded hover:bg-green-50" @click="startChatWithShop">
                                                            Contact Seller
                                                        </button> -->
                                                        <!-- <button class="px-3 py-1 text-xs sm:text-sm 2xl:text-base font-semibold text-red-600 border border-red-500 rounded hover:bg-red-50"  @click="openshowCancelModal">
                                                            Cancel Order
                                                        </button> -->
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <!-- Cancel Order Modal -->
                                        <div v-if="isshowCancelModal" class="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
                                            <div class="bg-white p-5 md:p-7 rounded-lg shadow-lg w-full max-w-[90%] md:max-w-[500px]" >
                                                <div class="text-end">
                                                    <button  @click="closeshowCancelModal" class="text-gray-400 hover:text-gray-600" >
                                                    <Icon icon="icon-park-solid:close-one" width="20" height="20" />
                                                    </button>
                                                </div>
                                                <h3 class="text-lg md:text-xl font-semibold text-center mb-4">
                                                    Select Cancellation Reason
                                                </h3>

                                                <!-- Notification Section -->
                                                <div class="mt-4 p-4 bg-[#608C54] rounded-md flex flex-col items-center text-center">
                                                    <Icon icon="noto:bell" width="50" height="50" class="mb-4" />
                                                    <p class="text-sm md:text-base text-white">
                                                    Please select a cancellation reason. Once your order is successfully
                                                    canceled, your refund will be processed immediately and may take 10 to
                                                    45 minutes to reflect in your account.
                                                    </p>
                                                </div>

                                                <div class="text-sm mt-3">
                                                    <BaseRadioButton v-for="option in ['Need to change delivery address', 'Seller is not responsive to my inquiries', 'Others / Change of mind']" :key="option" :name="'tinIdOption'" :label="option" :value="option" v-model="tinIdSelected"/>
                                                </div>

                                                <!-- Buttons -->
                                                <div class="mt-4 flex justify-end space-x-2">
                                                    <button @click="closeshowCancelModal" class="px-4 py-2 text-sm font-semibold text-gray-700 border border-gray-300 rounded hover:bg-gray-100" > Close</button>
                                                    <button @click="Save" class="px-4 py-2 text-sm font-semibold text-red-700 bg-red-100 border border-red-500 rounded hover:bg-red-200"> Confirm </button>
                                                </div>
                                            </div>
                                        </div>

                                        <!--                                        
                                        <div v-if="isConfirmationModalVisible"  class="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
                                            <div class="bg-white p-5 md:p-7 rounded-lg shadow-lg w-full max-w-[90%] md:max-w-[400px]" >
                                                <div class="text-end">
                                                    <button
                                                    @click="closeConfirmationModal"
                                                    class="text-gray-400 hover:text-gray-600"
                                                    >
                                                    <Icon icon="icon-park-solid:close-one" width="20" height="20" />
                                                    </button>
                                                </div>
                                                <div class="border rounded-md p-3 shadow">
                                                    <h2 class="text-center text-lg font-semibold">Refund Details</h2>
                                                </div>
                                                <div class="mt-4 border rounded-md p-3 shadow space-y-4 text-xs md:text-sm">
                                                    <div class="flex items-center gap-3">
                                                    <img
                                                        src="https://via.placeholder.com/50"
                                                        alt="Product"
                                                        class="w-12 h-12 rounded-md"
                                                    />
                                                    <div>
                                                        <p class="font-semibold">Banana</p>
                                                        <p class="text-gray-500">Variant: Kg</p>
                                                    </div>
                                                    <p class="ml-auto font-semibold">₱820</p>
                                                    </div>

                                                 
                                                    <div class="mt-3 space-y-2">
                                                        <p><span class="font-semibold">Refund Amount:</span> ₱820</p>
                                                        <p><span class="font-semibold">Refund to:</span> GCASH</p>
                                                        <p><span class="font-semibold">Request by:</span> Buyer</p>
                                                        <p><span class="font-semibold">Request at:</span> 02-31-2024 13:30</p>
                                                        <p class="flex items-center">
                                                            <span class="font-semibold">Request ID:</span>
                                                            <span class="ml-2">27693649M26485</span>
                                                            <button  @click="copyRequestId"  class="ml-2 text-blue-600 font-semibold text-xs">COPY </button>
                                                        </p>
                                                        <p><span class="font-semibold">Reason:</span> Others / Change of mind</p>
                                                    </div>
                                                </div>
                                             
                                                <div class="mt-4 flex justify-center">
                                                    <button @click="closeConfirmationModal" class="px-5 py-2 text-sm font-semibold text-white bg-green-600 rounded hover:bg-green-700" > Okay </button>
                                                </div>
                                            </div>
                                        </div> -->
                                    </div>
                                </div>


                                <!--To Receive-->
                                <div v-else-if="currentTab === 'To Receive'">
                                    <div class="mt-4 space-y-4 max-h-[500px] overflow-y-auto">
                                        <div v-for="toReceive in toReceiveList" :key="toReceive.id" class="bg-green-100 border border-green-300 rounded-lg p-4">
                                            <div class="flex flex-wrap md:flex-nowrap items-center mb-4">
                                                <!-- Image -->
                                                <img :src="toReceive.product_images[0] || 'https://via.placeholder.com/80'" alt="Product Image" class="w-16 h-16 sm:w-20 sm:h-20 2xl:w-24 2xl:h-24 rounded object-cover border"/>

                                                <!-- Details -->
                                                <div class="ml-3 sm:ml-4 flex-grow">
                                                    <h3 class="text-xs sm:text-sm 2xl:text-lg font-semibold">
                                                    {{ toReceive.product_name }}
                                                    </h3>
                                                    <p class="text-[10px] sm:text-xs 2xl:text-sm text-gray-600">
                                                    Variants: {{ toReceive.unit }}
                                                    </p>
                                                    <div class="mt-2 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                                                        <p class="text-xs sm:text-sm 2xl:text-base font-medium text-gray-700">
                                                            Seller: <span class="font-semibold">{{ toReceive.farmer_name }}</span>
                                                        </p>
                                                        <div class="flex items-center gap-2 sm:gap-3">
                                                            <h1 class="text-xs sm:text-sm 2xl:text-base">Quantity:</h1>
                                                            <p
                                                            class="text-xs sm:text-sm 2xl:text-lg font-semibold text-green-700"
                                                            >
                                                            {{ toReceive.quantity }}
                                                            </p>
                                                            <h1 class="text-xs sm:text-sm 2xl:text-base">Order Total:</h1>
                                                            <p
                                                            class="text-xs sm:text-sm 2xl:text-lg font-semibold text-green-700"
                                                            >
                                                            ₱{{ toReceive.total_amount }}
                                                            </p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                            <!-- Order Status -->
                                            <div>
                                                <div class="mt-4 flex flex-col sm:flex-row sm:justify-between gap-2 sm:gap-4">
                                                    <div class="flex items-center gap-2 sm:gap-3">
                                                        <h1 class="text-xs sm:text-sm 2xl:text-base">Seller Has shipped your goods:</h1>
                                                        <span class="text-xs sm:text-sm 2xl:text-base font-medium text-gray-500">To Receive</span>
                                                    </div>
                                                    <!-- <div class="flex space-x-2">
                                                        <button class="px-3 py-1 text-xs sm:text-sm 2xl:text-base font-semibold text-green-700 border border-green-600 rounded hover:bg-green-50" @click="openshowChatModal">
                                                            Contact Seller
                                                        </button>
                                                        <button class="px-3 py-1 text-xs sm:text-sm 2xl:text-base font-semibold text-red-600 border border-red-500 rounded hover:bg-red-50" @click="openTrackModal">
                                                        Track Order
                                                        </button>
                                                    </div> -->
                                                </div>
                                            </div>
                                        </div>

                                        <!-- Cancel Order Modal -->
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
                                                    <p class="text-gray-600">Variants: {{ product.unit }}</p>
                                                    <p class="text-lg font-bold mt-2">Qty {{ product.quantity }}</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>


                                <!--Completed-->
                                <div v-else-if="currentTab === 'Completed'">
                                    <div class="mt-4 space-y-4 max-h-[500px] overflow-y-auto">
                                        <div v-for="toComplete in toCompleteList" :key="toComplete.id" class="bg-green-100 border border-green-300 rounded-lg p-4">
                                            <div class="flex flex-wrap md:flex-nowrap items-center mb-4">
                                                <!-- Image -->
                                                <img :src="toComplete.product_images[0] || 'https://via.placeholder.com/80'" alt="Product Image" class="w-16 h-16 sm:w-20 sm:h-20 2xl:w-24 2xl:h-24 rounded object-cover border"/>

                                                <!-- Details -->
                                                <div class="ml-3 sm:ml-4 flex-grow">
                                                    <h3 class="text-xs sm:text-sm 2xl:text-lg font-semibold">
                                                    {{ toComplete.product_name }}
                                                    </h3>
                                                    <p class="text-[10px] sm:text-xs 2xl:text-sm text-gray-600">
                                                    Variants: {{ toComplete.unit }}
                                                    </p>
                                                    <div class="mt-2 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                                                        <p class="text-xs sm:text-sm 2xl:text-base font-medium text-gray-700">
                                                            Seller: <span class="font-semibold">{{ toComplete.farmer_name }}</span>
                                                        </p>
                                                        <div class="flex items-center gap-2 sm:gap-3">
                                                            <h1 class="text-xs sm:text-sm 2xl:text-base">Quantity:</h1>
                                                            <p
                                                            class="text-xs sm:text-sm 2xl:text-lg font-semibold text-green-700"
                                                            >
                                                            {{ toComplete.quantity }}
                                                            </p>
                                                            <h1 class="text-xs sm:text-sm 2xl:text-base">Order Total:</h1>
                                                            <p
                                                            class="text-xs sm:text-sm 2xl:text-lg font-semibold text-green-700"
                                                            >
                                                            ₱{{ toComplete.total_amount }}
                                                            </p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                            <!-- Order Status -->
                                            <div>
                                                <div class="mt-4 flex flex-col sm:flex-row sm:justify-between gap-2 sm:gap-4">
                                                    <div class="flex items-center gap-2 sm:gap-3">
                                                        <h1 class="text-xs sm:text-sm 2xl:text-base">Parcel has been delivered:</h1>
                                                        <span class="text-xs sm:text-sm 2xl:text-base font-medium text-gray-500">Completed</span>
                                                    </div>
                                                    <div class="flex space-x-2">
                                                        <!-- <button class="px-8 py-1 text-xs sm:text-sm 2xl:text-base font-semibold text-green-700 border border-green-600 rounded hover:bg-green-50" @click="openRateModal">
                                                            Rate
                                                        </button>
                                                        <button class="px-3 py-1 text-xs sm:text-sm 2xl:text-base font-semibold text-red-600 border border-red-500 rounded hover:bg-red-50" @click="openRefundModal">
                                                            Request/Refund
                                                        </button> -->
                                                    </div>
                                                </div>
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
                                    <div class="mt-4 space-y-4 max-h-[500px] overflow-y-auto">
                                        <div v-for="toCancel in toCancelList" :key="toCancel.id" class="bg-green-100 border border-green-300 rounded-lg p-4">
                                            <div class="flex flex-wrap md:flex-nowrap items-center mb-4">
                                                <!-- Image -->
                                                <img :src="toCancel.product_images[0] || 'https://via.placeholder.com/80'" alt="Product Image" class="w-16 h-16 sm:w-20 sm:h-20 2xl:w-24 2xl:h-24 rounded object-cover border"/>

                                                <!-- Details -->
                                                <div class="ml-3 sm:ml-4 flex-grow">
                                                    <h3 class="text-xs sm:text-sm 2xl:text-lg font-semibold">
                                                    {{ toCancel.product_name }}
                                                    </h3>
                                                    <p class="text-[10px] sm:text-xs 2xl:text-sm text-gray-600">
                                                    Variants: {{ toCancel.unit }}
                                                    </p>
                                                    <div class="mt-2 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                                                        <p class="text-xs sm:text-sm 2xl:text-base font-medium text-gray-700">
                                                            Seller: <span class="font-semibold">{{ toCancel.farmer_name }}</span>
                                                        </p>
                                                        <div class="flex items-center gap-2 sm:gap-3">
                                                            <h1 class="text-xs sm:text-sm 2xl:text-base">Quantity:</h1>
                                                            <p
                                                            class="text-xs sm:text-sm 2xl:text-lg font-semibold text-green-700"
                                                            >
                                                            {{ toCancel.quantity }}
                                                            </p>
                                                            <h1 class="text-xs sm:text-sm 2xl:text-base">Order Total:</h1>
                                                            <p
                                                            class="text-xs sm:text-sm 2xl:text-lg font-semibold text-green-700"
                                                            >
                                                            ₱{{ toCancel.total_amount }}
                                                            </p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                            <!-- Order Status -->
                                            <div>
                                                <div class="mt-4 flex flex-col sm:flex-row sm:justify-between gap-2 sm:gap-4">
                                                    <div class="flex items-center gap-2 sm:gap-3">
                                                        <h1 class="text-xs sm:text-sm 2xl:text-base">Cancelled by You:</h1>
                                                        <span class="text-xs sm:text-sm 2xl:text-base font-medium text-gray-500">Cancelled</span>
                                                    </div>
                                                    <div class="flex space-x-2">
                                                        <button class="px-3 py-1 text-xs sm:text-sm 2xl:text-base font-semibold text-green-700 border border-green-600 rounded hover:bg-green-50">
                                                            Buy Again
                                                        </button>
                                                        <button class="px-3 py-1 text-xs sm:text-sm 2xl:text-base font-semibold text-red-600 border border-red-500 rounded hover:bg-red-50" @click="openViewCancellationModal">
                                                            View Cancellation Details
                                                        </button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <!-- Cancel Order Modal -->
                                        <div v-if="isshowViewCancellationModal" class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
                                            <div class="bg-white max-w-3xl w-full rounded-lg shadow-lg p-6 relative">
                                                <!-- Close Button -->
                                                <button @click="closeViewCancellationModal" class="absolute top-2 right-2 text-gray-500 hover:text-red-500">
                                                    <Icon icon="icon-park-solid:close-one" width="20" height="20" />
                                                </button>

                                                <!-- Cancellation Header -->
                                                <div class="text-red-600 font-bold text-lg">Cancellation Completed</div>
                                                <p class="text-gray-500 text-sm">on {{ cancellationDate }}</p>

                                                <!-- Shop Info -->
                                                <div class="mt-4 flex items-center justify-between">
                                                    <div class="flex items-center">
                                                        <span class="ml-2 text-gray-500">Shop Name:</span>
                                                    </div>
                                                    <button class="text-blue-500 underline text-sm">View Shop</button>
                                                </div>

                                                <!-- Product Info -->
                                                <div class="mt-4 flex items-center space-x-4 border-t pt-4">
                                                    <img :src="product.image" alt="Product Image" class="w-20 h-20 object-cover">
                                                    <div class="flex-1">
                                                        <p class="font-semibold">{{ product.name }}</p>
                                                        <p class="text-gray-500 text-sm">x{{ product.quantity }}</p>
                                                    </div>
                                                    <div class="text-right">
                                                        <p class="text-gray-400 line-through">₱{{ product.originalPrice }}</p>
                                                    </div>
                                                </div>

                                                <!-- Order Details -->
                                                <div class="mt-4 border-t pt-4 text-sm">
                                                    <div class="flex justify-between">
                                                        <span class="text-gray-500">Requested by</span>
                                                        <span class="font-medium">Buyer</span>
                                                    </div>
                                                    <div class="flex justify-between mt-2">
                                                        <span class="text-gray-500">Payment method</span>
                                                        <span class="font-medium">{{ paymentMethod }}</span>
                                                    </div>
                                                    <div class="flex justify-between mt-2">
                                                        <span class="text-gray-500">Order ID</span>
                                                        <a :href="orderLink" class="text-red-500 font-medium underline">{{ orderId }}</a>
                                                    </div>
                                                </div>

                                                <!-- Cancellation Reason -->
                                                <div class="mt-6 border-t pt-4 text-gray-700 font-semibold">
                                                    Reason: <span class="font-normal">{{ reason }}</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>


                                <!--Return Refund-->
                                <div v-else-if="currentTab === 'Return Refund'">
                                    <div v-for="toRefund in toRefundList" :key="toRefund.id" class="bg-green-100 border border-green-300 rounded-lg p-4">
                                        <div class="flex flex-wrap md:flex-nowrap items-center mb-4">
                                            <!-- Image -->
                                            <img :src="toRefund.product_images[0] || 'https://via.placeholder.com/80'" alt="Product Image" class="w-16 h-16 sm:w-20 sm:h-20 2xl:w-24 2xl:h-24 rounded object-cover border"/>

                                            <!-- Details -->
                                            <div class="ml-3 sm:ml-4 flex-grow">
                                                <h3 class="text-xs sm:text-sm 2xl:text-lg font-semibold">
                                                {{ toRefund.product_name }}
                                                </h3>
                                                <p class="text-[10px] sm:text-xs 2xl:text-sm text-gray-600">
                                                Variants: {{ toRefund.unit }}
                                                </p>
                                                <div class="mt-2 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                                                    <p class="text-xs sm:text-sm 2xl:text-base font-medium text-gray-700">
                                                        Seller: <span class="font-semibold">{{ toRefund.farmer_name }}</span>
                                                    </p>
                                                    <div class="flex items-center gap-2 sm:gap-3">
                                                        <h1 class="text-xs sm:text-sm 2xl:text-base">Quantity:</h1>
                                                        <p
                                                        class="text-xs sm:text-sm 2xl:text-lg font-semibold text-green-700"
                                                        >
                                                        {{ toRefund.quantity }}
                                                        </p>
                                                        <h1 class="text-xs sm:text-sm 2xl:text-base">Order Total:</h1>
                                                        <p
                                                        class="text-xs sm:text-sm 2xl:text-lg font-semibold text-green-700"
                                                        >
                                                        ₱{{ toRefund.total_amount }}
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <!-- Order Status -->
                                        <div>
                                            <div class="mt-4 flex flex-col sm:flex-row sm:justify-between gap-2 sm:gap-4">
                                                <div class="flex items-center gap-2 sm:gap-3">
                                                    <h1 class="text-xs sm:text-sm 2xl:text-base">Seller Has shipped your goods:</h1>
                                                    <span class="text-xs sm:text-sm 2xl:text-base font-medium text-gray-500">To Receive</span>
                                                </div>
                                                <div class="flex space-x-2">
                                                    <!-- <button class="px-3 py-1 text-xs sm:text-sm 2xl:text-base font-semibold text-green-700 border border-green-600 rounded hover:bg-green-50" @click="openshowChatModal">
                                                        Contact Seller
                                                    </button>
                                                    <button class="px-3 py-1 text-xs sm:text-sm 2xl:text-base font-semibold text-red-600 border border-red-500 rounded hover:bg-red-50" @click="openTrackModal">
                                                    Track Order
                                                    </button> -->
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <!--My Profile-->
                    <div v-if="activeTab === 'My Profile'" class="tab-content p-4">
                        <div class="flex flex-col md:flex-row justify-start space-y-4 md:space-y-0 md:space-x-6">
                            <!-- Left Side: Profile Info -->
                           <div class="flex flex-col">
                                <BaseLabel class="font-semibold" >Name:</BaseLabel>
                                <span class="text-black text-sm">{{consumerRaw.first_name}} {{consumerRaw.middle_name}} {{consumerRaw.last_name}}</span>
                                <BaseLabel class="font-semibold" >E-Wallet Number:</BaseLabel>
                                <span class="text-black text-sm">{{consumerRaw.phone_number}}</span>
                                <BaseLabel class="font-semibold">Email Address:</BaseLabel>
                                <span class="text-black text-sm">{{consumerRaw.email}}</span>
                           </div>
                        </div>
                        
                          <!-- Edit Modal -->
                        <div v-if="ishowProfileModal" class="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
                            <div class="bg-white rounded-xl p-6 w-full max-w-md max-h-[80vh] overflow-y-auto shadow-lg">
                                <h2 class="text-lg font-semibold mb-4">Edit Consumer Info</h2>

                                <div class="space-y-3">
                                    <div>
                                    <BaseLabel>First Name</BaseLabel>
                                    <BaseInputField v-model="consumerData.first_name" type="text" class="w-full" />
                                    </div>

                                    <div>
                                    <BaseLabel>Middle Name</BaseLabel>
                                    <BaseInputField v-model="consumerData.middle_name" type="text" class="w-full" />
                                    </div>

                                    <div>
                                    <BaseLabel>Last Name</BaseLabel>
                                    <BaseInputField v-model="consumerData.last_name" type="text" class="w-full" />
                                    </div>

                                    <div>
                                    <BaseLabel>E-Wallet Number</BaseLabel>
                                    <BaseInputField v-model="consumerData.phone_number" type="text" class="w-full" />
                                    </div>

                                    <div>
                                    <BaseLabel>Email</BaseLabel>
                                    <BaseInputField v-model="consumerData.email" type="email" class="w-full" />
                                    </div>

                                    <div class="flex text-sm justify-end space-x-2 pt-2">
                                    <button type="button" @click="closeProfileModal" class="rounded-full px-4 py-2 bg-gray-300 hover:bg-gray-400">
                                        Cancel
                                    </button>
                                    <button @click="saveProfileChanges" class="rounded-full bg-[#608C54] py-2 px-6 w-32 md:w-28 hover:bg-gray-200 text-white">
                                        Save
                                    </button>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <!-- Change Password Modal -->
                        <div v-if="ishowPasswordModal" class="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
                            <div class="bg-white rounded-xl p-6 w-full max-w-md max-h-[90vh] overflow-y-auto shadow-lg">
                                <h2 class="text-lg font-semibold mb-4">Change Password</h2>

                                <div class="space-y-3">

                                    <div class="relative">
                                    <BaseLabel class="font-semibold">*New Password</BaseLabel>
                                    <BaseInputField v-model="passwordData.password" :type="showPassword ? 'text' : 'password'" placeholder="Enter Your Password" class="w-full" />
                                    <button type="button" class="absolute right-3 2xl:top-10 lg:top-10 md:top-11  2xs:top-12 text-gray-500" @click="togglePasswordVisibility">
                                        <Icon :icon="showPassword ? 'ic:twotone-visibility-off' : 'ic:twotone-visibility'" />
                                    </button>
                                    </div>

                                    <div class="relative">
                                    <BaseLabel class="font-semibold">*Re-enter Password</BaseLabel>
                                    <BaseInputField v-model="passwordData.password_confirmation" :type="reshowPassword ? 'text' : 'password'" placeholder="Re-enter password" class="w-full" />
                                    <button type="button" class="absolute right-3 2xl:top-10 lg:top-10 md:top-11 2xs:top-12 text-gray-500" @click="retogglePasswordVisibility">
                                        <Icon :icon="reshowPassword ? 'ic:twotone-visibility-off' : 'ic:twotone-visibility'" />
                                    </button>
                                    </div>

                                    <div class="flex justify-end space-x-2 pt-2">
                                    <button type="button" @click="closePasswordModal" class="rounded-full px-4 py-2 bg-gray-300 hover:bg-gray-400">
                                        Cancel
                                    </button>
                                    <button @click="savePasswordChanges" class="rounded-full bg-[#608C54] py-2 px-6 w-32 md:w-28 hover:bg-gray-200 text-white">
                                        Save
                                    </button>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="mt-4 flex flex-col md:flex-row justify-end gap-2 md:gap-4">
                        <button class="bg-green-700 text-white px-8 py-2 rounded-full hover:bg-green-500 transition" @click="openProfileModal"> Edit</button>
                        <button class="bg-green-700 text-white px-6 py-2 rounded-full hover:bg-green-500 transition" @click="openPasswordModal"> Change Password</button>
                        </div>
                    </div>        

                    <!--Addresses-->
                    <div v-if="activeTab === 'Billing Address'" class="tab-content">
                        
                        <div>
                            <!--Update Modal -->
                            <div v-if="isUpdateAddressModalOpen" class="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
                                <div class="bg-white rounded-lg shadow-lg max-w-lg w-full p-6">
                                    <!-- Modal Header -->
                                    <div class="flex justify-between items-center mb-4">
                                    <h3 class="text-xl font-semibold">Update Address</h3>
                                    <button @click="closeUpdateAddressModal" class="text-gray-400 hover:text-gray-600">
                                        <Icon icon="icon-park-solid:close-one" width="20" height="20" />
                                    </button>
                                    </div>

                                    <!-- Modal Content -->
                                        <div class="mb-4">
                                            <BaseLabel>Address:</BaseLabel>
                                            <BaseInputField v-model="updateaddress.delivery_address" />
                                            <BaseError v-if="$validateUpdateAddressRules.delivery_address.$error">{{ $validateUpdateAddressRules.delivery_address.$errors[0].$message }}</BaseError>
                                        </div>

                                        <div class="mb-4">
                                            <BaseLabel>Additional Address Info(optional):</BaseLabel>
                                            <BaseInputField v-model="updateaddress.address_info" />
                                        </div>

                                        <!-- Save Button -->
                                        <div class="flex justify-end space-x-2">
                                            <button type="button" class="px-4 py-2 bg-gray-200 rounded-md text-gray-700 hover:bg-gray-300" @click="closeUpdateAddressModal" >Cancel </button>
                                            <button type="submit" class="px-6 py-2 bg-[#608C54] text-white rounded-md hover:bg-[#4e7143]" @click="updateAddress">Save</button>
                                        </div>
                                </div>
                            </div>
                        </div>
                        <!-- Save Address-->
                        <div class="mt-3 space-y-4">
                            <h3 class="text-lg font-semibold">Saved Address</h3>
                            <ul>
                                <li v-for="address in addressList" :key="address.id" class="border-b py-2">
                                <p>
                                    <span class="font-semibold text-[#608C54]">Address:</span> {{ address.delivery_address }}
                                </p>
                                <p>
                                    <span class="font-semibold text-[#608C54]">Additional Address Info:</span> {{ address.address_info }}
                                </p>
                                <div class="flex space-x-2 mt-2 justify-end">
                                     <!-- Edit Button -->
                                     <button class="text-blue-500 hover:text-blue-700" @click="openUpdateAddressModal(address.id)">
                                        <Icon icon="bi:pencil-square" width="20" height="20"  style="color: #2543bf" />
                                    </button>
                                </div>
                                </li>
                            </ul>
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
import { ref, computed, reactive, onMounted, watch  } from "vue";
import { required, email, helpers } from '@vuelidate/validators';
import { useVuelidate } from "@vuelidate/core";
import { Icon } from '@iconify/vue';
import { useRouter } from 'vue-router';
import { useStore } from 'vuex';
import BaseSelectField from '@/components/Input-Fields/BaseSelectField.vue';
import BaseOptionField from '@/components/Input-Fields/BaseOptionField.vue';
import BaseCheckBox from '@/components/Input-Fields/BaseCheckBox.vue';

const store = useStore();
const router = useRouter();

const showLoading = computed(() => store.state.showLoading.state);
const activeTab = ref('My Purchase'); // Default active tab
const tabs = ref(['My Purchase', 'My Profile','Billing Address']); // List of tabs
const consumerRaw  = computed(() => store.state.userData.data?.user || {})
const conversationStart = computed(() => store.state.Consumer.conversation.data);
const messageStart = computed(() => store.state.Consumer.message.data);
const userId = computed(() => store.state.userData.data?.user?.id || null); // Assuming user ID is stored in userData
const userAvatar = computed(() => store.state.userData.data?.user?.avatar || defaultAvatar.value); // Assuming user avatar is stored in userData
const addressList= computed(() => store.state.Consumer.address.data);
const purchaseList= computed(() => store.state.Consumer.purchase.data);
const toShipList= computed(() => store.state.Consumer.toShip.data);
const toReceiveList= computed(() => store.state.Consumer.toReceive.data);
const toCompleteList= computed(() => store.state.Consumer.toComplete.data);
const toCancelList= computed(() => store.state.Consumer.toCancel.data);
const toRefundList= computed(() => store.state.Consumer.toRefund.data);


/******************************************************************
 FUNCTION FOR UPDATE PROFILE
******************************************************************/
const consumerData = reactive({
  first_name: consumerRaw.value.first_name || '',
  middle_name: consumerRaw.value.middle_name || '',
  last_name: consumerRaw.value.last_name || '',
  email: consumerRaw.value.email || '',
  phone_number: consumerRaw.value.phone_number || '',

});

//edit modal
const ishowProfileModal = ref(false)

const openProfileModal = () => {
    ishowProfileModal.value = true;
};

// Close the modal
const closeProfileModal = () => {
    ishowProfileModal.value = false;
};

const saveProfileChanges = async () => {
  try {
    await store.dispatch('updateProfile', {
      id: consumerRaw.value.id,
      first_name: consumerData.first_name,
      middle_name: consumerData.middle_name,
      last_name: consumerData.last_name,
      phone_number: consumerData.phone_number,
      email: consumerData.email,
    });

    // ✅ Update the reactive source
    consumerRaw.value.first_name = consumerData.first_name;
    consumerRaw.value.middle_name = consumerData.middle_name;
    consumerRaw.value.last_name = consumerData.last_name;
    consumerRaw.value.phone_number = consumerData.phone_number;
    consumerRaw.value.email = consumerData.email;

    closeProfileModal();

  } catch (error) {
    if (error.response?.data?.errors) {
      const errors = error.response.data.errors;
      const firstField = Object.keys(errors)[0];
      if (firstField) {
        alert(errors[firstField][0]);
      }
    } else {
      console.error("Error updating profile:", error);
      alert("An unexpected error occurred.");
    }
  }
};
/******************************************************************
 FUNCTION FOR UPDATE CHANGE PASSWORD
******************************************************************/
const passwordData = reactive({
  password: consumerRaw.value.password || '',
  password_confirmation: consumerRaw.value.password_confirmation || '',

});

const showPassword = ref(false);

const togglePasswordVisibility = () => {
  showPassword.value = !showPassword.value;
};
//re-password
const reshowPassword = ref(false);

const retogglePasswordVisibility = () => {
  reshowPassword.value = !reshowPassword.value;
};


//edit modal
const ishowPasswordModal = ref(false)

const openPasswordModal = () => {
    ishowPasswordModal.value = true;
};

// Close the modal
const closePasswordModal = () => {
    ishowPasswordModal.value = false;
};

const savePasswordChanges = async () => {
  try {
    if (passwordData.password !== passwordData.password_confirmation) {
      alert("Passwords do not match");
      return;
    }

    await store.dispatch('updatePassword', {
      id: consumerRaw.value.id,
      password: passwordData.password,
      password_confirmation: passwordData.password_confirmation,
    });

    closePasswordModal();
    // Optionally clear the fields after successful update
    passwordData.password = '';
    passwordData.password_confirmation = '';

  } catch (error) {
    if (error.response?.data?.errors) {
      const errors = error.response.data.errors;
      const firstField = Object.keys(errors)[0];
      if (firstField) {
        alert(errors[firstField][0]);
      }
    } else {
      console.error("Error updating password:", error);
      alert("An unexpected error occurred.");
    }
  }
};

/******************************************************************
 FUNCTION FOR GETTING TO PAY
******************************************************************/
function getPurchase() {
    store.dispatch('Consumer/getPurchase')
}

onMounted(() => {
    getPurchase();
})

/******************************************************************
 FUNCTION FOR GETTING TO SHIP
******************************************************************/
function getPurchaseShip() {
    store.dispatch('Consumer/getPurchaseShip')
}

onMounted(() => {
    getPurchaseShip();
})

/******************************************************************
 FUNCTION FOR GETTING TO SHIP
******************************************************************/
function getPurchaseReceive() {
    store.dispatch('Consumer/getPurchaseReceive')
}

onMounted(() => {
    getPurchaseReceive();
})

/******************************************************************
 FUNCTION FOR GETTING TO SHIP
******************************************************************/
function getPurchaseCompleted() {
    store.dispatch('Consumer/getPurchaseCompleted')
}

onMounted(() => {
    getPurchaseCompleted();
})

/******************************************************************
 FUNCTION FOR GETTING TO SHIP
******************************************************************/
function getPurchaseCancel() {
    store.dispatch('Consumer/getPurchaseCancel')
}

onMounted(() => {
    getPurchaseCancel();
})

/******************************************************************
 FUNCTION FOR GETTING TO SHIP
******************************************************************/
function getPurchaseRefund() {
    store.dispatch('Consumer/getPurchaseRefund')
}

onMounted(() => {
    getPurchaseRefund();
})
/******************************************************************
 FUNCTION FOR GETTING PURCHASE
******************************************************************/
function getAddressList() {
    store.dispatch('Consumer/getAddressList')
}

onMounted(() => {
    getAddressList();
})



/******************************************************************
 FUNCTION FOR UPDATE ADDRESS
******************************************************************/
const updateaddress = reactive({
    id:'',
    delivery_address:'',
    address_info:'',

});
const isUpdateAddressModalOpen = ref(false);

const openUpdateAddressModal = (id) => {
    const selectedAddress = addressList.value.find((address) => address.id === id);

  if (selectedAddress) {
    updateaddress.id = selectedAddress.id;
    updateaddress.delivery_address = selectedAddress.delivery_address
    updateaddress.address_info = selectedAddress.address_info
  
  

      // Open the modal
      isUpdateAddressModalOpen.value = true;  
  }
};


// Validation rules
const updateAddressRules = computed(() => {
    return {
        delivery_address: {
          required: helpers.withMessage('Delivery Address is required', required)
      },
    
  };
});

const $validateUpdateAddressRules = useVuelidate(updateAddressRules, updateaddress);

// Function for update product

// Function for update product
async function updateAddress() {
  const validationResult = await $validateUpdateAddressRules.value.$validate();
  if (validationResult) {
      await store.dispatch('Consumer/updateAddress', updateaddress)
      .then((response) => {
          if(response.isSuccess == true) {
            closeUpdateAddressModal();
            getAddressList();
          }
      })
  }
}


// Function to handle closing modal
function closeUpdateAddressModal() {
    isUpdateAddressModalOpen.value = false;
}

/******************************************************************
 FUNCTION FOR DELETING ADDRESS
******************************************************************/
// State to toggle modal visibility
const isDeleteModalVisible = ref(false);
const toDelete = ref(null);

// Open delete modal
const openDeleteAddressModal = (id) => {
    toDelete.value = id;
  isDeleteModalVisible.value = true;
};

// Close delete modal
const closeDeleteAddressModal = () => {
  isDeleteModalVisible.value = false;
};

// Function for delete division
async function deleteAddress() {
    if (toDelete.value != "") {
        await store.dispatch('Consumer/deleteAddress', toDelete.value)
        .then((response) => {
            if (response.isSuccess) {
                closeDeleteAddressModal();  
                getAddressList(); 
            }
        })    
    }
}

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
/******************************************************************
 FUNCTION FOR VIEW CANCELLATION MODAL
******************************************************************/
const isshowViewCancellationModal = ref(false);

const openViewCancellationModal = () => {
    isshowViewCancellationModal.value = true;
};

// Function to handle closing modal
function closeViewCancellationModal() {
    isshowViewCancellationModal.value = false;
}

/******************************************************************
 FUNCTION FOR TRACK ORDER MODAL
******************************************************************/
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
// const isConfirmationModalVisible = ref(false);
const tinIdSelected = ref('');

const cancelData = reactive({
    reasons: '',
});

const openshowCancelModal = () => {
    isshowCancelModal.value = true;
};

const closeshowCancelModal = () => {
    isshowCancelModal.value = false;
};

const Save = async () => {
  if (!cancelData.reasons) {
    // optional validation if needed
    return;
  }

  const payload = {
  id: tinIdSelected.value,
  cancellation_reason: cancelData.reasons
};

  try {
    await store.dispatch('Consumer/cancelProduct', payload);
    closeshowCancelModal();
  } catch (error) {
    console.error('Cancellation failed:', error);
  }
};

// Function to close the confirmation modal
const closeConfirmationModal = () => {
    isConfirmationModalVisible.value = false;
};
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

// const startChatWithShop = () => {
//     isshowChatModal.value = true;
//     console.log('productItemListinfo:', productItemListinfo.value);
//     if (!productItemListinfo.value || productItemListinfo.value.length === 0) {
//         console.error('productItemListinfo is empty or undefined');
//         setTimeout(() => {
//             store.commit('showToast', { showToast: true, toastMessage: 'Product data not loaded', toastType: 'error' }, { root: true });
//         }, toastDelay);
//         setTimeout(() => {
//             store.commit('showToast', { showToast: false, toastMessage: '', toastType: 'default' }, { root: true });
//         }, toastDuration);
//         return;
//     }
//     const user2Id = productItemListinfo.value[0]?.account_id;
//     if (!user2Id) {
//         console.error('Seller ID not found in productItemListinfo[0].account_id');
//         setTimeout(() => {
//             store.commit('showToast', { showToast: true, toastMessage: 'Seller ID not found', toastType: 'error' }, { root: true });
//         }, toastDelay);
//         setTimeout(() => {
//             store.commit('showToast', { showToast: false, toastMessage: '', toastType: 'default' }, { root: true });
//         }, toastDuration);
//         return;
//     }
//     console.log('Starting chat with user2_id:', user2Id);
//     store.dispatch('Consumer/startChatWithShop', { user2_id: user2Id })
//         .then((response) => {
//             if (!response) {
//                 console.error('No response received from startChatWithShop');
//                 return;
//             }
//             console.log('startChatWithShop response:', response);
//             const createdConversation = {
//                 id: response.id,
//                 chat_partner_name: response.chat_partner_name,
//                 chat_partner_avatar: response.chat_partner_avatar,
//                 message: response.message || '',
//                 unread_messages_count: response.unread_messages_count || 0,
//             };
//             selectedChat.value = createdConversation;
//             messageData.conversation_id = createdConversation.id;
//             store.dispatch('Consumer/getMessages', createdConversation.id);
//         })
//         .catch((error) => {
//             console.error('Failed to start chat:', error);
//         });
// };

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

/******************************************************************
 FUNCTION FOR UPLOADING IMAGE PROFILE
******************************************************************/

const imageData = reactive({
  avatar: consumerRaw.value.avatar || '', // Initial avatar
});

const handleImageUpload = async (event) => {
  const file = event.target.files[0];
  if (!file) return;

  const formData = new FormData();
  formData.append('avatar', file);
  formData.append('id', consumerRaw.value.id); // if your backend needs the user ID

  try {
    const response = await store.dispatch('Consumer/addImage', formData);

    if (response && response.avatar) {
      // Update the avatar locally
      const newAvatarUrl = response.avatar;
      imageData.avatar = newAvatarUrl;
      consumerRaw.value.avatar =  consumerRaw.value.avatar;

      // Optional: update sessionStorage and Vuex state
      sessionStorage.setItem('userAvatar', newAvatarUrl);
      store.commit('setAvatar', newAvatarUrl); // if you’re managing avatar in global state
    }
  } catch (error) {
    console.error("Image upload failed:", error);
    alert("Image upload failed. Please try again.");
  }
};


</script>
<style scoped>
.group-hover:scale-110 {
  transform: scale(1.1);
}



</style>