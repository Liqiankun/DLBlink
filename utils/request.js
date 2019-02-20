import config from '../config'

const errors = {
  1000: '输入参数错误',
  1001: '输入的json格式不正确',
  1002: '找不到资源',
  1003: '未知错误',
  1004: '禁止访问',
  1005: '不正确的开发者key',
  1006: '服务器内部错误',
  2000: '你已经点过赞了',
  2001: '你还没点过赞',
  3000: '该期内容不存在'
}

export default class Request {
  static request = (params) => {
    wx.request({
      url: config.base_url + params.url,
      data: params.data,
      method: params.method || 'GET',
      header: {
        'content-type': 'application/json',
        appkey: config.appkey
      },
      success: (res) => {
        let code = res.statusCode
        if (code < 400)  {
          params.success && params.success(res.data)
        } else {
          params.fail && params.fail(res)
          let errorCode = res.data.error_code
          Request._showError(errorCode)
        }
      },
      fail: (err) => {
        params.fail && params.fail(err)
        Request._showError()
      }
    })
  }

  static _showError = (errorCode) => {
    wx.showToast({
      title: errors[errorCode] || '错误',
      icon: 'none',
      duration: 1000
    })
  }
} 