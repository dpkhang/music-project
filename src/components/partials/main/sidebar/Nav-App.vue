<template>
    <div class="nav-wrapper">
        <ul >
            <li>
                <router-link to="/"><i class="fas fa-compact-disc"></i>Home</router-link>
            </li>
            <li>
                <router-link to="/rating"><i class="fas fa-chart-line"></i>Rating</router-link>
            </li>
            <li>
                <router-link to="/categories"><i class="fas fa-podcast"></i>Categories</router-link>
            </li>
            <li>
                <router-link to="/singers"><i class="fas fa-music"></i>Singers</router-link>
            </li>
        </ul>
    </div>
</template>

<script lang="ts">
    import Vue from 'vue'

    export default Vue.extend({
        data() {
            return {
                color: "blue",
            }
        },
    })
</script>

<style lang="scss"scoped>
    .nav-wrapper {
        width: 100%;
        height: 40%;
        border-bottom: .1rem solid white;
        margin: 2rem auto;
        ul {
            width: 100%;
            height: 100%;
            li {
                width: 100%;
                height: 15%;
                margin: 0 auto;
                a {
                    width: 100%;
                    height: 100%;
                    display: block;
                    line-height: 3.2rem;
                    font-size: 1.15rem;
                    font-weight: bold;
                    color: white;
                    font-family: Poppins;
                    transition: .5s;
                    padding-left: 2rem;
                    i {
                        font-size: 1.25rem;
                        margin-right: 1rem;
                    }
                }

                a.router-link-exact-active {
                    color: $color1;
                    background-color: $color2;
                }
            }
        }
    }
</style>