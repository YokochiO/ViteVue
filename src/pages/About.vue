<script setup>
import fetcher from '../lib/fetcher'

const props = defineProps({
    query: String,
})
const json = await fetcher(props.query)
</script>

<template>
    <h2>{{ json.data.pageBy.title }}</h2>
    <div class="post">
        <div class="content-body" v-html="json.data.pageBy.content"></div>
    </div>
</template>
