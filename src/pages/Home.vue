<script setup>
import fetcher from '../lib/fetcher'

const query = `{
  posts {
    nodes {
      title
      postId
      date
      featuredImage {
        node {
          mediaItemUrl
        }
      }
    }
  }
}`
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
        <li v-for="post in json.data.posts.nodes" :key="post.postId">
            <router-link :to="{ name: 'post', params: { id: post.postId } }">
                <span class="date">{{ parseDate(post.date) }}</span>
                <h3 class="title">{{ post.title }}</h3>
            </router-link>
        </li>
    </ul>
</template>
