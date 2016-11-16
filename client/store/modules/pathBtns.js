import  * as types from '../mutation-types'

// initial state

var state = []

// mutation

const mutations = {
    [types.ADD_PATH_BTN] (state, item) {
        state.push(item);
    },

    [types.RESET_PATH_BTN] (state) {
        state = [];
    },

    [types.CLICK_PATH_BTN] (state, index) {
        //state = items;
        state.splice(index + 1, state.length - index - 1);
    }
}

export default {
    state,
    mutations
}