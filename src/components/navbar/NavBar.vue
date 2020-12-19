<template>
    <nav class="navbar" role="navigation" :class="darkmode ? 'is-dark' : 'is-light'" aria-label="main navigation">
        <div class="navbar-brand">
            <a class="navbar-item" href="https://bulma.io">
                <img src="https://bulma.io/images/bulma-logo.png" width="112" height="28" />
            </a>

            <a
                role="button"
                class="navbar-burger burger"
                aria-label="menu"
                aria-expanded="false"
                data-target="navbarBasicExample"
                v-on:click="menuVisible = !menuVisible"
                :class="menuVisible ? 'is-active': ''"
            >
                <span aria-hidden="true"></span>
                <span aria-hidden="true"></span>
                <span aria-hidden="true"></span>
            </a>
        </div>

        <div id="navbar-menu" class="navbar-menu" :class="menuVisible ? 'is-active': ''">
            <div class="navbar-start">
                <router-link class="navbar-item" to="/">Home</router-link>
                <router-link class="navbar-item" to="/sets">Karteien</router-link>
                <router-link class="navbar-item" to="/settings">Einstellungen</router-link>
            </div>

            <div class="navbar-end">
                <div class="navbar-item">
                </div>
            </div>
        </div>
    </nav>
</template>

<script src="./NavBar.js"></script>
<style scoped src="./NavBar.css"></style>