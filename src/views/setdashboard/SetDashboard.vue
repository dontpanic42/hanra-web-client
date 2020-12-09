<template>
    <div class="container">
        <h1 class="title is-3 has-text-left">{{ currentSet.setName }}</h1>
        <h2 class="subtitle is-5 has-text-left">{{ currentSet.setDescription }}</h2>

        <div class="columns">
            <div class="column">
                <article class="message">
                    <div class="message-body has-text-left">
                        <p class="mb-2">
                            Du befindest dich jetzt in der
                            <strong>Kartei</strong>.
                            Auf der rechten seite kannst du neue Karten hinzufügen und diese Kartei verwalten.
                        </p>
                    </div>
                </article>

                <article
                    v-if="!hasLoadingError && !isLoading && (!cards || !cards.length)"
                    class="message is-info"
                >
                    <div class="message-body has-text-left">
                        Diese Kartei ist leer. Klicke auf
                        <strong>Neue Karte</strong> um eine Karte zu erstellen.
                    </div>
                </article>

                <article v-if="hasLoadingError" class="message is-danger">
                    <div class="message-body has-text-left">
                        <p class="mb-2">
                            <strong>Oups</strong>.
                            Beim laden der Kartei ist etwas schiefgegangen. Bitte versuche es in ein paar minuten erneut.
                        </p>
                    </div>
                </article>

                <article v-if="cardsHasLoadingError" class="message is-danger">
                    <div class="message-body has-text-left">
                        <p class="mb-2">
                            <strong>Oups</strong>.
                            Beim laden der Karten ist etwas schiefgegangen. Bitte versuche es in ein paar minuten erneut.
                        </p>
                    </div>
                </article>

                <article v-if="cardsHasDeletingError" class="message is-danger">
                    <div class="message-body has-text-left">
                        <p class="mb-2">
                            <strong>Oups</strong>.
                            Beim löschen der Karte ist etwas schiefgegangen. Bitte versuche es in ein paar minuten erneut.
                        </p>
                    </div>
                </article>

                <CardListItem
                    v-for="card in cards"
                    :key="card.id"
                    :card="card"
                    @delete-card="deleteCard"
                ></CardListItem>

                <Pagination
                    v-if="cards && cards.length && cardsNumPages > 1"
                    @change-page="showCardPage"
                    :current-page="cardsPage"
                    :num-pages="cardsNumPages"
                ></Pagination>
            </div>

            <div class="column is-one-third">
                <article class="panel">
                    <p class="panel-heading">Menü</p>
                    <p class="panel-tabs">
                        <a class="is-active">Aktionen</a>
                        <a>Statistik</a>
                    </p>
                    <a class="panel-block is-active" @click="showCreateCardModal(true)">
                        <span class="panel-icon">
                            <i class="fas fa-plus-circle" aria-hidden="true"></i>
                        </span>
                        Neue Karte
                    </a>
                    <div class="panel-block">
                        <router-link
                            class="button is-primary is-outlined is-fullwidth"
                            :to="'/sets/' + currentSet.id + '/learn'"
                        >
                            <span class="icon is-small">
                                <i class="fas fa-stopwatch"></i>
                            </span>

                            <span>Lernen</span>
                        </router-link>
                    </div>
                </article>
            </div>
        </div>

        <CreateCardModal></CreateCardModal>
    </div>
</template>

<script src="./SetDashboard.js"></script>
<style scoped src="./SetDashboard.css"></style>