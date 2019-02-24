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
      this._onControl()
    }
  },


  methods: {
    onControl() {
      const playing = this.data.playing
      const { musicSrc, title } = this.properties 

      if (playing) {
        audioManager.pause()
      } else {
        audioManager.src = musicSrc
        audioManager.title = title
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
    },

    _onControl() {
      audioManager.onPause(() => this._recoverStatus())
      audioManager.onPlay(() => this._recoverStatus())
      audioManager.onStop(() => this._recoverStatus())
      audioManager.onEnded(() => this._recoverStatus())
    }
  }
})
