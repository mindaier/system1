<template>
  <div class="brandHeader">
    <el-form :inline="true" :model="formInline" class="form-inline">
      <el-form-item label="品牌名称" class="form-item">
        <el-input v-model="formInline.brandName" class="brandinput" placeholder="输入品牌名称" />
      </el-form-item>

      <el-form-item label="添加时间" class="form-item">
        <el-date-picker
          v-model="form.date"
          class="brandinput"
          type="date"
          placeholder="选择时间"
          style="width: 100%;"
        />
      </el-form-item>
      <el-form-item class="form-item item-brans">
        <el-select v-model="formInline.changeBrand" class="item-brans-select" placeholder="国内品牌">
          <el-option label="国内品牌" value="chinese" />
          <el-option label="国外品牌" value="abroad" />
        </el-select>
      </el-form-item>

      <el-form-item>
        <el-button type="primary" icon="el-icon-search" @click="onSubmit">查询</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>

export default {
  name: 'BrandHead',
  data() {
    return {
      formInline: {
        user: '',
        region: ''
      },
      form: {
        name: '',
        region: '',
        date: '',
        brandName: '',
        changeBrand: '',
        type: [],
        resource: '',
        desc: ''
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
  .brandHeader .el-form-item__label{
    font-size: 13px;
    color: #101010;
  }
  .brandHeader .form-item .el-input__inner {
    height: 30px !important;
    line-height: 30px !important;
    width: 200px;
  }
  .brandHeader .item-brands .el-input__inner {
    width: 107px !important;
  }
  .brandHeader .el-button--medium {
    padding: 6.8px 14px;
  }
</style>

<style lang="scss" scoped>
  .brandHeader {
    margin: 2px 0 20px 0px;
    height: 30px;
    .form-item {
      margin-right: 27px;
      &:nth-child(3){
        margin-right: 20px;
      }
    }
    .item-brans .brandinput {
      width: 107px;
    }
  }
</style>
