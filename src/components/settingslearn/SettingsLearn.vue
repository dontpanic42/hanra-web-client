<template>
    <div>
        <article v-if="!isLoading && hasLoadingError" class="message is-danger">
            <div class="message-body has-text-left">
                <p class="mb-2">
                    <strong>Oups</strong>.
                    Beim laden der Einstellungen ist etwas schiefgegangen. Bitte versuche es in ein paar minuten erneut.
                </p>
            </div>
        </article>

        <article v-if="!isSaving && hasSavingError" class="message is-danger">
            <div class="message-body has-text-left">
                <p class="mb-2">
                    <strong>Oups</strong>.
                    Beim speichern der Einstellungen ist etwas schiefgegangen. Bitte versuche es in ein paar minuten erneut.
                </p>
            </div>
        </article>

        <article v-if="showSucessBanner" class="message is-success">
            <div class="message-body has-text-left">
                <p class="mb-2">
                    <strong>Gespeichert</strong>.
                    Deine Änderungen wurden erfolgreich gespeichert.
                </p>
            </div>
        </article>

        <fieldset :disabled="isLoading || isSaving || hasLoadingError" class="has-text-left">
            <div class="field">
                <label class="label">Max. Karten pro Lern-Session</label>
                <div class="control">
                    <input
                        v-model="srSessionSize"
                        :class="srSessionSizeHasInputError ? 'is-danger': ''"
                        class="input"
                        type="number"
                        placeholder="23"
                    />
                </div>
                <p
                    class="help has-text-grey-light"
                >Dieser Wert gibt vor wie viele Karten die maximal pro Lern-Session angezeigt werden.</p>
                <p
                    v-if="srSessionSizeHasInputError"
                    class="help has-text-danger"
                >Bitte gib eine Zahl zwischen 0 und 100 ein.</p>
            </div>

            <div class="field">
                <label class="label">Tage Neu</label>
                <div class="control has-icons-right">
                    <input
                        v-model="srSessionNewCutoffDays"
                        :class="srSessionNewCutoffDaysHasInputError ? 'is-danger': ''"
                        class="input"
                        type="number"
                        placeholder="14"
                        min="0"
                    />
                    <span class="icon is-right">
                        <i class="fas fa-clock"></i>
                    </span>
                </div>
                <p
                    class="help has-text-grey-light"
                >Dieser Wert bestimmt wie viele Tage eine Karte als 'neu' betractet wird.</p>
                <p
                    v-if="srSessionNewCutoffDaysHasInputError"
                    class="help has-text-danger"
                >Bitte gib eine Zahl zwischen 0 und 360 ein.</p>
            </div>

            <div class="field">
                <label class="label">Anteil neue Karten (in Prozent)</label>
                <div class="control has-icons-right">
                    <input
                        v-model="srSessionNewItemsRatio"
                        :class="srSessionNewItemsRatioHasInputError ? 'is-danger': ''"
                        class="input"
                        type="number"
                        placeholder="59"
                        min="0"
                        max="100"
                    />
                    <span class="icon is-right">
                        <i class="fas fa-percent"></i>
                    </span>
                </div>
                <p
                    class="help has-text-grey-light"
                >Hier kannst du bestimmen wie neue Karten dir pro Session angezeigt werden.</p>
                <p
                    v-if="srSessionNewItemsRatioHasInputError"
                    class="help has-text-danger"
                >Bitte gib eine Zahl zwischen 0 und 100 ein.</p>
            </div>

            <hr />

            <div class="field is-grouped">
                <div class="control">
                    <button class="button" @click="reset()">
                        <span class="icon is-small">
                            <i class="fas fa-trash"></i>
                        </span>
                        <span>Zurücksetzen</span>
                    </button>
                </div>
                <div class="control">
                    <button
                        :disabled="hasInputError"
                        :class="(isSaving || isLoading) ? 'is-loading' : ''"
                        @click="save()"
                        class="button is-primary"
                    >
                        <span class="icon is-small">
                            <i class="fas fa-check"></i>
                        </span>
                        <span>Speichern</span>
                    </button>
                </div>
            </div>
        </fieldset>
    </div>
</template>

<script src="./SettingsLearn.js"></script>
<style scoped src="./SettingsLearn.css"></style>