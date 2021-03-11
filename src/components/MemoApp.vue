<template>
  <div class='memo-app'>
    <app-header :memo-count='memoCount'/>
    <memo @change='updateMemoCount' />
  </div>
</template>

<script>
import AppHeader from './AppHeader';
import Memo from './memo/Memo';

export default {
  name: 'MemoApp',
  data(){
    return {
      memoCount : 0
    }
  },
  components : {
    AppHeader,
    Memo
  },
  methods : {
    updateMemoCount(count){
      this.memoCount = count;
    }
  }
}
</script>

<style>
</style>
