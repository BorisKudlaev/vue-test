<template>
  <div class="container">
    <BaseButton @click="goBack">
      Назад
    </BaseButton>
    <div class="post">
      <div v-if="user && post?.author" class="post__author">
        Автор:
        <NuxtLink class="post__author-name" :to="`/?author=${user.id}`">
          <b>{{ post?.author }}</b>
        </NuxtLink>
      </div>
      <h3>
        Заголовок: {{ post?.title }}
      </h3>
      <div class="post__content">
        {{ post?.body }}
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useRoute, useRouter } from 'vue-router'
import BaseButton from '~/components/UI/BaseButton.vue'
import { usePostsStore } from '~/store/posts'
import type { IAuthor, IPost } from '~/types'

const router = useRouter()

const goBack = () => {
  router.go(-1)
}

const route = useRoute()
const { data: post } = await useAsyncData<IPost>('post', () => $fetch(`https://jsonplaceholder.typicode.com/posts/${route.params.id}`))
const { data: user } = await useAsyncData<IAuthor>(() => $fetch(`https://jsonplaceholder.typicode.com/users/${post.value?.userId}`),
  {
    pick: ['id', 'name']
  }
)

if (post.value !== null && user.value !== null) {
  post.value.author = user.value.name
}

const postsStore = usePostsStore()

onMounted(() => {
  postsStore.addViewedPosts(Number(route.params.id))
})

</script>

<style scoped lang="scss">
  .post {
    padding-top: 16px;
    &__author-name {
      transition: color 0.3s ease-in;
      &:hover {
        color: var(--color-primary);
      }
    }
  }
</style>
