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
                            <q-td key="index" :props="props">
                                {{ props.rowIndex + 1 }}
                            </q-td>
                            <q-td key="amount" :props="props">
                                {{ props.row.amount }}
                            </q-td>
                            <q-td key="currency" :props="props">
                                {{ props.row.currency }}
                            </q-td>
                            <q-td
                                class="text-center"
                                key="provider"
                                :props="props"
                            >
                                <img
                                    class="w-5 h-5"
                                    :src="`/tmp/${props.row.provider}.png`"
                                    spinner-color="primary"
                                />
                            </q-td>
                            <q-td key="transactionId" :props="props">
                                {{ props.row.transactionId }}
                            </q-td>
                            <q-td key="createdAt" :props="props">
                                {{ props.row.createdAt }}
                            </q-td>
                            <q-td key="status" :props="props">
                                <q-btn
                                    class="w-20"
                                    v-if="props.row.status == 0"
                                    color="primary"
                                    size="xs"
                                    label="pending"
                                />
                                <q-btn
                                    class="w-20"
                                    v-if="props.row.status == 1"
                                    color="positive"
                                    size="xs"
                                    label="Completed"
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
                    amount: '$20.00',
                    currency: 'CAD',
                    provider: 'visa',
                    transactionId: '70824ef76efa1b6b6c5c',
                    createdAt: '10-02-2023 - 08:26 AM',
                    status: 1,
                },
                {
                    amount: '$20.00',
                    currency: 'CAD',
                    provider: 'master-card',
                    transactionId: '70824ef76efa1b6b6c5c',
                    createdAt: '10-02-2023 - 08:26 AM',
                    status: 0,
                },
                {
                    amount: '$20.00',
                    currency: 'CAD',
                    provider: 'interac',
                    transactionId: '70824ef76efa1b6b6c5c',
                    createdAt: '10-02-2023 - 08:26 AM',
                    status: 1,
                },
                {
                    amount: '$20.00',
                    currency: 'CAD',
                    provider: 'visa',
                    transactionId: '70824ef76efa1b6b6c5c',
                    createdAt: '10-02-2023 - 08:26 AM',
                    status: 1,
                },
                {
                    amount: '$20.00',
                    currency: 'CAD',
                    provider: 'master-card',
                    transactionId: '70824ef76efa1b6b6c5c',
                    createdAt: '10-02-2023 - 08:26 AM',
                    status: 0,
                },
                {
                    amount: '$20.00',
                    currency: 'CAD',
                    provider: 'interac',
                    transactionId: '70824ef76efa1b6b6c5c',
                    createdAt: '10-02-2023 - 08:26 AM',
                    status: 1,
                },
                {
                    amount: '$20.00',
                    currency: 'CAD',
                    provider: 'visa',
                    transactionId: '70824ef76efa1b6b6c5c',
                    createdAt: '10-02-2023 - 08:26 AM',
                    status: 1,
                },
                {
                    amount: '$20.00',
                    currency: 'CAD',
                    provider: 'master-card',
                    transactionId: '70824ef76efa1b6b6c5c',
                    createdAt: '10-02-2023 - 08:26 AM',
                    status: 0,
                },
                {
                    amount: '$20.00',
                    currency: 'CAD',
                    provider: 'interac',
                    transactionId: '70824ef76efa1b6b6c5c',
                    createdAt: '10-02-2023 - 08:26 AM',
                    status: 1,
                },
            ],
            cols: [
                {
                    name: 'index',
                    align: 'left',
                    label: 'S.No',
                },
                {
                    name: 'amount',
                    required: true,
                    label: 'Amount',
                    align: 'left',
                    field: 'amount',
                },
                {
                    name: 'currency',
                    align: 'left',
                    label: 'Currency',
                    field: 'currency',
                },
                {
                    name: 'provider',
                    align: 'center',
                    label: 'Provider',
                    field: 'provider',
                },
                {
                    name: 'transactionId',
                    align: 'left',
                    label: 'Transaction ID',
                    field: 'transactionId',
                },
                {
                    name: 'createdAt',
                    align: 'left',
                    label: 'Created At',
                    field: 'createdAt',
                },
                {
                    name: 'status',
                    align: 'center',
                    label: 'Status',
                    field: 'status',
                },
            ],
        };
    },
};
</script>
