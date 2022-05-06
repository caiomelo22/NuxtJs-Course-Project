<template>
  <div id="vuex">
    {{$store.getters.get_message}}
    <b-button @click="$store.commit('reset_msg', 'Message changed in store')">Reset Message</b-button>
  </div>
</template>

<script>
export default {
  head() {
    return {
      title: "Vuex",
      meta: [
        {hid: 'description', name: 'description', content: 'Vuex Page'}
      ]
    };
  },
  
}
</script>

<style scoped>
#vuex {
  font-size: 22px; padding: 10px;
}
</style>