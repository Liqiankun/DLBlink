// pages/book/book.js
import Book from '../../models/book'

Page({
  data: {
    books: []
  },

  onLoad: function () {
    Book.fetchHotList().then((res) => {
      this.setData({
        books: res
      })
    }).catch((err) => {
      
    })
  },

  onBook(event) {
    wx.navigateTo({
      url: `../book-detail/book-detail?bookId=${event.detail.bookId}`
    })
  }
})
