<template>
  <section class="footer has-padding-bt-2">
    <div class="container">
      <div class="content">
        <div class="columns link-social has-text-centered">
          <div class="column is-vcentered">
            <!-- <span class="title-social title is-size-6 font-light">
              Find me on:
            </span> -->
            <a :href="facebook" target="_blank" class="has-margin-l-7">
              <i class="fab fa-facebook-square fa-2x has-text-grey"/>
            </a>
            &nbsp;
            <a :href="instagram" target="_blank" class="has-margin-l-7">
              <i class="fab fa-instagram fa-2x has-text-grey"/>
            </a>
            &nbsp;
            <a :href="linkedin" target="_blank" class="has-margin-l-7">
              <i class="fab fa-linkedin fa-2x has-text-grey"/>
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      facebook: "https://web.facebook.com/eka.wahyuwidiann",
      instagram: "https://www.instagram.com/ekawahyuwidia",
      linkedin: "https://www.linkedin.com/in/eka-wahyu-widianingsih-ba434b112/"
    }
  }
}
</script>
