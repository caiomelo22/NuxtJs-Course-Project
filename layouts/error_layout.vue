<template>
  <div>
    <div class="header">Header Error</div>
    <div class="main">
      <nuxt />
    </div>
    <div class="footer">Footer Error</div>
  </div>
</template>

<script>
export default {
  // middleware: 'mw1'
}
</script>

<style scoped>
.header, .footer {
  background: red;
}
</style>
