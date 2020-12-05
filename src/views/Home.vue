<template>
    <section>
        <div class="hero is-fullheight has-background is-dark is-bold">
            <img
                src="@/assets/img/hero-01.jpg"
            />
            <div class="hero-head">
                <NavBar :darkmode="true"></NavBar>
            </div>
            <div class="hero-body">
                <div class="container has-text-centered">
                    <img src="@/assets/img/logo_transparent.png" class="hero-logo">
                    <p> <router-link to="/sets" class="button is-primary">Start Learning!</router-link> </p>
                </div>
            </div>
        </div>
    </section>
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
.hero {
    position: relative;
    overflow: hidden;
}

.hero > img {
    position: absolute;
    object-fit: cover;
    object-position: center center;
    width: 100%;
    height: 100%;
    opacity: 0.3;
}

img.hero-logo {
    width: 25rem;
}
</style>
