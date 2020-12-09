<template>
    <div class="card">
        <header class="card-header">
            <div class="card-header-title"><i class="fas fa-box-open pr-2"></i> Lernkartei</div>
        </header>

        <div class="card-content">
            <p class="title is-4">{{title}}</p>
            <p class="subtitle is-6">1203 mal aufgerufen</p>
        </div>

        <footer class="card-footer">
            <p class="card-footer-item">                
                <router-link
                    :to="'/sets/' + id"
                    class="button is-outline is-fullwidth"
                >
                    <span class="icon is-small">
                        <i class="fas fa-edit"></i>
                    </span>

                    <span>Details</span>
                </router-link>
            </p>
            <p class="card-footer-item">
                <router-link
                    :to="'/sets/' + id + '/learn'"
                    class="button is-primary is-fullwidth"
                >
                    <span class="icon is-small">
                        <i class="fas fa-stopwatch"></i>
                    </span>

                    <span>Lernen</span>
                </router-link>
            </p>
        </footer>
    </div>
</template>

<script src="./SetCard.js"></script>
<style scoped src="./SetCard.css"></style>