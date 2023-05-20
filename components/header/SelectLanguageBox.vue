<script setup lang="ts">
function onItemClick() {
    console.log('Clicked on an Item');
}

const prifileList = [
    {
        name: 'English',
        icon: 'en',
    },
    {
        name: 'Spanish',
        icon: 'es',
    },
    {
        name: 'Portuguese',
        icon: 'pt',
    },
    {
        name: 'French',
        icon: 'fr',
    },
    {
        name: 'Serbian',
        icon: 'sr',
    },
];
</script>

<template>
    <q-btn-dropdown class="btn-none" label-class="d-flex align-items-center">
        <template v-slot:label>
            <img
                class="w-8 pr-3"
                :src="`/imgs/header/en_large.png`"
                alt="profile"
            />
            en
        </template>

        <q-list>
            <q-item
                v-for="profile in prifileList"
                clickable
                v-close-popup
                @click="onItemClick"
            >
                <q-item-section>
                    <q-item-label>
                        <div class="flex items-center justify-start">
                            <img
                                class="w-3"
                                :src="`/imgs/header/${profile.icon}.png`"
                                alt="profile"
                            />
                            <p class="text-xs pl-1">{{ profile.name }}</p>
                        </div>
                    </q-item-label>
                </q-item-section>
            </q-item>
        </q-list>
    </q-btn-dropdown>
</template>
