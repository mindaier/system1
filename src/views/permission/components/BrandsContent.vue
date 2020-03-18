<template>
  <div class="branscontent-wrapper">
    <!-- 标签部分 -->
    <div class="label">
      <el-row>
        <el-col :xs="12" :sm="12" :lg="12" class="label-col">
          <el-button class="add" type="primary" icon="el-icon-edit">添加品牌</el-button>
          <el-button class="delete" type="danger" icon="el-icon-delete">批量删除</el-button>
          <el-button class="china" type="primary">国内品牌</el-button>
          <el-button class="abroad" type="primary">国外品牌</el-button>
        </el-col>
        <el-col :xs="12" :sm="12" :lg="12" class="label-col ratio-statistics-wrapper">
          <div class="ratio-statistics">
            <div class="ratio-text">
              <span class="ratio-china"><i class="dot" />国内品牌 (60%)</span>
              <span class="ratio-abroad"><i class="dot dot-abroad" />国外品牌 (40%)</span>
            </div>
            <div class="ratio-statistics-line">
              <div class="china-line" />
            </div>
          </div>
        </el-col>
      </el-row>
    </div>
    <!-- 表单部分 -->
    <div class="add-product-form">
      <div class="add-product-form-hader">
        <el-form ref="form" :model="form" label-width="80px">
          <el-row class="add-product-form-header-row">
            <el-col :xs="12" :sm="12" :lg="12">
              <el-form-item label="每页显示">
                <el-select v-model="form.displayCount" placeholder="10条">
                  <el-option label="10条" value="10" selected />
                  <el-option label="20条" value="20" />
                </el-select>
              </el-form-item>
            </el-col>

            <el-col :xs="12" :sm="12" :lg="12" class="header-right">
              <el-form-item>
                <el-input v-model="form.key" placeholder="输入关键字搜索" />
              </el-form-item>
            </el-col>
          </el-row>
        </el-form>
      </div>
      <brands-table />
    </div>
  </div>
</template>

<script>
// import BrandsTable from '@/views/table/complex-table'
import BrandsTable from './BrandsTable'
export default {
  name: 'BrandsContent',
  components: {
    BrandsTable
  },
  data() {
    return {
      form: {
        displayCount: '',
        key: ''
      }
    }
  }

}
</script>

<style lang="scss">
  .branscontent-wrapper .label .el-button--medium {
    width: 107px;
    height: 32px;
    border: none;
    &:nth-child(1) {
      background: #FF9800;
    }
    &:nth-child(2) {
      background: #42A7FF;
    }
    &:nth-child(3) {
      background: #FF9800;
    }
    &:nth-child(4) {
      background: #73D13D;
    }
  }
  .ratio-statistics-wrapper {
    height: 60px;
  }
  .add-product-form .add-product-form-header-row,
  .add-product-form .add-product-form-header-row .el-col {
    height: 47px;
  }
  .add-product-form .el-form {
    padding-top: 9px;
   }
  // .add-product-form .el-form-item {
  //   // margin-bottom: 8px;
  // }
  .add-product-form .el-form-item__label{
    font-size: 13px;
  }
  .add-product-form .el-form-item--medium .el-form-item__label {
    padding: 0;
    width: 53px !important;
    line-height: 20px;
    margin: 9px 7px 13px 9px;
  }
  .add-product-form .el-input--medium .el-input__inner {
    width: 82px;
    height: 30px;
    line-height: 30px;
    font-size: 13px;
  }
  .add-product-form  .header-right .el-input--medium .el-input__inner {
    width: 168px;
  }
  .add-product-form .el-form-item__content {
    margin-left: 0px !important;
  }

  .branscontent-wrapper .app-container {
    padding: 0;
  }
</style>

<style lang="scss" scoped>
  .branscontent-wrapper {
    min-height: 1200px;
    .label {
      width: 100%;
      padding: 0 9px 0 17px;
      height: 60px;
      border: 1px solid rgba(229, 229, 229, 1);
      line-height: 60px;
      margin-bottom: 14px;
      .ratio-statistics {
        display: flex;
        justify-content: center;
        flex-direction: column;
        align-items: flex-end;
        height: 60px;
        .ratio-text {
          line-height: 22px;
          font-size: 12px;
          color: #6B6B6B;
          width: 297px;
          display: flex;
          justify-content: space-between;
          .dot {
            display: inline-block;
            position: relative;
            top: -1px;
            width: 7px;
            height: 7px;
            border-radius: 50%;
            background: #42A7FF;
            margin-right: 4px;
          }
          .dot-abroad {
            background: #73D13D;
          }
        }
        .ratio-statistics-line {
          background: #73D13D;
          width: 297px;
          height: 9px;
          border-radius: 5px;
          position: relative;
          .china-line {
            width: 60%;
            height: 9px;
            background: #42A7FF;
            border-radius: 5px 0 0 5px;
            border-right: 2px solid #fff;
            position: absolute;
            top: 0;
            left: 0
          }
        }
      }
    }

    .add-product-form {
      width: 100%;
      min-height: 654px;
      // border: 1px solid rgba(229, 229, 229, 1);
      .add-product-form-hader {
        border: 1px solid rgba(229, 229, 229, 1);
        border-bottom: none;
        .header-right {
          padding-right: 10px;
          display: flex;
          justify-content: flex-end;
        }
      }
    }
  }
</style>
