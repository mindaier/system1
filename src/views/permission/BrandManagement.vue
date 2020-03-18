<template>
  <div class="contianer">
    <brand-head />
    <brands-content />
  </div>
</template>

<script>
import BrandHead from './components/BrandHead'
import BrandsContent from './components/BrandsContent'

export default {
  name: 'BrandManagement',
  components: {
    BrandHead,
    BrandsContent
  }
}
</script>

<style lang="scss" scoped>
  .contianer {
    padding: 0 25px 0 27px;
  }
</style>
