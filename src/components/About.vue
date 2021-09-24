<template>
  <section id="about">
    <h1 class="title">About Me</h1>
    <p class="w-3/4 mx-auto text-sm md:text-base">{{ aboutText }}</p>
    <h2 class="p-3 text-lg sm:text-xl font-bold mb-2">My Skills:</h2>
    <ul
      class="max-w-3xl mx-auto flex flex-col gap-2 sm:gap-3 text-sm md:text-base"
    >
      <li
        class="bg-gray-300 rounded-full font-bold relative"
        v-for="skill in skills"
        :key="skill.id"
      >
        <div
          class="h-full bg-primary rounded-full py-3 sm:py-4 px-9 text-left"
          :style="{ width: `${skill.percentage}%` }"
        >
          <span>{{ skill.skill }}</span>

          <span class="absolute right-8 top-1/2 transform -translate-y-1/2"
            >{{ skill.percentage }}%</span
          >
        </div>
      </li>
    </ul>
  </section>
</template>

<script>
import { onMounted, ref } from "@vue/runtime-core";
import service from "../services/service";
export default {
  setup() {
    const aboutText = ref(null);
    const skills = ref(null);

    onMounted(() => {
      service.getText().then((res) => {
        aboutText.value = res.data.abouttext;
      });
      service.getSkills().then((res) => {
        skills.value = res.data;
      });
    });

    return {
      aboutText,
      skills,
    };
  },
};
</script>
