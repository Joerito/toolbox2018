import Vue from 'vue'
import Vuetify from 'vuetify/lib'
import 'vuetify/src/stylus/app.styl'

Vue.use(Vuetify, {
  iconfont: 'md',
  theme: {
    primary: "#607d8b",
    secondary: "#00bcd4",
    accent: "#2196f3",
    error: "#673ab7",
    warning: "#9c27b0",
    info: "#3f51b5",
    success: "#e91e63"
  }
})
