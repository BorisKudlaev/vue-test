<template>
  <div class="container">
    <div class="posts">
      <h1>Список постов</h1>
      <div v-if="posts && posts.length > 0" class="posts__list">
        <PostListItem
          v-for="post of filteredPosts"
          :key="post.id"
          :post="post"
        />
      </div>
      <div v-if="errorPosts" class="text-center">
        Произошла ошибка, попробуйте позже
      </div>
      <div v-if="posts && posts.length === 0 && !errorPosts" class="text-center">
        Список постов пуст
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useRoute } from 'vue-router'
import { usePostsStore } from '~/store/posts'
import type { IPost } from '~/types'

const postsStore = usePostsStore()
const route = useRoute()

const currentPath = route.path

const { data: posts, error: errorPosts } = await useAsyncData<IPost[]>('posts', () => $fetch('https://jsonplaceholder.typicode.com/posts'))

const filteredPosts = ref<IPost[]>([])
const filterPosts = () => {
  if (!posts.value) {
    filteredPosts.value = []
    return
  };

  filteredPosts.value = posts.value

  const author = route.query.author
  if (author) {
    filteredPosts.value = posts.value.filter(post => post.userId === Number(author))
  }

  const viewed = route.query.viewed
  if (viewed || viewed === null) {
    const viewedPosts = new Set(postsStore.viewedPosts)
    filteredPosts.value = posts.value.filter(post => viewedPosts.has(post.id))
  }
}

watch(() => route.query, () => {
  if (currentPath === route.path) {
    filterPosts()
  }
})

filterPosts()
</script>
