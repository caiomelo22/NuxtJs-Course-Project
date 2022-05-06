<template>
  <div style="padding: 15px">
    <b-card
      border-variant="danger"
      footer-bg-variant="danger"
      text-variant="danger"
    >
      <p>
        <i class="fas fa-file-code"></i>
        <span>pages/id/index</span>
      </p>
      <b-alert show variant="danger">
        <i class="fas fa-id-card-alt"></i>
        <b>ID: </b>
        <b>No ID provided!</b>
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
      title: "No Id Found",
    };
  },
};
</script>