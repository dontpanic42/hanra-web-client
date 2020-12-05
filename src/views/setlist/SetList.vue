<template>
    <section>
        <div class="container is-max-desktop">
            <article class="message">
                <div class="message-body has-text-left">
                    <p class="mb-2">
                        Du befindest dich jetzt in der
                        <strong>Kartei Übersicht</strong>.
                    </p>
                    <p class="mb-2">
                        Jeder Hanra User kann beliebig viele Karteien erstellen. Karteien können zum Beispiel für
                        verschiedene Sprachen oder verschiedene Vokabeltypen angelegt werden.
                    </p>
                    <p class="mb-2">
                        In jeder Kartei kannst du beliebig viele
                        <strong>Karten</strong> erstellen und verwalten.
                    </p>
                    <p>
                        <button class="button" @click="showNewSetModal(true)">Kartei hinzufügen</button>
                    </p>
                </div>
            </article>

            <article v-if="!isLoading && !setList.length" class="message is-info">
                <div class="message-body has-text-left">
                    Es sieht so aus als hättest du noch keine Karteien. Klicke auf
                    <strong>Kartei hinzufügen</strong> um
                    deine erste Kartei zu erstellen.
                </div>
            </article>

            <article v-if="!isLoading && isLoadingError" class="message is-danger">
                <div class="message-body has-text-left">
                    <strong>Ops</strong> - beim laden deiner Karteien ist etwas schiefgelaufen. Bitte versuche es später
                    noch einmal oder melde dich bei Hanras Administrator-Team.
                </div>
            </article>

            <div class="columns is-multiline is-mobile is-tablet">
                <div
                    v-for="item in setList"
                    :key="item.id"
                    class="column is-one-third-desktop is-half-tablet"
                >
                    <SetCard :title="item.setName" :id="item.id"></SetCard>
                </div>
            </div>
        </div>
        <CreateSetModal></CreateSetModal>
    </section>
</template>

<script src="./SetList.js"></script>
<style scoped src="./SetList.css"></style>