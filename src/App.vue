<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
@import './assets/css/reset.css';

#app{
  width:100%;
  padding:10px;
  max-width:560px;
  margin:0 auto
}

</style>
