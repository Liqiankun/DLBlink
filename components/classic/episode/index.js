// components/classic/episode/index.js
import { getYear, getMonth } from '../../../utils/helper'

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
    year: getYear(new Date()),
    month: getMonth(new Date()),
    _index: 0
  },

  methods: {

  }
})
