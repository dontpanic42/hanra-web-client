<template>
    <div class="card is-fullwidth mb-4">
        <header class="card-header">
            <p class="card-header-title has-text-left">{{ card.question }}
                &nbsp;<CardMetaTags :card="card"></CardMetaTags>
            </p>
            <a class="card-header-icon" @click="toggleVisible()">
                <i class="fas fa-angle-down" aria-hidden="true"></i>
            </a>
        </header>

        <div class="card-content" :class="isExpanded ? '' : 'is-hidden'">
            <div class="content has-text-left">
                <CardContentTable :card="card"></CardContentTable>
            </div>
        </div> 


        <footer class="card-footer" :class="isExpanded ? '' : 'is-hidden'">
            <p class="card-footer-item">
                <button class="button is-danger is-outlined is-fullwidth" @click="deleteCard">
                    <span class="icon is-small">
                        <i class="fas fa-trash"></i>
                    </span>

                    <span>Löschen</span>
                </button>
            </p>
            <p class="card-footer-item">
                <button class="button is-outlined is-fullwidth" @click="editCard">
                    <span class="icon is-small">
                        <i class="fas fa-edit"></i>
                    </span>

                    <span>Bearbeiten</span>
                </button>
            </p>
        </footer>
    </div>
</template>

<script src="./CardListItem.js"></script>
<style scoped src="./CardListItem.css"></style>