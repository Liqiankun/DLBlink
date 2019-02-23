// components/classic/control-bar/index.js
Component({
  properties: {
    title: String,
    first: Boolean,
    last: Boolean
  },

  methods: {
    onLeft() {
      if (!this.properties.last) {
        this.triggerEvent('onLeft')
      }
    },

    onRight() {
      if (!this.properties.first) {
        this.triggerEvent('onRight')
      }
    }
  }
})
