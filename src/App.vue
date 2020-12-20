<template>
    <div class="page-container">
        <router-view />
        <footer class="footer">
            <div class="container">
                <div class="content has-text-centered">
                    <p>
                        <strong>Hanra</strong> by
                        <a href="https://bytelike.de">Daniel</a>.
                        Follow me:
                        <a
                            class="icon"
                            href="https://github.com/dontpanic42"
                        >
                            <i class="fab fa-github"></i>
                        </a>
                    </p>
                </div>
            </div>
        </footer>
    </div>
</template>

<script>
import NavBar from "./components/navbar/NavBar.vue";

export default {
    name: "App",
    components: {
        NavBar
    }
};
</script>

<style>
#app {
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
}

.page-container {
    display: flex;
    flex-direction: column;
    min-height: 100vh;
}

.page-container > footer {
    margin-top: auto;
}
</style>
