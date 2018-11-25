<template>
  <div class="media">
    <figure class="media-left has-margin-r-6 is-marginless-l">
      <p class="image is-48x48">
        <img :src="imageUrl" class="is-circle">
      </p>
    </figure>
    <div class="media-content">
      <div class="content">
        <div class="title is-5">{{ name }}</div>
        <div class="subtitle is-6">{{ username }}</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    name: {
      type: String,
      default: ""
    },
    username: {
      type: String,
      default: ""
    },
    imageUrl: {
      type: String,
      default: "https://bulma.io/images/placeholders/128x128.png"
    }
  }
}
</script>
