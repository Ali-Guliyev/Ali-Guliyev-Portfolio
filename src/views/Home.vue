<template>
    <Navbar />
    <Header />
    <About />
    <Work />
    <Contact />
</template>

<script>
import Navbar from "../components/Navbar.vue";
import Header from "../components/Header.vue";
import About from "../components/About.vue";
import Work from "../components/Work.vue";
import Contact from "../components/Contact.vue";
import { onMounted } from "@vue/runtime-core";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
export default {
    components: {
        Navbar,
        Header,
        About,
        Work,
        Contact,
    },
    setup() {
        onMounted(() => {
            gsap.registerPlugin(ScrollTrigger);

            document.querySelectorAll(".title").forEach((el, i) => {
                gsap.from(el, {
                    duration: 1,
                    x: "-20px",
                    opacity: 0,
                    scrollTrigger: el,
                });
            });

            // document.querySelectorAll("p").forEach((el, i) => {
            //   gsap.from(el, {
            //     duration: 1,
            //     x: "-20px",
            //     opacity: 0,
            //     scrollTrigger: el,
            //   });
            // });
        });
    },
};
</script>
