<template>
  <div style="padding: 15px">
    <b-card
      border-variant="primary"
      footer-bg-variant="primary"
      text-variant="primary"
    >
      <p>
        <i class="fas fa-file-code"></i>
        <span>pages/id/_id.vue</span>
      </p>
      <b-alert show variant="primary">
        <i class="fas fa-id-card-alt"></i>
        <b>ID: </b>
        <b>{{ $route.params.id }}</b>
      </b-alert>
      <div slot="footer">
        <span style="color: white">Dynameic Route</span>
      </div>
    </b-card>
    <hr />
    <nuxt-child></nuxt-child>
  </div>
</template>

<script>
export default {
  middleware: 'mw_check',
  // validate({ params, query, store }) {
  //   let result = /^\d+$/.test(params.id);
  //   if (result) {
  //     if (params.id > 0 && params.id < 100) {
  //       return true;
  //     } else {
  //       throw new Error("Id must be between 1 and 99");
  //     }
  //   } else {
  //     throw new Error("Id must be a number");
  //   }
  // },
  head() {
    return {
      title: "Id as Param",
    };
  },
};
</script>