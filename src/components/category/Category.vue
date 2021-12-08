<template>
    <div class="cate-container">
        <div class="cate-img">
            <img :src="imagePath" alt="">
        </div>
        <div class="content">
            <div class="cate-name">{{ name }}</div>
            <span>({{ countProduct }} sản phẩm)</span>
        </div>
    </div>
</template>

<script>

export default {
    props: ['category'],
    data() {
        return {
            name: this.category.name,
            countProduct: this.category.countProduct,
            imagePath: 'http://127.0.0.1:8000/' + this.category.image_path
        }
    }
    
}
</script>

<style>
    .cate-container{
        padding: 14px 0;
        display: flex;
        justify-content: space-evenly;
        width: 284px;
        border: 1px solid #B7B4B4;
        box-shadow: 4px 4px 4px 0px #00000040;
        border-radius: 30px;
        margin-bottom: 25px;
        margin-right: 16px;
        cursor: pointer;
    }
    .cate-img{
        height: 84px;
        width: 84px;
        border-radius: 20px;
        overflow: hidden;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .cate-img img{
        max-width: 100%;
    }
    .cate-container .content{
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;
        align-items: center;
    }
    .cate-container .content .cate-name{
        font-size: 20px;
        font-weight: 700;
    }
    .cate-container .content span{
        font-size: 15px;
    }
</style>