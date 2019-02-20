import Request from '../utils/request'

export default class Classis {
  static fetchLatest = (success) => {
    Request.request({
      url: '/classic/latest',
      success: (res) => success && success(res)
    })
  }
}