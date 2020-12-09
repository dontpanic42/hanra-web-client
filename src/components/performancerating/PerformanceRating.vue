<template>
    <div class="is-danger">
        <span v-for="item in range" :key="item" class="pr-2"
            @mouseover="hover(item, 'over')" 
            @mouseleave="hover(item, 'leave')"
            @click="selectRating(item)">
            <i v-if="item <= displayedRating" 
                :class="disabled ? 'has-text-grey-light' : classes[item]"
                class="is-size-4 fas fa-star"></i>
            <i v-if="item > displayedRating" 
                class="has-text-grey-light is-size-4 far fa-star"></i>
        </span> {{}}

    </div>
</template>

<script src="./PerformanceRating.js"></script>
<style scoped src="./PerformanceRating.css"></style>