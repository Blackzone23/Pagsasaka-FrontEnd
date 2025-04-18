<template>
    <div class="h-screen flex flex-col md:flex-row">
        <!-- Conversation List -->
        <div class="p-4 border-r shadow-lg overflow-y-auto transition-all duration-300" :class="{ 'w-full md:w-1/3 bg-gray-100': !selectedChat || screenSize !== '2xs', 'hidden md:block md:w-1/3 bg-gray-100': selectedChat && screenSize === '2xs' }">
                <div class="flex justify-between">
                    <h2 class="text-lg text-[#1c520d] font-semibold mb-4">Chats</h2>
                    <a href="/market">
                        <Icon icon="pepicons-pencil:leave-circle" width="33" height="33" style="color: #1c520d" />
                    </a>
                </div>
                <ul>
                    <li v-for="chat in conversations" :key="chat.id" @click="selectChat(chat)" class="p-2 cursor-pointer hover:bg-gray-200 rounded-md flex items-center" :class="{ 'bg-blue-200': selectedChat?.id === chat.id }">
                        <img :src="chat.avatar" alt="Avatar" class="w-10 h-10 rounded-full mr-3" />
                        <div class="flex-1">
                        <span class="font-medium block">{{ chat.name }}</span>
                        <span class="text-sm text-gray-500">{{ chat.messages.length ? chat.messages[chat.messages.length - 1].text : 'No messages' }}</span>
                        </div>
                    </li>
                </ul>
        </div>
    
        <!-- Chat Messages -->
        <div class="flex flex-col border-l shadow-lg h-full transition-all duration-300" :class="{ 'w-full md:w-2/3 flex': selectedChat || screenSize !== '2xs', 'hidden': !selectedChat && screenSize === '2xs'}">
            <div v-if="selectedChat" class="flex flex-col h-full">
            <div class="p-4 bg-gray-100 border-b flex justify-between items-center">
                <h2 class="text-lg font-semibold">{{ selectedChat.name }}</h2>
                <button @click="closeChat" class="text-gray-500">Close</button>
            </div>
    
            <!-- Messages Area -->
            <div class="flex-1 bg-gray-50 p-4 overflow-auto space-y-4 2xl:text-sm 2xs:text-sm">
                <div v-for="(message, index) in selectedChat.messages" :key="index" class="flex items-start space-x-3" :class="{'justify-end': message.sent, 'justify-start': !message.sent}">
                    <div v-if="!message.sent" class="w-8 h-8 rounded-full bg-gray-300"></div>
                    <div class="p-3 rounded-lg shadow-md w-auto max-w-xs" :class="{'bg-green-500 text-white': message.sent, 'bg-gray-200 text-black': !message.sent}">
                        <p class="text-sm font-bold" :class="{'text-white': message.sent, 'text-green-600': !message.sent}">{{ message.sent ? 'You' : selectedChat.name }}</p>
                        <p class="text-xs">{{ message.text }}</p>
                    </div>
                    <div v-if="message.sent" class="w-8 h-8 rounded-full bg-gray-300"></div>
                </div>
            </div>
    
            <!-- Chat Input -->
            <div class="p-4 border-t flex items-center bg-gray-50">
                <input v-model="newMessage" @keyup.enter="sendMessage" type="text" class="flex-1 p-2 border rounded-md" placeholder="Type a message..." />
                <button @click="sendMessage" class="ml-2 bg-green-500 text-white px-4 py-2 rounded-lg">Send</button>
            </div>
            </div>
            <div v-else class="flex items-center justify-center flex-1 text-gray-500">Welcome to Pagsasaka Chat</div>
        </div>
    </div>
</template>
  
<script setup>
  import { ref, onMounted } from "vue";
  import { Icon } from "@iconify/vue";
  
  const conversations = ref([
    { id: 1, name: 'Alice', avatar: 'https://via.placeholder.com/40', messages: [
        { id: 1, text: 'Hey there!', sent: false },
        { id: 2, text: 'How are you?', sent: false },
        { id: 3, text: 'I am good, thanks!', sent: true }
      ] },
    { id: 2, name: 'Bob', avatar: 'https://via.placeholder.com/40', messages: [
        { id: 1, text: 'Hello!', sent: false },
        { id: 2, text: 'How was your day?', sent: true }
      ] }
  ]);
  
  const selectedChat = ref(null);
  const newMessage = ref('');
  const screenSize = ref('');
  
  const selectChat = (chat) => {
    selectedChat.value = chat;
  };
  
  const closeChat = () => {
    selectedChat.value = null;
  };
  
  const sendMessage = () => {
    if (newMessage.value.trim() && selectedChat.value) {
      selectedChat.value.messages.push({
        id: Date.now(),
        text: newMessage.value,
        sent: true
      });
      newMessage.value = '';
    }
  };
  
  const updateScreenSize = () => {
    const width = window.innerWidth;
    if (width < 400) {
      screenSize.value = '2xs';
    } else if (width < 640) {
      screenSize.value = 'xs';
    } else if (width < 768) {
      screenSize.value = 'sm';
    } else if (width < 1024) {
      screenSize.value = 'md';
    } else if (width < 1280) {
      screenSize.value = 'lg';
    } else if (width < 1536) {
      screenSize.value = 'xl';
    } else {
      screenSize.value = '2xl';
    }
  };
  
  onMounted(() => {
    updateScreenSize();
    window.addEventListener('resize', updateScreenSize);
  });
  </script>
  