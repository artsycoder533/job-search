<template>
  <button :class="{ primary: primary}">
    {{ text }}
  </button>
</template>

<script>
export default {
  name: "ActionButton",
  props:  ["text"],
  data() {
    return {
      primary: true,
    };
  },
};
</script>

<style scoped>
button {
  @apply px-5 py-3 rounded font-medium;
}

.primary {
  @apply text-white bg-brand-blue-1 hover:shadow-blue;
}
</style>
