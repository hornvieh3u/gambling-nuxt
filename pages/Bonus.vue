<script setup lang="ts">
import ActiveBonus from '~~/components/bonus/ActiveBonus.vue';
import AvailableBonus from '~~/components/bonus/AvailableBonus.vue';
import Activity from '~~/components/landingPage/Activity.vue';

const selectedItem = ref('Available Bonus');

const categories = computed(() => [
    {
        name: 'Available Bonus',
        icon: 'info',
        active: selectedItem.value === 'Available Bonus',
    },
    {
        name: 'Active Bonus',
        icon: 'check',
        active: selectedItem.value === 'Active Bonus',
    },
    {
        name: 'Free Spins',
        icon: 'game',
        active: selectedItem.value === 'Free Spins',
    },
    {
        name: 'Cash Back',
        icon: 'hands',
        active: selectedItem.value === 'Cash Back',
    },
    {
        name: 'Bonus History',
        icon: 'hands',
        active: selectedItem.value === 'Bonus History',
    },
]);

function selectCategory(val: string) {
    selectedItem.value = val;
}
</script>
<template>
    <q-page class="q-pl-lg">
        <div
            style="max-width: 1450px"
            class="w-full px-6 md:px-10 lg:px-14 py-8 m-auto"
        >
            <section class="main h-full px-4">
                <div>
                    <q-img
                        class="w-full"
                        src="@/assets/imgs/banner_bonus.png"
                    />
                </div>

                <div class="w-full py-4 flex items-center justify-center">
                    <p class="font-bold text-base">Bonus</p>
                    <div
                        class="mx-2"
                        style="width: 1px; height: 20px; background: #383d47"
                    ></div>
                    <div>
                        <CategoryBar
                            :selectCategory="selectCategory"
                            :categories.sync="categories"
                        />
                    </div>
                </div>
                <ActiveBonus v-if="selectedItem === 'Active Bonus'" />
                <AvailableBonus v-if="selectedItem === 'Available Bonus'" />
            </section>
            <section class="pt-8">
                <Activity />
            </section>
        </div>
    </q-page>
</template>
