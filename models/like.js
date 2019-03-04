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

  static fetchClassicLike = (data, success) => {
    Request.request({
      url: `/classic/${data.category}/${data.artId}/favor`,
      success: (res) => success && success(res)
    })
  }
}