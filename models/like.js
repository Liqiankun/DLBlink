import Request from '../utils/request'

export default class Like {
  static like = (liked, data, success) => {
    Request.request({
      url: liked ? '/like/cancel' : '/like',
      method: 'POST',
      data,
      success: (res) => success && success(res)
    })
  }
}