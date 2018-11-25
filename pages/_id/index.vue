<template>
  <div>
    <section class="main">
      <Breadcrumb :current-category="post.category" />

      <div class="caption-wrapper has-padding-t-4 has-padding-b-6">
        <div class="container is-small">
          <div class="content">
            <div class="title font-title-regular is-size-2 has-text-weight-normal">
              {{ post.title }}
            </div>

            <div class="columns">
              <div class="post-author column">
                <Author
                  :created-at="post.created_at"
                  name="Eka Wahyu W."
                />
              </div>
            </div>

            
          </div>
        </div>
      </div>

      <div class="posts-wrapper has-margin-b-2">
        <div class="cover has-margin-b-4">
          <img :src="imageUrl">
        </div>
        <div class="container">
          <div class="content font-light is-size-5">
            <vue-markdown>{{ post.content }}</vue-markdown>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import VueMarkdown from "vue-markdown"
import Breadcrumb from "~/components/Breadcrumb.vue"
import Author from "~/components/Author.vue"

export default {
  components: {
    VueMarkdown,
    Breadcrumb,
    Author
  },
  data() {
    return {
      post: {},
      url: ""
    }
  },
  head() {
    return {
      title: `${this.post.title} - ${process.env.title}`,
      meta: [
        {
          property: "og:title",
          content: this.post.title,
          template: chunk => `${chunk} - ${process.env.title}`,
          vmid: "og:title"
        },
        {
          name: "og:image",
          content: this.imageUrl
        },
        {
          name: "og:url",
          content: `${process.env.siteUrl}/${this.url}`
        }
      ]
    }
  },
  computed: {
    imageUrl() {
      return `${process.env.baseUrl}${this.post.cover.url}`
    }
  },
  async asyncData({ app, params }) {
    const id = params.id.split("-")[0]
    const url = `${process.env.baseUrl}/posts/${id}`
    const res = await app.$axios.$get(url)
    return { post: res, url: params.id }
  }
}
</script>
