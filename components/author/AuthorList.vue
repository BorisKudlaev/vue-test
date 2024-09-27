<template>
  <div class="container">
    <div class="authors">
      <h1>Список авторов</h1>
      <div v-if="authors && authors.length > 0" class="authors__list">
        <AuthorListItem
          v-for="author of authors"
          :key="author.id"
          :author="author"
        />
      </div>
      <div v-if="errorAuthors">
        Произошла ошибка, попробуйте позже
      </div>
      <div v-if="authors && authors.length === 0 && !errorAuthors">
        Список авторов пуст
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { IAuthor } from '~/types'

const { data: authors, error: errorAuthors } = await useAsyncData<IAuthor[]>('authors', () => $fetch('https://jsonplaceholder.typicode.com/users'))
</script>
