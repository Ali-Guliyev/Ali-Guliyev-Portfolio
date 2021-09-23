<template>
  <section class="min-h-screen flex justify-between items-center relative">
    <AnimatedBackground :nums="20" :variants="['0', '1']" />
    <header class="z-10 w-full">
      <div
        class="w-full container mx-auto px-4 flex justify-between items-center"
      >
        <div>
          <span>
            <span class="text-3xl">Hi I am</span>
            <h1 class="ml-5 text-4xl font-bold inline">Ali Guliyev</h1>
          </span>
          <span class="block text-lg">The Web Developer</span>
        </div>
        <img src="../assets/img/developer.svg" alt="" />
      </div>
    </header>
  </section>
</template>

<script>
import AnimatedBackground from "./AnimatedBackground.vue";
export default {
  components: { AnimatedBackground },
};
</script>
