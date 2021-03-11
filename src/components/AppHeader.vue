<template>
  <div class='app-header'>
    <h1>메모 어플리케이션</h1>
    <p>{{ getMemoCount }}개의 메모</p>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  name : 'AppHeader',
  // props : {
  //   memoCount : {
  //     type : Number,
  //     default : 0
  //   }
  // }
  computed : {
    ...mapGetters([
      'getMemoCount'
    ])
  }
}
</script>

<style>
  .app-header{
    padding:15px;
    overflow:hidden
  }

  .app-header h1{
    float:left;
    font-size:24px;
  }

  .app-header p{
    float:right;
    margin-top:10px;
    font-size:14px;
  }
</style>
