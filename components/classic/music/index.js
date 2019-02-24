// components/classic/music/index.js
import Behavior from '../classic-beh'

const audioManager = wx.getBackgroundAudioManager()

Component({
  behaviors: [Behavior],
  
  properties: {
    musicSrc: String,
    title: String,
  },

  data: {
    playing: false
  },

  lifetimes: {
    attached() {
      this._recoverStatus()
    }
  },


  methods: {
    onControl() {
      const playing = this.data.playing
      const { musicSrc, title } = this.properties 

      audioManager.src = musicSrc
      audioManager.title = title

      if (playing) {
        audioManager.pause()
      } else {
        audioManager.play()
      }

      this.setData({
        playing: !playing
      })
    },

    _recoverStatus() {
      if (audioManager.paused) {
        this.setData({
          playing: false
        })
      } else if (audioManager.src === this.properties.musicSrc) {
        this.setData({
          playing: true
        })
      }
    }
  }
})
