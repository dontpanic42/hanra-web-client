<template>
    <div>
        <NavBar></NavBar>
        <section class="section">
            <div class="container is-max-desktop">
                <BreadCrumbs></BreadCrumbs>
                <h1 class="title has-text-left">Einstellungen</h1>
                <div class="tabs">
                    <ul>
                        <li class="is-active"><a>Lernen</a></li>
                    </ul>
                </div>

                <SettingsLearn></SettingsLearn>
            </div>
        </section>
    </div>
</template>

<script src="./UserSettings.js"></script>
<style scoped src="./UserSettings.css"></style>