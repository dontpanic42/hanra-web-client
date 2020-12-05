<template>


    <section>
    <NavBar></NavBar>
    <div class="container is-max-desktop">
        <BreadCrumbs></BreadCrumbs>

        <router-view></router-view>
    </div>
    </section>
</template>

<script src="./SetContainer.js"></script>
<style scoped src="./SetContainer.css"></style>