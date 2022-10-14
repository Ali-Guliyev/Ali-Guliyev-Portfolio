<template>
  <section id="about">
    <h1 class="title">About Me</h1>
    <p class="w-3/4 mx-auto text-sm md:text-base" v-if="about">
      {{ about.text }}
    </p>
    <h2 class="p-3 text-lg sm:text-xl font-bold mb-2">My Skills:</h2>
    <div
      class="skills max-w-3xl mx-auto flex flex-col gap-2 sm:gap-3 text-sm md:text-base"
    >
      <div
        class="skill bg-gray-300 rounded-full font-bold relative"
        v-for="skill in skills"
        :key="skill.id"
      >
        <div
          :style="{ width: `${skill.percentage}%` }"
          class="h-full bg-primary rounded-full py-3 sm:py-4 px-9 text-left"
        >
          <span>{{ skill.name }}</span>

          <span class="absolute right-8 top-1/2 transform -translate-y-1/2"
            >{{ skill.percentage }}%</span
          >
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { onMounted, onUpdated, ref, watch } from "@vue/runtime-core";
import service from "../services/service";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
export default {
  setup() {
    const about = ref(null);
    const skills = ref(null);

    onMounted(() => {
      service.getText().then((res) => {
        about.value = res.data;
      });
      service.getSkills().then((res) => {
        skills.value = res.data;
      });

      gsap.registerPlugin(ScrollTrigger);

      gsap.from(".skills", {
        duration: 0.7,
        x: "-100%",
        opacity: 0,
        scrollTrigger: ".skills",
      });
    });

    return {
      about,
      skills,
    };
  },
};
</script>
