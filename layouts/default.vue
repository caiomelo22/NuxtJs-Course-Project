<template>
  <div>
    <Header />
    <Main>
      <Nuxt />
    </Main>
    <Footer />
  </div>
</template>
<script>
import Header from "@/components/core/Header";
import Footer from "@/components/core/Footer";
import Main from "@/components/core/Main";
export default {
  components: {
    Header,
    Footer,
    Main,
  },
};
</script>