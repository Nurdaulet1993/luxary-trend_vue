<template>
    <div class="content">
        <app-hero></app-hero>
    </div>
</template>

<script>
    import Hero from "../components/Hero";

    export default {
        name: "Home",
        components: {
            appHero: Hero,
        }
    }
</script>

<style scoped>

</style>