<template>
    <div>
        <section class="hero is-primary is-large header-image">
            <div class="hero-head">
                <NavBar :darkmode="true"></NavBar>
            </div>
            <div class="hero-body">
                <div class="container has-text-centered">
                    <h1 class="title is-2">Hanra</h1>
                    <h2 class="subtitle is-5">Der bessere Weg Chinesisch zu lernen.</h2>
                    <p>
                        <router-link to="/sets" class="button is-outlined">
                            <span class="icon">
                                <i class="fas fa-arrow-right"></i>
                            </span>
                            <span>Los gehts</span>
                        </router-link>
                    </p>
                </div>
            </div>
        </section>
        <div class="hero-cta">
            <nav class="level">
                <div class="level-item has-text-centered">
                    <p class="title">Heute ist ein prima Tag um zu lernen!</p>
                </div>
            </nav>
        </div>
        <div class="section main">
            <div class="container">
                <div class="tile is-ancestor has-text-left">
                    <div class="tile is-parent">
                        <article class="tile is-child box">
                            <div class="columns is-flex is-vcentered">
                                <div class="column is-hidden-touch has-text-centered is-4">
                                    <span class="icon has-text-grey-light is-size-1">
                                        <i class="fas fa-box-open"></i>
                                    </span>
                                </div>

                                <div class="column is-8">
                                    <p class="title">
                                        <i
                                            class="fas fa-box-open is-hidden-tablet has-text-grey-light"
                                        ></i> Kartei
                                    </p>
                                    <p>Karteien ermöglichen es dir Karten zu verschiedenen zwecken zu verwalten.</p>
                                    <br />
                                    <p>
                                        <router-link to="/sets" class="button is-primary">
                                            <span class="icon">
                                                <i class="fas fa-arrow-right"></i>
                                            </span>
                                            <span>Los gehts</span>
                                        </router-link>
                                    </p>
                                </div>
                            </div>
                        </article>
                    </div>
                    <div class="tile is-parent">
                        <article class="tile is-child box">
                            <div class="columns is-flex is-vcentered">
                                <div class="column is-hidden-touch has-text-centered is-4">
                                    <span class="icon has-text-grey-light is-size-1">
                                        <i class="fas fa-home"></i>
                                    </span>
                                </div>

                                <div class="column is-8">
                                    <p class="title">
                                        <i class="fas fa-home is-hidden-tablet has-text-grey-light"></i> Home
                                    </p>
                                    <p>
                                        Diese Seite ist dein Einstig in Hanra. Du kannst sie immer wieder finden,
                                        in dem du im Menü auf
                                        <strong>Home</strong> clickst.
                                    </p>
                                    <br />
                                    <p>
                                        <router-link to="/" class="button is-primary">
                                            <span class="icon">
                                                <i class="fas fa-arrow-right"></i>
                                            </span>
                                            <span>Los gehts</span>
                                        </router-link>
                                    </p>
                                </div>
                            </div>
                        </article>
                    </div>
                    <div class="tile is-parent">
                        <article class="tile is-child box">
                            <div class="columns is-flex is-vcentered">
                                <div class="column is-hidden-touch has-text-centered is-4">
                                    <span class="icon has-text-grey-light is-size-1">
                                        <i class="fas fa-cogs"></i>
                                    </span>
                                </div>

                                <div class="column is-8">
                                    <p class="title">
                                        <i class="fas fa-cogs is-hidden-tablet has-text-grey-light"></i> Einstellungen
                                    </p>
                                    <p>Konfiguriere deine Einstellungen so das sie perfekt zu dir und deinem Lernverhalten passen</p>
                                    <br />
                                    <p>
                                        <router-link to="/settings" class="button is-primary">
                                            <span class="icon">
                                                <i class="fas fa-arrow-right"></i>
                                            </span>
                                            <span>Los gehts</span>
                                        </router-link>
                                    </p>
                                </div>
                            </div>
                        </article>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
// @ is an alias to /src
import NavBar from "@/components/navbar/NavBar.vue";

export default {
    name: "Home",
    components: {
        NavBar
    }
};
</script>

<style scoped>
.header-image {
    background-image: linear-gradient(rgba(0, 0, 0, 0.49), rgba(0, 0, 0, 0.89)),
        url("~@/assets/img/hero-optimized-3-01.jpg");
    background-size: cover;
    background-position: center center;
}

.is-outlined, .is-outlined:hover {
    background-color: transparent;
    color: #fff;
}

.hero-cta {
    padding: 30px 0;
}

.hero-cta .title {
    font-weight: 300;
    padding: 0 10px;
}

.panel-block.section p {
    font-size: 17px;
    line-height: 1.4;
    color: #95a5a6;
}
.section.main {
    background-color: #f0f0f0;
}
</style>
