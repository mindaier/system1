<template>
  <el-row :gutter="10" class="panel-group">
    <el-col :xs="12" :sm="12" :lg="6" class="card-panel-col">
      <div class="card-panel" @click="handleSetLineChartData('newVisitis')">
        <div class="card-panel-icon-wrapper icon-people">
          <svg-icon icon-class="peoples" class-name="card-panel-icon" />
        </div>
        <div class="card-panel-description">
          <count-to :start-val="0" :end-val="memberCount" :duration="2600" class="card-panel-num" />
          <div class="card-panel-text">
            商城用户
          </div>
        </div>
      </div>
    </el-col>
    <el-col :xs="12" :sm="12" :lg="6" class="card-panel-col">
      <div class="card-panel" @click="handleSetLineChartData('messages')">
        <div class="card-panel-icon-wrapper icon-message">
          <svg-icon icon-class="message" class-name="card-panel-icon" />
        </div>
        <div class="card-panel-description">
          <count-to :start-val="0" :end-val="distributionCount" :duration="3000" class="card-panel-num" />
          <div class="card-panel-text">
            分销记录
          </div>
        </div>
      </div>
    </el-col>
    <el-col :xs="12" :sm="12" :lg="6" class="card-panel-col">
      <div class="card-panel" @click="handleSetLineChartData('purchases')">
        <div class="card-panel-icon-wrapper icon-money">
          <svg-icon icon-class="money" class-name="card-panel-icon" />
        </div>
        <div class="card-panel-description">
          <count-to :start-val="0" :end-val="orderCount" :duration="3200" class="card-panel-num" />
          <div class="card-panel-text">
            商城订单
          </div>
        </div>
      </div>
    </el-col>
    <el-col :xs="12" :sm="12" :lg="6" class="card-panel-col">
      <div class="card-panel" @click="handleSetLineChartData('shoppings')">
        <div class="card-panel-icon-wrapper icon-shopping">
          <svg-icon icon-class="shopping" class-name="card-panel-icon" />
        </div>
        <div class="card-panel-description">
          <count-to :start-val="0" :end-val="transactionCount" :duration="3600" class="card-panel-num" />
          <div class="card-panel-text">
            交易记录
          </div>
        </div>
      </div>
    </el-col>
  </el-row>
</template>

<script>
import CountTo from 'vue-count-to'

export default {
  components: {
    CountTo
  },
  props: {
    memberCount: Number,
    distributionCount: Number,
    orderCount: Number,
    transactionCount: Number
  },
  data() {
    return {
      // Count: {
      //   people: 34522,
      //   message: 140,
      //   money: 345,
      //   shopping: 34500
      // }
    }
  },
  methods: {
    handleSetLineChartData(type) {
      this.$emit('handleSetLineChartData', type)
    }
  }
}
</script>

<style lang="scss" scoped>
.panel-group {
  .card-panel-col {
    margin-bottom: 17px;
  }

  .card-panel {
    display: flex;
    height: 76px;
    cursor: pointer;
    font-size: 12px;
    color: #666;
    background: #fff;
    border-radius: 7px;
    // box-shadow: 4px 4px 40px rgba(0, 0, 0, .05);
    border: 1px solid rgba(187, 187, 187, 1);

    // 图标背景颜色
    .icon-people {
      background: #36CFCA;
    }

    .icon-message {
      background: #FD4D4F;
    }

    .icon-money {
      background: #FFC53D;
    }

    .icon-shopping {
      background: #42A7FF;
    }

    .icon-people {
      color: #40c9c6;
    }

    .icon-message {
      color: #36a3f7;
    }

    .icon-money {
      color: #f4516c;
    }

    .icon-shopping {
      color: #34bfa3
    }

    .card-panel-icon-wrapper {
      width: 111px;
      display: flex;
      justify-content: center;
      align-items: center;
      transition: all 0.38s ease-out;
      border-radius: 6px 0 0 6px;
      color: #fff;
      font-size: 20px;
    }

    .card-panel-icon {
      font-size: 32px;
    }

    .card-panel-description {
      flex: 1;
      font-weight: bold;
      // margin: 26px;
      // margin-left: 0px;
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;

      .card-panel-text {
        line-height: 18px;
        color: rgba(0, 0, 0, 0.45);
        font-size: 12px;
        margin-top: 8px;
      }

      .card-panel-num {
        color: #595959;
        font-size: 20px;
      }
    }
  }
}

@media (max-width:550px) {
  .card-panel-description {
    display: none;
  }

  .card-panel-icon-wrapper {
    float: none !important;
    width: 100%;
    height: 100%;
    margin: 0 !important;

    .svg-icon {
      display: block;
      margin: 14px auto !important;
      float: none !important;
    }
  }
}
</style>
