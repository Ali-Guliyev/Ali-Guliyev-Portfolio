<template>
  <section id="work">
    <h1 class="title">My Work</h1>
    <div
      class="sm:px-12 grid lg:grid-cols-3 md:grid-cols-2 gap-2 max-w-7xl mx-auto"
    >
      <div
        class="project bg-secondary rounded-xl overflow-hidden m-2 flex flex-col"
        v-for="project in projects"
        :key="project.id"
      >
        <a class="overflow-hidden" target="_blank" :href="project.website">
          <img
            class="projectImage transition transform hover:scale-105 object-cover w-full"
            style="max-height: 150px"
            :src="project.photoURL"
          />
        </a>
        <div class="py-2 px-5 flex justify-between items-center">
          <span class="font-bold text-sm">{{ project.name }}</span>
          <a :href="project.code" target="_blank">
            <fa class="text-2xl" :icon="['fab', 'github']" />
          </a>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { ref } from "@vue/reactivity";
import service from "../services/service";
import { onMounted, onUpdated, watch } from "@vue/runtime-core";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
export default {
  setup() {
    const projects = ref(null);

    onMounted(() => {
      service.getProjects().then((res) => {
        projects.value = res.data;
      });
      gsap.registerPlugin(ScrollTrigger);
    });

    const animate = (el, isStagger) => {
      gsap.from(el, {
        duration: 0.7,
        y: "50%",
        opacity: 0,
        scrollTrigger: el,
        stagger: isStagger ? 0.1 : 0,
      });
    };

    onUpdated(() => {
      if (window.innerWidth < 750) {
        document.querySelectorAll(".project").forEach((el) => {
          animate(el);
        });
      } else {
        animate(".project", true);
      }
    });

    return {
      projects,
    };
  },
};
</script>
