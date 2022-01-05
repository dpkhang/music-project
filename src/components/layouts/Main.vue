<template>
    <div class="wrapper">
        <Sidebar color="blue"/>
        <Content/>
    </div>
</template>

<script lang="ts">
    import Vue from 'vue'
    import Sidebar from '../partials/main/sidebar/Sidebar.vue'
    import Content from '../pages/Content.vue'

    export default Vue.extend({
        components: {
            Sidebar,
            Content,
        }
    })
</script>

<style lang="scss" scoped>
    .wrapper {
        width: 100%;
        height: 100vh;
        display: grid;
        grid-template-columns: 15% 85%;
        grid-template-rows: 100%; 
    }
</style>