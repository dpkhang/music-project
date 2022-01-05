<template>
    <div class="sidebar-wrapper">
        <div class="sidebar-hidden" @click="handleClickHiddenSidebar"><i class="fas fa-chevron-left"></i></div>
        <h1 class="logo">S-River</h1>
        <PersonalNav/>
        <AppNav></AppNav>
    </div>
</template>

<script lang="ts">
    import Vue from 'vue'
    import PersonalNav from './Nav-Personal.vue'
    import AppNav from  './Nav-App.vue'

    export default Vue.extend({

        props: {

        },

        data() {
            return {
                color: 'red',
                sidebarHidden: 1
            }
        },
        components : {
            AppNav,
            PersonalNav
        },
        methods: {
            handleClickHiddenSidebar() {
                if(this.sidebarHidden) {
                    this.sidebarHidden = 0
                }else
                    this.sidebarHidden = 1
                console.log(this.sidebarHidden)
                this.$emit('onHiddenSidebar', this.sidebarHidden)
            }
        },
    })
</script>

<style lang="scss" scoped>
    .sidebar-wrapper {
        position: relative;
    }
    .sidebar-hidden {
        width: 2.5rem;
        height: 2.5rem;
        background-color: $color4;
        position: absolute;
        left: 100%;
        top: 50%;
        transform: translate(-50%, -50%);
        text-align: center;
        line-height: 2.75rem;
        color: $color2;
        border-radius: 10rem;
        i {
            font-size: 1.25rem;
        }
        
    }
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