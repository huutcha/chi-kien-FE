<template>
    <div class="cart">
        <svg width="31" height="29" viewBox="0 0 31 29" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M11.5447 27.5792C12.2728 27.5792 12.8629 27.0125 12.8629 26.3135C12.8629 25.6145 12.2728 25.0479 11.5447 25.0479C10.8167 25.0479 10.2266 25.6145 10.2266 26.3135C10.2266 27.0125 10.8167 27.5792 11.5447 27.5792Z" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M26.0447 27.5235C26.7728 27.5235 27.3629 26.9569 27.3629 26.2578C27.3629 25.5588 26.7728 24.9922 26.0447 24.9922C25.3167 24.9922 24.7266 25.5588 24.7266 26.2578C24.7266 26.9569 25.3167 27.5235 26.0447 27.5235Z" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M1 1H6.27273L9.80545 17.9471C9.926 18.5299 10.2562 19.0533 10.7381 19.4258C11.2201 19.7983 11.8232 19.9962 12.4418 19.9849H25.2545C25.8732 19.9962 26.4763 19.7983 26.9582 19.4258C27.4402 19.0533 27.7704 18.5299 27.8909 17.9471L30 7.32829H7.59091" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
        <div class="cart-container">
            <div class="cart-title">
                Giỏ hàng
            </div>
            <ul v-if="products.length > 0" class="cart-list">
                <li v-for="(product, index) in products" :key="index" class="cart-item">
                    <div class="img"></div>
                    <div class="content">
                        <p>{{ product.name }}</p>
                        <div class="quantity-price">
                            <div class="quantity">
                                Số lượng
                                <input type="number" v-model="product.quantity" min="1">
                            </div>
                            <div>
                                Thành tiền: {{product.quantity * product.price}}đ
                            </div>
                        </div>
                    </div>
                    <div class="remove" @click="remove(product)">
                        X
                    </div>
                </li>
                <p class="totalPrice">Tổng tiền: {{getTotalPrice}} đ</p>
            </ul>
            <p v-else>Giỏ hàng trống</p>
            <a href="" class="cart-link">XEM GIỎ HÀNG</a>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Cart',
    data() {
        return {
            products: [
                {
                    name: 'Băng dính',
                    quantity: 1,
                    price: 2000
                }
            ]
        }
    },
    computed: {
        getTotalPrice (){
            return this.products.reduce((total, product) => {
                return total + product.price * product.quantity
            }, 0)
        }
    },
    methods: {
        remove (product) {
            this.products = this.products.filter(() => !this.products.includes(product));
        }
    }
}
</script>
<style scoped>
    .cart{
        margin: 0 45px 0 35px;
        position: relative;
    }
    .cart-container{
        position: absolute;
        top: 100%;
        left: 50%;
        transform: translateX(-50%);
        width: 400px;
        display: none;
        background-color: white;
        z-index: 99;
        border-radius: 6px;
        box-shadow: 0 2px 4px rgba(0, 0, 0 , .2);
    }
    .cart:hover .cart-container{
        display: block;
    }
    .cart-title {
        padding: 4px 10px;
        color: var(--text-black);
        border-bottom: 1px solid #ccc;
    }
    .cart-item {
        display: flex;
        padding: 5px 0;
        align-items: center;
        border-bottom: 1px solid #ccc;
    }
    .cart-item .img{
        width: 50px;
        height: 50px;
        background-color: tomato;
        margin-right: 6px;
    }
    .cart-item .content{
        flex: 1;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
    }
    .cart-item .content .quantity-price{
        display: flex;
        font-size: 12px;
    }
    .cart-item .content .quantity-price .quantity input{
        width: 50px;
    }
    .cart-item .remove{
        width: 24px;
        height: 24px;
        border: 1px solid #888;
        border-radius: 4px;
        display: flex;
        justify-content: center;
        align-items: center;
        margin: 0 6px;
    }
    .totalPrice{
        text-align: right;
        padding: 10px;
    }
    .cart-link{
        padding: 8px;
        text-align: center;
        display: block;
        background-color: black;
        color: white;
        transition: all .2s;
    }
    .cart-link:hover{
        opacity: .8;
    }
</style>