import request from '@/utils/request'
export default {
  getNewsList() {
    return request({
      url: '/newslist',
      method: 'get'
    })
  },
  getNewsDetails(id) {
    return request({
      url: '/newsDetails',
      method: 'get',
      params: { id }
    })
  }
}
