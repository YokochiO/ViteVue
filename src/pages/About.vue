<script setup>
import fetcher from '../lib/fetcher'
import PostContent from './PostContent.vue'

const query = '{pageBy(pageId:2){featuredImage{node{mediaItemUrl}}content,title,pageId}}'
const json = await fetcher(query)
</script>

<template>
    <PostContent
        :title="json.data.pageBy.title"
        :image="json.data.pageBy.featuredImage"
        :content="json.data.pageBy.content"
    />
</template>
