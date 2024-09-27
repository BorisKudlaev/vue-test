import { defineStore } from 'pinia'

export const usePostsStore = defineStore('AppStore', () => {
  const viewedPosts = ref<number[]>([])

  function addViewedPosts (postId: number) {
    if (!viewedPosts.value.includes(postId)) {
      viewedPosts.value.push(postId)
      localStorage.setItem('viewedPosts', JSON.stringify(viewedPosts.value))
    }
  }

  function isViewedPosts (postId: number): boolean {
    return viewedPosts.value.includes(postId)
  }

  return { viewedPosts, addViewedPosts, isViewedPosts }
}, { persist: true })
