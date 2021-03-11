import { FETCH_MEMOS, ADD_MEMO, DELETE_MEMO, EDIT_MEMO } from './mutations-types'

export function fetchMemos({ commit }){
  commit(FETCH_MEMOS)
}

export function addMemo({ commit }, payload){
  commit(ADD_MEMO, payload)
}

export function deleteMemo({ commit }, id){
  commit(DELETE_MEMO, id)
}

export function updateMemo({ commit }, payload){
  commit(EDIT_MEMO, payload)
}

export default{
  fetchMemos,
  addMemo,
  deleteMemo,
  updateMemo
}
