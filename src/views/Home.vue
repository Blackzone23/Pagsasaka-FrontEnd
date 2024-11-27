<template>
    <div>
        <HomeNavbar/>
        <!-- Cover Photo Section -->
        <div class="relative flex">
            <img :src="HomeCover1" alt="" class="w-full 2xl:h-screen 2xs:h-[580px]">

            <!-- Main Text Section -->
            <div class="absolute 2xl:top-64 2xs:top-80 2xl:left-24 2xs:left-10 2xl:transform 2xl:-translate-y-40 2xs:transform 2xs:-translate-y-60 lg:transform lg:-translate-y-52 text-white 2xl:text-5xl 2xs:text-2xl md:text-3xl font-bold">
                <p>Food's Journey <br> Connecting Farmers and <br> Consumers for a Healthier Future</p>
            </div>

            <!-- Subtext Section -->
            <div class="absolute 2xl:top-96 2xs:top-80 2xl:left-24 2xs:left-9 2xl:transform 2xl:-translate-y-[120px] 2xs:transform 2xs:-translate-y-24 lg:transform lg:-translate-y-20 text-gray-300 2xl:text-lg 2xs:text-xs  md:text-md">
                <p>We bridge the gap between those who grow our <br> food and those who consume it, creating a healthier, <br> more connected food system for everyone</p>
            </div>
        </div>
          <!-- Button Section on the Right -->
          <div class="absolute flex 2xl:bottom-32 2xs:bottom-52 2xl:right-32 2xs:right-14 2xl:transform 2xl:-translate-y-1/2 2xs:transform 2xs:-translate-y-16">
                <button class="bg-[#608C54] text-white 2xl:px-14 2xs:px-12 py-2 rounded-lg mr-4 hover:bg-[#4e7345] text-sm">Log in</button>
                <button class="bg-white text-[#608C54] 2xl:px-14 2xs:px-10 py-2 rounded-lg hover:bg-gray-200 text-sm">Sign up</button>
            </div>

        <!--Mid Cover-->
        <div class="Gradient">
            <div class="content flex justify-between items-start p-7 top-32">
                    <!-- Small Box on the Left Side -->
                    <div class="bg-white 2xl:p-6 2xs:p-2 shadow-lg rounded-md 2xl:w-1/2  2xs:w-[200px] lg:w-1/2 md:w-1/2 sm:w-1/2 2xl:h-96  2xs:h-80 border-4 border-[#608C54] 2xl:overflow-auto 2xs:overflow-y-auto">
                        <h3 class="2xl:text-lg 2xs:text-sm text-black font-semibold mb-4">Monthly Products Sold</h3>
                        <p class="text-xs text-black mb-6">This is a small box on the right side of the screen.</p>
                    <!-- Table inside the box -->
                    <table class="2xl:w-full 2xs:w-40 lg:w-full md:w-full sm:w-full table-auto">
                        <thead>
                            <tr class="bg-[#608C54] text-white text-sm">
                                <th class="py-2 2xl:px-4 2xs:px-2 border-b">Item Sold</th>
                                <th class="py-2 px-4 border-b">Total Sold</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr class="bg-white text-sm  text-black">
                                <td class=" 2xl:px-4 2xs:px-2 border-b">Dinorado Rice</td>
                                <td class=" 2xl:px-4 2xs:px-2 border-b">875 KG</td>
                            </tr>
                            <tr class="bg-gray-300 text-sm text-black">
                                <td class=" 2xl:px-4 2xs:px-2 border-b">Sugarcane</td>
                                <td class=" 2xl:px-4 2xs:px-2 border-b">564 KG</td>
                            </tr>
                            <tr class="bg-white text-sm text-black">
                                <td class=" 2xl:px-4 2xs:px-2 border-b">Banana</td>
                                <td class=" 2xl:px-4 2xs:px-2 border-b">432 KG</td>
                            </tr>
                            <tr class="bg-gray-300 text-sm text-black">
                                <td class=" 2xl:px-4 2xs:px-2 border-b">Coffee Beans</td>
                                <td class=" 2xl:px-4 2xs:px-2 border-b">345 KG</td>
                            </tr>
                            <tr class="bg-white text-sm text-black">
                                <td class=" 2xl:px-4 2xs:px-2 border-b">Garlic</td>
                                <td class=" 2xl:px-4 2xs:px-2 border-b">333 KG</td>
                            </tr>
                            <tr class="bg-gray-300 text-sm text-black">
                                <td class=" 2xl:px-4 2xs:px-2 border-b">Pineapple</td>
                                <td class=" 2xl:px-4 2xs:px-2 border-b">250 KG</td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                <!-- Philippine Map Image with Matching Size -->
                <div class=" 2xl:w-1/2 2xs:w-40 lg:w-1/2 md:w-1/2  sm:w-1/2 2xl:h-80 2xs:h-64 lg:h-80  flex justify-center items-center">
                <img :src="philippine" alt="Philippine Map" class="2xl:w-full 2xs:w-[200px] lg:w-full md:w-full sm:w-full">
                </div>
            </div>
        </div>

        <!--Below Cover-->
        <div class="mt-5">
            <div class="items-center text-center 2xl:p-24 2xs:p-10 space-y-2">
                <h1 class="font-bold 2xl:text-5xl 2xs:text-lg">Pagsasaka Services</h1>
                <p class="2xl:text-lg 2xs:text-xs">Provides services designed to help you</p>
            </div>

            <div class="container mx-auto flex justify-center 2xl:space-x-16 2xs:space-x-4">

                <!-- Hassle-Free Trading Section -->
                <div class="flex flex-col items-center text-center">
                    <img :src="tractor" alt="Hassle-Free Trading" class="2xl:h-24 2xs:h-16 2xl:w-24 2xs:w-16">
                    <h2 class="font-bold 2xl:text-lg 2xs:text-sm mt-2">Hassle-Free Trading</h2>
                    <p class="2xl:text-sm 2xs:text-xs mt-1">Experience fast, secure, and <br> straightforward trading without the <br> complexities. Get started quickly and manage <br> your trades effortlessly, all in one intuitive platform.</p>
                </div>

                <!-- Farmer Support Hub Section -->
                <div class="flex flex-col items-center text-center">
                    <img :src="barn" alt="Farmer Support Hub" class="2xl:h-24 2xs:h-16 2xl:w-24 2xs:w-16">
                    <h2 class="font-bold 2xl:text-lg 2xs:text-sm mt-2">Farmer Support Hub</h2>
                    <p class="2xl:text-sm 2xs:text-xs mt-1">Access expert tools, tips, and resources to <br> improve yields, manage your farm <br> efficiently, and stay informed on market <br> trends for better profitability.</p>
                </div>

                <!-- Connect with Farmers Section -->
                <div class="flex flex-col items-center text-center">
                    <img :src="person" alt="Connect with Farmers" class="2xl:h-24 2xs:h-16 2xl:w-24 2xs:w-16">
                    <h2 class="font-bold 2xl:text-lg 2xs:text-sm mt-2">Connect with Farmers</h2>
                    <p class="2xl:text-sm 2xs:text-xs mt-1"> Connect directly with farmers <br> for fresh, high-quality produce <br> at fair prices, cutting out the middleman and <br> supporting local agriculture.</p>
                </div>
            </div>

            <div class="text-center mt-20">
                <h1 class="text-md font-semibold">Elevate Your Agricultural Business with Pagsasaka Services!</h1>
            </div>

            <div class="bg-gray-200 w-full h-full mt-10 flex justify-center items-center 2xl:p-24 2xs:p-10">
                <div class="flex text-gray-500 2xl:text-4xl 2xs:xl 2xl:gap-9 2xs:gap-3">

                    <!-- Left Text -->
                    <p class="text-end"> We offer fresh products <br> while empowering <br> farmers to use <br> technology for <br> sustainable practices <br> and a steady supply of <br> quality goods. </p>

                    <div class="flex flex-col items-center text-black">
                        <img :src="Farm" alt="Farmer" class="h-32 w-56 mt-2">
                        <p class="2xl:text-lg 2xs:text-sm text-center mt-2"> Advancements in farming technology <br> boost efficiency, sustainability, and <br> yields. With precision farming, <br> automation, and AI, farmers optimize <br> resources, track supply and demand, <br> and increase profitability while <br> addressing food security. </p>
                    </div>
                </div>
            </div>
            <div class="2xl:w-full 2xs:w-[390px] lg:w-full md:w-full xs:w-full 2xl:h-screen 2xs:h-[400px] flex bg-gray-100">
                    <div class="flex w-full  justify-center items-center 2xl:gap-10 2xs:gap-5">

                        <!-- Left Side: Lettuce Images with Animation -->
                        <div class="text-center text-[#608C54]">
                            <h1 class="2xl:text-9xl 2xs:text-2xl font-semibold 2xl:mb-4 2xs:mb-2">Join Us!</h1>
                            <hr class="w-1/2 mx-auto border-t-4 border-[#608C54]" />
                            <p class="2xl:text-3xl 2xs:text-md mt-2">Start buying and selling with <br> bulk discounts and <br> affordable prices.</p>
                           <div class="mt-7">
                                <a href="/signup" class=" px-8 py-3 bg-[#608C54] text-white 2xl:text-xl 2xs:text-sm font-medium rounded-lg hover:bg-[#4e7344] transition duration-200"> Sign Up</a>
                           </div>
                        </div>
                        

                        <!-- Right Side: Join Us Text -->
                        <div class="relative 2xl:w-96 2xs:w-72 2xl:h-96 2xs:h-72 animate-wave">
                            <img :src="Lettuce" alt="Lettuce on the left" class="absolute top-0 left-0 2xl:w-full 2xs:w-[250px] 2xl:h-full 2xs:h-[250px] opacity-90">
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
@keyframes wave {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-10px); }
}

.animate-wave img:nth-child(1) { animation: wave 1s ease-in-out infinite; }
.animate-wave img:nth-child(2) { animation: wave 1s ease-in-out 0.2s infinite; }
.animate-wave img:nth-child(3) { animation: wave 1s ease-in-out 0.4s infinite; }

</style>