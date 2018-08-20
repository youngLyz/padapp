<template>
  <div class="message-wrapper" @click.self="$close()">
    <div class="message-content">
      
      <div class="message-text"><span class="message-icon iconfont">&#xe60b;</span>{{ content }}</div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
  @import 'css/alert.scss';
</style>