// pages/book-detail/book-detail.js
import Book from '../../models/book'

Page({
  data: {
    detail: undefined,
    comments: [],
    like: undefined
  },

  onLoad: function (options) {
    const bookId = options.bookId

    Book.fetchDetail(bookId)
      .then((res) => {
        this.setData({
          detail: res
        })
      })

    Book.fetchLikeStatus(bookId)
      .then((res) => {
        this.setData({
          like: res
        })
      })

    Book.fetchComments(bookId)
      .then((res) => {
        this.setData({
          comments: res.comments
        })
      })
  }
})