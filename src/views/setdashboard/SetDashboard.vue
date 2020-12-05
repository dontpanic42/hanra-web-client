<template>
    <div class="content">
        <h1 class="title has-text-left">Title</h1>
        <h2 class="subtitle has-text-left">Subtitle</h2>

        <div class="columns">
            <div class="column">
                <div class="box">
                    <div class="button is-primary">Los Gehts!</div>
                </div>

                <table class="table">
                    <thead>
                        <th>Bucket</th>
                        <th>Karten</th>
                        <th></th>
                    </thead>
                    <tbody>
                        <tr>
                            <td><strong>1</strong></td>
                            <td>1232</td>
                            <td>Lernen</td>
                        </tr>
                        <tr>
                            <td>2</td>
                            <td>1232</td>
                            <td>Lernen!</td>
                        </tr>
                        <tr>
                            <td>3</td>
                            <td>1232</td>
                            <td>Lernen!</td>
                        </tr>
                        <tr>
                            <td>4</td>
                            <td>1232</td>
                            <td>Lernen!</td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <div class="column is-one-third">
                <article class="panel">
                    <p class="panel-heading">Primary</p>
                    <p class="panel-tabs">
                        <a class="is-active">Actions</a>
                        <a>Options</a>
                    </p>
                    <a class="panel-block is-active">
                        <span class="panel-icon">
                            <i class="fas fa-book" aria-hidden="true"></i>
                        </span>
                        Neue Karte
                    </a>
                    <a class="panel-block">
                        <span class="panel-icon">
                            <i class="fas fa-book" aria-hidden="true"></i>
                        </span>
                        Zufällige Karte
                    </a>
                    <a class="panel-block">
                        <span class="panel-icon">
                            <i class="fas fa-book" aria-hidden="true"></i>
                        </span>
                        Lernen
                    </a>
                </article>
            </div>
        </div>
    </div>
</template>

<script src="./SetDashboard.js"></script>
<style scoped src="./SetDashboard.css"></style>