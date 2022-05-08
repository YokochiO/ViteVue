<script setup>
import { useRoute } from 'vue-router'
import { ref } from 'vue'
import fetcher from '../lib/fetcher'

const error = ref(false)
const route = useRoute()
const query = `{
  postBy(postId: ${route.params.id}) {
    id
    postId
    title
    content
    featuredImage {
      node {
        mediaItemUrl
      }
    }
  }
}`
const json = await fetcher(query)
// 存在しない記事だとpostByがnullになる
if (json.data.postBy === null) {
    error.value = true
}
</script>

<template>
    <template v-if="error">
        <h2>えらーかな？</h2>
        <p>記事を読み込めなかったみたいです。</p>
    </template>
    <template v-else>
        <h2>{{ json.data.postBy.title }}</h2>
        <div class="post">
            <figure class="eyecatch" v-if="json.data.postBy.featuredImage">
                <img :src="json.data.postBy.featuredImage.node.mediaItemUrl" alt="" />
            </figure>
            <div class="content-body" v-html="json.data.postBy.content"></div>
        </div>
    </template>
</template>
