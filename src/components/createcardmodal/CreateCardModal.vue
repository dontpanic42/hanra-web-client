<template>
    <div class="modal" :class="isVisible ? 'is-active' : ''">
        <div class="modal-background"></div>
        <div class="modal-card">
            <header class="modal-card-head">
                <p class="modal-card-title">Neue Karte</p>
                <button class="delete" aria-label="close" @click="cancel()"></button>
            </header>
            <section class="modal-card-body has-text-left">
                <article class="message">
                    <div class="message-body has-text-left">
                        <p>
                            Fülle die Felder unten um eine neue Karte in der Kartei
                            <strong>{{ set.setName }}</strong> anzulegen.
                        </p>
                    </div>
                </article>

                <article v-if="hasSavingError" class="message is-danger">
                    <div class="message-body has-text-left">
                        <p class="mb-2">
                            <strong>Oups</strong>.
                            Beim speichern deiner Karte is etwas schiefgegangen. Bitte versuche es später noch ein mal.
                        </p>
                    </div>
                </article>

                <fieldset :disabled="isSaving">
                    <div class="field">
                        <label class="label">Frage</label>
                        <div class="control has-icons-left">
                            <input
                                v-model="cardQuestion"
                                class="input"
                                type="text"
                                placeholder="z.B. Mir geht es gut"
                            />
                            <span class="icon is-left">
                                <i class="fas fa-question"></i>
                            </span>
                        </div>
                        <p
                            class="help has-text-grey-light"
                        >Die Frage wird angezeigt wenn du die Karte lernst.</p>
                    </div>

                    <div class="field">
                        <label class="label">Antwort (Pinyin)</label>
                        <div class="control has-icons-left">
                            <PinyinInput
                                v-model="cardAnswer1"
                                class="input"
                                type="text"
                                placeholder="z.B. Wǒ hěn hǎo"
                            />
                            <span class="icon is-left">
                                <i class="fas fa-pen"></i>
                            </span>
                        </div>
                        <p
                            class="help has-text-grey-light"
                        >Die Lösung der frage, in Pinyin. Du kannst Zahlen (1-4) hinter den Buchstaben tippen um die Töne zu schreiben, tippst du z.B. "wo3" wird daraus "wǒ".</p>
                    </div>

                    <div class="field">
                        <label class="label">Antwort (Hanzi)</label>
                        <div class="control has-icons-left">
                            <input
                                v-model="cardAnswer2"
                                class="input"
                                type="text"
                                placeholder="z.B. Wo hen hao"
                            />
                            <span class="icon is-left">
                                <i class="fas fa-language"></i>
                            </span>
                        </div>
                        <p
                            class="help has-text-grey-light"
                        >Die Lösung der frage, in Hanzi (chinesische Schriftzeichen)</p>
                    </div>
                </fieldset>
            </section>
            <footer class="modal-card-foot">
                <button :disabled="isSaving" class="button" @click="cancel()">Abbrechen</button>
                <button
                    :disabled="isSaving || inputError"
                    class="button is-primary"
                    :class="isSaving ? 'is-loading' : ''"
                    @click="save()"
                >
                    <span class="icon is-small">
                        <i class="fas fa-check"></i>
                    </span>

                    <span>Erstellen</span>
                </button>
            </footer>
        </div>
    </div>
</template>

<script src="./CreateCardModal.js"></script>
<style scoped src="./CreateCardModal.css"></style>