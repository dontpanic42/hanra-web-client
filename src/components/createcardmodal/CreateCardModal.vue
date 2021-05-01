<template>
    <div class="modal" :class="isVisible ? 'is-active' : ''">
        <div class="modal-background"></div>
        <div class="modal-card">
            <header class="modal-card-head">
                <p v-if="isEditModal" class="modal-card-title">Karte Bearbeiten</p>
                <p v-else class="modal-card-title">Neue Karte</p>
                <button class="delete" aria-label="close" @click="cancel()"></button>
            </header>

            <section class="modal-card-body has-text-left">

                <article v-if="hasSavingError" class="message is-danger">
                    <div class="message-body has-text-left">
                        <p class="mb-2">
                            <strong>Oups</strong>.
                            Beim speichern deiner Karte is etwas schiefgegangen. Bitte versuche es später noch ein mal.
                        </p>
                    </div>
                </article>

                <div class="tabs">
                    <ul>
                        <li :class="activeTab == 'word' ? 'is-active' : ''" @click="setActiveTab('word')"><a>Wort</a></li>
                        <li :class="activeTab == 'meta' ? 'is-active' : ''" @click="setActiveTab('meta')"><a>Meta &amp; Beispiel</a></li>
                    </ul>
                </div>

                <fieldset v-if="activeTab == 'word'" :disabled="isSaving">
                    <div class="field">
                        <label class="label">Frage</label>
                        <div class="control has-icons-left">
                            <input
                                v-model="cardQuestion"
                                class="input focus-on-enter"
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
                                v-model="cardAnswerWordPinyin"
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

                    <label class="label">Antwort (Hanzi)</label>
                    <div class="field has-addons">
                        <div class="control has-icons-left is-expanded">
                            <input
                                v-model="cardAnswerWordHanzi"
                                class="input"
                                type="text"
                                placeholder="z.B. Wo hen hao"
                            />
                            <span class="icon is-left">
                                <i class="fas fa-language"></i>
                            </span>
                        </div>
                        <p class="control">
                            <a class="button" @click="cardAnswerWordHanzi = cardAnswerWordHanzi + '。'">。</a>
                        </p>
                    </div>
                    <p
                        class="help has-text-grey-light"
                    >Die Lösung der frage, in Hanzi (chinesische Schriftzeichen)</p>
                </fieldset>

                <fieldset v-if="activeTab == 'meta'" :disabled="isSaving">
                    <div class="field">
                        <label class="label">Zählwort (Pinyin)</label>
                        <div class="control has-icons-left">
                            <PinyinInput
                                v-model="cardAnswerMeasurePinyin"
                                class="input"
                                type="text"
                                placeholder="z.B. zhi"
                            />
                            <span class="icon is-left">
                                <i class="fas fa-hashtag"></i>
                            </span>
                        </div>
                        <p
                            class="help has-text-grey-light"
                        >Zählwort (Optional)</p>
                    </div>

                    <div class="field">
                        <label class="label">Zählwort (Hanzi)</label>
                        <div class="control has-icons-left">
                            <input
                                v-model="cardAnswerMeasureHanzi"
                                class="input"
                                type="text"
                                placeholder="z.B. 只"
                            />
                            <span class="icon is-left">
                                <i class="fas fa-language"></i>
                            </span>
                        </div>
                        <p
                            class="help has-text-grey-light"
                        >Das Zählwort, in Hanzi (chinesische Schriftzeichen)</p>
                    </div>

                    
                    <div class="field">
                        <label class="label">Beispiel</label>
                        <div class="control">
                            <textarea
                                v-model="cardAnswerExample"
                                class="textarea"
                                placeholder="z.B. 只"
                                rows="2"
                            />
                        </div>
                        <p
                            class="help has-text-grey-light"
                        >Ein Beispielsatz um die Wortverwendung zu illustrieren.</p>
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

                    <span v-if="isEditModal">Sichern</span>
                    <span v-if="!isEditModal">Erstellen</span>
                </button>
            </footer>
        </div>
    </div>
</template>

<script src="./CreateCardModal.js"></script>
<style scoped src="./CreateCardModal.css"></style>