import request from '@/utils/requestShop'

/**
 * 获取首页统计数量
 */
export function count(params) {
  return request({
    url: '/index/count.json',
    method: 'get',
    params: params
  })
}

// 获取首页详细数据
export function detail(params) {
  return request({
    url: '/index/detail.json',
    method: 'get',
    params: params
  })
}

// 获取消息接口
export function message(params) {
  return request({
    url: '/index/message.json',
    method: 'get',
    params: params
  })
}
