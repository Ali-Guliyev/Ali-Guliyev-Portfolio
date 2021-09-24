<template>
  <section>
    <h1 class="title">My Work</h1>
    <div>
      <div class="" v-for="project in projects" :key="project.id">
        <img :src="project.photoURL" alt="" />
        <span>{{ project.name }}</span>
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
