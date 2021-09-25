<template>
  <Navbar />
  <Header />
  <About />
  <Work />
  <Contact />
</template>

<script>
import Navbar from "../components/Navbar.vue";
import Header from "../components/Header.vue";
import About from "../components/About.vue";
import Work from "../components/Work.vue";
import Contact from "../components/Contact.vue";
export default {
  components: {
    Navbar,
    Header,
    About,
    Work,
    Contact,
  },
};
</script>
