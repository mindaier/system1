<template>
  <div class="magement-wrapper">
    <shop-category />
    <class-form />
  </div>
</template>

<script>
import ShopCategory from './components/ShopCategory'
import ClassForm from './components/ClassForm'
export default {
  name: 'CategoryManagement',
  components: {
    ShopCategory,
    ClassForm
  }
}
</script>

<style lang="scss">
  .magement-wrapper {
    padding: 0 28px;
    display: flex;
  }
</style>
