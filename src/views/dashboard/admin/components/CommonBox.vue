<template>
  <div class="box-wrapper">
    <div class="box add-product">
      <svg-icon icon-class="message" class-name="box-icon" />
      <span class="text">添加商品</span>
    </div>
    <div class="box product-categories">
      <svg-icon icon-class="message" class-name="box-icon" />
      <span class="text">添加商品</span>
    </div>
    <div class="box personal-info">
      <svg-icon icon-class="message" class-name="box-icon" />
      <span class="text">添加商品</span>
    </div>
    <div class="box system-setting">
      <svg-icon icon-class="message" class-name="box-icon" />
      <span class="text">添加商品</span>
    </div>
    <div class="box commodity-order">
      <svg-icon icon-class="message" class-name="box-icon" />
      <span class="text">添加商品</span>
    </div>
    <div class="box add-ad">
      <svg-icon icon-class="message" class-name="box-icon" />
      <span class="text">添加商品</span>
    </div>
    <div class="box add-article">
      <svg-icon icon-class="message" class-name="box-icon" />
      <span class="text">添加商品</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CommonBox'
}
</script>

<style lang="scss" scoped>
  .box-wrapper {
    height: 76px;
    display: flex;
    margin-top: 24px;
    .box{
      width: 111px;
      height: 76px;
      background: #36CFCA;
      margin-right: 27px;
      border-radius: 4px 0 0 4px;
      display: flex;
      flex-direction: column;
      color: #fff;
      font-size: 12px;
      justify-content: center;
      align-items: center;
      .box-icon {
        font-size: 22px;
      }
      .text {
        color: #fff;
        margin-top: 4px;
      }
    }
  }

</style>
