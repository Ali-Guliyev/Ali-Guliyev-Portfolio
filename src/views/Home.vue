<template>
  <Navbar />
  <Header />
  <About />
  <!-- My Work -->
  <!-- Contact Me -->
</template>

<script>
import Navbar from "../components/Navbar.vue";
import Header from "../components/Header.vue";
import About from "../components/About.vue";
export default {
  components: {
    Navbar,
    Header,
    About,
  },
};
</script>
