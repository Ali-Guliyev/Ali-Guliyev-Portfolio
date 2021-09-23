<template>
  <ul ref="canvas" class="canvas absolute top-0 left-0 w-full h-full z-0"></ul>
</template>

<script>
import { ref } from "@vue/reactivity";
import { onMounted } from "@vue/runtime-core";
export default {
  props: ["nums", "variants"],
  setup(props) {
    const canvas = ref(null);

    onMounted(() => {
      let fps = 10;
      for (let i = 0; i < props.nums; i++) {
        let numberEl = document.createElement("li");
        numberEl.classList.add("number");
        numberEl.textContent =
          props.variants[Math.floor(Math.random() * props.variants.length)];
        numberEl.setAttribute(
          "style",
          `top: ${Math.random() * 100}%; left: ${Math.random() * 100}%`
        );
        canvas.value.appendChild(numberEl);
      }

      setInterval(() => {}, fps);
    });

    return { canvas };
  },
};
</script>

<style>
.number {
  position: absolute;
  font-size: 14px;
}
</style>
