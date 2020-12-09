<template>
    <div v-if="card">
        <article v-if="hasSavingError" class="message is-danger">
            <div class="message-body has-text-left">
                <strong>Oups!</strong> Beim Speichern deiner Bewertung ist etwas schiefgelaufen. 
                Bitte versuche es später noch ein mal.
            </div>
        </article>

        <div class="card is-fullwidth mb-4">
            <header class="card-header">
                <p class="card-header-title">Antwort Bewerten</p>
            </header>

            <div class="card-content">
                <PerformanceRating v-model="rating" :disabled="isSaving"></PerformanceRating>

                <p v-if="rating == 0" class="has-text-grey-light mt-4">Totaler Blackout</p>
                <p
                    v-if="rating == 1"
                    class="has-text-grey-light mt-4"
                >Nicht gewusst, aber nach langem Überlegen an die Lösung erinnert</p>
                <p
                    v-if="rating == 2"
                    class="has-text-grey-light mt-4"
                >Nicht gewusst, aber sofort an die Lösung erinnert</p>
                <p
                    v-if="rating == 3"
                    class="has-text-grey-light mt-4"
                >Gewusst, aber nach langem Überlegen</p>
                <p
                    v-if="rating == 4"
                    class="has-text-grey-light mt-4"
                >Gewusst, nach kurzem Überlegen</p>
                <p v-if="rating == 5" class="has-text-grey-light mt-4">Sofort gewusst</p>
            </div>

            <footer class="card-footer">
                <p class="card-footer-item has-text-right">
                    <button
                        class="button is-primary"
                        :class="isSaving ? 'is-loading' : ''"
                        @click="save()"
                    >
                        <span class="icon is-small">
                            <i class="fas" :class="buttonClass[rating]"></i>
                        </span>

                        <span>{{ (rating + 1)}} {{ (rating == 0)? 'Stern' : 'Sterne' }}</span>
                    </button>
                </p>
            </footer>
        </div>
        <br />
        <article class="message has-text-left is-info">
            <div class="message-body">
                <div class="content">
                    <p>
                        Der von Hanra genutzte Algorithmus benötigt dein Feedback um zu lernen welche Karten dir
                        leicht- oder schwerfallen. 4 Sterne oder mehr heißt du hast die Frage richtig beantwortet.
                        Weniger als vier Sterne bedeutet du hast einen Fehler gemacht.
                    </p>
                    <div class="mb-2">
                        <strong>1 Stern:</strong>Totaler Blackout
                    </div>
                    <div class="mb-2">
                        <strong>2 Sterne:</strong>Nicht gewusst, aber nach langem Überlegen an die Lösung erinnert
                    </div>
                    <div class="mb-2">
                        <strong>3 Sterne:</strong>Nicht gewusst, aber sofort an die Lösung erinnert
                    </div>
                    <div class="mb-2">
                        <strong>4 Sterne:</strong>Gewusst, aber nach langem Überlegen
                    </div>
                    <div class="mb-2">
                        <strong>5 Sterne:</strong>Gewusst, nach kurzem Überlegen
                    </div>
                    <div class="mb-2">
                        <strong>6 Sterne:</strong>Sofort gewusst
                    </div>
                </div>
            </div>
        </article>
    </div>
</template>

<script src="./SessionRate.js"></script>
<style scoped src="./SessionRate.css"></style>