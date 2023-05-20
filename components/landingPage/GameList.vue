<script setup lang="ts">
import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/swiper-bundle.css';

defineProps({
    game: {
        type: Object,
    },
});
let swiperRef: any;

const onSwiper = (swiper: any) => {
    swiperRef = swiper;
};
const onSlideChange = () => {
    console.log('slide change');
};
</script>

<template>
    <div class="pt-4">
        <div class="px-4">
            <div class="flex items-center justify-between mb-4">
                <div class="flex items-center">
                    <img class="w-4" :src="game?.icon" alt="hot" />
                    <p class="font-bold text-lg pl-2">{{ game?.title }}</p>
                </div>
                <div>
                    <q-btn
                        @click="swiperRef.slidePrev()"
                        ref="prevBtn"
                        size="sm"
                        style="background: #3f4655"
                    >
                        <img
                            class="w-2"
                            src="@/assets/imgs/left.png"
                            alt="left"
                        />
                    </q-btn>

                    <q-btn
                        @click="swiperRef.slideNext()"
                        class="mx-2"
                        size="sm"
                        style="background: #3f4655"
                    >
                        <img
                            class="w-2"
                            src="@/assets/imgs/right.png"
                            alt="right"
                        />
                    </q-btn>

                    <q-btn
                        ref="nextBtn"
                        size="sm"
                        style="background: #3f4655"
                        label="See all"
                    />
                </div>
            </div>
            <Swiper
                ref="mySwiper"
                :slides-per-view="6"
                :space-between="10"
                @swiper="onSwiper"
                @slideChange="onSlideChange"
                :loop="true"
                :autoplay="{
                    delay: 2500,
                    disableOnInteraction: true,
                }"
                :breakpoints="{
                    '320': {
                        slidesPerView: 3,
                        spaceBetween: 5,
                    },
                    '640': {
                        slidesPerView: 3,
                        spaceBetween: 5,
                    },
                    '768': {
                        slidesPerView: 4,
                        spaceBetween: 10,
                    },
                    '1024': {
                        slidesPerView: 6,
                        spaceBetween: 10,
                    },
                }"
            >
                <swiper-slide v-for="gameItem in game?.list">
                    <img :src="gameItem?.link" />
                    <p
                        class="text-center p-2"
                        style="size: 11px; color: #7b8193"
                    >
                        {{ gameItem?.name }}
                    </p>
                </swiper-slide>
            </Swiper>
        </div>
    </div>
</template>
