<template>
    <span class="meta-tags">
        <span v-for="(tag, index) in tags" :key="tag">
            <span v-if="index > 0">&nbsp;</span>
            <span class="tag is-info is-light">{{tag}}</span>
        </span>
    </span>
</template>

<script src="./CardMetaTags.js"></script>
<style scoped src="./CardMetaTags.css"></style>