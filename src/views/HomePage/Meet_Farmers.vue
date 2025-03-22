<template>
    <div>
        <HomeNavbar/>
        <div class="Gradient">
            <div class="relative text-white">
                <!-- Top Section: Text -->
                <div class="text-center px-4 lg:px-32 space-y-2 mb-2">
                    <h1 class="2xl:text-6xl 2xs:text-2xl md:text-4xl sm:text-3xl font-sans font-bold">
                        Meet our Farmers
                    </h1>
                    <p class="2xl:text-xl 2xs:text-sm md:text-xl sm:text-2xl leading-relaxed">
                        Meet our farmers—the true reason we enjoy fresh, <br class="hidden 2xl:block">
                        quality food every day. It has been a privilege to <br class="hidden 2xl:block">
                        work alongside them for the past 10 years.
                    </p>
                </div>

                <!-- Bottom Section: Image -->
                <div class="flex items-center justify-center ">
                    <div class="w-full max-w-4xl">
                        <img :src="Farmer2"  alt="Farmer" class="mx-auto 2xl:w-full 2xs:w-[350px] lg:w-[650px] md:w-[550px] sm:w-[550px] 2xl:h-[350px] 2xs:h-[200px] sm:h-[300px] object-cover rounded-lg shadow-lg">
                    </div>
                </div>
            </div>
        </div>

        <div class="h-full bg-white">
            <div class="text-center px-4 lg:px-32 py-16 space-y-12">
                <!-- Paombong Farmers -->
                <div class="space-y-6">
                    <hr class="w-full mx-auto border-t-8 border-[#608C54]" />
                    <div class="text-start space-y-4 lg:px-10">
                        <h1 class="2xl:text-4xl 2xs:text-xl text-[#608C54] font-poppins font-bold">
                            Paombong Farmers
                        </h1>
                        <p class="2xl:text-lg 2xs:text-sm text-gray-700">
                            This dedicated group of 30 farmers from Paombong, Bulacan, is essential to our community, producing rice, fresh vegetables, and the famous sukang Paombong. They work tirelessly on their family-owned plots and collaborate to share resources and knowledge. Each week, they brave the elements to deliver their fresh harvests, bringing the unique flavors of Paombong to our tables.
                        </p>
                        <div class="flex justify-center">
                            <img :src="Farmer3" alt="Paombong Farmers" class="rounded-lg shadow-lg w-full 2xl:h-[500px] 2xs:h-[300px] object-cover">
                        </div>
                    </div>
                </div>

                <!-- Malolos Farmers -->
                <div class="space-y-6">
                    <hr class="w-full mx-auto border-t-8 border-[#608C54]" />
                    <div class="text-end space-y-4 lg:px-10">
                        <h1 class="2xl:text-4xl 2xs:text-xl text-[#608C54] font-poppins font-bold">
                            Malolos Farmers
                        </h1>
                        <p class="2xl:text-lg 2xs:text-sm text-gray-700">
                            This dedicated group of 25 farmers from Malolos, Bulacan, is essential to our local food system. They cultivate fragrant Malolos rice, fresh vegetables like tomatoes and eggplants, and tropical fruits such as mangoes and bananas. Committed to sustainable practices, they deliver the rich flavors of Malolos to our community each week, fostering strong bonds among themselves.
                        </p>
                        <div class="flex justify-end">
                            <img :src="Farmer4" alt="Malolos Farmers" class="rounded-lg shadow-lg 2xl:w-full 2xs:w-[300px] md:w-[500px] sm:w-[500px] 2xl:h-[500px] 2xs:h-[150px] md:h-[300px] sm:h-[300px] object-cover">
                        </div>
                    </div>
                </div>

                <!-- Calumpit Farmers -->
                <div class="space-y-6">
                    <hr class="w-full mx-auto border-t-8 border-[#608C54]" />
                    <div class="text-start space-y-4 lg:px-10">
                        <h1 class="2xl:text-4xl 2xs:text-xl text-[#608C54] font-poppins font-bold">
                            Calumpit Farmers
                        </h1>
                        <p class="2xl:text-lg 2xs:text-sm text-gray-700">
                            This dedicated group of 30 farmers from Calumpit, Bulacan, plays a vital role in our community. They cultivate renowned Calumpit shrimp and fresh vegetables like bitter melon and squash, along with sweet coconuts and juicy papayas. Committed to sustainable practices, they deliver the vibrant flavors of Calumpit to our tables each week, showcasing their dedication to quality and community.
                        </p>
                        <div class="flex justify-start">
                            <img :src="Farmer5" alt="Calumpit Farmers" class="rounded-lg shadow-lg w-full 2xl:h-[500px] 2xs:h-[300px] object-cover">
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
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