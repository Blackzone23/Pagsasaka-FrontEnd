<template>
    <div>
        <HomeNavbar/>
        <!-- Cover Photo Section -->
        <div class="coverPS" :style="{ backgroundImage: `url(${HomeCover1})` }">
            <!-- Main Content Wrapper -->
            <div class="mainCW">
                <!-- Main Text Section -->
                <div class="mainTS">
                    <p> Food's Journey <br>Connecting Farmers and <br> Consumers for a Healthier Future</p>
                </div>

                <!-- Subtext Section -->
                <div class="text-gray-300 2xl:text-lg 2xs:text-sm md:text-md">
                    <p>We bridge the gap between those who grow our <br>food and those who consume it, creating a healthier, <br>more connected food system for everyone.</p>
                </div>

                <!-- Button Section -->
                <div class="flex justify-end w-full">
                    <div class="flex space-x-4">
                        <a href="/login" class="bg-[#608C54] text-white py-2 px-12 rounded-lg text-sm hover:bg-[#4e7345]">Log in</a>
                        <a href="/signup" class="bg-white text-[#608C54] py-2 px-12 rounded-lg text-sm hover:bg-gray-200">Sign up</a>
                    </div>
                </div>
            </div>
        </div>

        <!--Below Cover-->
        <div class="mt-5">
            <div class="belowCover">
                <h1 class="belowCoverh">Pagsasaka Services</h1>
                <p class="belowCoverp">Provides services designed to help you</p>
            </div>

            <div class="belowCoverContainer">

                <!-- Hassle-Free Trading Section -->
                <div class="belowCoverContainer2">
                    <img :src="tractor" alt="Hassle-Free Trading" class="THFcontainer">
                    <h2 class="THFheader">Hassle-Free Trading</h2>
                    <p class="THFparagraph">Experience fast, secure, and <br> straightforward trading without the <br> complexities. Get started quickly and manage <br> your trades effortlessly, all in one intuitive platform.</p>
                </div>

                <!-- Farmer Support Hub Section -->
                <div class="belowCoverContainer2">
                    <img :src="barn" alt="Farmer Support Hub" class="THFcontainer">
                    <h2 class="THFheader">Farmer Support Hub</h2>
                    <p class="THFparagraph">Access expert tools, tips, and resources to <br> improve yields, manage your farm <br> efficiently, and stay informed on market <br> trends for better profitability.</p>
                </div>

                <!-- Connect with Farmers Section -->
                <div class="belowCoverContainer2">
                    <img :src="person" alt="Connect with Farmers" class="THFcontainer">
                    <h2 class="THFheader">Connect with Farmers</h2>
                    <p class="THFparagraph"> Connect directly with farmers <br> for fresh, high-quality produce <br> at fair prices, cutting out the middleman and <br> supporting local agriculture.</p>
                </div>
            </div>
            
            <n-marquee>
                <div style="margin-right: 64px" class="mt-20">
                    <h1 class="2xl:text-lg 2xs:text-xs font-semibold">Elevate Your Agricultural Business with Pagsasaka Services!</h1>
                </div>
            </n-marquee>

            <div class="freshConatainer">
                <div class="freshConatainer2">

                    <!-- Left Text -->
                    <p class="text-end"> We offer fresh products <br> while empowering <br> farmers to use <br> technology for <br> sustainable practices <br> and a steady supply of <br> quality goods. </p>

                    <div class="flex flex-col items-center text-black">
                        <img :src="Farm" alt="Farmer" class="h-32 w-56 mt-2">
                        <p class="2xl:text-lg 2xs:text-xs text-center mt-2"> Advancements in farming technology <br> boost efficiency, sustainability, and <br> yields. With precision farming, <br> automation, and AI, farmers optimize <br> resources, track supply and demand, <br> and increase profitability while <br> addressing food security. </p>
                    </div>
                </div>
            </div>

            <div class="bottomcontainer">
                    <div class="bottomcontainer2">
                        <!-- Left Side: Lettuce Images with Animation -->
                        <div class="lettuce">
                            <h1 class="joinUs">Join Us!</h1>
                            <hr class="borderL" />
                            <p class="paragraphL">Start buying and selling with <br> bulk discounts and <br> affordable prices.</p>
                           <div class="mt-7">
                                <a href="/signup" class="signupL"> Sign Up</a>
                           </div>
                        </div>
                        
                        <!-- Right Side: Join Us Text -->
                        <div class="Wave">
                            <img :src="Lettuce" alt="Lettuce on the left" class="imgL">
                        </div>
                    </div>
                </div>
            <Footer/>
        </div>
  </div>
</template>

<script setup>
import HomeCover1 from '@/assets/HomeCover1.png';
import person from '@/assets/person.png'
import tractor from '@/assets/tractor.png'
import barn from '@/assets/barn.png'
import Farm from '@/assets/Farm.png'
import Lettuce from '@/assets/Lettuce.png';
import philippine from '@/assets/philippine.png';
import Footer from '@/components/Input-Fields/Footer.vue';
import HomeNavbar from '@/components/Navbar/HomeNavbar.vue';
</script>

<style scoped>
</style>