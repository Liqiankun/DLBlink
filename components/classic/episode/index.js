// components/classic/episode/index.js
import { getYear, getChineseMonth } from '../../../utils/helper'

Component({
  properties: {
    index: {
      type: Number,
      observer: function(newVal) {
        console.log('newVal', newVal)
        const val = newVal < 10 ? `0${newVal}` : newVal
        this.setData({
          _index: val
        })
      }
    }
  },

  data: {
    year: getYear(),
    month: getChineseMonth(),
    _index: 0
  },

  methods: {

  }
})
