// pages/classic.js
import Classic from '../../models/classic'

Page({
  data: {
    classic: undefined
  },

  onLoad: function (options) {
    Classic.fetchLatest((res) => {
      this.setData({
        classic: res
      })
    })
  }
})