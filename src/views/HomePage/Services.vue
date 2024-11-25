<template>
    <div>
        <HomeNavbar/>
        <div class="Gradient relative">
            <div class="text-center items-center text-white p-32 space-y-4"> <!-- Decreased padding -->
                <h1 class="text-6xl font-sans font-bold">What is CSA?</h1>
                <p>Community-Shared Agriculture is Good Food Community's initiative to <br> support smallholder farmers with better livelihoods, while delivering <br> fresh, high-quality produce to you every week.</p>
            </div>
            <div class="absolute inset-0 flex items-center justify-center top-[450px]">
                <div>
                    <img :src="Vegetable2" alt="" class="h-[450px] w-full">
                </div>
            </div>
        </div>
        <div class="h-screen">
            <div class="text-center p-32">
                <hr class="w-full p-2 mx-auto border-t-8 border-[#608C54]" />
                <div class="text-start p-10">
                    <h1 class="text-4xl text-[#608C54] font-poppins font-bold ">How Does It Work?</h1>
                    <p class="mt-5"><span class="text-[#608C54]">Community Shared Agriculture (CSA)</span> is an alternative distribution system <br> where a community supports local farms by purchasing products directly from a <br> specific farm or group of farmers.</p>
                    <div class="p-10 flex items-center gap-4 ">
                        <div class="text-left max-w-2xl space-y-3 text-gray-500">
                            <p>"It's a partnership where a community of consumers commits to <br> purchasing fresh, local produce from our farmers on a weekly basis, <br> with convenient doorstep delivery. In return, our farmers are <br> guaranteed a reliable market for their harvest, allowing them to <br> focus on cultivating biodiverse and nutritious food."</p>
                            <p>"By purchasing a farmshare of organic, ethically grown food, we not <br> only nourish ourselves and our loved ones with safe and nutritious <br> produce, but also support the rights of our farmers to do the same. <br> Our health is connected to theirs, and our community’s food <br> security is intertwined with theirs."</p> 
                        </div>
                        <div>
                            <img :src="Farmer" alt="Farmer" class="w-full h-72">
                        </div>
                    </div>
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