<template>
    <div v-if="card">
        <div class="card is-fullwidth mb-4">
            <header class="card-header">
                <p class="card-header-title">Frage 
                    &nbsp;
                    <CardMetaTags :card="card" />
                </p>
            </header>
            <div class="card-content">
                <div class="content">
                    <p class="is-size-4">
                        <span v-if="hasMeasureWord" class="has-text-grey-lighter">
                            <i class="fas fa-hashtag"></i>&nbsp;
                        </span>
                        {{ card.question }}
                    </p>
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

            <div class="card-content content-table">
                <div class="content">
                    <CardContentTable :card="card" />
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