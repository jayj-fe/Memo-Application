<template>
  <div class='memo'>
    <memo-form @addMemo='addMemo'/>
    <ul class='memo-list'>
      <memo-list v-for='memoItem in memos'
        :key='memoItem.id'
        :memoItem = 'memoItem'
        @deleteMemo = 'deleteMemo'
        @updateMemo = 'updateMemo'
        :editingId = 'editingId'
        @setEditingId = 'SET_EDITING_ID'
        @resetEditingId = 'RESET_EDITING_ID' />
    </ul>
  </div>
</template>

<script>
import MemoForm from './MemoForm'
import MemoList from './MemoList'
import { mapActions, mapState, mapMutations } from 'vuex'
import { SET_EDITING_ID, RESET_EDITING_ID } from '../../store/mutations-types'

export default {
  name : 'Memo',
  // data(){
  //   return {
  //     memos : []
  //   }
  // },
  components : {
    MemoForm,
    MemoList
  },
  created(){
    // this.memos = localStorage.memos ? JSON.parse(localStorage.memos) : [];
    this.fetchMemos();
    // this.$emit('change', this.memos.length);
  },
  computed :{
    ...mapState([
      'memos',
      'editingId'
    ])
  },
  methods : {
    ...mapActions([
      'fetchMemos',
      'addMemo',
      'deleteMemo',
      'updateMemo'
    ]),
    ...mapMutations([
      SET_EDITING_ID,
      RESET_EDITING_ID
    ])
    // addMemo(payload){
    //   this.memos.push(payload);

    //   this.storeMemo();
    // },
    // storeMemo(){
    //   const memoToStoring = JSON.stringify(this.memos);
    //   localStorage.setItem('memos', memoToStoring);

    //   this.$emit('change', this.memos.length);
    // }
    // deleteMemo(id){
    //   const targetIndex = this.memos.findIndex( e => e.id === id );
    //   this.memos.splice(targetIndex, 1);

    //   this.storeMemo();
    // },
    // updateMemo(payload){
    //   const { id, content } = payload;
    //   const targetIndex = this.memos.findIndex( e => e.id === id );
    //   const targetMemo = this.memos[targetIndex];
    //   // console.log(targetMemo);

    //   this.memos.splice( targetIndex, 1, { ...targetMemo, content } );
    //   this.storeMemo();

    // }
  }
}

</script>

<style scoped>
  .memo-list{
    padding:20px 0;
  }
</style>
