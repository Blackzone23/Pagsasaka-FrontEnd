<template>
    <div>
        <HomeNavbar/>
        <div class="Gradient relative">
            <div class="text-center text-white p-10 md:p-32 space-y-4">
                <!-- Text Section -->
                <h1 class="2xl:text-6xl 2xs:text-lg md:text-4xl sm:text-4xl font-sans font-bold">What is CSA?</h1>
                <p class="2xl:text-xl 2xs:text-md md:text-lg sm:text-md">
                    Community-Shared Agriculture is Good Food Community's initiative to <br>
                    support smallholder farmers with better livelihoods, while delivering <br>
                    fresh, high-quality produce to you every week.
                </p>

                <!-- Image Section -->
                <div class="flex justify-center mt-10">
                    <img :src="Vegetable2" alt="Vegetables" class="2xl:h-[450px] 2xs:h-[100px] md:h-[300px] sm:h-[200px] w-full max-w-5xl">
                </div>
            </div>
        </div>
        <div class="2xl:h-full bg-white">
            <!-- Top Section -->
            <div class="text-center px-4 lg:px-32 py-16">
                <hr class="w-full mx-auto border-t-8 border-[#608C54]" />
                <div class="text-start mt-8 lg:px-10">
                    <h1 class="2xl:text-4xl 2xs:text-xl  md:text-2xl text-[#608C54] font-poppins font-bold">How Does It Work?</h1>
                    <p class="2xl:text-2xl md:text-lg mt-5 text-gray-700 leading-relaxed">
                        <span class="text-[#608C54]">Community Shared Agriculture (CSA)</span> is an alternative distribution system 
                        where a community supports local farms by purchasing products directly from a 
                        specific farm or group of farmers.
                    </p>
                </div>
            </div>

            <!-- Bottom Section -->
            <div class="flex flex-col lg:flex-row items-center lg:items-start lg:gap-10 px-4 lg:px-32 pb-16">
                <!-- Text Content -->
                <div class="text-left  space-y-6 text-gray-600 lg:flex-1">
                    <p class="2xl:text-xl 2xs:text-sm leading-relaxed">
                        "It's a partnership where a community of consumers commits to 
                        purchasing fresh, local produce from our farmers on a weekly basis, 
                        with convenient doorstep delivery. In return, our farmers are 
                        guaranteed a reliable market for their harvest, allowing them to 
                        focus on cultivating biodiverse and nutritious food."
                    </p>
                    <p class="2xl:text-xl 2xs:text-sm leading-relaxed">
                        "By purchasing a farmshare of organic, ethically grown food, we not 
                        only nourish ourselves and our loved ones with safe and nutritious 
                        produce, but also support the rights of our farmers to do the same. 
                        Our health is connected to theirs, and our community’s food 
                        security is intertwined with theirs."
                    </p>
                </div>

                <!-- Image Section -->
                <div class="lg:flex-1 mt-8 lg:mt-0">
                    <img :src="Farmer" alt="Farmer" class="w-full h-72 object-cover rounded-lg shadow-md">
                </div>
            </div>
        </div>
        <Footer/>
    </div>
</template>

<script setup>
import HomeNavbar from '@/components/Navbar/HomeNavbar.vue';
import Vegetable2 from '@/assets/Vegetable2.png';
import Footer from '@/components/Input-Fields/Footer.vue';
import Farmer from '@/assets/Farmer.png'
</script>