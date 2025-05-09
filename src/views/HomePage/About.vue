<template>
    <div>
        <HomeNavbar/>
        <div class="relative bg-cover bg-center" :style="{ backgroundImage: `url(${Farm2})` }">
            <!-- Main Content Section -->
            <div class="flex flex-col items-center justify-center h-full 2xl:py-32 2xs:py-16 lg:py-28 md:py-24 px-4">
                <div class="bg-[#608C54] shadow-lg rounded-md 2xl:w-1/2 2xs:w-96 lg:w-1/2 md:w-1/2 2xl:h-72 2xs:h-auto lg:h-68 border-4 border-[#608C54] p-6">
                    <h1 class="text-center text-white 2xl:text-4xl 2xs:text-xl lg:text-4xl md:text-3xl font-semibold 2xl:py-5 2xs:py-2 lg:py-5">About Us</h1>
                    <hr class="w-1/2 mx-auto border-t-8 border-[#DAA520]" />
                    <p class="text-center 2xl:text-lg 2xs:text-xs lg:text-lg md:text-lg text-[#e6e1e1] py-4">
                        Pagsasaka connects farmers directly with consumers, ensuring fair pricing <br>
                        and access to fresh produce, livestock, and farming tools. Our platform <br>
                        supports sustainable farming while empowering communities to make <br>
                        informed food choices and fostering a thriving agricultural future.
                    </p>
                </div>
            </div>
        </div>

        <!-- Small Boxes Section -->
        <div class="flex flex-wrap items-center justify-center gap-10 2xl:p-32 2xs:p-8 lg:p-28 md:p-24">
            
            <!-- Small Box on the Right Side -->
            <div class="bg-[#608C54] shadow-lg rounded-md 2xl:w-[500px] 2xl:h-[580px] 2xs:h-auto border-4">
                <img :src="meetF" alt="" class="w-full h-auto">
                <hr class="w-1/2 mt-1 ml-1 border-t-8 border-[#DAA520]" />
                    <p class="2xl:text-lg 2xs:text-xs text-white text-start ml-1">
                    Meet our farmers, the champions behind the exceptional <br>
                    food we cherish. Their dedication empowers us to thrive <br>
                    as a community, and we are proud to support their <br>
                    commitment to quality and sustainability.
                    </p>
                <div class="flex justify-end mt-auto">
                    <a href="/meet" class="2xl:text-lg 2xs:text-xs px-2 mt-6 text-white hover:text-gray-300">Read More</a>
                </div>
            </div>
        </div>

        <div>
            <div class="bg-[#608C54] flex items-center 2xl:py-10 2xs:py-5 lg:py-10 md:py-10">
                <div class="flex flex-col lg:flex-row items-center lg:items-start w-full space-y-5 lg:space-y-0 lg:space-x-5 px-4">
                    <!-- Image Section -->
                    <img :src="tractor2" alt="Farmer" class="2xl:w-auto 2xs:w-full md:w-[600px] sm:w-[500px] 2xl:h-auto 2xs:h-[200px]  md:h-[300px] sm:h-[260px]"/>

                    <!-- Text Section -->
                    <div class="text-center lg:text-left">
                        <hr class="2xl:w-60 2xs:w-32 border-t-8 border-[#DAA520] mx-auto lg:ml-3 lg:mx-0" />
                        <p class="2xl:text-xl 2xs:text-sm lg:text-lg md:text-md sm:text-sm text-white mt-2 lg:ml-3">
                            Our work is deeply connected to care and community. We prioritize <br class="hidden md:block" />
                            personal relationships while recognizing the links between the food we consume, <br class="hidden md:block" />
                            the future we aspire to create for our children, and the role of biodiversity in <br class="hidden md:block" />
                            shaping our identity and sovereignty as Filipinos.
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
                <h1 class="2xl:text-4xl 2xs:text-2xl font-serif font-bold mb-3">Introducing the leader steering the <br> vision that fuels our mission.</h1>
                <hr class="w-[200px] p-2 mx-auto border-t-8 border-[#608C54]" />
                <p class="2xl:text-lg 2xs:text-xs font-sans">We are a diverse team with roots in various farming communities, each contributing unique perspectives, experiences, <br>  and expertise. This rich blend of backgrounds allows us to bring innovative solutions that bridge the gap between <br>  farmers and consumers, creating a more efficient and sustainable agricultural marketplace.</p>
            </div>
            <!-- Pictures Section -->
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 text-center mt-8">
                <!-- Members Row 1 -->
                <div class="flex justify-center col-span-full">
                    <div class="flex 2xl:gap-20 2xs:gap-10 mt-4">
                        <!-- Member 1 -->
                        <div class="space-y-2">
                            <img :src="Document" alt="Leader 1" 
                                class="2xl:w-52 2xs:w-32 2xl:h-52 2xs:h-34 xs:w-28 xs:h-28 mx-auto rounded-full border-4 border-[#608C54]">
                            <hr class="2xl:w-[200px] 2xs:w-[90px]  lg:w-[120px] mt-1 justify-start ml-1 border-t-8 border-[#608C54]" />
                            <p class="2xl:text-sm 2xs:text-xs font-semibold">ABELA, Ace Seann</p>
                            <p class="text-xs">Documentary</p>
                        </div>
                        <!-- Member 2 -->
                        <div class="space-y-2">
                            <img :src="Designer" alt="Leader 2" 
                                class="2xl:w-52 2xs:w-32 2xl:h-52 2xs:h-34 xs:w-28 xs:h-28 mx-auto rounded-full border-4 border-[#608C54]">
                            <hr class="2xl:w-[200px] 2xs:w-[90px] lg:w-[120px] xs:w-[110px] mt-1 justify-start ml-1 border-t-8 border-[#608C54]" />
                            <p class="2xl:text-sm 2xs:text-xs font-semibold">ARCIGA, Kurt Steven</p>
                            <p class="text-xs">Full Stack Developer</p>
                        </div>
                        <!-- Member 3 -->
                        <div class="space-y-2">
                            <img :src="FrontEnd" alt="Leader 3" 
                                class="2xl:w-52 2xs:w-28 2xl:h-52 2xs:h-28 xs:w-28 xs:h-28 mx-auto rounded-full border-4 border-[#608C54]">
                            <hr class="2xl:w-[200px] 2xs:w-[90px] lg:w-[150px] xs:w-[130px] mt-1 justify-start ml-1 border-t-8 border-[#608C54]" />
                            <p class="2xl:text-sm 2xs:text-xs font-semibold">DELA CRUZ, James Warren</p>
                            <p class="text-xs">Front End</p>
                        </div>
                    </div>
                </div>

                <!-- Members Row 2 -->
                <div class="flex justify-center col-span-full">
                    <div class="flex gap-10 mt-4">
                        <!-- Member 4 -->
                        <div class="space-y-2">
                            <img :src="BackEnd" alt="Leader 4" 
                                class="2xl:w-52 2xs:w-32 2xl:h-52 xs:w-28 xs:h-28 2xs:h-[120px] mx-auto rounded-full border-4 border-[#608C54]">
                            <hr class="2xl:w-[200px] 2xs:w-[120px] mt-1 justify-start ml-1 border-t-8 border-[#608C54]" />
                            <p class="2xl:text-sm 2xs:text-xs font-semibold">GARINGA, Milbert</p>
                            <p class="text-xs">Back End</p>
                        </div>
                        <!-- Member 5 -->
                        <div class="space-y-2">
                            <img :src="BackEnd2" alt="Leader 5" 
                                class="2xl:w-52 2xs:w-32 2xl:h-52 xs:w-28 xs:h-28 2xs:h-[120px] mx-auto rounded-full border-4 border-[#608C54]">
                            <hr class="2xl:w-[200px] 2xs:w-[150px] mt-1 justify-start ml-1 border-t-8 border-[#608C54]" />
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