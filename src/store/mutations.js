import { FETCH_MEMOS, ADD_MEMO, DELETE_MEMO, EDIT_MEMO, SET_EDITING_ID, RESET_EDITING_ID } from './mutations-types'
import axios from 'axios';

const memoAPICore = axios.create({
  baseURL : 'http://localhost:8000/api/memos'
})

export default {
  [FETCH_MEMOS] (state){
    // state.memos = localStorage.memos ? JSON.parse(localStorage.memos) : []
    memoAPICore.get('/')
      .then( res => {
        state.memos = res.data;
      })
      .catch ( error => {
        alert('메모 불러오기 통신에 실패하였습니다.');
      })
  },

  [ADD_MEMO] (state, payload){
    // const memoToStoring = JSON.stringify(state.memos);
    // localStorage.setItem('memos', memoToStoring);

    memoAPICore.post('/', payload)
      .then( res => {
        state.memos.push(payload);
      })
      .catch( error => {
        alert('메모 저장하기 통신에 실패하였습니다.');
      })
  },

  [DELETE_MEMO] (state, id){
    const targetIndex = state.memos.findIndex( e => e.id === id );

    // const memoToStoring = JSON.stringify(state.memos);
    // localStorage.setItem('memos', memoToStoring);
    memoAPICore.delete(`/${id}`)
      .then( res => {
        state.memos.splice(targetIndex, 1);
      })
      .catch( error => {
        alert('메모 삭제하기 통신에 실패하였습니다.');
      })
  },

  [EDIT_MEMO] (state, payload){
    const { id, content } = payload;
    const targetIndex = state.memos.findIndex( e => e.id === id );
    const targetMemo = state.memos[targetIndex];

    memoAPICore.put(`/${id}`, {content})
      .then( res => {
        state.memos.splice( targetIndex, 1, { ...targetMemo, content } );
      })
      .catch( error => {
        alert('메모 수정하기 통신에 실패하였습니다.');
      })

    // const memoToStoring = JSON.stringify(state.memos);
    // localStorage.setItem('memos', memoToStoring);
  },

  [SET_EDITING_ID] (state, id){
    state.editingId = id
  },

  [RESET_EDITING_ID] (state, id){
    state.editingId = 0
  }
}
