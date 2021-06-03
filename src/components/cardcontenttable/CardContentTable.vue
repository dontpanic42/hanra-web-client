<template>
    <div class="grid-container has-text-left">
        <div class="grid-column grid-column-name">Pinyin</div>
        <div class="grid-column grid-column-content">{{ card.answerWordPinyin }}</div>
        <div class="grid-column-name">Hanzi</div>
        <div class="grid-column-content">
            <HanziText :text="card.answerWordHanzi"></HanziText>
        </div>
        <div class="grid-column-name" v-if="card.answerMeasureHanzi">Zählwort</div>
        <div class="grid-column-content" v-if="card.answerMeasureHanzi">
            <HanziText :text="card.answerMeasureHanzi"></HanziText> 
            <span v-if="card.answerMeasurePinyin">({{ card.answerMeasurePinyin }})</span>
        </div>
        <div class="grid-column-name" v-if="card.answerExample">Beispiel</div>
        <div class="grid-column-content preserve-white-space" v-if="card.answerExample">
            <HanziText :text="card.answerExample"></HanziText>
        </div>
    </div>
</template>

<script src="./CardContentTable.js"></script>
<style scoped src="./CardContentTable.css"></style>