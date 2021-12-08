<template>
    <div class="products-list">
        <Slick ref="slick" :options="slickOptions" v-if="products.length > 0">
            <div v-for="(product, i) in products" :key="i">
                <Product :product="product" />
            </div>
        </Slick>
    </div>
</template>

<script>
import Slick from 'vue-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import Product from "../product/Index.vue"
import { getApi } from "/src/util/api/config"

export default {
    components: {
        Product, Slick
    },
    data() {
        return {
            products: [],
            contents: [1, 2, 3, 4, 5, 6],
            slickOptions: {
                infinite: true,
                rows: 2,
                slidesPerRow: 5,
                slidesToScroll: 5,
                dots: true,
            }
            
        }
    },
    created(){
        getApi('products')
            .then(res => {
                this.products = res.data.data
            })
            .catch(res => {
                console.log(res);
            })
    }
    
}
</script>

<style scoped>
    .slick-slider .slick-list{
        height: 720px;
    }
    .slick-slider .slick-track{
        top: 10px
    }
</style>