<template>
  <div class="brandHeader">
    <el-form :inline="true" :model="formInline" class="demo-form-inline">
      <el-form-item label="品牌名称" class="form-item">
        <el-input v-model="formInline.brandName" class="brandinput" placeholder="输入品牌名称" />
      </el-form-item>

      <el-form-item label="添加时间" class="form-item">
        <el-date-picker v-model="form.date" class="brandinput" type="date" placeholder="选择时间" style="width: 100%;" />
      </el-form-item>
      <el-form-item>
        <el-select v-model="formInline.changeBrand" placeholder="国内品牌">
          <el-option label="品牌一" value="xiaomi" />
          <el-option label="品牌二" value="huawei" />
        </el-select>
      </el-form-item>

      <el-form-item>
        <el-button type="primary" @click="onSubmit">查询</el-button>
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
  .brandHeader .el-form-item__label,
  .brandHeader .el-form-item__content,
  .brandHeader .brandinput .input__inner,
  .brandHeader .brandinput .el-input--medium {
    height: 30px !important;
    line-height: 30px !important;
  }
</style>

<style lang="scss" scoped>
  .brandHeader {
    background: pink;
    margin-bottom: 20px;
    .brandinput {
      width: 200px;
      height: 30px;
    }
  }
</style>
