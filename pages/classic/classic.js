// pages/classic.js
import Classic from '../../models/classic'
import Like from '../../models/like'

Page({
  data: {
    classic: undefined,
    last: true,
    first: false
  },

  onLoad: function () {
    Classic.fetchLatest((res) => {
      this.setData({
        classic: res
      })
    })
  },

  onLike(e) {
    const { id, type } = this.data.classic 
    Like.like(e.detail.liked, {
      type,
      art_id: id
    })
  },

  onLeft() {

  },

  onRight() {
    
  }
})