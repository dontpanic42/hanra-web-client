<template>
    <span class="">
        <span class="is-clickable hanzi-text-style" v-for="(char, index) in text" :key="index" @click="showCharacter(char)">{{char}}</span>
    </span>
</template>

<script src="./HanziText.js"></script>
<style scoped src="./HanziText.css"></style>