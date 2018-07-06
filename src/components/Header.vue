<template>
  <div class="header">
    <span @click="handleReturnClick" class="header-back iconfont">&#xe64f;</span>
    {{title}}
  </div>
</template>

<script>
export default {
  name: 'PageHeader',
  props:['title','backUrl'],
  methods: {
    handleReturnClick () {
      
      if(this.backUrl){
        console.log(this.backUrl);
        this.$router.push(this.backUrl);
      }else{
        this.$router.go(-1);  
      }
      
    }
  }
}
</script>

<style lang="scss" scoped>
.header{
  width: 100%;
  height: $title-height;
  line-height: $title-height;
  background: $blue;
  position: fixed;
  top:0;
  left: 0;
  z-index: 99;  
  text-align: center;
  @include page-title;
  .header-back{
    color: $color-white;
    font-size: $font36;    
    width: 1.8rem;
    display: block;
    position: absolute;
    left: 0;
    top: 0;
    z-index: 100;
  }
  
}
</style>
