<template>
    <div class="container">
        <h1 class="title is-3 has-text-left">{{ currentSet.setName }} 
            <div class="tag is-info">
                <span v-if="isSearching">
                    <i class="fas fa-filter"></i>&nbsp;
                </span>
                <span v-if="cardsNumTotal == 1">
                    {{ cardsNumTotal }} Karte
                </span>
                <span v-if="cardsNumTotal > 1">
                    {{ cardsNumTotal }} Karten
                </span>
            </div>
            </h1>
        <h2 v-if="currentSet.setDescription" class="subtitle is-5 has-text-left">{{ currentSet.setDescription }}</h2>

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
                    v-if="!hasLoadingError && !isLoading && !isSearching && (!cards || !cards.length)"
                    class="message is-info"
                >
                    <div class="message-body has-text-left">
                        Diese Kartei ist leer. Klicke auf
                        <strong>Neue Karte</strong> um eine Karte zu erstellen.
                    </div>
                </article>

                <article
                    v-if="!hasLoadingError && !isLoading && isSearching && (!cards || !cards.length)"
                    class="message is-info"
                >
                    <div class="message-body has-text-left">
                        Es wurde
                        <strong>keine Karte gefunden</strong>
                        , die
                        "{{fulltextSearch}}" enthält. Hinweis: Die Suchfunktion durchsucht Fragen
                        und Antworten.
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
                    v-for="(card, index) in cards"
                    :key="card.id"
                    :card="card"
                    @delete-card="deleteCard"
                    @edit-card="showEditCardModal({show: true, index: index})"
                ></CardListItem>

                <Pagination
                    v-if="cards && cards.length && cardsNumPages > 1"
                    @change-page="showCardPage"
                    :current-page="cardsPage"
                    :num-pages="cardsNumPages"
                ></Pagination>
            </div>

            <div class="column is-one-third">
                <nav class="panel">
                    <p class="panel-heading">Optionen</p>
                    <p class="panel-tabs">
                        <a class="is-active">Aktionen</a>
                        <a>Statistik</a>
                    </p>
                    <div class="panel-block">
                        <div class="field has-addons">
                            <p class="control has-icons-left is-expanded">
                                <input
                                    v-model="fulltextSearch"
                                    class="input"
                                    type="text"
                                    placeholder="Filter"
                                />
                                <span class="icon is-left">
                                    <i class="fas fa-filter" aria-hidden="true"></i>
                                </span>
                            </p>
                            <p v-if="isSearching" class="control">
                                <button class="button has-text-grey-light" @click="fulltextSearch = ''">
                                    <span class="icon">
                                        <i class="fas fa-times-circle"></i>
                                    </span>
                                </button>
                            </p>
                        </div>
                    </div>
                    <a class="panel-block" @click="showCreateCardModal(true)">
                        <span class="panel-icon">
                            <i class="fas fa-plus-circle" aria-hidden="true"></i>
                        </span>
                        Neue Karte
                    </a>
                    <router-link class="panel-block" :to="'/sets/' + currentSet.id + '/learn'">
                        <span class="panel-icon">
                            <i class="fas fa-stopwatch" aria-hidden="true"></i>
                        </span>
                        Lernen
                    </router-link>
                    <router-link class="panel-block" :to="'/sets/' + currentSet.id + '/random/all'">
                        <span class="panel-icon">
                            <i class="fas fa-random" aria-hidden="true"></i>
                        </span>
                        Zufällig
                    </router-link>
                    <router-link class="panel-block" :to="'/sets/' + currentSet.id + '/random/new'">
                        <span class="panel-icon">
                            <i class="fas fa-eye" aria-hidden="true"></i>
                        </span>
                        Zufällig (nur Neue)
                    </router-link>
                </nav>
            </div>
        </div>

        <CreateCardModal></CreateCardModal>
    </div>
</template>

<script src="./SetDashboard.js"></script>
<style scoped src="./SetDashboard.css"></style>