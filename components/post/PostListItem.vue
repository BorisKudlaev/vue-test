<template>
  <NuxtLink :to="`/posts/${post.id}`" class="post" :class="{'post_viewed' : isViewedPosts()}">
    <div class="post__main-info">
      <h3 class="post__title">
        {{ post.id }}. {{ post.title }}
      </h3>
      <div class="post__content">
        {{ post.body }}
      </div>
    </div>
    <div class="post__second-info">
      <div class="post__author" @click="goAuthorPage($event, post.userId)">
        Автор поста id: {{ post.userId }}
      </div>
      <div v-if="isViewedPosts()" class="post__viewed-text">
        Просмотрено
      </div>
    </div>
  </NuxtLink>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router'
import type { IPost } from '~/types'
import { usePostsStore } from '~/store/posts'

const { post } = defineProps<{
  post: IPost
}>()

const postsStore = usePostsStore()

const router = useRouter()

const isViewedPosts = () => {
  return postsStore.isViewedPosts(post.id)
}

const goAuthorPage = (event:Event, userId:number) => {
  event.preventDefault()
  router.push(`/?author=${userId}`)
}

</script>

<style scoped lang="scss">
  .post {
    display: block;
    padding: 8px;
    border: 1px solid var(--color-gray);
    border-radius: 8px;
    margin-bottom: 16px;
    transition: border 0.3s ease-in;
    display: flex;
    @media(max-width: 768px) {
      flex-wrap: wrap;
    }
    &__main-info {
      padding-right: 8px;
      @media(max-width: 768px) {
        padding-right: 0;
        margin-bottom: 16px;
      }
    }
    &__second-info {
      margin-left: auto;
      flex-shrink: 0;
      @media(max-width: 768px) {
        margin-left: 0;
        display: flex;
        justify-content: space-between;
        width: 100%;
      }
    }
    &__author {
      font-size: 18px;
      margin-bottom: 4px;
      &:hover {
        color: var(--color-primary);
      }
    }
    &__viewed-text {
      color: var(--color-viewed);
    }
    &_viewed {
      border: 1px solid var(--color-viewed);
    }
    &:hover {
      border: 1px solid var(--color-primary);
    }
    &__title {
      text-transform: uppercase;
      margin-top: 0;
      margin-bottom: 8px;
    }
  }
</style>
