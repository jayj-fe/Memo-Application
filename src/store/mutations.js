import { FETCH_MEMOS, ADD_MEMO, DELETE_MEMO, EDIT_MEMO, SET_EDITING_ID, RESET_EDITING_ID } from './mutations-types'

export default {
  [FETCH_MEMOS] (state){
    state.memos = localStorage.memos ? JSON.parse(localStorage.memos) : []
  },

  [ADD_MEMO] (state, payload){
    state.memos.push(payload);

    const memoToStoring = JSON.stringify(state.memos);
    localStorage.setItem('memos', memoToStoring);
  },

  [DELETE_MEMO] (state, id){
    const targetIndex = state.memos.findIndex( e => e.id === id );
    state.memos.splice(targetIndex, 1);

    const memoToStoring = JSON.stringify(state.memos);
    localStorage.setItem('memos', memoToStoring);
  },

  [EDIT_MEMO] (state, payload){
    const { id, content } = payload;
    const targetIndex = state.memos.findIndex( e => e.id === id );
    const targetMemo = state.memos[targetIndex];
    state.memos.splice( targetIndex, 1, { ...targetMemo, content } );

    const memoToStoring = JSON.stringify(state.memos);
    localStorage.setItem('memos', memoToStoring);
  },

  [SET_EDITING_ID] (state, id){
    state.editingId = id
  },

  [RESET_EDITING_ID] (state, id){
    state.editingId = 0
  }
}
