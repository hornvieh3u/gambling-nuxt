<template>
    <div
        style="background: #383d47"
        class="inset-0 rounded-md w-full px-7 py-6"
    >
        <p class="text-base font-bold pb-2">Personal</p>
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-4">
            <q-input
                class="w-full"
                type="text"
                placeholder="First name"
                standout
                v-model="person.firstName.value"
                :dense="true"
            >
                <template v-slot:prepend>
                    <q-icon name="person" />
                </template>
            </q-input>
            <q-input
                class="w-full"
                type="text"
                placeholder="Last name"
                standout
                v-model="person.firstName.value"
                :dense="true"
            >
                <template v-slot:prepend>
                    <q-icon name="person" />
                </template>
            </q-input>
            <q-input
                class="w-full"
                type="email"
                placeholder="Email"
                standout
                v-model="person.firstName.value"
                :dense="true"
            >
                <template v-slot:prepend> @ </template>
            </q-input>
            <q-input
                class="w-full"
                type="number"
                placeholder="Phone number"
                standout
                v-model="person.firstName.value"
                :dense="true"
            >
                <template v-slot:prepend>
                    <q-icon name="phone" />
                </template>
            </q-input>
            <q-input
                class="w-full"
                type="text"
                placeholder="Gender"
                standout
                v-model="person.firstName.value"
                :dense="true"
            >
                <template v-slot:prepend>
                    <q-icon name="person" />
                </template>
            </q-input>
            <q-input
                class="w-full"
                type="date"
                placeholder="Date of birth"
                standout
                v-model="person.firstName.value"
                :dense="true"
            >
                <template v-slot:prepend>
                    <q-icon name="event" />
                </template>
            </q-input>
            <q-input
                class="w-full"
                type="text"
                placeholder="Street address"
                standout
                v-model="person.firstName.value"
                :dense="true"
            >
                <template v-slot:prepend>
                    <q-icon name="home" />
                </template>
            </q-input>
            <q-input
                class="w-full"
                type="text"
                placeholder="State"
                standout
                v-model="person.firstName.value"
                :dense="true"
            >
                <template v-slot:prepend>
                    <q-icon name="state" />
                </template>
            </q-input>
            <q-input
                class="w-full"
                type="text"
                placeholder="City"
                standout
                v-model="person.firstName.value"
                :dense="true"
            >
                <template v-slot:prepend>
                    <q-icon name="location" />
                </template>
            </q-input>
            <q-input
                class="w-full"
                type="text"
                placeholder="Country"
                standout
                v-model="person.firstName.value"
                :dense="true"
            >
                <template v-slot:prepend>
                    <q-icon name="global" />
                </template>
            </q-input>
            <div>
                <p class="text-base font-bold pb-2">Personal</p>
                <q-input
                    class="w-full pt-4"
                    type="password"
                    placeholder="Old password"
                    standout
                    v-model="person.firstName.value"
                    :dense="true"
                >
                    <template v-slot:prepend>
                        <q-icon name="lock" />
                    </template>
                </q-input>
                <q-input
                    class="w-full pt-4"
                    type="password"
                    placeholder="New password"
                    standout
                    v-model="person.firstName.value"
                    :dense="true"
                >
                    <template v-slot:prepend>
                        <q-icon name="lock" />
                    </template>
                </q-input>
                <p class="pt-4 text-sm">Forgot your password? Reset the password</p>
            </div>
        </div>
        <q-btn class="mt-4 px-8" color="primary" label="Save" />
    </div>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue';
import { QInput } from 'quasar';

const person = {
    firstName: ref(''),
    lastName: ref(''),
};

// Define any other variables or functions needed for this component
</script>
