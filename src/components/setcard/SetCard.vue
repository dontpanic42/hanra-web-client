<template>
    <div class="card">
        <header class="card-header">
            <p class="card-header-title">Lernkartei</p>
            <a href="#" class="card-header-icon" aria-label="more options">
                <span class="icon">
                    <i class="fas fa-angle-down" aria-hidden="true"></i>
                </span>
            </a>
        </header>

        <div class="card-content">
            <p class="title is-4">{{title}}</p>
            <p class="subtitle is-6">1203 mal aufgerufen</p>
        </div>


        <footer class="card-footer">
            <p class="card-footer-item">
                <span>
                    12332 Karten
                </span>
            </p>
            <p class="card-footer-item">
                <router-link :to="'/sets/' + id" class="button is-primary">Öffnen</router-link>
            </p>
        </footer>
    </div>
</template>

<script src="./SetCard.js"></script>
<style scoped src="./SetCard.css"></style>