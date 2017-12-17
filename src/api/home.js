import request from '@/utils/request'
export default {
  getIndex() {
    return request({
      url: '/index',
      method: 'get'
    })
  }
}
