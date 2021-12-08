<template>
  <div class="container">
        <ul class="cate-wrapper">
            <li v-for="(category, index) in categories" :key="index" class="cate-item">
                <a href="">{{category.name}}</a>
                <div v-if="category.sub_categories.length > 0" class="sub-cate-container">
                    <ul class="sub-categories">
                        <li v-for="(sub_cate, index) in category.sub_categories" :key="index" class="sub_cate-item">
                            <a href="">{{ sub_cate.name }}</a>
                        </li>
                    </ul>
                </div>
            </li>
        </ul>
  </div>
</template>

<script>
import { getApi }  from "../util/api/config.js"

export default {
    name: 'Navbar',
    data() {
        return {
            categories: []
        }
    },
    mounted(){
        getApi('categories')
            .then(res => {
                this.categories = res.data.data
            })
            .catch(res => {
                console.log(res);
            })
    },
    
}
</script>

<style scoped>
    .cate-wrapper{
        display: flex;
        width: 100%;
        justify-content: space-between;
        background-color: var(--primary-color);
        border-radius: 20px;
        height: 35px;
    }
    .cate-wrapper .cate-item{
        background-color: var(--primary-color);
        padding: 0 30px;
        cursor: pointer;
        height: 100%;
        display: flex;
        align-items: center;
        transition: all .2s;
        position: relative;
    }
    .cate-wrapper .cate-item:first-child {
        border-top-left-radius: 20px;
        border-bottom-left-radius: 20px;
    }
    .cate-wrapper .cate-item:last-child {
        border-top-right-radius: 20px;
        border-bottom-right-radius: 20px;
    }
    .cate-wrapper .cate-item a{
        color: white;
    }
    .cate-wrapper li:hover{
        background-color: black;
        color: white;
    }
    .sub-cate-container {
        position: absolute;
        display: none;
        top: 100%;
        left: 0;
        height: 300px;
        width: 900px;
        cursor: auto;
        background-color: white;
        z-index: 99;
        box-shadow: 0 2px 4px rgba(0, 0, 0, .2);
        border: 1px solid #ccc;
    }
    .cate-wrapper .cate-item:hover .sub-cate-container{
        display: block;
    }
    .sub-categories{
        display: flex;
        flex-direction: column;
        flex-wrap: wrap;
        height: 100%;
    }
    .sub-categories .sub_cate-item a{
        display: block;
        padding: 10px 20px;
        color: var(--text-black);
    }
    .sub-categories .sub_cate-item a:hover{
        color: white;
    }
</style>