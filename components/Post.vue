<template>
  <div>

    <div class="card is-shadowless">
      <div class="card-image">
        <figure
          :style="'background-image: url('+ imageUrl +'); background-size: cover; background-position: center;'"
          class="image is-5by3 is-rounded"/>
      </div>
      <div class="card-content is-paddingless-lr has-padding-bt-7">								
        <div class="content">
          <h5 class="title-posts font-bold has-text-weight-normal is-marginless-b">{{ dataPost.title }}</h5>
          <div class="has-margin-t-8">
            <span class="title-category font-bold is-uppercase color-primary">{{ dataPost.category }}&nbsp;</span>
            <span class="title-post-time font-light is-uppercase">{{ dataPost.created_at | date }}</span>
          </div>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
import dayjs from "dayjs"
export default {
  filters: {
    date(value) {
      return dayjs(value).format("D MMMM YYYY")
    }
  },
  props: {
    dataPost: {
      type: Object,
      default: () => ({})
    }
  },
  computed: {
    imageUrl() {
      return `${process.env.baseUrl}${this.dataPost.cover.url}`
    }
  }
}
</script>
