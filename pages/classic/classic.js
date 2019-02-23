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
    this._fetchClassic('next')
  },

  onRight() {
    this._fetchClassic('previous')
  },

  _fetchClassic(nextOrPervious) {
    const index = this.data.classic.index

    Classic.fetchClassic(index, nextOrPervious, (res) => {
      this._fetchLike({
        artId: res.id,
        category: res.type
      })

      this.setData({
        classic: res,
        last: Classic.isLast(res.index),
        first: Classic.isFirst(res.index)
      })
    })
  },

  _fetchLike(data) {
    Like.fetchClassicLike(data, (res) => {
      this.setData({
        classic: {
          ...this.data.classic,
          like_status: res.like_status,
          fav_nums: res.fav_nums
        }
      })
    })
  }
})