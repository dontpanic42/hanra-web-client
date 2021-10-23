<template>
    <div v-if="card">
        <div class="card is-fullwidth mb-4">
            <header class="card-header">
                <p class="card-header-title">Ergebnis</p>
            </header>
            <div class="card-content">
                <i class="fas fa-trophy is-size-3 mb-4 mt-2"></i>
                <PerformanceRating class="mb-4 mt-4" :modelValue="statAvgRatingDisplayValue" :interactive="false"></PerformanceRating>
                <table class="table is-fullwidth has-text-left is-striped">
                    <thead>
                        <th>Statistik</th>
                        <th>Ergebnis</th>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Karten</td>
                            <td>{{statNumCards}}</td>
                        </tr>
                        <tr>
                            <td>Durchschnitt</td>
                            <td>
                                {{ statAvgRatingDisplayValue }}
                                <i class="fas fa-star"></i>
                            </td>
                        </tr>
                        <tr>
                            <td>Gewusst</td>
                            <td>{{ statNumCorrect }} von {{statNumCards}}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <footer class="card-footer">
                <p class="card-footer-item has-text-right">
                    <router-link class="button is-primary is-outlined" :to="'/sets'">
                        <span class="icon is-small">
                            <i class="fas fa-box-open"></i>
                        </span>

                        <span>Karteien</span>
                    </router-link>
                </p>

                <p class="card-footer-item has-text-right">
                    <router-link
                        class="button is-primary"
                        :to="'/sets/' + $route.params.setId + '/learn'"
                    >
                        <span class="icon is-small">
                            <i class="fas fa-stopwatch"></i>
                        </span>

                        <span>Nächste Runde</span>
                    </router-link>
                </p>
            </footer>
        </div>
    </div>
</template>

<script src="./SessionSummary.js"></script>
<style scoped src="./SessionSummary.css"></style>