<template>
  <div id="error">
    <div>
      <p id="errorStatus">{{ error.statusCode }}</p>
      <p id="errorMsg">{{ error.message }}</p>
      <hr />
      <img src="/witsel.jpg" id="errorImg" />
    </div>
  </div>
</template>

<script>
export default {
  layout: "error_layout",
  props: ["error"],
  head() {
    return {
      title: this.error.message,
      meta: [
        {
          hid: "description",
          name: "description",
          content: this.error.message,
        },
      ],
    };
  },
};
</script>

<style scoped>
#error {
  margin: 20px;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
}
#errorStatus {
  font-family: monospace;
  font-size: 42px;
  background: red;
  color: white;
  line-height: 60px;
  margin: 10px 15%;
}
#errorMsg {
  font-family: "Franklin Gothic Medium", "Arial Narrow", Arial, sans-serif;
  font-size: 24px;
  line-height: 36px;
}
#errorImg {
  margin: 10px;
  width: 45%;
}
</style>