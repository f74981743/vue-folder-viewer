import * as types from './mutation-types'

export const readEntries = ({commit, state}, entries) => {
    commit(types.READ_ENTRIES, {
        entries: entries
    });
}

export const readDatas = ({commit, state}, data) => {
    commit(types.READ_DATAS, {
        data: data
    });
}

export const resetDatas = ({commit, state}) => {
    commit(types.RESET_DATAS);
}

export const addPathBtn = ({commit, state}, data) => {
    commit(types.ADD_PATH_BTN, data);
}

export const clickPathBtn = ({commit, state}, index) => {
    commit(types.CLICK_PATH_BTN, index);
}