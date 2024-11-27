<template>
    <div>
        <HomeNavbar/>
        <div class="relative">
            <!-- Background Image -->
            <img :src="Farm2" alt="" class="2xl:w-full 2xs:w-[400px] lg:w-full  md:w-full sm:w-full 2xl:h-full 2xs:h-[300px] lg:h-[400px] md:h-[400px]">

            <!-- Box Overlay -->
            <div class="absolute inset-0 flex items-center justify-center 2xl:top-72 2xs:top-28 lg:top-36 md:top-40">
                <div class="bg-[#608C54] shadow-lg rounded-md 2xl:w-1/2 2xs:w-96 lg:w-1/2 md:w-1/2 2xl:h-72 2xs:h-50 lg:h-68 border-4 border-[#608C54]">
                    <h1 class="text-center text-white 2xl:text-4xl 2xs:text-xl lg:text-4xl  md:text-3xl font-semibold 2xl:py-5 2xs:py-2 lg:py-5">About Us</h1>
                    <hr class="w-1/2 mx-auto border-t-8 border-[#DAA520]" />
                    <p class="text-center 2xl:text-lg 2xs:text-xs lg:text-lg md:text-lg text-[#e6e1e1] py-4">Pagsasaka connects farmers directly with consumers, ensuring fair pricing <br> and access to fresh produce, livestock, and farming tools. Our platform <br> supports sustainable farming while empowering communities to make <br> informed food choices and fostering a thriving agricultural future.</p>
                </div>
            </div>
        </div>
        <div class=" flex items-center justify-center 2xl:gap-10 2xs:gap-5 2xl:p-32 2xs:p-8 lg:p-28 md:p-24">
            <!-- Small Box on the Left Side -->
            <div class="bg-[#608C54] shadow-lg rounded-md w-96 2xl:h-96 2xs:h-70 border-4 ">
                <img :src="CSA" alt="" class="w-full h-auto">
                <hr class="w-1/2 mt-1 justify-start ml-1  border-t-8 border-[#DAA520]" />
                <p class="text-xs text-white text-start ml-1">Community-Supported Agriculture (CSA) by Pagsasaka <br> enhances the livelihoods of smallholder farmers while <br> delivering the freshest produce to consumers every week.</p>
                <div class="flex justify-end mt-auto">
                    <a href="/services" class="text-xs px-2 mt-10 text-white hover:text-gray-300">Read More</a>
                </div>
            </div>
             <!-- Small Box on the Right Side -->
            <div class="bg-[#608C54] shadow-lg rounded-md w-96 2xl:h-96 2xs:h-68 border-4">
                <img :src="meetF" alt="" class="w-full h-auto">
                <hr class="w-1/2 justify-start mt-1 ml-1 border-t-8 border-[#DAA520]" />
                <p class="text-xs text-white text-start ml-1">Meet our farmers, the champions behind the exceptional <br> food we cherish. Their dedication empowers us to thrive <br> as a community, and we are proud to support their <br> commitment to quality and sustainability.</p>
                <div class="flex justify-end mt-auto">
                    <a href="/meet" class="text-xs px-2 mt-6 text-white hover:text-gray-300">Read More</a>
                </div>
            </div>
        </div>
        <div>
            <div class="bg-[#608C54] flex items-center 2xl:py-0 2xs:py-5 lg:py-10 md:py-10">
                <div class="flex items-center">
                    <img :src="tractor2" alt="Farmer" class="2xl:w-full 2xs:w-full lg:w-[400px] md:w-[400px] 2xl:h-full 2xs:h-28 lg:h-[200px] md:h-[300px] sm:h-[200px]">
                    <div class="">
                        <hr class="2xl:w-60 2xs:w-32 border-t-8 border-[#DAA520] ml-3 bottom-5 " />
                        <p class="2xl:text-xl 2xs:text-xs lg:text-lg md:text-lg sm:text-md ml-3 mt-2 text-white">
                            Our work is deeply connected to care and community. We prioritize <br> personal relationships while recognizing the links 
                            between the food we consume, <br> the future we aspire to create for  our children, and the role of biodiversity in <br> shaping 
                            our identity and sovereignty as Filipinos.
                        </p>
                    </div>
                </div>
            </div>
        </div>
        <div class="items-center flex justify-center 2xl:gap-10 2xs:gap-3 h-screen">
            <div class="bg-[#608C54] shadow-lg rounded-md 2xl:w-52 2xs:w-40  lg:w-52 md:w-52 2xl:h-52 2xs:h-44 lg:h-52 border-4 border-[#608C54] flex items-center justify-center">
                <h1 class="text-start 2xl:text-lg 2xs:text-sm lg:text-lg  text-white font-bold px-4">
                    What our Clients Say about Pagsasaka
                </h1>
            </div>
            <div class="bg-[#608C54] shadow-lg rounded-md 2xl:w-1/2 2xs:w-52 lg:w-1/2 md:w-1/2 sm:w-1/2 h-96 border-4 border-[#608C54] flex items-center justify-center relative">
                <!-- Slideshow Text -->
                <div v-for="(testimonial, index) in testimonials" :key="index" class="absolute transition-opacity duration-1000 ease-in-out" :class="{ 'opacity-100': currentTextIndex === index, 'opacity-0': currentTextIndex !== index }">
                    <p class="text-white 2xl:text-lg 2xs:text-sm lg:text-lg font-semibold text-center px-2"><img :src="quote" alt="" class="mb-5">"{{ testimonial.text }}" </p>
                    <p class="text-white 2xl:text-sm 2xs:text-xs lg:text-sm  font-medium text-center mt-2">— {{ testimonial.author }} </p>
                </div>
            </div>
        </div>
        <div class=" min-h-screen p-5">
            <div class="items-center  text-center">
                <h1 class="text-3xl font-serif font-bold mb-3">Introducing the leader steering the <br> vision that fuels our mission.</h1>
                <hr class="w-[200px] p-2 mx-auto border-t-8 border-[#608C54]" />
                <p class="text-xs font-sans">We are a diverse team with roots in various farming communities, each contributing unique perspectives, experiences, <br>  and expertise. This rich blend of backgrounds allows us to bring innovative solutions that bridge the gap between <br>  farmers and consumers, creating a more efficient and sustainable agricultural marketplace.</p>
            </div>
            <!-- Pictures Section -->
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 text-center mt-8">
                <!-- Member 1 -->
                 <div class="flex justify-center col-span-full">
                    <div class="flex 2xl:gap-20 2xs:gap-10 mt-4">
                        <div class="space-y-1">
                            <img :src="Document" alt="Leader 1" class="2xl:w-52 2xs:w-32 2xl:h-52 2xs:h-34 mx-auto rounded-full">
                            <hr class="2xl:w-[200px] 2xs:w-[90px] mt-1 justify-start ml-1  border-t-8 border-[#608C54]" />
                            <p class="2xl:text-sm 2xs:text-xs font-semibold">ABELA, Ace Seann</p>
                            <p class="text-xs">Documentary</p>
                        </div>
                        <!-- Member 2 -->
                        <div class="space-y-2">
                            <img :src="Designer" alt="Leader 2" class="2xl:w-52 2xs:w-32 2xl:h-52 2xs:h-34 mx-auto rounded-full">
                            <hr class="2xl:w-[200px] 2xs:w-[90px] mt-1 justify-start ml-1  border-t-8 border-[#608C54]" />
                            <p class="2xl:text-sm 2xs:text-xs font-semibold">ARCIGA,Kurt Steven</p>
                            <p class="text-xs">UI/UX</p>
                        </div>
                        <!-- Member 3 -->
                        <div class="space-y-2">
                            <img :src="FrontEnd" alt="Leader 3" class="2xl:w-52 2xs:w-32 2xl:h-52 2xs:h-34 mx-auto rounded-full">
                            <hr class="2xl:w-[200px] 2xs:w-[90px] mt-1 justify-start ml-1  border-t-8 border-[#608C54]" />
                            <p class="2xl:text-sm 2xs:text-xs font-semibold">DELA CRUZ, James Warren</p>
                            <p class="text-xs">Front End</p>
                        </div>
                    </div>
                 </div>
                <!-- Member 4 -->
                <div class="flex justify-center col-span-full">
                    <div class="flex gap-10 mt-4">
                        <!-- Member 4 -->
                        <div class="space-y-2">
                            <img :src="BackEnd" alt="Leader 4" class="2xl:w-52 2xs:w-32 2xl:h-52 2xs:h-[120px] mx-auto rounded-full">
                            <hr class="2xl:w-[200px] 2xs:w-[120px] mt-1 justify-start ml-1  border-t-8 border-[#608C54]" />
                            <p class="2xl:text-sm 2xs:text-xs font-semibold">GARINGA, Milbert</p>
                            <p class="text-xs">Back End</p>
                        </div>
                        <!-- Member 5 -->
                        <div class="space-y-2">
                            <img :src="BackEnd2" alt="Leader 5" class="2xl:w-52 2xs:w-32 2xl:h-52 2xs:h-[120px] mx-auto rounded-full">
                            <hr class="2xl:w-[200px] 2xs:w-[150px] mt-1 justify-start ml-1  border-t-8 border-[#608C54]" />
                            <p class="2xl:text-sm 2xs:text-xs font-semibold">LEONOR, John Meynard</p>
                            <p class="text-xs">Back End</p>
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
import Farm2 from '@/assets/Farm2.png';
import CSA from '@/assets/CSA.png';
import meetF from '@/assets/MeetF.png';
import quote from '@/assets/quote.png';
import tractor2 from '@/assets/tractor2.png';
import Footer from '@/components/Input-Fields/Footer.vue';
import FrontEnd from '@/assets/Warren.png';
import BackEnd from '@/assets/Milbert.png';
import Designer from '@/assets/Kurt.png';
import Document from '@/assets/Ace.png';
import BackEnd2 from '@/assets/Meynard.png';
import { ref, onMounted, onUnmounted } from 'vue';
import { useRouter } from 'vue-router';
import { useStore } from 'vuex';

const store = useStore();
const router = useRouter();

const currentTextIndex = ref(0);
const testimonials = [
    {
        text: "Sa tulong ng Pagsasaka, mas madali na ang pagbebenta ng aming mga ani. Nakakabenta kami ng mas mabilis at mas mataas ang kita. Salamat sa platform na ito na nag-uugnay sa amin sa mga mamimili.",
        author: "Juan Dela Cruz, Magsasaka",
    },
    {
        text: "Bilang isang mamimili, labis akong natutuwa sa Pagsasaka. Ang mga sariwang produkto mula sa mga lokal na magsasaka ay abot-kaya at mataas ang kalidad. Sa pamamagitan ng Pagsasaka, nakatutulong ako sa mga lokal na komunidad.",
        author: "Maria Santos, Mamimili",
    },
    {
        text: "Malaki ang naging tulong ng Pagsasaka sa aming pamilya. Ngayon, hindi na kami nag-aalala sa kung saan ibebenta ang aming mga produkto. Ang mga mamimili ay mas madali nang maabot, at kami ay nabibigyan ng mas magandang oportunidad sa negosyo.",
        author: "Pedro Reyes, Magsasaka",
    },
];

const startSlideshow = () => {
  setInterval(() => {
    currentTextIndex.value = (currentTextIndex.value + 1) % testimonials.length;
  }, 5000); // 3 seconds per slide
};

onMounted(startSlideshow);

</script>

<style scoped>
.opacity-0 {
  opacity: 0;
}
.opacity-100 {
  opacity: 1;
}
</style>