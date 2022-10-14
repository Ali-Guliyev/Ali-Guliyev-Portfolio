<template>
  <nav class="fixed top-0 left-0 font-bold bg-secondary py-2 px-5 w-full z-50">
    <div class="sm:flex justify-between items-center max-w-7xl mx-auto">
      <div class="flex justify-between items-center">
        <a href="#" class="logo text-sm sm:text-base">&lt;Ali Guliyev/&gt;</a>
        <div class="burger" @click="toggleMenu">
          <div class="line"></div>
          <div class="line"></div>
          <div class="line"></div>
        </div>
      </div>

      <ul class="hidden mt-2 sm:mt-0 sm:flex" ref="links">
        <a href="#about">
          <li class="navLink">
            <UserIcon />
            <span>About</span>
          </li>
        </a>
        <a href="#work">
          <li class="navLink">
            <CollectionIcon />
            <span>My Work</span>
          </li>
        </a>
        <a href="#contact">
          <li class="navLink">
            <PhoneIcon />
            <span>Contact me</span>
          </li>
        </a>
      </ul>
    </div>
  </nav>
</template>

<script>
import { UserIcon, CollectionIcon, PhoneIcon } from "@heroicons/vue/outline";
import { onMounted, ref } from "@vue/runtime-core";
import { gsap } from "gsap";

export default {
  components: { UserIcon, CollectionIcon, PhoneIcon },
  setup() {
    const links = ref(null);
    const timeline = gsap.timeline({ defaults: { duration: 0.7 } });

    const toggleMenu = () => {
      links.value.classList.toggle("hidden");
    };

    onMounted(() => {
      timeline
        .from("nav", { y: "-100%" })
        .from(".logo", { opacity: 0 })
        .from(".navLink", {
          opacity: 0,
          stagger: 0.1,
        });
    });

    return { links, toggleMenu };
  },
};
</script>
