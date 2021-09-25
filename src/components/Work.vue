<template>
  <section>
    <h1 class="title">My Work</h1>
    <div class="grid gap-10">
      <div
        class="bg-secondary rounded-xl overflow-hidden"
        v-for="project in projects"
        :key="project.id"
      >
        <img class="object-cover" :src="project.photoURL" alt="" />
        <div class="py-4 px-7 flex">
          <span class="font-bold">{{ project.name }}</span>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { ref } from "@vue/reactivity";
import service from "../services/service";
import { onMounted } from "@vue/runtime-core";
export default {
  setup() {
    const projects = ref(null);

    onMounted(() => {
      service.getProjects().then((res) => {
        projects.value = res.data;
        console.log(res.data);
      });
    });

    return {
      projects,
    };
  },
};
</script>
