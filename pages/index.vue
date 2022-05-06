<template>
  <Tutorial />
</template>

<script>
export default {
  transition: {
    duration: 1000,
    enterActiveClass: 'animate__animated animate__slideInUp',
    leaveActiveClass: 'animate__animated animate__slideOutDown'
  },
  head() {
    return {
      title: "Home",
      meta: [
        {hid: 'description', name: 'description', content: 'Home Page'}
      ]
    };
  },
  name: "IndexPage",
};
</script>
