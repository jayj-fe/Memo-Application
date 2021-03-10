<template>
  <div class='memo-form'>
    <form @submit.prevent='addMemo'>
      <fieldset>
        <div>
          <input type='text' class='memo-form__title' v-model="title" placeholder='메모의 제목을 입력해주세요.'>
          <textarea class='memo-form__content' v-model="content" placeholder='메모의 내용을 입력해주세요.'></textarea>
          <button type='reset'><i class='fas fa-sync-alt'></i></button>
        </div>
        <button type='submit'>등록하기</button>
      </fieldset>
    </form>
  </div>
</template>

<script>
export default {
  name : 'MemoForm',
  data(){
    return {
      title : '',
      content : ''
    }
  },
  methods : {
    resetFields(){
      this.title = '';
      this.content = '';
    },
    addMemo(){
      const { title, content } = this;
      const id = new Date().getTime();

      const isEmpty = title.length <= 0 || content.length <= 0;
      if(isEmpty){
        return false;
      }

      this.$emit('addMemo', { id, title, content } );
      this.resetFields();
    }
  }
}
</script>

<style scoped>
  .memo-form{
    padding-bottom:40px;
    margin-bottom:24px;
    border-bottom:1px solid #ddd;
  }

  .memo-form form fieldset{
    overflow:hidden
  }

  .memo-form form fieldset div{
    position:relative;
    padding:15px;
    margin-bottom:20px;
    box-shadow:0 4px 10px -4px rgba(0,0,0,0.2);
    background:#fff;
  }

  .memo-form form fieldset div input[type='text']{
    width:100%;
    margin-bottom:10px;
    font-size:15px;
    line-height:24px;
  }

  .memo-form form fieldset div textarea{
    width:100%;
    font-size:13px;
    height:60px;
  }

  .memo-form form fieldset div button[type='reset']{
    position:absolute;
    right:15px;
    bottom:15px;
    background:none;
    font-size:15px
  }

  .memo-form form fieldset button[type='submit']{
    float:right;
    width:80px;
    padding:10px 0;
    border-radius:4px;
    background:#ff5a00;
    color:#fff;
    font-size:13px;
  }
</style>
