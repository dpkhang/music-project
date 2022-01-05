<template>
    <div class="content-wrapper">
        <div class="search-box-wrapper">
            <div class="search-box">
                <input type="text" placeholder="Enter the music name" v-model="musicName">
                <i class="fas fa-search"></i>
            </div>
        </div>
        <router-view></router-view>
    </div>
</template>

<script lang="ts">

    import Vue from 'vue'


    export default Vue.extend({
        data() {
            return {
                musicName: ""
            }
        },

        methods: {
            getData(){
                console.log(this.musicName)
            }
        },

        updated() {
            console.log(this.musicName)
        },
    })
</script>

<style lang="scss" scoped>
    .content-wrapper {
        background-image: radial-gradient( white 40%, $color2);
        .search-box-wrapper {
            width: 100%;
            height: 4rem;
            .search-box {
                width: 30rem;
                height: 3rem;
                float: right;
                margin-right: 3rem;
                background-color: $color1;
                margin-top: .5rem;
                border-radius: 10rem;
                display: flex;
                justify-content: space-between;
                input {
                    display: block;
                    width: 85%;
                    height: 100%;
                    background: none;
                    outline: none;
                    padding-left: 2rem;
                    font-family: Poppins;
                    font-weight: bold;
                    color: $color2;
                    font-size: 1.25rem;
                }

                input::placeholder {
                    color: rgba($color2, .5);
                }

                i {
                    display: block;
                    height: 100%;
                    width: 10%;
                    font-size: 1.5rem;
                    color: $color2;
                    line-height: 3rem;
                }
            }
            
        }
    }
</style>