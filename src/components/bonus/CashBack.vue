<template>
    <div class="inset-0 rounded-md w-full px-2 pt-6 pb-10 relative">
        <div
            style="background: #383d47"
            class="absolute w-full h-full opacity-50 top-0 left-0 rounded-md"
        ></div>
        <div class="relative mt-10">
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 pb-4">
                <div class="flex items-center justify-between relative">
                    <div
                        class="w-1/2 absolute top-1/2 -translate-y-1/2 z-10 left-8"
                    >
                        <p
                            :class="[
                                'font-bold text-sm sm:text-sm md:text-xl xl:text-2xl text-shadow-lg',
                                isDrawer ? 'lg:text-sm' : 'lg:text-2xl',
                            ]"
                        >
                        {{tran('BONUS WHEEL', store.state.lang)}}
                        </p>
                        <p
                            :class="[
                                'text-xs lg:text-xs',
                                isDrawer ? 'lg:text-xxs' : 'lg:text-xs',
                            ]"
                        >
                        {{tran('Get free spin every 2 hours!', store.state.lang)}}
                        </p>
                        <q-btn
                            :class="[
                                'mt-2 xl:mt-4',
                                isDrawer ? 'lg:mt-2' : 'lg:mt-4',
                            ]"
                            size="xs"
                            :label="tran('Free Spin', store.state.lang)"
                            @click="$router.push(linkTo('/wheel'))"
                        />
                    </div>
                    <q-img
                        src="/imgs/back_bonus.png"
                        spinner-color="primary"
                        alt="title"
                    />
                    <q-img
                        class="w-1/2 absolute right-0 -bottom-3"
                        src="/imgs/wheel.png"
                        spinner-color="primary"
                        spinner-size="24px"
                        alt="title"
                    />
                </div>
                <div class="flex items-center justify-between relative">
                    <div
                        class="w-2/3 absolute top-1/2 -translate-y-1/2 z-10 left-8"
                    >
                        <p
                            :class="[
                                'font-bold text-sm sm:text-sm md:text-xl xl:text-2xl text-shadow-lg',
                                isDrawer ? 'lg:text-sm' : 'lg:text-2xl',
                            ]"
                        >
                        {{tran('DAILY CASHBACK', store.state.lang)}}
                        </p>
                        <div class="flex items-center justify-start">
                            <p
                                :class="[
                                    'text-xs lg:text-xs',
                                    isDrawer ? 'lg:text-xxs' : 'lg:text-xs',
                                ]"
                            >
                            {{tran('UP TO', store.state.lang)}}
                            </p>
                            <p
                                style="color: #ffd62f"
                                :class="[
                                    'text-xl xl:text-5xl font-black pl-1',
                                    isDrawer ? 'lg:text-xl' : 'lg:text-5xl',
                                ]"
                            >
                                20%
                            </p>
                        </div>
                    </div>
                    <q-img
                        src="/imgs/back_daily.png"
                        spinner-color="primary"
                        alt="title"
                    />
                    <q-img
                        class="w-1/2 absolute right-0 -bottom-3"
                        src="/imgs/cash_back.png"
                        spinner-color="primary"
                        alt="title"
                    />
                </div>
            </div>

            <q-page>
                <q-table :rows="rows" :columns ="cols">
                    <template v-slot:body="props">
                        <q-tr :props="props">
                            <q-td key="index" :props="props">
                                {{ props.rowIndex + 1 }}
                            </q-td>
                            <q-td key="totalDeposit" :props="props">
                                {{ props.row.totalDeposit }}
                            </q-td>
                            <q-td key="cashBackAmount" :props="props">
                                {{ props.row.cashBackAmount }}
                            </q-td>
                            <q-td key="wager" :props="props">
                                {{ props.row.wager }}
                            </q-td>
                            <q-td key="isComplete" :props="props">
                                <q-btn
                                    class="w-20"
                                    v-if="props.row.isComplete == 0"
                                    color="primary"
                                    size="xs"
                                    :label="tran('expired', store.state.lang)"
                                />
                                <q-btn
                                    class="w-20"
                                    v-if="props.row.isComplete == 1"
                                    color="positive"
                                    size="xs"
                                    :label="tran('completed', store.state.lang)"
                                />
                                <q-btn
                                    class="w-20"
                                    v-if="props.row.isComplete == -1"
                                    color="grey"
                                    size="xs"
                                    :label="tran('claim', store.state.lang)"
                                />
                            </q-td>
                            <q-td key="expireOn" :props="props">
                                {{ props.row.expireOn }}
                            </q-td>
                        </q-tr>
                    </template>
                    <template v-slot:pagination="scope">
                        <q-btn
                            icon="chevron_left"
                            color="grey-8"
                            round
                            dense
                            flat
                            :disable="scope.isFirstPage"
                            @click="prevPage(scope.prevPage)"
                        />
                        <q-btn
                            icon="chevron_right"
                            color="grey-8"
                            round
                            dense
                            flat
                            @click="nextPage(scope.nextPage)"
                        />
                    </template>
                </q-table>
            </q-page>
            <!-- <div v-if="!store.state.isLogin" class="mx-5">
                <div class="flex">
                    <p class="text-xl font-bold py-3 px-16 rounded-xl bg-gray-900">{{ tran("Everyday Cashback upto 20%", store.state.lang) }}</p>
                </div>
                <p class="pt-2 font-bold">{{ tran("Our cashback bonus has a very simple rule: the more you deposit, the more you get back! Enjoy up to 20% cashback that is credited every single day.", store.state.lang) }}</p>
                <ul class="list-disc p-4">
                    <li>
                        <p class="pb-2 text-md font-semibold">{{ tran("Cashback is given on the deposit amount during the previous day from 00:00 to 23:59(UTC). The total amount of received cashback cannot exceed 20% of the total amount of all Players deposits.", store.state.lang) }}</p>
                        <q-table class="" :pagination="{rowsPerPage: 5}" flat bordered :rows="infoRows" :columns ="infoCols">
                            <template v-slot:body="props">
                                <q-tr :props="props">
                                    <q-td key="cashback" :props="props">
                                        {{ props.row.cashback }}
                                    </q-td>
                                    <q-td key="depositAmount" :props="props">
                                        {{ props.row.depositAmount }}
                                    </q-td>
                                </q-tr>
                            </template>
                        </q-table>
                    </li>
                    <li>
                        <p class="pt-2 text-md font-semibold">{{ tran("Cashback is credited to the Player's account automatically every day at 02:00 AM (UTC).", store.state.lang) }}</p>
                    </li>
                    <li>
                        <p class="pt-2 text-md font-semibold">{{ tran("The maximum amount of cashback that can be credited to the Player's account is 20% of the total amount of all deposits made by the Player during the previous day.", store.state.lang) }}</p>
                    </li>
                    <li>
                        <p class="pt-2 text-md font-semibold">{{ tran("Wager requirement for cashback bonus is x3.", store.state.lang) }}</p>
                    </li>
                    <li>
                        <p class="pt-2 text-md font-semibold">{{ tran("Validity of the cashback is 3 days from its receipt and 7 days after its activation.", store.state.lang) }}</p>
                    </li>
                    <li>
                        <p class="pt-2 text-md font-semibold">{{ tran("Cashback will not be credited if the real money loss for the previous day was less than BTC 0.0008 / BCH 0.13 / DOGE 250 / ETH 0.013 / LTC 0.30 / USDT 20 / XRP 33 / TRX 250 / ADA 33 / BNB 0.067 / USDC 20 / BUSD 20.", store.state.lang) }}</p>
                    </li>
                    <li>
                        <p class="pt-2 text-md font-semibold">{{ tran("You must have no pending withdrawals in order to claim Daily Cashback", store.state.lang) }}</p>
                    </li>
                    <li>
                        <p class="pt-2 text-md font-semibold">{{ tran("Any abuse in order to obtain a cashback bonus is prohibited; in particular, the use of the opposite bets strategy in table games is prohibited (e.g. simultaneous betting on both red and black in roulette, or other similar bet types).", store.state.lang) }}</p>
                    </li>
                    <li>
                        <p class="pt-2 text-md font-semibold">{{ tran("For successful withdrawal of funds gained with a cashback bonus, the Player must meet the wagering requirement for the total amount of deposits made during the day of at least three (3) times (i.e. total wager amount equals the amount of deposits for the day multiplied by 3) no later than 23:59 UTC of the day on which these deposits were made.", store.state.lang) }}</p>
                    </li>
                    <li>
                        <p class="pt-2 text-md font-semibold">{{ tran("In the case of detection of the cashback bonus rules abuse or failure to comply with the wagering requirements specified in paragraph 8 of these rules, the Casino may cancel and seize all winnings gained with an active cashback bonus, as well as to confiscate an amount equal to the amount of cashback bonus received.", store.state.lang) }}</p>
                    </li>
                </ul>
                <div class="flex">
                    <p @click="router.push(linkTo('/bonus-terms-and-conditions'))" class="py-2 text-md font-semibold py-3 px-5 rounded-xl bg-gray-900 cursor-pointer">{{ tran("Read more about our Bonus Terms and Conditions", store.state.lang) }}</p>
                </div>
            </div> -->
        </div>
    </div>
</template>

<script setup lang="ts">
import {useStore} from 'vuex';
import {useRouter} from 'vue-router';
import { ref , onUnmounted} from 'vue';
import { tran } from "~~/utils/translation";
import { getCashbackHistory } from '~~/action/bonus';

const router = useRouter();
const store = useStore();
const isDrawer = computed(() => store.state.isDrawer);
const pagination = ref({
      sortBy: 'desc',
      descending: false,
      page: 1,
      rowsPerPage: 5,
})
onUnmounted(()=>{
    store.commit('handleGetHistory', []);
    store.commit('handleGetHistoryAccount', 0);
    store.commit('handlePageNumber', 1);
});
const prevPage = (prev:Function) => {
    pagination.value.page-=1;
}
const nextPage = (next:Function) => {
    if(store.state.historyAmount>pagination.value.page*pagination.value.rowsPerPage){
        if(store.state.history.length < (pagination.value.page+1)*pagination.value.rowsPerPage){
            let cnt = Math.ceil(((pagination.value.page+1)*pagination.value.rowsPerPage - store.state.history.length)/10);
            for(var i=0; i<cnt; i++){
                getCashbackHistory(store.state.pageNumber+1, store, router);
                store.commit('handlePageNumber',store.state.pageNumber+1);
            }
        }
        pagination.value.page+=1;
    }
}

//receive cashback history data from store and show table
let rows = ref(store.state.history);
watch(()=>store.state.history,()=>{
    rows.value = store.state.history;
});

interface columnformat{
    name: string;
    label: string;
    field: string | ((row: any) => any);
    required?: boolean | undefined;
    align?: "left" | "center" | "right" | undefined;
};
const cols:columnformat[] = [
            {
                name: 'index',
                label: tran('No', store.state.lang),
                align: 'left',
                field: 'id',
            },
            {
                name: 'totalDeposit',
                required: true,
                label: tran('Total Deposit', store.state.lang),
                align: 'left',
                field: 'totalDeposit',
            },
            {
                name: 'cashBackAmount',
                align: 'left',
                label: tran('Cash Back Amount', store.state.lang),
                field: 'cashBackAmount',
            },
            {
                name: 'wager',
                align: 'left',
                label: tran('Wager Required', store.state.lang),
                field: 'wager',
            },
            {
                name: 'isComplete',
                align: 'left',
                label: tran('Completed', store.state.lang),
                field: 'isComplete',
            },
            {
                name: 'expireOn',
                align: 'left',
                label: tran('Expire on', store.state.lang),
                field: 'expireOn',
            },
];
const infoCols:columnformat[] = [
            {
                name: 'cashback',
                label: tran('Cashback', store.state.lang),
                align: 'left',
                field: 'cashback',
            },
            {
                name: 'depositAmount',
                label: tran('Deposit Amount', store.state.lang),
                align: 'left',
                field: 'depositAmount',
            }
];
const infoRows = [
    {
        cashback: "10%",
        depositAmount: "USD 20 - USD 499"
    },
    {
        cashback: "11%",
        depositAmount: "USD 500 - USD 699"
    },
    {
        cashback: "12%",
        depositAmount: "USD 700 - USD 799"
    },
    {
        cashback: "13%",
        depositAmount: "USD 800 - USD 999"
    },
    {
        cashback: "14%",
        depositAmount: "USD 1000 - USD 1499"
    },
    {
        cashback: "15%",
        depositAmount: "USD 1500 - USD 1999"
    },
    {
        cashback: "16%",
        depositAmount: "USD 2000 - USD 2499"
    },
    {
        cashback: "17%",
        depositAmount: "USD 2500 - USD 3499"
    },
    {
        cashback: "18%",
        depositAmount: "USD 3500 - USD 3999"
    },
    {
        cashback: "19%",
        depositAmount: "USD 4000 - USD 4999"
    },
    {
        cashback: "20%",
        depositAmount: "USD 5000 or more"
    }
]
</script>
