<template>
  <div class="layout">
    <AppHeader />
    <div class="layout__body">
      <slot />
    </div>
  </div>
</template>

<style scoped lang="scss">
  .layout {
    &__body {
      padding-top: 16px;
    }
  }
</style>
