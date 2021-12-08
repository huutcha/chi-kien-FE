<template>
    <div class="article-list">
        <Slick ref="slick" :options="slickOptions" v-if="articles.length > 0">
            <div v-for="(article, i) in articles" :key="i">
                <Article :article="article" />
            </div>
        </Slick>
    </div>
</template>

<script>
import Slick from 'vue-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import Article from "./Article.vue"
import { getApi } from "/src/util/api/config"

export default {
    components: {
        Article, Slick
    },
    data() {
        return {
            articles: [],
            slickOptions: {
                infinite: true,
                 slidesToShow: 4,
                slidesToScroll: 4,
                dots: true,
            } 
        }
    },
    created(){
        getApi('articles')
            .then(res => {
                this.articles = res.data.data
            })
            .catch(res => {
                console.log(res);
            })
    }
    
}
</script>

<style>

</style>