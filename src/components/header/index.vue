<template>
    <header>
        <div class="container" style="height: 100%">
            <div class="header-wrapper">
                <a href="">
                    <img src="./logo.png" alt="" class="logo">
                </a>
                <Search />
                <nav>
                    <ul>
                        <li><a href="">Khuyến mại</a></li>
                        <li><a href="">Tin tức</a></li>
                        <li><a href="">Giới thiệu</a></li>
                    </ul>
                </nav>
                <Cart />
                <div class="nav-auth">
                    <Button />
                    <Button />
                </div>
            </div>
        </div>
    </header>
</template>

<script>
import Cart from './Cart.vue'
import Search from './Search.vue'
import Button from '../lib/button'
export default {
    name: 'Header',
    components: {
        Cart, Search, Button
    }

}
</script>

<style>
    header{
        height: 50px;
        border-bottom: .5px solid #DCDCDC;
    }
    .header-wrapper{
        display: flex;
        align-items: center;
        height: 100%;
    }
    .header-wrapper img{
        margin-right: 64px;
    }
    .nav-auth{
        width: 290px;
        display: flex;
        justify-content: space-between;
    }
    nav{
        flex: 1;
    }
    nav ul{
        display: flex;
        justify-content: space-around;
    }
    nav ul li a{
        color: var(--text-black);
        font-weight: 500;
    }
</style>