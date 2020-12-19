<template>
    <div v-if="card">
        <div class="card is-fullwidth mb-4">
            <header class="card-header">
                <p class="card-header-title">Frage 
                    &nbsp;
                    <span v-if="card.type == 'new'" class="tag is-primary">Neu!</span>
                    <span v-if="card.type != 'new'" class="tag is-light">Wiederholung</span>
                </p>
            </header>
            <div class="card-content">
                <div class="content">
                    <p class="is-size-2">{{ card.question }}</p>
                </div>
            </div>
            <footer class="card-footer" :class="isRevealed ? 'is-hidden' : ''">
                <p class="card-footer-item has-text-right">
                    <button class="button is-primary is-outlined" @click="showAnswer()">
                        <span class="icon is-small">
                            <i class="fas fa-check"></i>
                        </span>

                        <span>Überprüfen</span>
                    </button>
                </p>
            </footer>
        </div>

        <div class="card is-fullwidth mb-4" :class="isRevealed ? '' : 'is-hidden'">
            <header class="card-header">
                <p class="card-header-title">Antwort</p>
            </header>

            <div class="card-content">
                <div class="content">
                    <div class="columns">
                        <div class="column is-size-4">{{ card.answerLine1 }}</div>
                    </div>

                    <div class="columns">
                        <div class="column is-size-4"><HanziText :text="card.answerLine2"></HanziText></div>
                    </div>
                </div>
            </div>

            <footer class="card-footer">
                <p class="card-footer-item has-text-right">
                    <router-link
                        class="button is-primary"
                        :to="'/sets/' + $route.params.setId + '/learn-rate'"
                    >
                        <span class="icon is-small">
                            <i class="fas fa-check"></i>
                        </span>

                        <span>Bewerten</span>
                    </router-link>
                </p>
            </footer>
        </div>
    </div>
</template>

<script src="./SessionView.js"></script>
<style scoped src="./SessionView.css"></style>