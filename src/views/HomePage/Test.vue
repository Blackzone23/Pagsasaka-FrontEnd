<template>
  <div class="p-4">
    <!-- Floating Chat Button -->
    <button 
      @click="showChatModal = true" 
      class="bg-yellow-100 border-2 border-gray-300 rounded-full p-3 flex items-center justify-center fixed bottom-4 right-4 shadow-md"
    >
      <Icon icon="tabler:message" width="28" height="28" style="color: #608C54" />
    </button>
  </div>

  <!-- Expanded Floating Chat Modal -->
  <div v-if="showChatModal" class="fixed bottom-4 right-4 w-[900px] h-[85vh] bg-white rounded-lg shadow-lg flex flex-col border">
    
    <!-- Header -->
    <div class="p-4 border-b bg-gray-100 flex justify-between items-center">
      <span class="text-lg font-bold text-green-600">Chat</span>
      <button @click="showChatModal = false" class="text-gray-600 text-lg">
        <Icon icon="icon-park-solid:close-one" width="20" height="20" />
      </button>
    </div>
    
    <div class="flex flex-1 overflow-hidden">
      <!-- Sidebar (Users List) -->
      <div class="w-1/3 bg-white border-r border-gray-300 p-4 flex flex-col">
        <div class="flex">
          <BaseSearchField placeholder="Search..." class="w-[270px]"></BaseSearchField>
        </div>
        
        <div class="mt-3 flex-1 overflow-auto">
          <div 
            v-for="(chat, index) in chats" 
            :key="index" 
            class="flex items-center p-3 border-b cursor-pointer hover:bg-gray-100 transition duration-200"
            @click="selectChat(chat)"
          >
            <div class="w-12 h-12 rounded-full bg-gray-300 mr-3"></div>
            <div class="flex-1">
              <div class="font-semibold">{{ chat.name }}</div>
              <div class="text-xs text-gray-500 truncate">{{ chat.message }}</div>
            </div>
            <span v-if="chat.unread" class="text-xs bg-red-500 text-white px-2 py-1 rounded-full">
              {{ chat.unread }}
            </span>
          </div>
        </div>
      </div>
      
      <!-- Chat Window -->
      <div class="w-2/3 flex flex-col">
        <div class="p-4 border-b text-lg font-bold flex justify-between items-center bg-gray-100">
          <span>{{ selectedChat.name }}</span>
          <button class="text-gray-600">&#8942;</button>
        </div>
        
        <!-- Messages Area -->
        <div class="flex-1 bg-gray-50 p-4 overflow-auto space-y-4 text-sm">
          <div v-for="(message, index) in chatMessages" :key="index" class="flex items-start space-x-3">
            <div class="w-8 h-8 rounded-full bg-gray-300"></div>
            <div class="bg-white p-3 rounded-lg shadow-md w-auto max-w-xs">
              <div class="text-sm font-bold text-green-600">{{ message.sender }}</div>
              <div class="text-xs text-gray-600">{{ message.text }}</div>
              <div class="text-xs text-gray-400 mt-1">{{ message.time }}</div>
            </div>
          </div>
        </div>

        <!-- Message Input -->
        <div class="p-4 border-t bg-white flex items-center test-xs">
          <input 
            v-model="newMessage" 
            type="text" 
            placeholder="Type a message here" 
            class="flex-1 p-2 border rounded-md text-sm"
            @keyup.enter="sendMessage"
          />
          <button 
            class="ml-2 bg-green-600 text-white px-4 py-2 rounded-md transition duration-200 hover:bg-green-700"
            @click="sendMessage"
          >
            Send
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { Icon } from '@iconify/vue';
import BaseSearchField from '@/components/Input-Fields/BaseSearchField.vue';
const showChatModal = ref(false);
const newMessage = ref('');
const selectedChat = ref({ name: 'orientalsuperstore' });

const chats = ref([
  { name: 'cpx_mall', message: '[Shop AI Assistant] Hello!', unread: null },
  { name: 'junseven89', message: 'Unsupported message', unread: 2 },
  { name: 'trxph', message: 'Hi, thanks for following!', unread: 21 },
  { name: 'Demasia', message: 'Hello dear friend...', unread: 3 },
  { name: 'sportsclubph', message: 'Hi, thanks for browsing!', unread: 3 },
]);

const chatMessages = ref([
  { sender: 'cpx_mall', text: 'Hello, how can I help you?', time: '10:30 AM' },
  { sender: 'You', text: 'I want to check my order status.', time: '10:32 AM' },
  { sender: 'cpx_mall', text: 'Your order has been shipped!', time: '10:33 AM' },
]);

const selectChat = (chat) => {
  selectedChat.value = chat;
  // Example: Load messages dynamically based on selected chat
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
</script>
