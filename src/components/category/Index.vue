<template>
    <ul class="category-list">
        <Category v-for="(category, i) in categories" :key="i" :category="category"/>
    </ul>
</template>

<script>
import { getApi }  from "/src/util/api/config.js"
import Category from "./Category.vue"

export default {
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
    components: {
        Category
    }
}
</script>

<style>
    .category-list{
        display: flex;
        flex-wrap: wrap;
    }
</style>