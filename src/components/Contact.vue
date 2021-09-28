<template>
  <section id="contact">
    <h1 class="title">Contact me</h1>

    <ul class="flex mx-auto justify-center items-center mb-2">
      <a
        class="contactIcon"
        target="new"
        href="https://twitter.com/AliGuliyev19"
      >
        <li>
          <img src="../assets/img/twitter.svg" alt="" />
          <span>Twitter</span>
        </li>
      </a>

      <a class="contactIcon" href="mailto:ali.guliyevoo7@gmail.com">
        <li>
          <img src="../assets/img/gmail.svg" alt="" />
          <span>Gmail</span>
        </li>
      </a>

      <a class="contactIcon" target="new" href="https://github.com/Ali-Guliyev">
        <li>
          <img src="../assets/img/github.svg" alt="" />
          <span>Github</span>
        </li>
      </a>
    </ul>

    <p class="copyright sm:fixed bottom-4 left-7 text-sm">© 2020 Ali Guliyev</p>
  </section>
</template>

<script>
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { onMounted } from "@vue/runtime-core";
export default {
  setup() {
    onMounted(() => {
      gsap.registerPlugin(ScrollTrigger);

      gsap.from(".contactIcon", {
        duration: 0.6,
        y: "-50%",
        opacity: 0,
        stagger: 0.1,
        scrollTrigger: ".contactIcon",
      });
    });
  },
};
</script>
