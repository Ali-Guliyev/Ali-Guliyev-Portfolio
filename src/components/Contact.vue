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
import { ref } from "vue";
import { onMounted } from "@vue/runtime-core";
import service from "../services/service";
export default {
  setup() {
    const socialLinks = ref([]);

    onMounted(() => {
      service.getSocial().then((res) => {
        socialLinks.value = res.data;
      });
    });

    return { socialLinks };
  },
};
</script>
