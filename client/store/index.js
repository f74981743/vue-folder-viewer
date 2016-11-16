import Vue from 'vue'
import Vuex from 'vuex'
import datas from './modules/datas'
import pathBtns from './modules/pathBtns'
import * as actions from './actions'

Vue.use(Vuex)

const store = new Vuex.Store({
  modules: {
    datas,
    pathBtns
  },
  actions
})

export default store
