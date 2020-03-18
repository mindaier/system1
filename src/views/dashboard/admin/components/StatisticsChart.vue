<template>
  <el-row :gutter="10" class="statistical-table-wrapper">
    <el-col :xs="12" :sm="12" :lg="6">
      <el-table
        class="statistical-table"
        align="center"
        :data="staticData.order"
        style="width: 100%; margin-top: 20px"
      >
        <el-table-column
          class="statistical-table-header"
          prop="name"
          label="订单统计信息"
          :colspan="2"
        />
        <el-table-column
          prop="count"
          label=""
        >
          <template slot-scope="scope">
            <span class="count-color">{{ scope.row.count }}</span>
            个
          </template>
        </el-table-column>
      </el-table>
    </el-col>
    <el-col :xs="12" :sm="12" :lg="6">
      <el-table
        class="statistical-table"
        align="center"
        :data="staticData.goods"
        style="width: 100%; margin-top: 20px"
      >
        <el-table-column
          class="statistical-table-header"
          prop="name"
          label="商品统计信息"
          :colspan="2"
        />
        <el-table-column
          prop="count"
          label=""
        >
          <template slot-scope="scope">
            <span class="count-color">{{ scope.row.count }}</span>
            个
          </template>
        </el-table-column>
      </el-table>
    </el-col>
    <el-col :xs="12" :sm="12" :lg="6">
      <el-table
        class="statistical-table"
        align="center"
        :data="staticData.member"
        style="width: 100%; margin-top: 20px"
      >
        <el-table-column
          class="statistical-table-header"
          prop="name"
          label="用户统计信息"
          :colspan="2"
        />
        <el-table-column
          prop="count"
          label=""
        >
          <template slot-scope="scope">
            <span class="count-color">{{ scope.row.count }}</span>
            个
          </template>
        </el-table-column>
      </el-table>
    </el-col>
    <el-col :xs="12" :sm="12" :lg="6">
      <el-table
        class="news-table"
        align="left"
        :data="newsData"
        :span-method="arraySpanMethod"
        style="width: 100%; margin-top: 20px"
      >
        <el-table-column
          class="news-table-header"
          prop="message"
          label="订单统计信息"
          :colspan="2"
        >
          <template slot-scope="scope">
            <svg-icon icon-class="money" class-name="card-panel-icon">{{ scope.row.message }}</svg-icon>
            <span class="remind-icon">{{ scope.row.message }}</span>
          </template>
        </el-table-column>
        <el-table-column
          prop="count"
          label=""
        />
      </el-table>
    </el-col>
  </el-row>
</template>

<script>
import { detail } from '@/api/shopIndex'
import { message } from '@/api/shopIndex'
export default {
  name: 'StatisticsChart',
  data() {
    return {
      staticData: {
        order: [],
        goods: [],
        member: []
      },
      newsData: []
      // newsData: [
      //   {
      //     "name": 'A后台系统找那个是开通了。'
      //   },
      //   {
      //     "name": 'A后台系统找那个是开通了。'
      //   },
      //   {
      //     "name": 'A后台系统找那个是开通了。'
      //   },
      //   {
      //     "name": 'A后台系统找那个是开通了。'
      //   },
      //   {
      //     "name": 'A后台系统找那个是开通了。'
      //   }
      // ]
    }
  },
  mounted() {
    this.fetchStaicData()
    this.fetchNewsDate()
  },
  methods: {
    arraySpanMethod({ row, column, rowIndex, columnIndex }) {
      if (columnIndex === 0) {
        return [1, 2]
      } else if (columnIndex === 1) {
        return [0, 0]
      }
    },
    fetchStaicData() {
      const _that = this
      detail().then(function(res) {
        // console.log(res.data)
        _that.staticData = res.data
      })
    },
    fetchNewsDate() {
      message().then((res) => {
        // console.log(res.data)
        this.newsData = res.data
      })
    }
  }
}
</script>
<style lang="scss">
  .statistical-table-wrapper .el-table thead {
    color: #101010;
    font-weight: bold;
    font-size: 14px;
  }
  .statistical-table-wrapper .el-table .has-gutter th {
    background: #F6F6F7;
  }
  .statistical-table-wrapper .news-table.el-table .has-gutter th {
    background: #fff;
  }
  .statistical-table-wrapper .el-table tbody {
    font-size: 13px;
    color: #101010;
  }
  .statistical-table-wrapper .el-table tbody td {
    text-align: center;
  }
  .statistical-table-wrapper .news-table.el-table tbody td {
    text-align: left;
    text-indent: 8px;
  }
  .statistical-table-wrapper .news-table.el-table tbody td.el-table_1_column_2 {
    color: #FF9800;
  }
  .news-table.el-table {
    border: 1px solid #dfe6ec;
    border-bottom: none;
  }
  .news-table.el-table td {
    border-bottom: 1px solid #fff;
  }
</style>

<style lang="scss" scoped>
  .count-color {
    color: #FF9800;
  }
  .statistical-table {
    width: 100%;
    border: 1px solid #dfe6ec;
    border-bottom: none;
    border-collapse: collapse;
    .statistical-table-header {
      font-size: 14px;
      color: #101010;
      font-weight: bold;
    }
  }
  .news-table {
    max-height: 265px;
    overflow-y: hidden;
    .card-panel-icon {
      font-size: 12px;
      color: #FF6060;
    }
  }
</style>
