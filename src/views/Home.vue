<template>
  <div class="home">
    <Header></Header>
    <navbar style="margin-top: 10px"></navbar>
    <div class="categories container">
      <h1>
        Danh mục sản phẩm
      </h1>
      <CategoryList />
    </div>
    <SaleProducts />
    <div class="products container">
      <h1>
        Băng dính các loại
      </h1>
      <ProductList />
    </div>
    <div class="actions container">
      <h1>
        Hoạt động của Chí Kiên
      </h1>
      <ActionList />
    </div>
    <div class="articles container">
      <h1>
        Tin nổi bật
      </h1>
      <ArticleList />
    </div>
    <img class="banner" src="../assets/img/banner.png" alt="">
    <Footer></Footer>
  </div>
</template>

<script>
import Header from '../components/header'
import Navbar from '../components/Navbar.vue'
import CategoryList from '../components/category/Index.vue'
import SaleProducts from '../components/sales/Index.vue'
import Footer from '../components/footer/Index.vue'
import ProductList from '../components/product/List.vue'
import ActionList from  '../components/actions/List.vue'
import ArticleList from  '../components/articles/List.vue'
export default {
  name: 'Home',
  components: {
    Header,
    Navbar,
    CategoryList,
    SaleProducts,
    Footer,
    ProductList,
    ActionList,
    ArticleList
  }
}
</script>
<style>
  .categories h1, .products h1, .actions h1, .articles h1{
    font-size: 35px;
    font-weight: 700;
    color: var(--text-black);
    margin: 80px 0 40px;
  }
  .categories h1{
    margin-top: 55px;
  }
  .banner{
    width: 100%;
    object-fit: contain;
    margin-top: 110px;
  }
</style>
