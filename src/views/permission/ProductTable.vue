<template>
  <div class="product-table-wrapper">
    <!-- 头部搜索栏 -->
    <el-form :inline="true" :model="productSearch" class="product-search">
      <el-form-item label="产品名称">
        <el-input v-model="productSearch.name" placeholder="输入品牌名称" />
      </el-form-item>
      <el-form-item label="添加时间" class="add-time">
        <el-input
          v-model="productSearch.date"
          placeholder="请选择日期"
          suffix-icon="el-icon-date"
        />
      </el-form-item>
      <el-form-item>
        <el-button type="primary" icon="el-icon-search" @click="onSubmit">查询</el-button>
      </el-form-item>
    </el-form>
    <!-- 添加/删除按钮 -->
    <div class="btn-wrapper">
      <el-row>
        <el-button type="primary" icon="el-icon-edit">添加商品</el-button>
        <el-button type="danger" class="delete-icon" icon="el-icon-delete">批量删除</el-button>
      </el-row>
    </div>
    <div class="main-wrapper">
      <!-- 左侧分类列表 -->
      <!-- <shop-category /> -->
      <!-- 右侧商品表单 -->
      <product-select />
    </div>
  </div>
</template>

<script>
// import ShopCategory from './components/ShopCategory'
import ProductSelect from './components/ProductSelect'
export default {
  name: 'ProductTable',
  components: {
    // ShopCategory,
    ProductSelect
  },
  data() {
    return {
      productSearch: {
        name: '',
        date: ''
      }
    }
  },
  methods: {
    onSubmit() {
      console.log('submit!')
    }
  }
}
</script>

<style lang="scss">
  // 顶部搜索栏
  .product-table-wrapper .el-form-item--medium .el-form-item__label {
    line-height: 30px;
    width: 56px;
    font-size: 13px;
    padding: 0 4px 0 0;
  }
  .product-table-wrapper .el-input,
  .product-table-wrapper .el-input--medium .el-input__inner {
    width: 200px;
    height: 30px;
    line-height: 30px;
  }
  .el-form-item--medium .el-form-item__content {
    line-height: 30px;
  }
  .product-table-wrapper .el-form--inline .el-form-item {
    margin-right: 26px;
  }

  .product-table-wrapper .el-button--medium {
    padding: 7px 18px;
    font-size: 13px;
    background: #1890FF;
  }
  .product-table-wrapper .el-form--inline .add-time.el-form-item{
    margin-right: 12px;
  }
  .product-table-wrapper .el-form-item {
    margin-bottom: 20px;
  }

  // 添加 删除按钮
  .product-table-wrapper .el-button--medium {
    padding: 9px 18px;
    background: #FF9800;
    border: none;
  }
  .product-table-wrapper .el-button--medium.delete-icon {
    background: #FF5157;
  }

  // 商品分类
  .product-table-wrapper .nav-container {
    margin-right: 4px;
  }

  // 右侧商品表单
  .product-table-wrapper .main-wrapper .app-container{
    padding: 0;
    width: 100%;
  }
</style>

<style lang="scss" scoped>
  .product-table-wrapper {
    padding: 0 25px 90px 27px;
  }
   // 添加 删除按钮
  .btn-wrapper {
    height: 60px;
    display: flex;
    align-items: center;
    padding-left: 17px;
    border: 1px solid rgba(229, 229, 229, 1);
  }
  .main-wrapper {
    margin-top: 14px;
    display: flex;
  }
  .product-form-wrapper {
    flex: 1;
    background: pink;
    min-height: 643px;
  }
</style>
