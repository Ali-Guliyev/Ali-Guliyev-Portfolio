<template>
  <section class="min-h-screen flex justify-between items-center relative">
    <AnimatedBackground :nums="20" :variants="['0', '1']" />
    <header class="z-10 w-full">
      <div
        class="max-w-7xl mx-auto px-16 medium:flex justify-between items-center"
      >
        <div class="medium:text-left text-center">
          <span>
            <span class="text-xl sm:text-xl medium:text-2xl">Hi I am</span>
            <h1
              class="ml-1 text-xl sm:text-2xl medium:text-4xl font-bold inline"
            >
              Ali Guliyev
            </h1>
          </span>
          <span class="block text-sm sm:text-lg">The Web Developer</span>
        </div>
        <img
          class="mx-auto mt-5 medium:mt-0"
          src="../assets/img/developer.svg"
          alt=""
        />
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
