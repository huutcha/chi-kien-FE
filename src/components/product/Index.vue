<template>
    <div class="product-container">
        <div class="product-img">
            <img :src="image" alt="">
        </div>
        <div class="product-name">{{ name }}</div>
        <div class="price" :class="{'has-sale': salePrice < price}">
            <div class="org">{{ priceFormat(price) }}đ</div>
            <div class="sale">{{ priceFormat(salePrice) }}đ</div>
        </div>
    </div>
</template>

<script>
export default {
    props: ['product'],
    data() {
        return {
            name: this.product.name,
            price: this.product.price,
            salePrice: this.product.salePrice,
            image: 'http://127.0.0.1:8000/' + this.product.images[0].path
        }
    },
    methods: {
        priceFormat (number) {
            return new Intl.NumberFormat('de-DE').format(number)
        }
    }

}
</script>

<style>
    .product-container{
        width: 222px;
        height: 340px;
        border: 0.5px solid #AAAAAA;
        box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.16);
        border-radius: 20px;
        padding: 14px;
        cursor: pointer;
        box-sizing: border-box;
        margin: 12px;
        transition: all .2s;
    }
    .product-container:hover{
        transform: translateY(-10px);
    }
    .product-img{
        height: 184px;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .product-img img{
        max-width: 100%;
    }
    .product-name{
        margin: 24px 0 38px;
        font-weight: 500;
        font-size: 18px;
        line-height: 23px;
        color: var(--text-black);
        text-align: center;
    }
    .price{
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 25px;
        line-height: 29px;
        color: #FF0000;
    }
    .price.has-sale{
        justify-content: space-between;
    }
    .price .sale{
        display: none;
    }
    .price.has-sale .org{
        font-size: 20px;
        line-height: 23px;
        text-decoration-line: line-through;
        color: #676767;
    }
    .price.has-sale .sale{
        display: block;
    }
</style>