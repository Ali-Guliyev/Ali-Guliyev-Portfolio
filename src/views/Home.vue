<template>
  <Navbar />
  <Header />
  <About />
  <Work />
  <!-- Contact Me -->
  <!-- <p class="fixed bottom-2 left-7 font-bold text-sm">© 2020 Ali Guliyev</p> -->
</template>

<script>
import Navbar from "../components/Navbar.vue";
import Header from "../components/Header.vue";
import About from "../components/About.vue";
import Work from "../components/Work.vue";
export default {
  components: {
    Navbar,
    Header,
    About,
    Work,
  },
};
</script>
