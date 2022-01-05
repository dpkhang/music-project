<template>
    <div class="header">
        <div class="toolbox-wrapper">
            <div class="toolbox-item toolbox-item--image"><img src="img/app/android-chrome-192x192.png" alt=""></div>
            <div class="bottom-toolbox">
                <div class="toolbox-item toolbox-item--dark-mode"><i class="fas fa-moon"></i></div>
                <div class="toolbox-item toolbox-item--setting"><i class="fas fa-cog"></i></div>
                <div class="toolbox-item toolbox-item--log-out"><i class="fas fa-sign-out-alt"></i></div>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
    import Vue from 'vue'

    export default Vue.extend({
        
    })
</script>

<style lang="scss"scoped>
    .toolbox-wrapper {
        width: 100%;
        height: 100%;
        background-color: $color;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        .toolbox-item {
            width: 4rem;
            height: 4rem;
            margin: 0 auto;
            padding: .5rem;
            i, img {
                display: block;
                width: 100%;
                height: 100%;
            }
            img {
                border-radius: 50%;
                background-color: white;
                margin-top: .5rem;
            }
            i {
                font-size: 1.5rem;
                text-align: center;
                color: white;
                cursor: pointer;
            }
        }
        .bottom-toolbox {
            width: 100%;
            height: 12rem;

        }
    }
</style>