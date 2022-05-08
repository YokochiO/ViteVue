<script setup>
import fetcher from '../lib/fetcher'

const query = `{
  pageBy(pageId: 2) {
    id
    title
    content
  }
}`

const json = await fetcher(query)
</script>

<template>
    <h2>{{ json.data.pageBy.title }}</h2>
    <div class="post">
        <div class="content-body" v-html="json.data.pageBy.content"></div>
    </div>
</template>
