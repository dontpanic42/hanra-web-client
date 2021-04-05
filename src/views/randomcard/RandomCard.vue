<template>
    <div>
        <article class="message">
            <div class="message-body has-text-left">
                <p>
                    <span class="icon is-small"> <i class="fas fa-random"></i></span> &nbsp;
                    Zeige <strong>zufällige <span v-if="currentType == 'new'">neue</span></strong> Karte <strong>{{ currentCardIndex + 1 }}/{{ numCards }}</strong>
                </p>
            </div>
        </article>   

        <!-- No cards found, being in 'new cards' mode -->
        <article
            v-if="!hasCard && currentType=='new' && !isLoading && !hasLoadingError"
            class="message is-info"
        >
            <div class="message-body has-text-left">
                <p class="mb-4">
                    Sieht so aus als hättest du keine neuen Karten.
                </p>
                <p class="mb-4">
                    Klicke auf den Button
                    <strong>Kartei Verwalten</strong> um neue Karten in dieser Kartei
                    anzulegen. Klicke auf den Button <strong>Zufällige Karte</strong> um eine zufällige Karte anzuzeigen.
                </p>
                <p class="mb-4">
                    Tip: Du kannst in den Einstellungen festlegen wie viele Tage lang eine Karte als "Neu" gilt.
                </p>
                <router-link :to="'/sets/' + $route.params.setId" class="button">
                    <span class="icon is-small">
                        <i class="fas fa-edit"></i>
                    </span>
                    <span>Kartei Verwalten</span>
                </router-link>
                &nbsp;
                <button class="button is-primary" @click="next('all')">
                    <span class="icon is-small">
                        <i class="fas fa-random"></i>
                    </span>
                    <span>Zufällige Karte</span>
                </button>
            </div>
        </article>

        <!-- No cards found, being in 'all cards' mode -->
        <article
            v-if="!hasCard && currentType!='new' && !isLoading && !hasLoadingError"
            class="message is-info"
        >
            <div class="message-body has-text-left">
                <p class="mb-4">
                    Sieht so aus als hättest du keine Karten.
                </p>
                <p class="mb-4">
                    Klicke auf den Button
                    <strong>Kartei Verwalten</strong> um neue Karten in dieser Kartei
                    anzulegen.
                </p>
                <router-link :to="'/sets/' + $route.params.setId" class="button">
                    <span class="icon is-small">
                        <i class="fas fa-edit"></i>
                    </span>

                    <span>Kartei Verwalten</span>
                </router-link>
            </div>
        </article>

        <article
            v-if="hasLoadingError"
            class="message is-danger"
        >
            <div class="message-body has-text-left">
                <p class="mb-4">
                    Beim Laden der Karte ist ein <strong>Fehler</strong> aufgetreten. Versuche es später nocheinmal.
                </p>
                <router-link :to="'/sets/' + $route.params.setId" class="button">
                    <span class="icon is-small">
                        <i class="fas fa-edit"></i>
                    </span>

                    <span>Kartei Verwalten</span>
                </router-link>
            </div>
        </article>

        <div v-if="hasCard" class="card is-fullwidth mb-4">
            <header class="card-header">
                <p class="card-header-title">
                    Frage
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
                <div class="card-footer-item has-text-right">
                    <button class="button is-primary is-outlined" @click="next(currentType)">
                        <span class="icon is-small">
                            <i class="fas fa-random"></i>
                        </span>

                        <span>Nächste</span>
                    </button>
                </div>
                <div class="card-footer-item has-text-right">
                    <button class="button is-primary" @click="showAnswer()">
                        <span class="icon is-small">
                            <i class="fas fa-check"></i>
                        </span>

                        <span>Überprüfen</span>
                    </button>
                </div>
            </footer>
        </div>

        <div v-if="hasCard" class="card is-fullwidth mb-4" :class="isRevealed ? '' : 'is-hidden'">
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
                <div class="card-footer-item has-text-right">
                    <button
                        class="button is-primary is-outlined"
                        @click="next('all')"
                        v-if="currentType == 'new'"
                    >
                        <span class="icon is-small">
                            <i class="fas fa-random"></i>
                        </span>

                        <span>Zufällig (Alle)</span>
                    </button>
                    <button
                        class="button is-primary is-outlined"
                        @click="next('new')"
                        v-if="currentType == 'all'"
                    >
                        <span class="icon is-small">
                            <i class="fas fa-random"></i>
                        </span>

                        <span>Zufällig (Neue)</span>
                    </button>
                </div>
                <div class="card-footer-item has-text-right">
                    <button
                        class="button is-primary"
                        @click="next(currentType)"
                    >
                        <span class="icon is-small">
                            <i class="fas fa-random"></i>
                        </span>

                        <span>Nächste</span>
                    </button>
                </div>
            </footer>
        </div>
    </div>
</template>

<script src="./RandomCard.js"></script>
<style scoped src="./RandomCard.css"></style>