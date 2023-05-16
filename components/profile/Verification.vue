<template>
    <div
        style="background: #383d47"
        class="inset-0 rounded-md w-full px-7 py-6"
    >
        <div
            style="color: rgba(152, 154, 159, 0.5)"
            class="flex items-center justify-start pb-3"
        >
            <span
                class="font-medium text-xs cursor-pointer"
                @click="
                    () => {
                        step = 1;
                    }
                "
                >STEP 1 <q-img class="w-2 mx-3" src="@/assets/imgs/right.png"
            /></span>
            <span
                class="font-medium text-xs cursor-pointer"
                @click="
                    () => {
                        step = 2;
                    }
                "
                >STEP 2 <q-img class="w-2 mx-3" src="@/assets/imgs/right.png"
            /></span>
            <span
                class="font-medium text-xs cursor-pointer"
                @click="
                    () => {
                        step = 3;
                    }
                "
                >STEP 3</span
            >
        </div>
        <q-stepper v-model="step" ref="stepper" color="primary" animated>
            <q-step :name="1" title="STEP 1" :done="step > 1">
                <div>
                    <p class="text-base font-bold pb-2">Identity</p>
                    <p class="text-sm font-medium">
                        Passport, driving license, or official government issued
                        id card. Must be a passport, driving license, or another
                        official government-issued id card both the front and
                        back of the id card must be received.
                    </p>
                    <br />
                    <p class="text-sm font-medium" style="color: #11a449">
                        The document must be in date and not expired<br />
                        The document must be showing the expiry date<br />
                        The document must show your unaltered photo<br />
                        The document must show your date of birth<br />
                        Watermarks on documents must be visible<br />
                    </p>
                </div>
            </q-step>

            <q-step :name="2" title="STEP 2" icon="left" :done="step > 2">
                <div>
                    <p class="text-base font-bold pb-2">Address</p>
                    <p class="text-sm font-medium">
                        Utility bill, phone bill, or bank statement displaying your name and address in full.
                    </p>
                    <br />
                    <p class="text-sm font-medium" style="color: #11a449">
                        Must be either a utility bill, mobile phone bill, or bank statement (copy of paper statement)<br />
                        Must show your full address including any post/zip codes<br />
                        Must show your full name<br />
                        Must display the official logo of issuing company<br />
                        Must be dated within the last 90 days<br />
                        Must be able to see the full document<br />
                    </p>
                </div>
            </q-step>

            <q-step :name="3" title="STEP 3" :done="step > 3">
                <div>
                    <p class="text-base font-bold pb-2">Payment</p>
                    <p class="text-sm font-medium">
                        Screenshot or photo from an online bank, bank statement, skrill page, etc. Showing the deposit amount.
                    </p>
                    <br />
                    <p class="text-sm font-medium" style="color: #11a449">
                        Must display the company name<br />
                        Must display the official logo of issuing company<br />
                        Must display the amount paid<br />
                        Must be able to see the full document<br />
                        If the screenshot then must be able to see the full screen of the device<br />
                    </p>
                </div>
            </q-step>
        </q-stepper>
        <div>
            <q-select
                class="w-1/2 mt-4"
                standout="text-white"
                placeholder="🖺Document Type"
                v-model="model"
                :options="options"
                :dense="true"
            />
            <q-btn-group rounded class="mt-4" style="background-color: #2b303c">
                <div
                    class="q-pl-md q-pt-sm q-pb-sm q-pr-md rounded-3xl flex justify-start items-center cursor-pointer"
                    style="background-color: #383d47"
                >
                    <q-icon name="upload" class="pr-1" />
                    Choose File
                </div>
                <div
                    class="q-pl-md q-pt-sm q-pb-sm q-pr-md flex justify-start items-center cursor-pointer"
                >
                    No file chosen
                </div>
            </q-btn-group>
        </div>
    </div>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue';
import { QInput } from 'quasar';

const options = ['Doc1', 'Doc2', 'Doc3', 'Doc4', 'Doc5'];
const model = ref(null);
const step = ref(1);

// Define any other variables or functions needed for this component
</script>
