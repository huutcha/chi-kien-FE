<template>
    <footer>
        <div class="container">
            <div class="footer-wrapper">
                <div class="item">
                    <h1>CƠ SỞ SẢN XUẤT</h1>
                    <div class="content">
                        <p>Công ty TNHH sản xuất & thương mại dịch vụ Chí Kiên</p>
                        <p>MST: 0108764868</p>
                        <p>STK: 19134458111666 </p>
                        <p>SDT: 0904883885 </p>
                        <p>Ngân hàng: Techcombank hội sở chính</p>
                        <p>Địa chỉ: Số 33A ngõ 164 đường Ỷ La, Phường Dương Kinh, Quận Hà Đông, TP. Hà Nội</p>
                        <iframe  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d32501.098272853244!2d105.7279436284265!3d20.97439501829962!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x313453025fbde5a5%3A0x82fe3de89371b384!2zMzMgTmcuIDE2NCDEkC4g4bu2IExhLCBExrDGoW5nIEtpbmgsIEjDoCDEkMO0bmcsIEjDoCBO4buZaSwgVmnhu4d0IE5hbQ!5e0!3m2!1svi!2s!4v1638521666283!5m2!1svi!2s" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy"></iframe>
                    </div>
                </div>
                <div class="item">
                    <h1>VỀ CHÍ KIÊN</h1>
                    <ul class="footer-nav">
                        <li><a href="">Giới thiệu Chí Kiên </a></li>
                        <li><a href="">Lời cảm ơn khách hàng </a></li>
                        <li><a href="">Chính sách giao nhận hàng hóa </a></li>
                        <li><a href="">Chính sách đại lí </a></li>
                        <li><a href="">Chính sách giải quyết khiếu nại </a></li>
                    </ul>
                    <img src="./img/certification.png" alt="">
                </div>
                <div class="item">
                    <h1>KẾT NỐI VỚI CHÚNG TÔI</h1>
                    <ul class="socials">
                        <li><img src="./img/facebook.png" alt=""></li>
                        <li><img src="./img/youtube.png" alt=""></li>
                        <li><img src="./img/tik-tok.png" alt=""></li>
                    </ul>
                    <h2>ỨNG DỤNG TRÊN ĐIỆN THOẠI</h2>
                    <img src="./img/app.png" style="margin: 42px auto" alt="">
                    <img src="./img/gg.png" alt="">
                </div>
            </div>
        </div>
    </footer>
</template>

<script>
export default {
    name: 'Footer'
}
</script>

<style>
    iframe{
        width: 250px;
        height: 116px;
    }
    footer{
        background: #494949;
        color: var(--text-white);
        font-size: 20px;
        line-height: 23px;
    }
    footer a{
        color: var(--text-white);
    }
    .footer-wrapper{
        display: flex;
        justify-content: space-between;
    }
    .footer-wrapper .item{
        width: 350px;
    }
    .footer-wrapper .item p{
        margin-bottom: 15px;
    }
    .footer-wrapper .item li{
        margin-bottom: 30px;
    }
    .footer-wrapper .item h1{
        font-weight: bold;
        font-size: 30px;
        line-height: 35px;
        text-align: center;
        margin: 25px 0;
    }
    .socials{
        display: flex;
        justify-content: center;
        margin: 46px 0 34px;
    }
    .socials li{
        height: 46px;
        width: 46px;
        background-color: white;
        display: flex;
        justify-content: center;
        align-items: center;
        border-radius: 50%;
        margin: 0 12px !important;
        cursor: pointer;
    }
    .socials li img{
        width: 20px;
    }
    .footer-wrapper .item h2{
        font-weight: bold;
        font-size: 25px;
        line-height: 29px;
    }
    .footer-wrapper .item img{
        display: block;
        margin: 0 auto;
    }
</style>