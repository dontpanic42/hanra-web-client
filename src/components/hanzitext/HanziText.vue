<template>
    <span class="">
        <span v-for="(char, index) in text" :key="index" >
            <span class="is-clickable hanzi-text-style" v-if="isHanCharacter(char)" @click="showCharacter(char)">{{char}}</span>
            <span v-else>{{char}}</span>
        </span>
    </span>
</template>

<script src="./HanziText.js"></script>
<style scoped src="./HanziText.css"></style>