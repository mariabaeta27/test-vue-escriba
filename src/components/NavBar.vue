<script setup lang="ts">
// defineProps<{
//   msg: string
// }>()
import { UsersIcon, TagIcon, ClipboardDocumentCheckIcon } from '@heroicons/vue/24/outline'
</script>

<template>
  <!-- Preciso colocar para mudar a cor quando uma rota estiver selecionada -->
  <header class="navigation">
    <nav>
      <RouterLink to="/users">
        <UsersIcon class="icon" />
        Usuários
      </RouterLink>
      <RouterLink to="/products">
        <ClipboardDocumentCheckIcon class="icon" />
        Produtos
      </RouterLink>
      <RouterLink to="/orders">
        <TagIcon class="icon" />
        Pedidos
      </RouterLink>
    </nav>
  </header>
</template>

<style scoped>
.navigation {
  border-radius: 5px;
  margin-right: 3rem;
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
}
</style>
