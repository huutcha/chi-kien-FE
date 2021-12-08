<template>
  <div class="sales container">
        <div class="title">
            Khuyến mại
        </div>
        <div class="sale-product-list">
            <Slick ref="slick" :options="slickOptions" v-if="products.length > 0">
                <div v-for="(product, i) in products" :key="i">
                    <Product :product="product" />
                </div>
            </Slick>
            
        </div>
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
                slidesToShow: 5,
                slidesToScroll: 5,
                dots: true,
            }
            
        }
    },
    created(){
        getApi('sale-products')
            .then(res => {
                this.products = res.data.data
            })
            .catch(res => {
                console.log(res);
            })
    }
    
}
</script>

<style>
    .sales .title{
        height: 42px;
        width: 274px;
        background: #FF0000;
        font-style: italic;
        font-weight: bold;
        font-size: 35px;
        line-height: 41px;
        color: var(--text-white);
        margin: 80px auto;
        text-align: center;
    }
    .slick-list{
        padding: 10px 0;
    }
    .slick-dots li{
        margin: 2px;
    }
    .slick-dots li button::before{
        content: '';
        display: block;
        height: 10px;
        border-radius: 50%;
        width: 10px;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        background-color: #FF0000;
    }
    .slick-dots li.slick-active button::before{
        height: 14px;
        width: 14px;
    }
</style>