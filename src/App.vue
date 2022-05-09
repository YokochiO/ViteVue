<script setup>
import Header from './components/Header.vue'
import Footer from './components/Footer.vue'
</script>

<template>
    <Header />
    <Router-view v-slot="{ Component }">
        <template v-if="Component">
            <Transition mode="out-in">
                <main>
                    <Suspense>
                        <component :is="Component"></component>
                        <template #fallback> Loading... </template>
                    </Suspense>
                </main>
            </Transition>
        </template>
    </Router-view>
    <Footer />
</template>
