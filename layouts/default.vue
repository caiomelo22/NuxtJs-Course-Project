<template>
  <div>
    <Header />
    <Main>
      <NavBar />
      <Nuxt />
    </Main>
    <Footer />
  </div>
</template>
<script>
import Header from "@/components/core/Header";
import Footer from "@/components/core/Footer";
import Main from "@/components/core/Main";
import NavBar from "@/components/core/NavBar";
export default {
  components: {
    Header,
    Footer,
    Main,
    NavBar
  },
};
</script>