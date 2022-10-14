<template>
  <section id="contact">
    <h1 class="title">Contact me</h1>

    <ul class="flex mx-auto justify-center items-center mb-2">
      <a
        v-for="link in socialLinks"
        class="contactIcon"
        target="new"
        :href="link.href"
        :key="link.id"
      >
        <li>
          <img :src="link.image" />
          <span>{{ link.name }}</span>
        </li>
      </a>
    </ul>

    <p class="copyright sm:fixed bottom-4 left-7 text-sm">© 2020 Ali Guliyev</p>
  </section>
</template>

<script>
import { gsap } from "gsap";
import { ref } from "vue";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { onMounted } from "@vue/runtime-core";
import service from "../services/service";
export default {
  setup() {
    const socialLinks = ref([]);

    onMounted(() => {
      service.getSocial().then((res) => {
        socialLinks.value = res.data;
      });

      gsap.registerPlugin(ScrollTrigger);

      gsap.from(".contactIcon", {
        duration: 0.6,
        y: "-50%",
        opacity: 0,
        stagger: 0.1,
        scrollTrigger: ".contactIcon",
      });
    });

    return { socialLinks };
  },
};
</script>
