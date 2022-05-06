<template>
  <div style="padding: 15px">
    <b-card
      border-variant="info"
      footer-bg-variant="info"
      text-variant="info"
    >
      <p>
        <i class="fas fa-file-code"></i>
        <span>pages/id/_id/index</span>
      </p>
      <b-alert show variant="info">
        <i class="fas fa-id-card-alt"></i>
        <b>ID: </b>
        <b>{{$route.params.id}}</b>
        <hr>
        <nuxt-link :to="{name: 'id-id-detail', params: {id: $route.params.id}}">
          Detail Page
        </nuxt-link>
      </b-alert>
      <div slot="footer">
        <span style="color: white">Dynameic Route</span>
      </div>
    </b-card>
  </div>
</template>

<script>
export default {
  head() {
    return {
      title: "Id First",
    };
  },
};
</script>