<script setup>
const props = defineProps({
    title: String,
    image: String,
    content: String,
})
</script>

<template>
    <h2>{{ props.title }}</h2>
    <figure class="eyecatch" v-if="props.image">
        <img :src="props.image.node.mediaItemUrl" alt="" />
    </figure>
    <div class="content-body" v-html="props.content"></div>
</template>
