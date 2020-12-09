<template>
    <div class="modal" :class="isVisible ? 'is-active' : ''">
        <div class="modal-background" @click="setVisible(false)"></div>
        <div class="modal-card">
            <header class="modal-card-head">
                <p class="modal-card-title">Zeichen "{{character}}"</p>
                <button class="delete" aria-label="close" @click="setVisible(false)"></button>
            </header>
            <section class="modal-card-body has-text-left">
                <div
                    class="has-text-centered"
                    :style="'min-width:' + width + 'px; min-height: ' + height + 'px;'"
                >
                    <div
                        class="hanzi-writer-canvas"
                        :class="isLoading || hasLoadingError ? 'is-hidden' : ''"
                    ></div>
                    <div
                        class="has-text-centered is-inline-block"
                        :style="'padding-top: calc(' + height + 'px / 2);'"
                        :class="isLoading ? '' : 'is-hidden'"
                    >
                        <div class="loader is-inline-block"></div>
                    </div>

                    <div :class="hasLoadingError ? '' : 'is-hidden'">
                        <br />
                        <p class="mb-4">
                            <i class="fas fa-question-circle"></i>
                        </p>
                        <p>Für dieses Zeichen steht derzeit leider keine Strichfolge zur Verfügung.</p>
                    </div>
                </div>
            </section>
            <footer class="modal-card-foot">
                <button class="button" :disabled="isLoading || hasLoadingError" @click="startAnimation()">
                    <span class="icon is-small">
                        <i class="fas fa-play"></i>
                    </span>
                    <span>Animieren</span>
                </button>
                <button class="button is-primary is-pulled-right" @click="setVisible(false)">
                    <span class="icon is-small">
                        <i class="fas fa-check"></i>
                    </span>
                    <span>Schließen</span>
                </button>
            </footer>
        </div>
    </div>
</template>

<script src="./StrokeOrderModal.js"></script>
<style scoped src="./StrokeOrderModal.css"></style>