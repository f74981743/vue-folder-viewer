import  * as types from '../mutation-types'

// initial state

const state = {
    datas: [],
    entries: []
}

// mutation

const mutations = {
    [types.READ_ENTRIES] (state, {entries}) {
        state.entries = entries;
    },

    [types.READ_DATAS] (state, {data}) {
        state.datas.push(data);
    },

    [types.RESET_DATAS] (state) {
        state.datas = [];
    }
}

export default {
    state,
    mutations
}