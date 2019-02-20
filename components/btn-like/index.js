// components/btn-like/index.js
Component({
  properties: {
    count: {
      type: Number,
      observer: () => {}
    },
    liked: {
      type: Boolean,
      observer: () => {}
    }
  },

  methods: {
    onLike() {
      let liked = this.properties.liked
      let count = this.properties.count
      count = liked ? count - 1 : count + 1

      this.setData({
        count: count,
        liked: !liked
      })
    }
  }
})
