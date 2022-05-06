<template>
  <div id="nav">
    <nuxt-link :class="{active: $route.path == '/'}" to="/">Home</nuxt-link>
    <nuxt-link :class="{active: $route.path == '/resource'}" :to="{name: 'resource'}">Resource</nuxt-link>
    <nuxt-link :class="{active: $route.path == '/ui'}" to="/ui">UI</nuxt-link>
    <nuxt-link :class="{active: $route.path == '/vuex'}" to="/vuex">Vuex</nuxt-link>
    <nuxt-link :class="{active: $route.path == '/route'}" to="/route">Route</nuxt-link>
    <nuxt-link :class="{active: $route.path == '/route/my_route'}" :to="{name: 'route-my_route'}">Route: my_route</nuxt-link>
  </div>
</template>

<script>
export default {
  
}
</script>

<style scoped>
#nav {
  margin: 10px 0px 20px 0px;
  text-align: center;
}

#nav a {
  text-decoration: none;
  display: inline-block;
  padding: 5px 10px 5px 10px;
  font-size: 20px; line-height: 24px;
}

#nav a:hover {
  background: #007bff;
  color: white;
  border-radius: 4px;
}
</style>