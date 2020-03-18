<template>
  <div class="classform-wrapper">
    <div class="btn-row">
      <el-button type="primary" icon="el-icon-edit">新增子类型</el-button>
      <el-button type="danger" icon="el-icon-delete">删除该类型</el-button>
    </div>

    <el-form
      ref="ruleForm"
      :model="ruleForm"
      :rules="rules"
      label-width="90px"
      class="demo-ruleForm"
    >
      <el-form-item label="分类名称 :" prop="name">
        <el-input v-model="ruleForm.name" placeholder="输入分类名称" />
      </el-form-item>
      <el-form-item label="排序 :" prop="sort">
        <el-input v-model="ruleForm.sort" placeholder="数值越大排列越靠前" />
      </el-form-item>
      <el-form-item label="备注 :" prop="textarea">
        <el-input
          v-model="ruleForm.textarea"
          type="textarea"
          placeholder="说点什么..最少输入10个字符"
          maxlength="30"
          show-word-limit
        />
      </el-form-item>
      <el-form-item>
        <el-button class="submitbtn" type="primary" @click="submitForm('ruleForm')">提交</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  name: 'ClassForm',
  data() {
    return {
      ruleForm: {
        name: '',
        sort: '',
        textarea: ''
      },
      rules: {
        name: [
          { required: true, message: '请输入分类名称', trigger: 'blur' },
          { min: 1, max: 10, message: '长度在 1 到 5 个字符', trigger: 'blur' }
        ],
        sort: [
          { required: true, message: '请输入数字', trigger: 'blur' },
          { min: 1, max: 1, message: '长度在 1 到 1 个字符', trigger: 'blur' }
        ]
      }
    }
  },
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          alert('submit!')
        } else {
          console.log('error submit!!')
          return false
        }
      })
    }
  }
}
</script>

<style lang="scss">
  .classform-wrapper .el-button--medium {
    padding: 8px 15px;
  }
  .classform-wrapper .el-form-item.btn-row {
    margin-bottom: 36px;
  }
  .classform-wrapper .el-button+.el-button {
    margin-left: 20px;
  }
  .classform-wrapper .el-form-item__label {
    margin-left: 8px;
  }
  .classform-wrapper .el-form-item__label {
    width: 72px !important;
    line-height: 30px;
    font-size: 13px;
    padding: 0;
  }
  .classform-wrapper .el-textarea,
  .classform-wrapper .el-textarea__inner {
    width: 552px;
    height: 173px;
  }
  .classform-wrapper .el-input--medium .el-input__inner {
    width: 200px;
    height: 30px;
  }
 .classform-wrapper .el-form-item__content .el-button--medium.submitbtn {
   width: 216px;
   height: 40px;
   background: #1890FF;
 }
</style>

<style lang='scss' scoped>
  .classform-wrapper {
    margin: 75px 0 0 150px;
    width: 100%;
  }
  .btn-row {
    margin: 0 0 36px 90px;
  }
</style>
