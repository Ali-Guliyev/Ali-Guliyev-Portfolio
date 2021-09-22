<template>
  <nav class="font-bold text-white bg-secondary">
    <h1 class="text-xl">&lt;Ali Guliyev/&gt;</h1>

    <ul>
      <li>
        <UserIcon class="w-4 h-4" />
        <span>About</span>
      </li>
      <li>
        <CollectionIcon class="w-4 h-4" />
        <span>My Work</span>
      </li>
      <li>
        <PhoneIcon class="w-4 h-4" />
        <span>Contact me</span>
      </li>
    </ul>
  </nav>
</template>

<script>
import { UserIcon, CollectionIcon, PhoneIcon } from "@heroicons/vue/outline";

export default {
  components: { UserIcon, CollectionIcon, PhoneIcon },
};
</script>
