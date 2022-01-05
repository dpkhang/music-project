<template>
    <div class="wrapper" id="wrapper">
        <Toolbox/>
        <Sidebar @onHiddenSidebar="sidebarHidden = $event"/>
        <Content/>
        <p>{{sidebarHidden}}</p>
    </div>
</template>

<script lang="ts">
    import Vue from 'vue'
    import Sidebar from '../partials/main/sidebar/Sidebar.vue'
    import Toolbox from '../partials/main/toolbox/Toolbox.vue'
    import Content from '../pages/Content.vue'

    export default Vue.extend({
        data() {
            return {
                sidebarHidden: 0
            }
        },

        components: {
            Sidebar,
            Content,
            Toolbox,
        },

        beforeUpdate() {
            const wrapper = document.getElementById('wrapper') as HTMLElement
            if(this.sidebarHidden) {  
                wrapper.style.gridTemplateColumns = ' 5% 0% 95%'
            }else {
                wrapper.style.gridTemplateColumns = ' 5% 15% 80%'
            }
        },

        updated() {

        }
    })
</script>

<style lang="scss" scoped>
    .wrapper {
        width: 100%;
        height: 100vh;
        display: grid; 
        grid-template-columns: 5% 15% 80%;
        grid-template-rows: 100%; 
        transition: .5s;
    }
</style>