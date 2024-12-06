<script setup lang="ts">
import {seperate} from '~~/utils/string';
import { useStore } from 'vuex';
import { tran } from "~~/utils/translation";
const store = useStore();

const categories = ref(store.state.promotions);
watch(()=>store.state.promotions,()=>{
    categories.value = store.state.promotions;
});
const current=ref<number[]>([]);

const showPromo = (index:number) => {
    if(current.value.includes(index)) current.value.splice(current.value.indexOf(index));
    else current.value.push(index);
}
</script>

<template>
    <div class="inset-0 rounded-md w-full px-7 pt-6 pb-10 relative">
        <div
            style="background: #383d47"
            class="absolute w-full h-full opacity-50 top-0 left-0 rounded-md"
        ></div>
        <div class="relative mt-10">
            <div class="grid md:grid-cols-2 gap-4">
                <div 
                    class="flex flex-col justify-between" 
                    v-for="(category, index) in categories"
                >
                    <div class="flex items-center justify-between relative">
                        <img
                            src="/imgs/bonus/1.png"
                            alt="title"
                        >
                        <q-img
                            class="w-1/2 absolute right-0 bottom-0"
                            :src="`/imgs/${category?.image}.png`"
                            spinner-color="primary"
                            alt="title"
                        />
                        <div
                            class="w-2/3 absolute top-1/2 -translate-y-1/2 z-10 left-8 text-shadow-lg"
                        >
                            <p class="flex flex-row pr-5 ">
                                <span v-for="strItem in seperate(category?.title)"
                                    :style="strItem?.string ? {} : {color: '#ffd62f'}"
                                    :class="!strItem?.string ? [
                                        'font-black text-sm sm:text-xl xl:text-3xl pr-2',
                                            store.state.isDrawer
                                            ? 'lg:text-md'
                                            : 'lg:text-2xl',
                                    ] : [
                                        'font-black text-sm sm:text-lg xl:text-2xl pr-2',
                                            store.state.isDrawer
                                            ? 'lg:text-md'
                                            : 'lg:text-xl',
                                    ]"
                                >
                                    {{strItem?.content}}
                                </span>
                            </p>
                        </div>
                    </div>
                    <p v-if="current.includes(index)" class="text-md md:text-lg text-bold pt-4 px-5">{{ category?.description }}</p>
                    <p v-if="current.includes(index)" class="text-lg text-bold px-5 pt-2 text-center" style="color: #e4bb17;">Promo_Code : {{ category?.promo_code }}</p>
                    <div class="text-center pb-10 pt-5">
                        <q-btn @click="showPromo(index)" color="primary" :label="current.includes(index)?tran('SHOW LESS', store.state.lang):tran('READ MORE', store.state.lang)" />
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
