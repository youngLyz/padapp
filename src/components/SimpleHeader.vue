<template>
  <div class="header">    
    {{title}}
  </div>
</template>

<script>
export default {
  name: 'SimpleHeader',
  props:['title']
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
  
}
</style>
