<template>
  <div class="header">
    <div class="container">
      <ul class="nav">
        <li v-for="navItem of nav" :key="navItem.url" class="nav__item">
          <NuxtLink :to="navItem.url">
            {{ navItem.name }}
          </NuxtLink>
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup lang="ts">
const nav = [
  { name: 'Главная', url: '/' },
  { name: 'Просмотренные', url: '/?viewed' },
  { name: 'Авторы', url: '/authors' }
]
</script>
<style lang="scss" scoped>
  .header {
    background-color: var(--color-primary);
    height: 40px;
  }
  .nav {
    display: flex;
    align-items: center;
    height: 100%;
    &__item {
      margin-right: 16px;
      a {
        color: var(--color-white);
        &:hover {
          color: var(--color-gray);
        }
      }
    }
  }
</style>
