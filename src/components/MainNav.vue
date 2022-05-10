<template>
    <nav class="main-nav">
        <ul>
            <li><Router-link :to="{ name: 'Home' }">Home</Router-link></li>
            <li><Router-link :to="{ name: 'About' }">About</Router-link></li>
        </ul>
    </nav>
</template>
