<template>
    <div class="inset-0 rounded-md w-full px-2 pt-6 pb-10 relative">
        <div
            style="background: #383d47"
            class="absolute w-full h-full opacity-50 top-0 left-0 rounded-md"
        ></div>
        <div class="relative">
            <q-page>
                <q-table :rows="rows" :columns="cols">
                    <template v-slot:body="props">
                        <q-tr :props="props">
                            <q-td key="isComplete" :props="props">
                                {{ props.rowIndex + 1 }}
                            </q-td>
                            <q-td key="title" :props="props">
                                {{ props.row.title }}
                            </q-td>
                            <q-td key="freeSpin" :props="props">
                                {{ props.row.freeSpin }}
                            </q-td>
                            <q-td key="game" :props="props">
                                {{ props.row.game }}
                            </q-td>
                            <q-td key="bonus" :props="props">
                                {{ props.row.bonus }}
                            </q-td>
                            <q-td key="wager" :props="props">
                                {{ props.row.wager }}
                            </q-td>
                            <q-td key="isComplete" :props="props">
                                <q-btn
                                    class="w-14"
                                    v-if="props.row.isComplete == 0"
                                    color="primary"
                                    size="xs"
                                    label="Cancel"
                                />
                                <q-btn
                                    class="w-14"
                                    v-if="props.row.isComplete == 1"
                                    color="positive"
                                    size="xs"
                                    label="Yes"
                                />
                                <q-btn
                                    class="w-14"
                                    v-if="props.row.isComplete == -1"
                                    color="grey"
                                    size="xs"
                                    label="No"
                                />
                            </q-td>
                            <q-td key="expireOn" :props="props">
                                {{ props.row.expireOn }}
                            </q-td>
                        </q-tr>
                    </template>
                </q-table>
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
                    isComplete: 0,
                    expireOn: '10-02-2023 - 08:26 AM',
                },
                {
                    title: 'Welcome Bonus upto 500 CAD',
                    freeSpin: '50 Free Spins',
                    game: 'Book of Dead',
                    bonus: '100.00 CAD',
                    wager: '3500.00 CAD / 7000.00 CAD',
                    isComplete: 0,
                    expireOn: '10-02-2022 - 12:00 PM',
                },
                {
                    title: 'Welcome Bonus upto 500 CAD',
                    freeSpin: '50 Free Spins',
                    game: 'Book of Dead',
                    bonus: '100.00 CAD',
                    wager: '3500.00 CAD / 7000.00 CAD',
                    isComplete: 1,
                    expireOn: '10-02-2022 - 12:00 PM',
                },
                {
                    title: 'Welcome Bonus upto 500 CAD',
                    freeSpin: '50 Free Spins',
                    game: 'Book of Dead',
                    bonus: '100.00 CAD',
                    wager: '3500.00 CAD / 7000.00 CAD',
                    isComplete: -1,
                    expireOn: '10-02-2022 - 12:00 PM',
                },
                {
                    title: 'Welcome Bonus upto 500 CAD',
                    freeSpin: '50 Free Spins',
                    game: 'Book of Dead',
                    bonus: '100.00 CAD',
                    wager: '3500.00 CAD / 7000.00 CAD',
                    isComplete: 1,
                    expireOn: '10-02-2022 - 12:00 PM',
                },
                {
                    title: 'Welcome Bonus upto 500 CAD',
                    freeSpin: '50 Free Spins',
                    game: 'Book of Dead',
                    bonus: '100.00 CAD',
                    wager: '3500.00 CAD / 7000.00 CAD',
                    isComplete: 0,
                    expireOn: '10-02-2022 - 12:00 PM',
                },
                {
                    title: 'Welcome Bonus upto 500 CAD',
                    freeSpin: '50 Free Spins',
                    game: 'Book of Dead',
                    bonus: '100.00 CAD',
                    wager: '3500.00 CAD / 7000.00 CAD',
                    isComplete: 0,
                    expireOn: '10-02-2022 - 12:00 PM',
                },
                {
                    title: 'Welcome Bonus upto 500 CAD',
                    freeSpin: '50 Free Spins',
                    game: 'Book of Dead',
                    bonus: '100.00 CAD',
                    wager: '3500.00 CAD / 7000.00 CAD',
                    isComplete: 0,
                    expireOn: '10-02-2022 - 12:00 PM',
                },
                {
                    title: 'Welcome Bonus upto 500 CAD',
                    freeSpin: '50 Free Spins',
                    game: 'Book of Dead',
                    bonus: '100.00 CAD',
                    wager: '3500.00 CAD / 7000.00 CAD',
                    isComplete: 1,
                    expireOn: '10-02-2022 - 12:00 PM',
                },
                {
                    title: 'Welcome Bonus upto 500 CAD',
                    freeSpin: '50 Free Spins',
                    game: 'Book of Dead',
                    bonus: '100.00 CAD',
                    wager: '3500.00 CAD / 7000.00 CAD',
                    isComplete: 1,
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
