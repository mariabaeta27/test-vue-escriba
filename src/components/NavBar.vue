<template>
  <header class="navigation">
    <nav v-for="route in routes" :key="route.text">
      <RouterLink :to="route.path" class="route">
        <p v-html="route.icon" class="icon"></p>
        <p>{{ route.text }}</p>
      </RouterLink>
    </nav>
  </header>
</template>

<style scoped>
.navigation {
  border-radius: 5px;
  margin-right: 2rem;
  padding: 1rem;
  box-shadow: 4px 0px 22px -2px rgba(176, 176, 176, 0.75);
  -webkit-box-shadow: 4px 0px 22px -2px rgba(176, 176, 176, 0.75);
  -moz-box-shadow: 4px 0px 22px -2px rgba(176, 176, 176, 0.75);
}

.navigation nav {
  display: flex;
  flex-direction: column;
}

.navigation nav a {
  color: #3fb984;
  display: flex;
  flex-direction: column;
  margin-bottom: 1rem;
}

.icon {
  height: 30px;
  display: flex;
  justify-content: center;
}
</style>

<script setup lang="ts">
import { computed } from 'vue'
import { useStore } from 'vuex'
const store = useStore()
const routes = computed(() => store.state.routes)
</script>
