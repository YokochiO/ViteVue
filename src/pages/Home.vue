<script setup>
import fetcher from '../lib/fetcher'

const query = '{posts(where:{categoryIn:[1,4]}){edges{node{title,date,postId}}}}'
const json = await fetcher(query)

const parseDate = (date) => {
    const zz = (d) => {
        return ('00' + d).slice(-2)
    }
    const d = new Date(date)
    const mm = zz(d.getMonth() + 1)
    const dd = zz(d.getDate())
    return `${d.getFullYear()}年${mm}月${dd}日`
}
</script>

<template>
    <h2>Home</h2>
    <ul class="post-list">
        <li v-for="post in json.data.posts.edges" :key="post.postId">
            <Router-link :to="{ name: 'Post', params: { id: post.node.postId } }">
                <span class="date">{{ parseDate(post.node.date) }}</span>
                <h3 class="title">{{ post.node.title }}</h3>
            </Router-link>
        </li>
    </ul>
</template>
