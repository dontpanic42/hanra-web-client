<template>
    <div class="columns">
        <div class="column">
            <div class="card">
                <div class="card-content">
                    <br />
                    <p class="is-size-4">Wie viele Mitglieder hat deine Familie.</p>
                    <br />
                </div>
                <hr v-if="isResolved" />
                <div v-if="isResolved" class="card-content">
                    <p class="is-size-5">Wǒmen jiā yǒu wǔ kǒu rén.</p>
                    <p class="is-size-5">我们家有五口人。</p>
                    <br />
                </div>
                <footer class="card-footer">
                    <p class="card-footer-item">
                        <button v-if="isResolved" @click="next(false)" class="is-danger button">Falsch</button>
                    </p>
                    <p class="card-footer-item">
                        <button v-if="!isResolved" @click="resolve()" class="is-primary button">Auflösen</button>
                        <button v-if="isResolved" @click="next(true)" class="is-success button">Richtig</button>
                    </p>
                </footer>
            </div>
        </div>

        <div class="column is-one-third">
            <article class="panel">
                <p class="panel-heading">Information</p>
                <a class="panel-block is-active">
                    <span class="panel-icon">
                        <i class="fas fa-book" aria-hidden="true"></i>
                    </span>
                    <div class="columns full-width has-text-left">
                        <div class="column">Gelernt</div>
                        <div class="column">12</div>
                    </div>
                </a>
                <a class="panel-block">
                    <span class="panel-icon">
                        <i class="fas fa-book" aria-hidden="true"></i>
                    </span>
                    <div class="columns full-width has-text-left">
                        <div class="column">Bucket</div>
                        <div class="column">1</div>
                    </div>
                </a>
                <a class="panel-block">
                    <span class="panel-icon">
                        <i class="fas fa-book" aria-hidden="true"></i>
                    </span>
                    <div class="columns full-width has-text-left">
                        <div class="column">Hinzugefügt</div>
                        <div class="column">12.10.23</div>
                    </div>
                </a>
            </article>
        </div>
    </div>
</template>

<script src="./CardView.js"></script>
<style scoped src="./CardView.css"></style>