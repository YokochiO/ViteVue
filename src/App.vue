<script setup>
import MainNav from './components/MainNav.vue'
</script>

<template>
    <header>
        <main-nav />
        <h1>Vite + Vue + Wordpress</h1>
    </header>
    <router-view v-slot="{ Component }">
        <template v-if="Component">
            <transition mode="out-in">
                <main>
                    <suspense>
                        <component :is="Component"></component>
                        <template #fallback> Loading... </template>
                    </suspense>
                </main>
            </transition>
        </template>
    </router-view>
    <footer>
        <p><a href="https://github.com/YokochiO">リポジトリ</a></p>
    </footer>
</template>
