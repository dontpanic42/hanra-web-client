<template>
    <div>

        <article v-if="hasLoadingError" class="message is-danger">
            <div class="message-body has-text-left">
                <strong>Oups!</strong> Beim Laden deiner Lern-Session ist etwas schiefgelaufen.
                Bitte versuche es später noch ein mal.
            </div>
        </article>

        <article
            v-if="!hasLoadingError && !isLoading && (!cards || cards.length == 0)"
            class="message is-info"
        >
            <div class="message-body has-text-left">
                <p class="mb-4">
                    <strong>keine Karten</strong> zum lernen gefunden werden. Die Kartei muss zum
                    lernen mindestens
                    <strong>eine</strong> Karte enthalten.
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

        <div class="box">
            <i class="fas fa-stopwatch fa-8x"></i>
            <p class="mt-4 is-size-4">{{ cards.length }} Fragen Bereit!</p>
            <p class="has-text-grey-light">({{ numNewCards }} neu/{{ numRevCards }} alt)</p>

            <router-link
                class="mt-4 button is-primary"
                :class="isLoading ? 'is-loading' : ''"
                :to="'/sets/' + $route.params.setId + '/learn-view'"
            >
                <span class="icon is-small">
                    <i class="fas fa-check"></i>
                </span>

                <span>Lernen</span>
            </router-link>
        </div>

        <article class="message">
            <div class="message-body has-text-left">
                Du bist dabei eine
                <strong>Lern-Session</strong> zu beginnen. In einer
                Lern-Session werden dir bis zu 20 Karten nach dem SM2+ Algorithmus angezeigt.
                Nach jeder Karte wirst du gebeten deine Antwort zu bewerten. Sei ehrlich zu dir!
                Jedes mal wenn du eine Karte lernst, lernt der Algorithmus wann sie dir wieder
                vorgelegt wird.
            </div>
        </article>
    </div>
</template>

<script src="./SessionStart.js"></script>
<style scoped src="./SessionStart.css"></style>