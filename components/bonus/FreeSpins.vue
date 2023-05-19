<template>
    <div class="inset-0 rounded-md w-full px-2 pt-6 pb-10 relative">
        <div
            style="background: #383d47"
            class="absolute w-full h-full opacity-50 top-0 left-0 rounded-md"
        ></div>
        <div class="relative">
            <div class="grid grid-cols-2 gap-4 pb-4">
                <div class="flex items-center justify-between relative">
                    <div
                        class="w-1/2 absolute top-1/2 -translate-y-1/2 z-10 left-8"
                    >
                        <p class="font-bold text-xl text-shadow-lg">
                            BONUS WHEEL
                        </p>
                        <p class="text-xs">Get free spin every 2 hours!</p>
                        <q-btn class="mt-4" size="xs" label="Free Spin" />
                    </div>
                    <q-img
                        src="@/assets/imgs/back_bonus.png"
                        spinner-color="primary"
                        alt="title"
                    />
                    <q-img
                        class="w-1/2 absolute right-0 -bottom-3"
                        src="@/assets/imgs/wheel.png"
                        spinner-color="primary"
                        spinner-size="24px"
                        alt="title"
                    />
                </div>

                <div class="flex items-center justify-between relative">
                    <div
                        class="w-2/3 absolute top-1/2 -translate-y-1/2 z-10 left-8"
                    >
                        <p class="font-bold text-xl text-shadow-lg">
                            DAILY CASHBACK
                        </p>
                        <div class="flex items-center justify-start">
                            <p class="text-xs">UP TO</p>
                            <p
                                style="color: #ffd62f"
                                class="text-5xl font-black pl-1"
                            >
                                20%
                            </p>
                        </div>
                    </div>
                    <q-img
                        src="@/assets/imgs/back_daily.png"
                        spinner-color="primary"
                        alt="title"
                    />
                    <q-img
                        class="w-1/2 absolute right-0 -bottom-3"
                        src="@/assets/imgs/cash_back.png"
                        spinner-color="primary"
                        alt="title"
                    />
                </div>
            </div>

            <q-page>
                <q-table :rows="rows" :columns="cols" />
            </q-page>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            rows: [
                {
                    title: 'Risk Free 110% Bonus upto 200 CAD',
                    freeSpin: 'No Free Spin',
                    game: 'No Free Spin',
                    bonus: '22.00 CAD',
                    wager: '811.80 CAD / 1470.00 CAD',
                    isComplete: false,
                    expireOn: '10-02-2023 - 08:26 AM',
                },
                {
                    title: 'Welcome Bonus upto 500 CAD',
                    freeSpin: '50 Free Spins',
                    game: 'Book of Dead',
                    bonus: '100.00 CAD',
                    wager: '3500.00 CAD / 7000.00 CAD',
                    isComplete: true,
                    expireOn: '10-02-2022 - 12:00 PM',
                },
                {
                    title: 'Welcome Bonus upto 500 CAD',
                    freeSpin: '50 Free Spins',
                    game: 'Book of Dead',
                    bonus: '100.00 CAD',
                    wager: '3500.00 CAD / 7000.00 CAD',
                    isComplete: true,
                    expireOn: '10-02-2022 - 12:00 PM',
                },
            ],
            cols: [
                {
                    name: 'index',
                    align: 'left',
                    label: 'S.No',
                    field: (row) => this.rows.indexOf(row) + 1,
                },
                {
                    name: 'title',
                    required: true,
                    label: 'Title',
                    align: 'left',
                    field: 'title',
                },
                {
                    name: 'freeSpin',
                    align: 'left',
                    label: 'Free Spin',
                    field: 'freeSpin',
                },
                {
                    name: 'game',
                    align: 'left',
                    label: 'Game (Click on Game)',
                    field: 'game',
                },
                {
                    name: 'bonus',
                    align: 'left',
                    label: 'Bonus',
                    field: 'bonus',
                },
                {
                    name: 'wager',
                    align: 'left',
                    label: 'Wager Required',
                    field: 'wager',
                },
                {
                    name: 'isComplete',
                    align: 'center',
                    label: 'Completed',
                    field: 'isComplete',
                },
                {
                    name: 'expireOn',
                    align: 'left',
                    label: 'Expire on',
                    field: 'expireOn',
                },
            ],
        };
    },
};
</script>
