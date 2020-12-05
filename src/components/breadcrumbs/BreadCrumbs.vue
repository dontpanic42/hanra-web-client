<template>
    <nav class="breadcrumb" aria-label="breadcrumbs">
        <ul>
            <li>
                <router-link to="/">Home</router-link>
            </li>

            <li v-for="(crumb, index) in breadCrumbList" :key="crumb.to" :class="index == breadCrumbList.length - 1 ? 'is-active' : ''">
                <router-link :to="crumb.to">{{crumb.text}}</router-link>
            </li>
        </ul>
    </nav>
</template>

<script src="./BreadCrumbs.js"></script>
<style scoped src="./BreadCrumbs.css"></style>