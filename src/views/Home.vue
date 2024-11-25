<template>
    <div>
        <HomeNavbar/>
        <!-- Cover Photo Section -->
        <div class="relative">
            <img :src="HomeCover1" alt="" class="min-h-screen">

            <!-- Main Text Section -->
            <div class="absolute top-64 left-24 transform -translate-y-1/2 text-white text-5xl font-bold">
                <p>Food's Journey <br> Connecting Farmers and <br> Consumers for a Healthier Future</p>
            </div>

            <!-- Subtext Section -->
            <div class="absolute top-96 left-24 transform -translate-y-1/2 text-gray-300 text-sm">
                <p>We bridge the gap between those who grow our <br> food and those who consume it, creating a healthier, <br> more connected food system for everyone</p>
            </div>
        </div>
          <!-- Button Section on the Right -->
          <div class="absolute bottom-32 right-32 transform -translate-y-1/2">
                <button class="bg-[#608C54] text-white px-14 py-2 rounded-lg mr-4 hover:bg-[#4e7345]">Log in</button>
                <button class="bg-white text-[#608C54] px-14 py-2 rounded-lg hover:bg-gray-200">Sign up</button>
            </div>

        <!--Mid Cover-->
        <div class="Gradient">
            <div class="content flex justify-between items-start p-2 top-32">
                    <!-- Small Box on the Left Side -->
                    <div class="bg-white p-6 shadow-lg rounded-md w-1/2 h-96 border-4 border-[#608C54] overflow-auto">
                        <h3 class="text-lg text-black font-semibold mb-4">Monthly Products Sold</h3>
                        <p class="text-xs text-black mb-6">This is a small box on the right side of the screen.</p>
                    <!-- Table inside the box -->
                    <table class="w-full table-auto">
                        <thead>
                            <tr class="bg-[#608C54] text-white text-sm">
                                <th class="py-2 px-4 border-b">Item Sold</th>
                                <th class="py-2 px-4 border-b">Total Sold</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr class="bg-white text-sm  text-black">
                                <td class=" px-4 border-b">Dinorado Rice</td>
                                <td class="px-4 border-b">875 KG</td>
                            </tr>
                            <tr class="bg-gray-300 text-sm text-black">
                                <td class="px-4 border-b">Sugarcane</td>
                                <td class="px-4 border-b">564 KG</td>
                            </tr>
                            <tr class="bg-white text-sm text-black">
                                <td class="px-4 border-b">Banana</td>
                                <td class="px-4 border-b">432 KG</td>
                            </tr>
                            <tr class="bg-gray-300 text-sm text-black">
                                <td class="px-4 border-b">Coffee Beans</td>
                                <td class="px-4 border-b">345 KG</td>
                            </tr>
                            <tr class="bg-white text-sm text-black">
                                <td class="px-4 border-b">Garlic</td>
                                <td class="px-4 border-b">333 KG</td>
                            </tr>
                            <tr class="bg-gray-300 text-sm text-black">
                                <td class="px-4 border-b">Pineapple</td>
                                <td class="px-4 border-b">250 KG</td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                <!-- Philippine Map Image with Matching Size -->
                <div class="w-1/2 h-96 flex justify-center items-center">
                <img :src="philippine" alt="Philippine Map" class="w-full">
                </div>
            </div>
        </div>

        <!--Below Cover-->
        <div class="mt-5">
            <div class="items-center text-center p-24">
                <h1 class="font-bold text-4xl">Pagsasaka Services</h1>
                <p class="text-xs">Provides services designed to help you</p>
            </div>

            <div class="container mx-auto flex justify-center space-x-16">

                <!-- Hassle-Free Trading Section -->
                <div class="flex flex-col items-center text-center">
                    <img :src="tractor" alt="Hassle-Free Trading" class="h-24 w-24">
                    <h2 class="font-bold text-sm mt-2">Hassle-Free Trading</h2>
                    <p class="text-xs mt-1">Experience fast, secure, and <br> straightforward trading without the <br> complexities. Get started quickly and manage <br> your trades effortlessly, all in one intuitive platform.</p>
                </div>

                <!-- Farmer Support Hub Section -->
                <div class="flex flex-col items-center text-center">
                    <img :src="barn" alt="Farmer Support Hub" class="h-24 w-24">
                    <h2 class="font-bold text-sm mt-2">Farmer Support Hub</h2>
                    <p class="text-xs mt-1">Access expert tools, tips, and resources to <br> improve yields, manage your farm <br> efficiently, and stay informed on market <br> trends for better profitability.</p>
                </div>

                <!-- Connect with Farmers Section -->
                <div class="flex flex-col items-center text-center">
                    <img :src="person" alt="Connect with Farmers" class="h-24 w-24 object-cover">
                    <h2 class="font-bold text-sm mt-2">Connect with Farmers</h2>
                    <p class="text-xs mt-1"> Connect directly with farmers <br> for fresh, high-quality produce <br> at fair prices, cutting out the middleman and <br> supporting local agriculture.</p>
                </div>
            </div>

            <div class="text-center mt-20">
                <h1 class="text-sm font-semibold">Elevate Your Agricultural Business with Pagsasaka Services!</h1>
            </div>

            <div class="bg-gray-200 h-full mt-10 flex justify-center items-center p-24">
                <div class="flex text-gray-500 text-3xl gap-9">

                    <!-- Left Text -->
                    <p class="text-end"> We offer fresh products <br> while empowering <br> farmers to use <br> technology for <br> sustainable practices <br> and a steady supply of <br> quality goods. </p>

                    <div class="flex flex-col items-center text-black">
                        <img :src="Farm" alt="Farmer" class="h-32 w-56 mt-2">
                        <p class="text-xs text-center mt-4"> Advancements in farming technology <br> boost efficiency, sustainability, and <br> yields. With precision farming, <br> automation, and AI, farmers optimize <br> resources, track supply and demand, <br> and increase profitability while <br> addressing food security. </p>
                    </div>
                </div>
            </div>
            <div class="w-full min-h-screen flex justify-center items-center bg-gray-100">
                    <div class="flex w-full max-w-screen-lg justify-center items-center gap-10">

                        <!-- Left Side: Lettuce Images with Animation -->
                        <div class="text-center text-[#608C54]">
                            <h1 class="text-8xl font-semibold mb-4">Join Us!</h1>
                            <hr class="w-1/2 mx-auto border-t-4 border-[#608C54]" />
                            <p class="text-2xl mt-2">Start buying and selling with <br> bulk discounts and <br> affordable prices.</p>
                           <div class="mt-6">
                                <a href="/signup" class=" px-8 py-3 bg-[#608C54] text-white text-xl font-medium rounded-lg hover:bg-[#4e7344] transition duration-200"> Sign Up</a>
                           </div>
                        </div>
                        

                        <!-- Right Side: Join Us Text -->
                        <div class="relative w-96 h-96 animate-wave">
                            <img :src="Lettuce" alt="Lettuce on the left" class="absolute top-0 left-0 w-full h-full opacity-90">
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