<template>
    <div class="q-pa-md" style="max-width: 300px">
        <div class="q-gutter-md">
            <q-select
                style="border: none"
                v-model="model"
                :options="options"
                dense
                no-style
            />
        </div>
    </div>
</template>

<script>
import { ref } from 'vue';

export default {
    setup() {
        return {
            model: ref(null),

            options: [
                {
                    label: 'English',
                    value: 'English',
                    description: 'Search engine',
                    category: '1',
                },
                {
                    label: 'Spanish',
                    value: 'Spanish',
                    description: 'Social media',
                    category: '1',
                },
                {
                    label: 'Portuguese',
                    value: 'Portuguese',
                    description: 'Quick updates',
                    category: '2',
                },
                {
                    label: 'French',
                    value: 'French',
                    description: 'iStuff',
                    category: '2',
                },
                {
                    label: 'Serbian',
                    value: 'Serbian',
                    description: 'Databases',
                    category: '3',
                },
            ],
        };
    },
};
</script>
