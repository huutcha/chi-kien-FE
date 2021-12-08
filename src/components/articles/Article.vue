<template>
    <div class="article-container">
        <div class="img"><img :src="image" alt=""></div>
        <div class="content">
            <div class="title">
                {{ title }}
            </div>
            <span>
                {{ createdBefore }}
            </span>
        </div>
    </div>
</template>

<script>
export default {
    props: ['article'],
    data (){
        return {
            title: this.article.title,
            image: 'http://127.0.0.1:8000/' + this.article.images[0].path,
            createdBefore: this.article.createdBefore
        }
    }

}
</script>

<style scoped>
    .article-container{
        width: 284px;
        height: 278px;
        background: #FFFFFF;
        box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.16);
        border-radius: 15px;
        box-sizing: border-box;
        cursor: pointer;
        overflow: hidden;
    }
    .article-container .img{
        overflow: hidden;
    }
    .article-container:hover img{
        transform: scale(1.2);
    }
    .article-container img{
        width: 100%;
        transition: all .4s;
    }
    .article-container .content{
        padding: 6px 12px;
    }
    .article-container .title{
        font-weight: 500;
        font-size: 18px;
        line-height: 21px;
        color: var(--text-black);
        text-align: center;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        margin-bottom: 30px;
    }
    .article-container .content span{
        font-size: 15px;
        line-height: 18px;
        color: #676767;
    }
</style>