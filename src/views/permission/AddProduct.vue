<template>
  <div class="add-product-wrapper">
    <!-- <div class="product-type-container">
      <div class="product-type">产品类型列表</div>
      <div class="product-type-list-wrapper">
        <ul class="product-type-list">
          <li class="product-list-item"></li>
          <shop-category :data="data" />
        </ul>
      </div>
    </div> -->
    <shop-category />
    <div class="add-product-container">
      <div class="subject-container">
        <div class="subject">添加商品</div>
      </div>
      <div class="add-product-form-container">
        <div class="add-product-form">
          <el-form ref="form" :model="form" label-width="80px">
            <el-form-item label="图片标题:">
              <el-input v-model="form.imglabel" placeholder="输入图片名称" />
            </el-form-item>
            <el-form-item label="简略标题:">
              <el-input v-model="form.shortTitle" placeholder="输入标题" />
            </el-form-item>

            <el-row type="flex" class="row-bg">
              <el-col :span="6">
                <el-form-item label="产品编号:">
                  <el-input v-model="form.number" style="width:10em" placeholder="请输入" />
                </el-form-item>
              </el-col>
              <el-col :span="6">
                <el-form-item label="产地:" class="letter-space">
                  <el-input v-model="form.origin" style="width:10em" placeholder="请输入" />
                </el-form-item>
              </el-col>
              <el-col :span="6">
                <el-form-item label="材质:" class="letter-space">
                  <el-input v-model="form.material" style="width:10em" placeholder="请输入" />
                </el-form-item>
              </el-col>
              <el-col :span="6">
                <el-form-item label="品牌:" class="letter-space">
                  <el-input v-model="form.brand" style="width:10em" placeholder="请输入" />
                </el-form-item>
              </el-col>
            </el-row>
            <el-row type="flex" class="row-bg">
              <el-col :span="6">
                <el-form-item label="产品重量:">
                  <el-input v-model="form.weight" style="width:10em" placeholder="请输入(kg)" />
                </el-form-item>
              </el-col>
              <el-col :span="6">
                <el-form-item label="单位:" class="letter-space">
                  <el-select v-model="form.unit" placeholder="请选择" style="width:10em">
                    <el-option label="kg" value="kg" />
                    <el-option label="g" value="g" />
                  </el-select>
                  <!-- <el-input style="width:10em" v-model="form.name" placeholder="请选择"></el-input> -->
                </el-form-item>
              </el-col>
              <el-col :span="6">
                <el-form-item label="展示价格:" class="letter-space">
                  <el-input v-model="form.displayPrice" style="width:10em" placeholder="请输入(元)" />
                </el-form-item>
              </el-col>
              <el-col :span="6">
                <el-form-item label="市场价格:" class="letter-space">
                  <el-input v-model="form.marketPrice" style="width:10em" placeholder="请输入(元)" />
                </el-form-item>
              </el-col>
            </el-row>

            <el-form-item label="关键字:">
              <el-input v-model="form.key" placeholder="以逗号分开，最多5个" />
            </el-form-item>

            <el-form-item label="内容概要:" prop="desc">
              <el-input
                v-model="form.desc"
                type="textarea"
                class="content-desc"
                placeholder="说点什么..最少输入10个字符"
                maxlength="100"
                show-word-limit
              />
            </el-form-item>
            <el-form-item label="图片上传:">
              <el-upload
                action="#"
                list-type="picture-card"
                :auto-upload="false"
              >
                <i slot="default" class="el-icon-plus" />
                <div slot="file" slot-scope="{file}">
                  <img
                    class="el-upload-list__item-thumbnail"
                    :src="file.url"
                    alt=""
                  >
                  <span class="el-upload-list__item-actions">
                    <span
                      class="el-upload-list__item-preview"
                      @click="handlePictureCardPreview(file)"
                    >
                      <i class="el-icon-zoom-in" />
                    </span>
                    <span
                      v-if="!disabled"
                      class="el-upload-list__item-delete"
                      @click="handleDownload(file)"
                    >
                      <i class="el-icon-download" />
                    </span>
                    <span
                      v-if="!disabled"
                      class="el-upload-list__item-delete"
                      @click="handleRemove(file)"
                    >
                      <i class="el-icon-delete" />
                    </span>
                  </span>
                </div>
              </el-upload>
              <el-dialog :visible.sync="dialogVisible">
                <img width="100%" :src="dialogImageUrl" alt="">
              </el-dialog>
            </el-form-item>

            <el-form-item label="详细内容:" prop="desc">
              <el-input v-model="form.details" type="text" class="content-details" />
            </el-form-item>

            <el-form-item label="是否允许评论:" class="comment">
              <el-switch v-model="form.delivery" />
            </el-form-item>

            <el-form-item class="submitBtn">
              <el-button class="saveSubmitBtn" type="primary" @click="submitForm('dynamicValidateForm')">保存并提交审核</el-button>
              <el-button class="saveBtn" @click="addDomain">保存草稿</el-button>
              <el-button class="cancel" @click="resetForm('dynamicValidateForm')">取消</el-button>
            </el-form-item>
          </el-form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ShopCategory from './components/ShopCategory'

export default {
  name: 'AddProduct',
  components: {
    ShopCategory
  },
  data() {
    return {
      // data: [{
      //     label: '一级 1',
      //     children: [{
      //       label: '二级 1-1',
      //       children: [{
      //         label: '三级 1-1-1'
      //       }]
      //     }]
      //   }, {
      //     label: '一级 2',
      //     children: [{
      //       label: '二级 2-1',
      //       children: [{
      //         label: '三级 2-1-1'
      //       }]
      //     }, {
      //       label: '二级 2-2',
      //       children: [{
      //         label: '三级 2-2-1'
      //       }]
      //     }]
      //   }, {
      //     label: '一级 3',
      //     children: [{
      //       label: '二级 3-1',
      //       children: [{
      //         label: '三级 3-1-1'
      //       }]
      //     }, {
      //       label: '二级 3-2',
      //       children: [{
      //         label: '三级 3-2-1'
      //       }]
      //     }]
      //   }],

      form: {
        name: '',
        region: '',
        date1: '',
        date2: '',
        delivery: true,
        type: [],
        resource: '',
        desc: ''
      },
      formInline: {
        user: '',
        region: ''
      },
      fileList: [{ name: 'food.jpeg',
        url: 'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100' }, { name: 'food2.jpeg', url: 'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100' }],
      dialogImageUrl: '',
      dialogVisible: false,
      disabled: false
    }
  },
  methods: {
    onSubmit() {
      console.log('submit!')
    },
    handleRemove(file) {
      console.log(file)
    },
    handlePictureCardPreview(file) {
      this.dialogImageUrl = file.url
      this.dialogVisible = true
    },
    handleDownload(file) {
      console.log(file)
    },
    submitForm(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          alert('submit!')
        } else {
          console.log('error submit!!')
          return false
        }
      })
    },
    resetForm(formName) {
      this.$refs[formName].resetFields()
    },
    removeDomain(item) {
      var index = this.dynamicValidateForm.domains.indexOf(item)
      if (index !== -1) {
        this.dynamicValidateForm.domains.splice(index, 1)
      }
    },
    addDomain() {
      this.dynamicValidateForm.domains.push({
        value: '',
        key: Date.now()
      })
    }
  }
}
</script>

<style lang="scss">
  .nav-container {
    height: 602px;
  }
</style>

<style lang="scss" scoped>
  .content-desc >>> .el-textarea__inner,
  .content-details >>> .el-input__inner{
    height: 100%;
  }
  .comment >>> .el-form-item__label {
    width: 100px !important;
  }
  .add-product-form-container >>> .el-upload--picture-card,
  .add-product-form-container >>> .el-upload-list__item
   {
    width: 104px;
    height: 104px;
    line-height: 104px;
  }
  .submitBtn {
    margin-top: 78px;
  }
  .submitBtn >>> .el-button--medium {
    padding: 6px 10px;
    color: #fff;
  }
  .saveSubmitBtn {
    background: #1890FF;
  }
  .saveBtn {
    background: #FF9700;
  }
  .cancel {
    background: #9D9D9D;
  }

  .add-product-wrapper {
    padding: 0 22px 0 28px;
    display: flex;
    // min-height: 643px;

    .product-type-container {
      border: 1px solid rgba(229, 229, 229, 1);
      position: relative;
      width: 161px;
      font-size: 14px;
      box-sizing: border-box;
      .product-type {
        text-indent: 12px;
        background: #61A7CF;
        height: 40px;
        line-height: 40px;
        color: #fff;
      }
      .product-type-list-wrapper {
        overflow: hidden;
        min-height: 602px;
        .product-type-list {
          padding-left: 0px !important;
          position: absolute;
          top: 48px;
          left: 0;
        }
      }
    }

    .add-product-container {
      flex: 1;
      font-size: 13px;
      box-sizing: border-box;

      .subject-container {
        background: #F0F0F0;
        height: 41px;
        line-height: 41px;
        color: #000C16;
        font-weight: bold;

        .subject {
          padding-left: 30px;
        }
      }

      .add-product-form-container {
        padding: 40px 0 0 30px;
        .add-product-form {
          min-height: 1429px;
          font-size: 13px;
          .row-bg {
            display: flex;
            justify-content: space-between;
            .el-col-6 {
              width: auto;
            }
          }
          .content-desc {
            height: 176px;
          }
          .content-details {
            height: 384px;
          }
        }
      }
    }
  }
  .letter-space {
    text-align: justify;
  }
</style>
