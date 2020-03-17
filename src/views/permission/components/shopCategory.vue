<template>
  <ul class="list">
    <li v-for="(item, index) of list" :key="index" class="list-item">
      <div class="list-item-title" @click="handleClick">
        <svg-icon icon-class="peoples" class-name="file-icon" />
        {{ item.title }}
      </div>
      <div v-if="item.child">
        <shop-category :list="item.child" class="item-child" />
      </div>
    </li>
  </ul>
</template>

<script>
export default {
  name: 'ShopCategory',
  props: {
    list: Array
  },
  methods: {
    handleClick() {

    }
  }
}
</script>

<style lang="scss" scoped>
.list {
  padding-left: 16px;
  .list-item {
    list-style: none;
    color: #4C4C4C;
    font-size: 14px;

    .list-item-title {
      height: 34px;
      line-height: 34px;
      .file-icon{
        font-size: 18px;
        color: purple;
      }
    }
    .item-child {
      padding-left: 16px;
      line-height: 23px;
    }
  }
}

</style>
