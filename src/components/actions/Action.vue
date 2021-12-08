<template>
    <div class="action-container">
        <div class="img"><img :src="image" alt=""></div>
        <div class="title">
            {{ title }}
        </div>
    </div>
</template>

<script>
export default {
    props: ['action'],
    data (){
        return {
            title: this.action.title,
            image: 'http://127.0.0.1:8000/' + this.action.images[0].path
        }
    }

}
</script>

<style scoped>
    .action-container{
        width: 283px;
        height: 333px;
        background: #FFFFFF;
        border: 1px solid #000000;
        box-sizing: border-box;
        box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.16);
        border-radius: 15px;
        cursor: pointer;
        margin: 0 12px;
        overflow: hidden;
    }
    .action-container .img{
        overflow: hidden;
    }
    .action-container:hover img{
        transform: scale(1.2);
    }
    .action-container img{
        width: 100%;
        transition: all .4s;
    }
    .action-container .title{
        font-size: 20px;
        line-height: 23px;
        color: var(--text-black);
        padding: 26px 10px;
        text-align: center;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
    }
</style>