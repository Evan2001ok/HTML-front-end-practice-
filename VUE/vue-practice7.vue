<template>
    <h1>How use swiper in vue</h1>
    <div>
    <swiper>
        <swiper :slides-per-view="1" :space-between="10" loop autoplay="{ delay: 2500 }" pagination navigation>
        <swiper-slide>
            <img src="../assets/logo.png" alt="">
        </swiper-slide>
        <swiper-slide>
            <img src="../assets/logo.png" alt="">
        </swiper-slide>
        <swiper-slide>
            <img src="../assets/logo.png" alt="">
        </swiper-slide>
    </swiper>

    </swiper>
    </div>
</template>

<script>
    //import swiper from swiper website
    import { Swiper, SwiperSlide } from 'swiper/vue';
    import 'swiper/swiper-bundle.css';

    export default  {
        components:{
            Swiper,
            SwiperSlide
        }
    }

</script>

<style>
</style>