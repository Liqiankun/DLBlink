import Request from '../utils/request'

export default class Classis {
  static fetchLatest = (success) => {
    Request.request({
      url: '/classic/latest',
      success: (res) => {
        Classis._storeLastIndex(res.index)
        wx.setStorageSync(`classic-${res.index}`, res)
        success && success(res)
      }
    })
  }

  static fetchClassic = (index, nextOrPervious, success) => {
    const storeKey = `classic-${nextOrPervious === 'next' ? index + 1 : index - 1}`
    const storeClassic = wx.getStorageSync(storeKey)

    if (storeClassic) {
      success && success(storeClassic)
    } else {
      Request.request({
        url: `/classic/${index}/${nextOrPervious}`,
        success: (res) => {
          wx.setStorageSync(storeKey, res)
          success && success(res)
        }
      })
    }
  }

  static isFirst = (index) => {
    return index === 1
  }

  static isLast = (index) => {
    return Classis._getLastIndex() === index
  }

  static _storeLastIndex = (index) => {
    wx.setStorageSync('lastest', index)
  }

  static _getLastIndex = () => {
    return wx.getStorageSync('lastest')
  }
}