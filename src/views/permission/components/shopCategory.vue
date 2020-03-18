<template>
  <!-- 分类管理 -->
  <div class="nav-container">
    <div class="product-type-container">
      <div class="product-type">产品类型列表</div>
      <div class="product-type-list-wrapper">
        <ul class="product-type-list">
          <el-tree
            :data="data"
            :props="defaultProps"
            node-key="id"
            :default-expanded-keys="[3, 4]"
            @node-click="handleNodeClick"
          />
        </ul>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'ShopCategory',
  data() {
    return {
      data: [
        {
          id: 1,
          label: '商城分类列表',
          children: [
            {
              id: 2,
              label: '蔬菜水果',
              children: [
                {
                  id: 5,
                  label: '香蕉'
                },
                {
                  id: 6,
                  label: '橘子'
                }
              ]
            },
            {
              id: 3,
              label: '手机数码',
              children: [
                {
                  id: 7,
                  label: 'iphoneX'
                },
                {
                  id: 8,
                  label: '相机'
                }
              ]
            },
            {
              id: 4,
              label: '电脑配件',
              children: [
                {
                  id: 9,
                  label: '键盘'
                },
                {
                  id: 10,
                  label: 'U盘'
                }
              ]
            }
          ]
        }
      ],
      defaultProps: {
        children: 'children',
        label: 'label'
      }
    }
  },
  methods: {
    handleNodeClick(data) {
      // console.log(data);
    }
  }
}
</script>

<style lang="scss">
  .nav-container .el-tree-node__content{
    height: 34px;
    line-height: 34px;
  }
  // .nav-container .el-tree-node__content>.el-tree-node__content {
  //   height: 26px;
  // }
  .nav-container .el-tree-node__content>.el-tree-node__expand-icon {
    margin-left: 6px;
  }
  .nav-container .el-tree-node>.el-tree-node__children {
    top: 20px;
  }
</style>

<style lang="scss" scoped>
  .nav-container {
    display: flex;
    height: 643px;
  }
  .product-type-container {
    border: 1px solid rgba(229, 229, 229, 1);
    // position: relative;
    width: 163px;
    font-size: 14px;
    box-sizing: border-box;
    .product-type {
      text-indent: 15px;
      background: #61A7CF;
      height: 41px;
      line-height: 41px;
      color: #fff;
    }
    .product-type-list-wrapper {
      width: 100%;
      overflow: hidden;
      min-height: 602px;
      // text-indent: 10px;
      .product-type-list {
        width: 100%;
        margin: 0;
        padding-left: 0px;
        margin-top: 23px;
        min-height: 300px;
      }
    }
  }

</style>
