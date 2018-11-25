<template>
  <div>
    <section class="main">
      <Hero/>

      <div class="latest-post-wrapper has-margin-t-4">
        <div class="container">
          <h6 class="title is-5 is-uppercase font-light">Latest <span class="font-regular">Writing</span></h6>

          <div class="posts has-margin-b-2">
            <div class="columns is-multiline">
              <nuxt-link
                v-for="post in posts"
                :key="post.id"
                :to="'/' + post.id + '-' + toSlug(post.title)"
                class="column is-4">
                <Post
                  :data-post="post"
                />
              </nuxt-link>
            </div>

            <!-- Load More -->
            <div class="columns">
              <div class="column is-one-third is-offset-one-third">
                <a
                  class="button is-primary is-outlined is-fullwidth is-uppercase font-bold is-size-6 has-padding-bt-4"
                  @click.prevent="loadMore()">
                  {{ loadingBtn }}
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import Hero from "~/components/Hero.vue"
import Post from "~/components/Post.vue"

export default {
  components: {
    Hero,
    Post
  },
  data() {
    return {
      loadingBtn: "Load More",
      posts: [],
      limit: 3,
      page: 1,
      sort: "created_at:desc"
    }
  },
  head() {
    return {
      meta: [
        {
          name: "og:title",
          content: "Eka's Daily",
        },
        {
          name: "og:image",
          content: "/logo.png"
        },
        {
          name: "og:url",
          content: process.env.siteUrl
        },
      ]
    }
  },
  computed: {
    start() {
      return (this.page - 1) * this.limit
    }
  },
  async asyncData({ app }) {
    const res = await app.$axios.$get(`${process.env.baseUrl}/posts`, {
      params: {
        _start: 0,
        _limit: 3,
        _sort: "created_at:desc"
      }
    })
    return { posts: res }
  },
  methods: {
    async loadMore() {
      this.page++
      this.loadingBtn = "..."
      const res = await this.$axios.$get(`${process.env.baseUrl}/posts`, {
        params: {
          _start: this.start,
          _limit: this.limit,
          _sort: this.sort
        }
      })
      this.loadingBtn = "Load More"
      this.posts = this.posts.concat(...res)
    },
    toSlug(text) {
      /* eslint-disable */
      return text
        .toString()
        .toLowerCase()
        .replace(/\s+/g, "-") // Replace spaces with -
        .replace(/[^\w\-]+/g, "") // Remove all non-word chars
        .replace(/\-\-+/g, "-") // Replace multiple - with single -
        .replace(/^-+/, "") // Trim - from start of text
        .replace(/-+$/, "") // Trim - from end of text
    }
  }
}
</script>
