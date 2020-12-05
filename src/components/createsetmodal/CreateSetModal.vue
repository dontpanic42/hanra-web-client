<template>
    <div class="modal" :class="isVisible ? 'is-active' : ''">
        <div class="modal-background"></div>
        <div class="modal-card">
            <header class="modal-card-head">
                <p class="modal-card-title">Neue Kartei</p>
                <button class="delete" aria-label="close" @click="cancel()"></button>
            </header>
            <section class="modal-card-body has-text-left">

            <article class="message">
                <div class="message-body has-text-left">
                    <p>
                        Fülle die Felder unten um eine neue Kartei anzulegen. 
                    </p>
                </div>
            </article>
            <fieldset :disabled="isSaving">
                <div class="field">
                    <label class="label">Kartei Name</label>
                    <div class="control">
                        <input v-model="setName" class="input" type="text" placeholder="z.B. Universität" />
                    </div>
                    <p class="help has-text-grey-light">Gib deiner neuen Kartei einen kurzen, aussagekräfitgen Namen.
                        Der Name sollte mindestens 3 Zeichen lang sein.
                    </p>
                </div>

                <div class="field">
                    <label class="label">Kartei Beschreibung</label>
                    <div class="control">
                        <input v-model="setDescription" class="input" type="text" placeholder="z.B. Vokabeln die man in der Universität verwendet" />
                    </div>
                    <p class="help has-text-grey-light">Beschreibe deine neue Kartei mit ein paar worten.</p>
                </div>
            </fieldset>
            </section>
            <footer class="modal-card-foot">
                <button :disabled="isSaving || nameInputError" class="button is-primary" @click="save()">Erstellen</button>
                <button :disabled="isSaving" class="button" @click="cancel()">Abbrechen</button>
            </footer>
        </div>
    </div>
</template>

<script src="./CreateSetModal.js"></script>
<style scoped src="./CreateSetModal.css"></style>