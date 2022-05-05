<template>
  <div id="error">
    <p id="errorStatus">{{error.statusCode}}</p>
    <p id="errorMsg">{{error.message}}</p>
  </div>
</template>

<script>
export default {
  layout: 'error_layout',
  props: ['error']
}
</script>

<style scoped>
#error {
  margin: 20px; text-align: center; margin-top: 25%;
}
#errorStatus {
  font-family: monospace; font-size: 42px; background: red; color: white; line-height: 60px; margin: 10px 15%;
}
#errorMsg {
  font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif; font-size: 24px; line-height: 36px;
}
</style>