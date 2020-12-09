<template>
    <div>
        <NavBar></NavBar>
        <section class="section">
            <div class="container is-max-desktop">
                <BreadCrumbs></BreadCrumbs>
                <router-view></router-view>
            </div>
        </section>
        <StrokeOrderModal></StrokeOrderModal>
    </div>
</template>

<script src="./SetContainer.js"></script>
<style scoped src="./SetContainer.css"></style>