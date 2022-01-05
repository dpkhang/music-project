<template>
    <div class="content-wrapper">
        <router-view></router-view>
    </div>
</template>

<script lang="ts">
    import Vue from 'vue'

    export default Vue.extend({
        
    })
</script>

<style lang="scss" scoped>
    .content-wrapper {
        background-image: radial-gradient( white 40%, $color2);
    }
</style>