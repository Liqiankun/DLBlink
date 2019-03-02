// components/book/index.js
Component({
  properties: {
    book: Object
  },

  data: {
    showLike: true
  },

  methods: {
    onTap() {
      const bookId = this.properties.book.id

      this.triggerEvent('onBook', { bookId })
    }
  }
})
