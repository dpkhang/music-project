<template>
    <div class="sidebar-wrapper" @click="handleClick">
        <h1 class="logo">S-River</h1>
        <Nav></Nav>
    </div>
</template>

<script lang="ts">
    import Vue from 'vue'
    import Nav from  './Nav.vue'

    export default Vue.extend({
        data() {
            return {
                color: 'red'
            }
        },
        components : {
            Nav
        },
        methods: {
            handleClick(e: MouseEvent) {
                console.log(e.target)
                // this.color = this.color === "blue" ? 'red': 'blue'
            }
        }
    })
</script>

<style lang="scss" scoped>
    .logo {
        width: 100%;
        height: 5rem;
        text-align: center;
        font-family: Poppins;
        font-size: 3rem;
        line-height: 5rem;
        background-image: linear-gradient(90deg, #f700ff, yellow);
        background-clip: text;
        color: transparent;
    }

    .sidebar-wrapper {
        background-color: $color1;
        display: flex;
        flex-direction: column;
    }
</style>