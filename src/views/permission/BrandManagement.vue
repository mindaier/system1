<template>
  <div class="contianer">
    <brand-head />
  </div>
</template>

<script>
import BrandHead from './components/BrandHead'

export default {
  name: 'BrandManagement',
  components: {
    BrandHead
  }
}
</script>

<style lang="scss" scoped>
  .contianer {
    padding: 0 25px 0 27px;
  }
</style>
