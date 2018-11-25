<template>
  <section class="header">
    <nav class="navbar is-transparent is-fixed-top has-shadow">
      <div class="container">
        <div class="navbar-brand">
          <nuxt-link
            :to="'/'"
            class="navbar-item">
            <img src="@/assets/images/logo.png" alt="eka">
          </nuxt-link>

          <!--a role="button" class="navbar-burger has-text-black" aria-label="menu" aria-expanded="false">
            <span aria-hidden="true"/>
            <span aria-hidden="true"/>
            <span aria-hidden="true"/>
          </a-->
        </div>

        <div class="navbar-menu">
          
          <div class="navbar-end">
            <nuxt-link
              v-for="(v, k) in menus"
              :to="'/' + v.link"
              :key="k"
              class="navbar-item has-text-black font-light is-uppercase">
              {{ v.name }}
            </nuxt-link>
          </div>
        </div>
      </div>
    </nav>
  </section>
</template>

<script>
export default {
  data() {
    return {
      logo: "",
      isActive: false,
      menus: {
        latest: {
          link: "",
          name: "Back to Home"
        }
        // experiences: {
        //   link: "experiences",
        //   name: "Experiences"
        // },
        // random: {
        //   link: "random",
        //   name: "Randomness"
        // }
      }
    }
  }
}
</script>
