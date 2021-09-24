<template>
  <nav
    class="font-bold bg-secondary py-2 px-5 absolute top-0 left-0 w-full z-50"
  >
    <div class="sm:flex justify-between items-center max-w-7xl mx-auto">
      <div class="flex justify-between items-center">
        <a href="#" class="logo" style="font-size: 19px"
          >&lt;Ali Guliyev/&gt;</a
        >
        <div class="burger" @click="toggleMenu">
          <div class="line"></div>
          <div class="line"></div>
          <div class="line"></div>
        </div>
      </div>

      <ul class="hidden mt-2 sm:mt-0 sm:flex" ref="links">
        <a href="#about">
          <li class="navLink">
            <UserIcon />
            <span>About</span>
          </li>
        </a>
        <a href="#work">
          <li class="navLink">
            <CollectionIcon />
            <span>My Work</span>
          </li>
        </a>
        <a href="#contact">
          <li class="navLink">
            <PhoneIcon />
            <span>Contact me</span>
          </li>
        </a>
      </ul>
    </div>
  </nav>
</template>

<script>
import { UserIcon, CollectionIcon, PhoneIcon } from "@heroicons/vue/outline";
import { onMounted, ref } from "@vue/runtime-core";

export default {
  components: { UserIcon, CollectionIcon, PhoneIcon },
  setup() {
    const links = ref(null);

    const toggleMenu = () => {
      links.value.classList.toggle("hidden");
    };

    return { links, toggleMenu };
  },
};
</script>

<style>
nav {
  animation: nav 1s ease 1;
}

@keyframes nav {
  from {
    transform: translateY(-100%);
  }
  to {
    transform: translateY(0%);
  }
}

a.logo {
  animation: fade 2s ease 1 forwards;
}

@keyframes fade {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}
</style>
