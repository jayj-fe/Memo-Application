<template>
  <div class='app-header'>
    <h1>메모 어플리케이션</h1>
    <p>{{ memoCount }}개의 메모</p>
  </div>
</template>

<script>
export default {
  name : 'AppHeader',
  props : {
    memoCount : {
      type : Number,
      default : 0
    }
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
