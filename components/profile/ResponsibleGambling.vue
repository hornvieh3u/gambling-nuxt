<template>
    <div class="inset-0 rounded-md w-full px-7 pt-6 pb-10 relative">
        <div
            style="background: #383d47"
            class="absolute w-full h-full opacity-50 top-0 left-0 rounded-md"
        ></div>
        <div class="relative">
            <div class="flex items-center justify-between pb-4">
                <p class="text-base font-bold">Responsible Gambling</p>
                <q-toggle
                    size="xs"
                    v-model="shape"
                    val="xs"
                    leftLabel
                    label="Advanced Mode"
                />
            </div>
            <div class="grid grid-cols-1 lg:grid-cols-3 gap-4">
                <div
                    v-for="limit in limits"
                    :limit="limit"
                    style="background: #494e5d"
                    class="py-4 px-2 text-center rounded-md"
                >
                    <p class="text-base pb-3 font-bold">{{ limit?.title }}</p>
                    <p
                        style="min-height: 86px"
                        class="text-xs font-medium pb-3"
                    >
                        {{ limit?.content }}
                    </p>
                    <q-btn class="!text-base" color="primary" label="Add New" />
                </div>
            </div>
            <div class="grid grid-cols-1 gap-4 pt-4">
                <div style="background: #494e5d" class="py-4 px-2 rounded-md">
                    <p class="text-base pb-3 font-bold">Session Limit</p>
                    <p class="text-xs font-medium pb-3">
                        You can limit the amount of time spent gambling. The
                        restriction takes effect instantly. If you hit the
                        limit, you will be automatically logged out of your
                        account.
                    </p>
                    <div class="flex items-center justify-start">
                        <q-input
                            class="w-1/2 pr-2"
                            filled
                            v-model="number"
                            type="number"
                            suffix="Min"
                            :dense="true"
                        >
                        </q-input>
                        <q-btn color="primary" label="SET" />
                    </div>
                </div>
                <div style="background: #494e5d" class="py-4 px-2 rounded-md">
                    <p class="text-base pb-3 font-bold">Cooling Off</p>
                    <p class="text-xs font-medium pb-3">
                        Feel the need to stay away from the casino for some
                        time? You can set a cooling-off limit for a certain
                        period of time. The restriction takes effect instantly.
                        You won’t be able to make deposits and play during the
                        specified period, also you will be excluded from all
                        advertising offers. After the set period expires, you’ll
                        receive a notification email saying your account is
                        active again.
                    </p>
                    <div class="flex items-center justify-start">
                        <q-select
                            class="w-1/2 pr-2"
                            standout="text-white"
                            placeholder="🖺Document Type"
                            v-model="shape"
                            :options="[]"
                            :dense="true"
                        />
                        <q-btn color="primary" label="SET" />
                    </div>
                </div>
                <div style="background: #494e5d" class="py-4 px-2 rounded-md">
                    <p class="text-base pb-3 font-bold">Self Exclusion</p>
                    <p class="text-xs font-medium pb-3">
                        Feel the need to block access to your account? You can
                        set a self-exclusion limit for a definite or an
                        indefinite period of time. The restriction takes effect
                        instantly. During the set period you will now be able to
                        log into your account. To be excluded from gambling on
                        our site for an indefinite period of time. please,
                        contact our support team via Live-Chat
                    </p>
                    <div class="flex items-center justify-start">
                        <q-select
                            class="w-1/2 pr-2"
                            standout="text-white"
                            placeholder="🖺Document Type"
                            v-model="shape"
                            :options="[]"
                            :dense="true"
                        />
                        <q-btn color="primary" label="SET" />
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
const shape = ref(['']);
const number = ref(0);
const limits = [
    {
        title: 'Deposit Limits',
        content:
            'Your account can be set with deposit limits. This setting limits the amount you can deposit per day, week or month.',
    },
    {
        title: 'Loss Limits',
        content:
            'Your account can be set with loss limits. This setting limits the amount you can lose per  day, week or month.',
    },
    {
        title: 'Wager Limits',
        content:
            'Your account can be set with wager limits. This setting controls the amount of  money you can wager per day, week or month.',
    },
];
</script>
