<template>
    <nav class="pagination" role="navigation" aria-label="pagination">
        <a v-if="hasPreviousPage" class="pagination-previous" @click="navigateTo(currentPage - 1)">
            <span class="icon is-small">
                <i class="fas fa-chevron-left"></i>
            </span>

            <span>Zurück</span>
        </a>
        <a v-if="hasNextPage" class="pagination-next" @click="navigateTo(currentPage + 1)">
            <span>Weiter</span>
            <span class="icon is-small">
                <i class="fas fa-chevron-right"></i>
            </span>
        </a>
        <ul class="pagination-list is-hidden-mobile">
            <li v-for="(item, index) in sequence" :key="index">
                <a
                    v-if="item.type == 'page'"
                    class="pagination-link"
                    :class="item.isActive ? 'is-current' : ''"
                    @click="navigateTo(item.page)"
                    aria-label="Goto page 1"
                >{{item.text}}</a>
                <span v-if="item.type == 'ellipsis'" class="pagination-ellipsis">&hellip;</span>
            </li>
        </ul>
    </nav>
</template>

<script src="./Pagination.js"></script>
<style scoped src="./Pagination.css"></style>