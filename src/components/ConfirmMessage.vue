<template>
  <div class="message-wrapper" @click.self="cancel">
    <div class="message-content confirm">
      <div class="message-title">{{ title }}</div>
      <div class="message-text">{{ content }}</div>
      <div class="buttons">
        <button class="md-button flat" @click="cancel">取消</button>
        <button class="md-button flat" @click="ok">确定</button>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    props: {
      title: String,
      content: String
    },
    methods: {
      ok () {
        // Close confirm dialog and send 'true' to its caller
        this.$close(true)
      },
      cancel () {
        this.$close(false)
      }
    }
  }
</script>
<style lang="scss" scoped>
  @import 'css/alert.scss';
</style>
