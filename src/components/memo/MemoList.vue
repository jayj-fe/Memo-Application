<template>
  <li class='memo-item'>
    <strong>{{ memoItem.title }}</strong>
    <div class="memo-con" @dblclick='handleDblClick'>
      <p v-if='!isEditing'>{{ memoItem.content }}</p>
      <input v-else type='text' ref='content' :value='memoItem.content' @blur='handleBlur' @keydown.enter='updateMemo' />
    </div>
    <button type='button' @click='deleteMemo'><i class='fas fa-times'></i></button>
  </li>
</template>

<script>
export default {
  name : 'MemoList',
  props : {
    memoItem : {
      type : Object
    }
  },
  data(){
    return {
      isEditing : false
    }
  },
  methods : {
    deleteMemo(){
      const id = this.memoItem.id;
      this.$emit('deleteMemo', id)
    },

    handleDblClick(){
      this.isEditing = true;

      this.$nextTick(() => {
        this.$refs.content.focus();
      });
    },

    handleBlur(){
      this.isEditing = false;
    },

    updateMemo(e){
      const id = this.memoItem.id;
      const content = e.target.value.trim();

      if(content.length <= 0){
        return false;
      }

      this.$emit('updateMemo', {id, content});
      this.isEditing = false;
    }
  }
}
</script>

<style scoped>
  .memo-item{
    overflow:hidden;
    position:relative;
    margin-bottom:15px;
    padding:15px;
    box-shadow:0 4px 10px -4px rgba(0,0,0,0.2);
    background-color:#fff;
    list-style:none;
  }

  .memo-item button{
    background:none;
    position:absolute;
    right:20px;
    top:20px;
    font-size:15px;
    color:#e5e5e5;
    border:0
  }

  .memo-item strong{
    display:block;
    margin-bottom:10px;
    font-size:15px;
    line-height:24px;
    font-weight:normal;
    word-break: break-all;
  }

  .memo-item .memo-con{
    font-size:13px;
    color:#666
  }

  .memo-item .memo-con input[type='text']{
    box-sizing: border-box;
    width:100%;
    font-size:inherit;
    border:1px solid #999;
  }
</style>
