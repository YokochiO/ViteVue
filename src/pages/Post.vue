<script setup>
import { ref } from 'vue'
import { useRoute } from 'vue-router'
import fetcher from '../lib/fetcher'
import PostContent from './PostContent.vue'
import NotFound from './NotFound.vue'

const error = ref(false)
const route = useRoute()

const query = `{postBy(postId:${route.params.id}){postId,title,content,featuredImage{node{mediaItemUrl}}}}`
const json = await fetcher(query)

// 存在しない記事だとpostByがnullになる
if (json.data.postBy === null) {
    error.value = true
}
</script>

<template>
    <template v-if="error">
        <NotFound />
    </template>
    <template v-else>
        <PostContent
            :title="json.data.postBy.title"
            :image="json.data.postBy.featuredImage"
            :content="json.data.postBy.content"
        />
    </template>
</template>
