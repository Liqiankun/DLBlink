// components/classic/music/index.js
import Behavior from '../classic-beh'

const audioManager = wx.getBackgroundAudioManager()

Component({
  behaviors: [Behavior],
  
  properties: {
    musicSrc: String
  },

  data: {
    playing: false
  },

  methods: {
    onControl() {
      const playing = this.data.playing

      audioManager.src = this.properties.musicSrc
      audioManager.title = 'Music'

      if (playing) {
        audioManager.pause()
      } else {
        audioManager.play()
      }

      this.setData({
        playing: !playing
      })
    }
  }
})
