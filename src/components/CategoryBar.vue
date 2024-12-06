<script setup lang="ts">
import CategoryBarItem from './CategoryBarItem.vue';
interface Props {
    name: string;
    icon: string;
    active: boolean;
}
const props = defineProps({
    categories: {
        type: Array as PropType<Props[]>,
        required: true,
    },
    selectCategory: {
        type: Function,
        required: true,
    },
});
</script>

<template>
    <div :class="[`rounded-lg w-full sm:grid grid-cols-${categories?.length} items-center justify-start`]">
        <CategoryBarItem
            v-for="category in categories"
            :key="category.icon"
            v-bind="category"
            @click="()=>props.selectCategory(category?.name)"
        />
    </div>
</template>
