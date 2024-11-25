<template>
    <div>
        <HomeNavbar/>
        <div class="Gradient relative">
            <div class="text-center items-center text-white p-32 space-y-4"> <!-- Decreased padding -->
                <h1 class="text-6xl font-sans font-bold">Meet our Farmers</h1>
                <p>Meet our farmers—the true reason we enjoy fresh, <br> quality food every day. It has been a privilege to <br> work alongside them for the past 10 years.</p>
            </div>
            <div class="absolute inset-0 flex items-center justify-center top-[450px]">
                <div>
                    <img :src="Farmer2" alt="" class="h-[450px] w-full">
                </div>
            </div>
        </div>
        <div class="h-screen">
            <div class="text-center p-32">
                <hr class="w-full p-2 mx-auto border-t-8 border-[#608C54]" />
                <div class="text-start p-10 space-y-6">
                    <h1 class="text-4xl text-[#608C54] font-poppins font-bold ">Paombong Farmers</h1>
                    <p class="mt-5">This dedicated group of 30 farmers from Paombong, Bulacan, is essential to our community, producing rice, fresh vegetables, and the famous sukang Paombong.
                         They work tirelessly on their family-owned plots and collaborate to share  resources and knowledge. Each week, they brave the elements to deliver their  fresh harvests, bringing the unique flavors of Paombong to our tables.</p>
                    <div class="flex items-center ">
                        <div>
                            <img :src="Farmer3" alt="Farmer" class="w-full h-80">
                        </div>
                    </div>
                </div>
                <hr class="w-full p-2 mx-auto border-t-8 border-[#608C54]" />
                <div class="text-end p-10 space-y-6">
                    <h1 class="text-4xl text-[#608C54] font-poppins font-bold ">Malolos Farmers</h1>
                    <p class="mt-5">This dedicated group of 25 farmers from Malolos, Bulacan, is essential to our local food system. They cultivate fragrant Malolos rice, <br> fresh vegetables like tomatoes and eggplants, and tropical fruits such as mangoes and bananas. 
                        Committed to sustainable <br> practices, they deliver the rich flavors of Malolos to our community each week, fostering strong bonds among themselves.</p>
                    <div class="flex justify-end ">
                        <div>
                            <img :src="Farmer4" alt="Farmer" class="w-full h-80">
                        </div>
                    </div>
                </div>
                <hr class="w-full p-2 mx-auto border-t-8 border-[#608C54]" />
                <div class="text-start p-10 space-y-6">
                    <h1 class="text-4xl text-[#608C54] font-poppins font-bold ">Calumpit Farmers</h1>
                    <p class="mt-5">This dedicated group of 30 farmers from Calumpit, Bulacan, plays a vital role in our community. They cultivate renowned Calumpit shrimp and fresh vegetables like bitter melon and squash, 
                        along with sweet coconuts and juicy papayas. Committed to sustainable practices, they deliver the vibrant flavors of Calumpit to our tables each week, showcasing their dedication to quality and community..</p>
                    <div class="flex justify-start ">
                        <div>
                            <img :src="Farmer5" alt="Farmer" class="w-full h-80">
                        </div>
                    </div>
                </div>
            </div>
            <Footer/>
        </div>
    </div>
</template>

<script setup>
import HomeNavbar from '@/components/Navbar/HomeNavbar.vue';
import Footer from '@/components/Input-Fields/Footer.vue';
import Farmer2 from '@/assets/Farmer2.png';
import Farmer3 from '@/assets/Farmer3.png';
import Farmer4 from '@/assets/Farmer4.png';
import Farmer5 from '@/assets/Farmer5.png';
</script>