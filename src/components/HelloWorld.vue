<script setup lang="ts">
defineProps<{ msg: string }>();
</script>

<template>
  <div class="greetings">
    <h2 class="text-gradient">{{ msg }}</h2>
    <h3 class="mb-5">
      This is a zero-config Vue3 template， based
      <a href="https://github.com/moliu666/vue3-ts-template" target="_blank" rel="noopener">vue3-ts-template</a>
    </h3>
    <p>
      <a href="https://github.com/moliu666/vue3-ts-template" target="_blank">Click here</a>
      to see how the project was set up ！
    </p>
  </div>
</template>

<style lang="postcss" scoped>
.text-gradient {
  font-weight: 500;
  background: linear-gradient(315deg, #42d392 25%, #647eff);
  background-clip: text;
  -webkit-text-fill-color: transparent;
}

.greetings {
  h2 {
    text-align: center;
  }

  h3 {
    font-size: 1.2rem;
    text-align: center;
  }

  p {
    text-align: center;
  }
}

@media (min-width: 1024px) {
  .greetings {
    h2 {
      text-align: left;
    }

    h3 {
      text-align: left;
    }
  }
}
</style>
