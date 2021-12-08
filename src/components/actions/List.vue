<template>
    <div class="action-list">
        <Slick ref="slick" :options="slickOptions" v-if="actions.length > 0">
            <div v-for="(action, i) in actions" :key="i">
                <Action :action="action" />
            </div>
        </Slick>
    </div>
</template>

<script>
import Slick from 'vue-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import Action from "./Action.vue"
import { getApi } from "/src/util/api/config"

export default {
    components: {
        Action, Slick
    },
    data() {
        return {
            actions: [],
            slickOptions: {
                infinite: true,
                 slidesToShow: 4,
                slidesToScroll: 4,
                dots: true,
            } 
        }
    },
    created(){
        getApi('actions')
            .then(res => {
                this.actions = res.data.data
            })
            .catch(res => {
                console.log(res);
            })
    }
    
}
</script>

<style>

</style>