<template>
  <div class='memo-app'>
    <app-header/>
    <memo/>
  </div>
</template>

<script>
import AppHeader from './AppHeader';
import Memo from './memo/Memo';

export default {
  name: 'MemoApp',
  components : {
    AppHeader,
    Memo
  }
}
</script>

<style>
</style>
