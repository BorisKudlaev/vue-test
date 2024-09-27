<template>
  <NuxtLink :to="`/?author=${author.id}`" class="author">
    <h3 class="author__title">
      {{ author.id }}. {{ author.name }}
    </h3>
  </NuxtLink>
</template>

<script setup lang="ts">
import type { IAuthor } from '~/types'

const { author } = defineProps<{
  author: IAuthor
}>()

</script>

<style scoped lang="scss">
  .author {
    display: block;
    padding: 8px;
    border: 1px solid var(--color-gray);
    border-radius: 8px;
    margin-bottom: 16px;
    transition: border 0.3s ease-in;
    display: flex;
    &:hover {
      border: 1px solid var(--color-primary);
    }
  }
</style>
