<template>
  <nav
    class="font-bold bg-secondary py-2 px-5 absolute top-0 left-0 w-full z-50"
  >
    <div class="flex justify-between items-center max-w-7xl mx-auto">
      <a href="#" class="logo" style="font-size: 19px">&lt;Ali Guliyev/&gt;</a>

      <ul class="flex justify-between" ref="links">
        <li class="navLink">
          <UserIcon />
          <span><a href="#">About</a></span>
        </li>
        <li class="navLink">
          <CollectionIcon />
          <span><a href="#">My Work</a></span>
        </li>
        <li class="navLink">
          <PhoneIcon />
          <span><a href="#">Contact me</a></span>
        </li>
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

    return { links };
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
