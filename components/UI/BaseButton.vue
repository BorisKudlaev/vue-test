<template>
  <button class="btn">
    <slot />
  </button>
</template>

<style lang="scss" scoped>
  .btn {
    border: 1px solid var(--color-primary);
    border-radius: 4px;
    padding: 4px;
    cursor: pointer;
    transition: border 0.3s ease-in;
    &:hover {
      border: 1px solid var(--color-primary-secondary);
    }
  }
</style>
