
<template>
  <q-dialog
    v-model="store.state.isAvatarDiaolg"
    @hide="store.commit('handleOnAvatarDialog', false);"
  >
    <q-card style="width: 700px; max-width: 90vw" class="bg-gray-900 p-4">
        <q-card-section>
          <div class="relative">
            <p class="text-center text-lg font-bold">{{tran('Customize your profile Image', store.state.lang)}}</p>
            <div class="md:absolute md:right-0 md:top-5 flex flex-row items-center justify-center">
              <p class="text-sm font-semibold text-gray-500" :class="!genderToggle && 'text-blue'">{{tran('Male', store.state.lang)}}</p>
              <q-toggle class="p-0" v-model="genderToggle"/>
              <p class="text-sm font-semibold text-gray-500" :class="!!genderToggle && 'text-blue'">{{tran('Female', store.state.lang)}}</p>
            </div>
          </div>
        </q-card-section>
        <q-card-section>
        <div class="grid grid-cols-1 md:grid-cols-5 gap-0 md:gap-3">
          <div class="grid grid-cols-2 gap-2 md:grid-cols-1 md:col-span-2">
            <div class="square border-solid border-[3px] border-gray-400 rounded-xl">
              <AvatarItem class="rounded-lg" :data.sync="avatarProps" :mat.sync="avatarMat" :gender.sync="genderToggle"/>
            </div>
            <div>
              <div class="w-full my-2 hidden md:!block">
                <q-btn-group class="w-full grid grid-cols-8">
                  <q-btn @click="transform('moveup')" class="w-full p-0 border-gray-400 border-[1px] border-solid"><q-icon class="w-full" size="xs" name="arrow_upward"/></q-btn>
                  <q-btn @click="transform('movedown')" class="w-full p-0 border-gray-400 border-[1px] border-solid"><q-icon class="w-full" size="xs" name="arrow_downward"/></q-btn>
                  <q-btn @click="transform('moveleft')" class="w-full p-0 border-gray-400 border-[1px] border-solid"><q-icon class="w-full" size="xs" name="arrow_back"/></q-btn>
                  <q-btn @click="transform('moveright')" class="w-full p-0 border-gray-400 border-[1px] border-solid"><q-icon class="w-full" size="xs" name="arrow_forward"/></q-btn>
                  <q-btn @click="transform('zoomin')" class="w-full p-0 border-gray-400 border-[1px] border-solid"><q-icon class="w-full" size="xs" name="zoom_out"/></q-btn>
                  <q-btn @click="transform('zoomout')" class="w-full p-0 border-gray-400 border-[1px] border-solid"><q-icon class="w-full" size="xs" name="zoom_in"/></q-btn>
                  <q-btn @click="transform('rotateleft')" class="w-full p-0 border-gray-400 border-[1px] border-solid"><q-icon class="w-full" size="xs" name="undo"/></q-btn>
                  <q-btn @click="transform('rotateright')" class="w-full p-0 border-gray-400 border-[1px] border-solid"><q-icon class="w-full" size="xs" name="redo"/></q-btn>
                </q-btn-group>
              </div>
              <div class="relative w-full">
                <q-color v-if="colorPickerhandle" v-model="customColor" no-header-tabs class="absolute top-full right-0 mt-3 md:ml-2 md:mt-0 md:-translate-y-full md:translate-x-full bg-gray-900 z-[10]" @hide="onColorPicker()"/>
                <div class="w-full" v-for="tab in tabSet">
                  <div class="relative w-full flex flex-row flex-wrap" v-if="tab == subTitle">
                    <div class="!w-1/5 md:!w-1/6 square border-gray-800 border-[2px] border-solid" :class="(customColor == color)&&'border-red-700 border-[2px]'" @click="selectColor(color)" v-for="color in avatarData[shapeName(tab)].colors" :style="{backgroundColor: color}"></div>
                    <div class="!w-1/5 md:!w-1/6 square md:hidden"></div>
                    <div class="hidden md:!block !absolute right-0 bottom-0 !w-1/5 md:!w-1/6 square border-gray-900 border-[2px] border-solid">
                      <q-btn class="w-full h-full p-0 m-0 rounded-full" :class="colorPickerhandle&&'bg-blue-500'" :style="{backgroundColor: customColor}" flat @click="onColorPicker"><q-icon class="w-full h-full invert" name="tune"/></q-btn>
                    </div>
                    <div class="md:hidden !absolute right-0 bottom-0 !w-1/5 md:!w-1/6 square border-gray-900 border-[2px] border-solid">
                      <q-btn class="w-full h-full p-0 m-0" size="sm" :class="colorPickerhandle&&'bg-blue-500'" :style="{backgroundColor: customColor}" flat @click="onColorPicker"></q-btn>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="w-full my-2 col-span-2 md:hidden">
              <q-btn-group class="w-full grid grid-cols-8">
                <q-btn @click="transform('moveup')" class="w-full p-0 border-gray-400 border-[1px] border-solid"><q-icon class="w-full" size="xs" name="arrow_upward"/></q-btn>
                <q-btn @click="transform('movedown')" class="w-full p-0 border-gray-400 border-[1px] border-solid"><q-icon class="w-full" size="xs" name="arrow_downward"/></q-btn>
                <q-btn @click="transform('moveleft')" class="w-full p-0 border-gray-400 border-[1px] border-solid"><q-icon class="w-full" size="xs" name="arrow_back"/></q-btn>
                <q-btn @click="transform('moveright')" class="w-full p-0 border-gray-400 border-[1px] border-solid"><q-icon class="w-full" size="xs" name="arrow_forward"/></q-btn>
                <q-btn @click="transform('zoomin')" class="w-full p-0 border-gray-400 border-[1px] border-solid"><q-icon class="w-full" size="xs" name="zoom_out"/></q-btn>
                <q-btn @click="transform('zoomout')" class="w-full p-0 border-gray-400 border-[1px] border-solid"><q-icon class="w-full" size="xs" name="zoom_in"/></q-btn>
                <q-btn @click="transform('rotateleft')" class="w-full p-0 border-gray-400 border-[1px] border-solid"><q-icon class="w-full" size="xs" name="undo"/></q-btn>
                <q-btn @click="transform('rotateright')" class="w-full p-0 border-gray-400 border-[1px] border-solid"><q-icon class="w-full" size="xs" name="redo"/></q-btn>
              </q-btn-group>
            </div>
          </div>
          <div class="relative col-span-3">
            <div class="w-full mt-2 md:mt-0 mb-1">
              <q-btn-toggle
                class="w-full !grid grid-cols-5"
                v-model="title"
                no-caps 
                text-color="white"
                toggle-color="primary"
                :options="[
                  {label: tran('Face', store.state.lang), value: 'face'},
                  {label: tran('Eyes', store.state.lang), value: 'eyes'},
                  {label: tran('Hair', store.state.lang), value: 'hair'},
                  {label: tran('Cloth', store.state.lang), value: 'clothes'},
                  {label: tran('Back', store.state.lang), value: 'backs'}
                ]"
              />
            </div>
            <div class="w-full mb-2">
              <q-btn-toggle
                v-if="title == 'face'"
                class="w-full !grid grid-cols-4"
                v-model="subTitle"
                text-color="white"
                no-caps 
                toggle-color="primary"
                :options="[
                  {label: tran('Shape', store.state.lang), value: 'face'},
                  {label: tran('Mouth', store.state.lang), value: 'mouth'},
                  {label: tran('Nose', store.state.lang), value: 'nose'},
                  {label: tran('Ears', store.state.lang), value: 'ears'}
                ]"
              />
              <q-btn-toggle
                v-if="title == 'eyes'"
                class="w-full !grid grid-cols-4"
                v-model="subTitle"
                text-color="white"
                no-caps 
                toggle-color="primary"
                :options="[
                  {label: tran('Shape', store.state.lang), value: 'eyes'},
                  {label: tran('Iris', store.state.lang), value: 'iris'},
                  {label: tran('Brows', store.state.lang), value: 'brows'},
                  {label: tran('Glasses', store.state.lang), value: 'glasses'}
                ]"
              />
              <q-btn-toggle
                v-if="title == 'hair' && genderToggle != true"
                class="w-full !grid grid-cols-3"
                v-model="subTitle"
                text-color="white"
                no-caps 
                toggle-color="primary"
                :options="[
                  {label: tran('Head', store.state.lang), value: 'hair'},
                  {label: tran('Mustache', store.state.lang), value: 'mustache'},
                  {label: tran('Beard', store.state.lang), value: 'beard'}
                ]"
              />
              <q-btn-toggle
                v-if="title == 'hair' && genderToggle == true"
                class="w-full !grid grid-cols-1"
                v-model="subTitle"
                text-color="white"
                no-caps 
                toggle-color="primary"
                :options="[
                  {label: tran('Basic', store.state.lang), value: 'hair'}
                ]"
              />
              <q-btn-toggle
                v-if="title == 'clothes'"
                class="w-full !grid grid-cols-1"
                v-model="subTitle"
                text-color="white"
                no-caps 
                toggle-color="primary"
                :options="[
                  {label: tran('Basic', store.state.lang), value: 'clothes'}
                ]"
              />
              <q-btn-toggle
                v-if="title == 'backs'"
                class="w-full !grid grid-cols-1"
                v-model="subTitle"
                text-color="white"
                no-caps 
                toggle-color="primary"
                :options="[
                  {label: tran('Basic', store.state.lang), value: 'backs'}
                ]"
              />
            </div>
            <div class="w-full flex flex-row flew-wrap mb-2">
              <div class="!w-1/5 bg-white border-[2px] border-solid border-gray-900 square" @click="selectShape(index)" :class="(shapeIndex==index)&&'border-[3px] border-red-700'" v-for="(shape, index) in avatarData[shapeName(subTitle)].shapes">
                <ShapeItem :shape.sync="shape" :type.sync="subTitle" :index.sync="index" :mat.sync="avatarData[shapeName(subTitle)].mat"/>
              </div>
            </div>
            <div class="w-full my-2 pb-[40px]">
              <q-btn-group class="w-full">
                <q-btn class="w-full p-0 border-gray-400 border-[1px] border-solid" @click="transform(action)" v-for="action in avatarData[shapeName(subTitle)].controls">
                  <q-icon v-if="svgIcon[action].toLowerCase()!=''" :name="svgIcon[action].toLowerCase()"/>
                  <svg v-if="action == 'tightly'" class="h-[21px] mx-auto" xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 16 16" preserveAspectRatio="xMinYMin meet"><path class="svga-control-icon-path" d="M12.594,8l3.241,3.205c0.22,0.216,0.22,0.567,0,0.783l-0.858,0.85c-0.219,0.217-0.575,0.217-0.795,0L9.683,8.393c-0.221-0.216-0.221-0.568,0-0.785l4.499-4.445c0.22-0.217,0.576-0.217,0.795,0l0.858,0.849c0.22,0.217,0.22,0.568,0,0.785L12.594,8z M0.164,11.205c-0.219,0.216-0.219,0.567,0,0.783l0.859,0.85c0.221,0.217,0.575,0.217,0.795,0l4.499-4.445c0.22-0.217,0.22-0.568,0-0.785L1.818,3.163c-0.221-0.217-0.576-0.217-0.795,0L0.164,4.012c-0.219,0.217-0.219,0.568,0,0.785L3.405,8L0.164,11.205z" data-colored="true" fill="#ffffff"></path></svg>
                  <svg v-if="action == 'eb1'" class="w-2/3 mx-auto" xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 16 16" preserveAspectRatio="xMinYMin meet"><path class="svga-control-icon-path" d="M5.453,8.316C5.129,7.499,4.146,6.352,1.492,5.521C1.087,5.393,0.868,4.982,1.003,4.602c0.135-0.379,0.572-0.586,0.98-0.458c2.996,0.938,4.917,2.505,5.015,4.088c0.026,0.4-0.3,0.767-0.728,0.767C5.875,8.998,5.531,8.514,5.453,8.316z M9.021,8.313C8.66,8.077,8.593,7.626,8.841,7.301c0.983-1.288,3.5-1.651,6.569-0.948c0.415,0.095,0.669,0.489,0.567,0.877c-0.102,0.39-0.518,0.628-0.937,0.533c-2.718-0.623-4.315-0.188-4.939,0.282C9.908,8.191,9.5,8.625,9.021,8.313z" data-colored="true" fill="#ffffff"></path></svg>
                  <svg v-if="action == 'eb2'" class="w-2/3 mx-auto" xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 16 16" preserveAspectRatio="xMinYMin meet"><path class="svga-control-icon-path" d="M9.729,8.998c-0.428,0-0.753-0.366-0.728-0.767c0.098-1.583,2.02-3.149,5.016-4.088c0.407-0.128,0.845,0.079,0.979,0.458c0.136,0.38-0.083,0.792-0.488,0.919c-2.654,0.831-3.638,1.978-3.961,2.796C10.469,8.514,10.125,8.998,9.729,8.998z M5.898,8.045C5.274,7.576,3.677,7.141,0.959,7.764C0.54,7.858,0.124,7.62,0.022,7.23C-0.079,6.842,0.175,6.448,0.59,6.353c3.069-0.703,5.586-0.34,6.569,0.948c0.248,0.325,0.181,0.776-0.18,1.012C6.5,8.625,6.092,8.191,5.898,8.045z" data-colored="true" fill="#ffffff"></path></svg>
                  <svg v-if="action == 'eb3'" class="w-2/3 mx-auto" xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 16 16" preserveAspectRatio="xMinYMin meet"><path class="svga-control-icon-path" d="M5.453,8.316C5.129,7.499,4.146,6.352,1.492,5.521C1.087,5.393,0.868,4.982,1.003,4.602c0.135-0.379,0.572-0.586,0.98-0.458c2.996,0.938,4.917,2.505,5.015,4.088c0.026,0.4-0.3,0.767-0.728,0.767C5.875,8.998,5.531,8.514,5.453,8.316z M9.729,8.998c-0.428,0-0.753-0.366-0.728-0.767c0.098-1.583,2.02-3.149,5.016-4.088c0.407-0.128,0.845,0.079,0.979,0.458c0.136,0.38-0.083,0.792-0.488,0.919c-2.654,0.831-3.638,1.978-3.961,2.796C10.469,8.514,10.125,8.998,9.729,8.998z" data-colored="true" fill="#ffffff"></path></svg>
                  <svg v-if="action == 'eb4'" class="w-2/3 mx-auto" xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 16 16" preserveAspectRatio="xMinYMin meet"><path class="svga-control-icon-path" d="M5.728,6.662C4.873,6.458,3.369,6.605,1.166,8.303C0.829,8.562,0.367,8.506,0.133,8.176C-0.1,7.848-0.019,7.371,0.32,7.111C2.807,5.195,5.192,4.52,6.545,5.348c0.343,0.208,0.456,0.685,0.211,1.036C6.528,6.708,5.935,6.711,5.728,6.662z M9.244,6.383C8.999,6.033,9.111,5.556,9.455,5.348c1.353-0.828,3.737-0.152,6.225,1.764c0.339,0.26,0.421,0.737,0.187,1.065c-0.233,0.33-0.695,0.386-1.032,0.127c-2.203-1.698-3.707-1.845-4.563-1.641C10.065,6.712,9.471,6.708,9.244,6.383z" data-colored="true" fill="#ffffff"></path></svg>
                </q-btn>
              </q-btn-group>
            </div>
            <div class="absolute bottom-0 w-full">
              <q-btn-group class="w-full grid grid-cols-3">
                <q-btn class="w-full p-0 border-gray-400 border-[1px] border-solid" :label="tran('random', store.state.lang)" @click="randomInit"></q-btn>
                <q-btn class="w-full p-0 border-gray-400 border-[1px] border-solid" :label="tran('reset', store.state.lang)" @click="init"></q-btn>
                <q-btn class="w-full p-0 border-gray-400 border-[1px] border-solid" :label="tran('save', store.state.lang)" @click="save"></q-btn>
              </q-btn-group>
            </div>
          </div>
        </div>
      </q-card-section>
    </q-card>
  </q-dialog>
</template>
<script setup lang="ts">
import {ref, onBeforeMount} from "vue";
import { useStore } from "vuex";
import { useRouter } from "vue-router";
import { tran } from "~~/utils/translation";
import svgIcon from "./svgIcon.json";
import ShapeItem from "./ShapeItem.vue";
import AvatarItem from "./AvatarItem.vue";
import {updateAvatar} from '~~/action/profile';
import femaleData from './femaleAvatar.json';
import maleData from './maleAvatar.json';

const store = useStore();
const router = useRouter();

let tabSet=['face','mouth','nose','ears','eyes','iris','brows','glasses','hair','clothes','backs'];
const customColor=ref('#ffffff');
const colorPickerhandle=ref(false);
const title=ref('face');
const subTitle=ref('face');
const shapeIndex=ref(0);
const avatarProps=ref({});
const avatarMat=ref({});
const genderToggle = ref(true);
let avatarData=ref();

let avatarmat={
  updown: 0,
  leftright: 0,
  scaleupdown: 0,
  tightlywider:0,
  rotate:0
};
let matProps={
  updown: 0,
  leftright: 0,
  scaleupdown: 0,
  tightlywider:0,
  iris:0,
  rotate:0
};
let props={};

const init = () =>{
  props={};
  title.value="face";
  subTitle.value="face";
  avatarData.value = genderToggle.value ? {...femaleData} : {...maleData};
  customColor.value=avatarData.value.face.colors[0];
  Object.keys(avatarData.value).map(zone=>{
    if(zone=='hair')
      props = {...props, [zone]:{shapeIndex:1, color:avatarData.value[zone].colors[0], mat:matProps}};
    else
      props = {...props, [zone]:{shapeIndex:0, color:avatarData.value[zone].colors[0], mat:matProps}};
  });
  avatarProps.value=props;  
  avatarMat.value = {human: {...avatarmat, scaleupdown:-4}, head: avatarmat};
}
const randomInit = () => {
  tabSet.map(zone=>{
      if(zone=='hair'){
        props = {...props, hair:{shapeIndex: props['face'].shapeIndex, color:avatarData.value[shapeName(zone)].colors[0], mat: matProps}};
      }
      else{
        let zoneShapeRandIndex = Math.floor(avatarData.value[shapeName(zone)].shapes.length*Math.random());
        props = {...props, [shapeName(zone)]:{shapeIndex:zoneShapeRandIndex, color:avatarData.value[shapeName(zone)].colors[0], mat:matProps}};
        if(["ears","eyes","iris","brows"].includes(zone)){
          props = {...props, [`${zone}Left`]:{shapeIndex:zoneShapeRandIndex, color:avatarData.value[shapeName(zone)].colors[0], mat:matProps}};
        }
      }
  });
  avatarProps.value=props;  
  avatarMat.value = {human: {...avatarmat, scaleupdown:-4}, head: avatarmat};
}

const save = () => {
  updateAvatar({props: avatarProps.value, mat:avatarMat.value, gender:genderToggle.value}, store, router);
  store.commit('handleOnAvatarDialog', false);
};

onBeforeMount(()=>{init()});

watch(()=>title.value,()=>{
    subTitle.value = title.value;
});

watch(()=>subTitle.value,()=>{
  let subt = subTitle.value;
  shapeIndex.value = props[shapeName(subt)].shapeIndex;
  customColor.value = props[shapeName(subt)].color;
});

watch(()=>customColor.value,()=>{
  setColor(customColor.value);
});

watch(()=>genderToggle.value,()=>{
  if(genderToggle.value)
    tabSet=['face','mouth','nose','ears','eyes','iris','brows','glasses','hair','clothes','backs'];
  else
    tabSet=['face','mouth','nose','ears','eyes','iris','brows','glasses','hair','clothes','backs','beard','mustache'];
  init();
});

const setColor = (color) => {  
  if('facenoseears'.includes(subTitle.value)){
    ['face','nose','ears','humanbody','chinshadow'].map(zone=>{
      let data = props[shapeName(zone)];
      data = {...data, color:color};
      props = {...props, [shapeName(zone)]:data};
      if(zone='ears'){
        data = props[`${zone}Left`];
        data = {...data, color:color};
        props = {...props, [`${zone}Left`]:data};
      }
    });
  }
  else{
    let data = props[shapeName(subTitle.value)];
    data = {...data, color:color};
    props = {...props, [shapeName(subTitle.value)]:data};
  }
  avatarProps.value=props;
}
const selectColor = (color) => {
  customColor.value=color;
};
const selectShape = (index) => {
  shapeIndex.value = index;
  if(['ears','eyes','iris','brows'].includes(subTitle.value)){
      if(subTitle.value == 'eyes'){
        let data = props['eyesbackLeft'];
        data = {...data, shapeIndex:index};
        props = {...props, [`eyesbackLeft`]:data};
        data = props['eyesbackRight'];
        data = {...data, shapeIndex:index};
        props = {...props, [`eyesbackRight`]:data};
      }
      let data = props[`${subTitle.value}Left`];
      data = {...data, shapeIndex:index};
      props = {...props, [`${subTitle.value}Left`]:data};
  }
  let data = props[shapeName(subTitle.value)];
  data = {...data, shapeIndex:index};
  props = {...props, [shapeName(subTitle.value)]:data};
  avatarProps.value=props;
};
const onColorPicker=()=>{
  colorPickerhandle.value=!colorPickerhandle.value;
}
const transform = (action) => {
  if(action=='up'){
    matProps = {...props[shapeName(subTitle.value)].mat};
    if(matProps.updown>-5){
      matProps.updown -=1;
      if(subTitle.value=='eyes'){
        ['eyes','iris','eyesback'].map(zone=>{
          let data = props[shapeName(zone)];
          data = {...data, mat: matProps};
          props = {...props, [shapeName(zone)]:data};
          data = props[`${zone}Left`];
          data = {...data, mat: matProps};
          props = {...props, [`${zone}Left`]:data};
        });
      }
      else{
        let data = props[shapeName(subTitle.value)];
        data = {...data, mat:matProps};
        props = {...props, [shapeName(subTitle.value)]:data};
        if(["ears","eyes","iris","brows"].includes(subTitle.value)){
          data = props[`${subTitle.value}Left`];
          data = {...data, mat:matProps};
          props = {...props, [`${subTitle.value}Left`]:data};
        }
      }
      avatarProps.value=props;
    }
  }
  else if(action=='down'){
    matProps = {...props[shapeName(subTitle.value)].mat};
    if(matProps.updown<5){
      matProps.updown +=1;
      if(subTitle.value=='eyes'){
        ['eyes','iris','eyesback'].map(zone=>{
          let data = props[shapeName(zone)];
          data = {...data, mat: matProps};
          props = {...props, [shapeName(zone)]:data};
          data = props[`${zone}Left`];
          data = {...data, mat: matProps};
          props = {...props, [`${zone}Left`]:data};
        });
      }
      else{
        let data = props[shapeName(subTitle.value)];
        data = {...data, mat:matProps};
        props = {...props, [shapeName(subTitle.value)]:data};
        if(["ears","eyes","iris","brows"].includes(subTitle.value)){
          data = props[`${subTitle.value}Left`];
          data = {...data, mat:matProps};
          props = {...props, [`${subTitle.value}Left`]:data};
        }
      }
      avatarProps.value=props;
    }
  }
  else if(action=='left'){
    matProps = {...props[shapeName(subTitle.value)].mat};
    if(matProps.leftright>-5){
      matProps.leftright -=1;      
      if(subTitle.value=='eyes'){
        ['eyes','iris','eyesback'].map(zone=>{
          let data = props[shapeName(zone)];
          data = {...data, mat: matProps};
          props = {...props, [shapeName(zone)]:data};
          data = props[`${zone}Left`];
          data = {...data, mat: matProps};
          props = {...props, [`${zone}Left`]:data};
        });
      }
      else{
        let data = props[shapeName(subTitle.value)];
        data = {...data, mat:matProps};
        props = {...props, [shapeName(subTitle.value)]:data};
        if(["ears","eyes","iris","brows"].includes(subTitle.value)){
          data = props[`${subTitle.value}Left`];
          data = {...data, mat:matProps};
          props = {...props, [`${subTitle.value}Left`]:data};
        }
      }
      avatarProps.value=props;
    }
  }
  else if(action=='right'){
    matProps = {...props[shapeName(subTitle.value)].mat};
    if(matProps.leftright<5){
      matProps.leftright +=1;
      if(subTitle.value=='eyes'){
        ['eyes','iris','eyesback'].map(zone=>{
          let data = props[shapeName(zone)];
          data = {...data, mat: matProps};
          props = {...props, [shapeName(zone)]:data};
          data = props[`${zone}Left`];
          data = {...data, mat: matProps};
          props = {...props, [`${zone}Left`]:data};
        });
      }
      else{
        let data = props[shapeName(subTitle.value)];
        data = {...data, mat:matProps};
        props = {...props, [shapeName(subTitle.value)]:data};
        if(["ears","eyes","iris","brows"].includes(subTitle.value)){
          data = props[`${subTitle.value}Left`];
          data = {...data, mat:matProps};
          props = {...props, [`${subTitle.value}Left`]:data};
        }
      }
      avatarProps.value=props;
    }
  }
  else if(action=='scaleup'){
    matProps = {...props[shapeName(subTitle.value)].mat};
    if(matProps.scaleupdown>-3){
      matProps.scaleupdown -=1;
      if(subTitle.value=='eyes'){
        ['eyes','iris','eyesback'].map(zone=>{
          let data = props[shapeName(zone)];  
          data = {...data, mat: matProps};
          props = {...props, [shapeName(zone)]:data};
          data = props[`${zone}Left`];
          data = {...data, mat: {...matProps, rotate:matProps.rotate*-1, tightlywider: matProps.tightlywider*-1}};
          props = {...props, [`${zone}Left`]:data};
        });
      }
      if(subTitle.value=='face'){
        ['face','hair'].map(zone=>{
          let data = props[shapeName(zone)];
          data = {...data, mat: matProps};
          props = {...props, [shapeName(zone)]:data};
        });
      }
      else{
        let data = props[shapeName(subTitle.value)];
        data = {...data, mat:matProps};
        props = {...props, [shapeName(subTitle.value)]:data};
        if(["ears","eyes","iris","brows"].includes(subTitle.value)){
          data = props[`${subTitle.value}Left`];
          data = {...data, mat: {...matProps, rotate:matProps.rotate*-1, tightlywider: matProps.tightlywider*-1}};
          props = {...props, [`${subTitle.value}Left`]:data};
        }
      }
      avatarProps.value=props;
    }
  }
  else if(action=='scaledown'){
    matProps = {...props[shapeName(subTitle.value)].mat};
    if(matProps.scaleupdown<3){
      matProps.scaleupdown +=1;
      if(subTitle.value=='eyes'){
        ['eyes','iris','eyesback'].map(zone=>{
          let data = props[shapeName(zone)];
          data = {...data, mat: matProps};
          props = {...props, [shapeName(zone)]:data};
          data = props[`${zone}Left`];
          data = {...data, mat: {...matProps, rotate:matProps.rotate*-1, tightlywider: matProps.tightlywider*-1}};
          props = {...props, [`${zone}Left`]:data};
        });
      }
      if(subTitle.value=='face'){
        ['face','hair'].map(zone=>{
          let data = props[shapeName(zone)];
          data = {...data, mat: matProps};
          props = {...props, [shapeName(zone)]:data};
        });
      }
      else{
        let data = props[shapeName(subTitle.value)];
        data = {...data, mat:matProps};
        props = {...props, [shapeName(subTitle.value)]:data};
        if(["ears","eyes","iris","brows"].includes(subTitle.value)){
          data = props[`${subTitle.value}Left`];
          data = {...data, mat: {...matProps, rotate:matProps.rotate*-1, tightlywider: matProps.tightlywider*-1}};
          props = {...props, [`${subTitle.value}Left`]:data};
        }
      }
      avatarProps.value=props;
    }
  }
  else if(action=='tightly'){
    matProps = {...props[shapeName(subTitle.value)].mat};
    if(matProps.tightlywider>-3){
      matProps.tightlywider -=1;      
      if(subTitle.value=='eyes'){
        ['eyes','iris','eyesback'].map(zone=>{
          let data = {...props[shapeName(zone)]};
          data = {...data, mat: matProps};
          props = {...props, [shapeName(zone)]:data};
          data = {...props[`${zone}Left`]};
          data = {...data, mat: {...matProps,tightlywider: matProps.tightlywider*-1}};
          props = {...props, [`${zone}Left`]:data};
        });
      }
      else{
        let data = {...props[shapeName(subTitle.value)]};
        data = {...data, mat:matProps};
        props = {...props, [shapeName(subTitle.value)]:data};
        if(["ears","eyes","iris","brows"].includes(subTitle.value)){
          data = {...props[`${subTitle.value}Left`]};
          data = {...data, mat: {...matProps,tightlywider: matProps.tightlywider*-1, rotate:matProps.rotate*-1}};
          props = {...props, [`${subTitle.value}Left`]:data};
        }
      }
      avatarProps.value=props;
    }
  }
  else if(action=='wider'){
    matProps = {...props[shapeName(subTitle.value)].mat};
    if(matProps.tightlywider<3){
      matProps.tightlywider +=1;      
      if(subTitle.value=='eyes'){
        ['eyes','iris','eyesback'].map(zone=>{
          let data = props[shapeName(zone)];
          data = {...data, mat: matProps};
          props = {...props, [shapeName(zone)]:data};
          data = props[`${zone}Left`];
          data = {...data, mat: {...matProps,tightlywider: matProps.tightlywider*-1}};
          props = {...props, [`${zone}Left`]:data};
        });
      }
      else{
        let data = props[shapeName(subTitle.value)];
        data = {...data, mat:matProps};
        props = {...props, [shapeName(subTitle.value)]:data};
        if(["ears","eyes","iris","brows"].includes(subTitle.value)){
          data = props[`${subTitle.value}Left`];
          data = {...data, mat: {...matProps,tightlywider: matProps.tightlywider*-1, rotate:matProps.rotate*-1}};
          props = {...props, [`${subTitle.value}Left`]:data};
        }
      }
      avatarProps.value=props;
    }
  }
  else if(action=='eb1'){
    matProps = {...props['browsLeft'].mat};
    matProps.rotate=-1;
    let data = props['browsLeft'];
    data = {...data, mat: matProps};
    props = {...props, ['browsLeft']:data};

    matProps = {...props['browsRight'].mat};
    matProps.rotate=0;
    data = props['browsRight'];
    data = {...data, mat: matProps};
    props = {...props, ['browsRight']:data};
    avatarProps.value=props;    
  }
  else if(action=='eb2'){
    matProps = {...props['browsRight'].mat};
    matProps.rotate=1;
    let data = props['browsRight'];
    data = {...data, mat: matProps};
    props = {...props, ['browsRight']:data};

    matProps = {...props['browsLeft'].mat};
    matProps.rotate=0;
    data = props['browsLeft'];
    data = {...data, mat: matProps};
    props = {...props, ['browsLeft']:data};
    avatarProps.value=props;
  }
  else if(action=='eb3'){
    matProps = {...props['browsLeft'].mat};
    matProps.rotate=-1;
    let data = props['browsLeft'];
    data = {...data, mat: matProps};
    props = {...props, ['browsLeft']:data};

    matProps = {...props['browsRight'].mat};
    matProps.rotate=1;
    data = props['browsRight'];
    data = {...data, mat: matProps};
    props = {...props, ['browsRight']:data};
    avatarProps.value=props;
  }
  else if(action=='eb4'){
    matProps = {...props['browsLeft'].mat};
    matProps.rotate=1;
    let data = props['browsLeft'];
    data = {...data, mat: matProps};
    props = {...props, ['browsLeft']:data};

    matProps = {...props['browsRight'].mat};
    matProps.rotate=-1;
    data = props['browsRight'];
    data = {...data, mat: matProps};
    props = {...props, ['browsRight']:data};
    avatarProps.value=props;
  }
  else if(action=='ebcancel'){
    matProps = {...props['browsLeft'].mat};
    matProps.rotate=0;
    let data = props['browsLeft'];
    data = {...data, mat: matProps};
    props = {...props, ['browsLeft']:data};

    matProps = {...props['browsRight'].mat};
    matProps.rotate=0;
    data = props['browsRight'];
    data = {...data, mat: matProps};
    props = {...props, ['browsRight']:data};
    avatarProps.value=props;
  }
  else if(action=='moveup'){
    let mat = {...avatarMat.value['human']};
    if(mat.updown>-5){
      mat = {...mat,updown: mat.updown-1};
      avatarMat.value = {...avatarMat.value, human: mat};
    }    
  }
  else if(action=='movedown'){
    let mat = {...avatarMat.value['human']};
    if(mat.updown<5){
      mat = {...mat,updown: mat.updown+1};
      avatarMat.value = {...avatarMat.value, human: mat};
    }
  }
  else if(action=='moveleft'){
    let mat = {...avatarMat.value['human']};
    if(mat.leftright>-5){
      mat = {...mat,leftright: mat.leftright-1};
      avatarMat.value = {...avatarMat.value, human: mat};
    }
  }
  else if(action=='moveright'){
    let mat = {...avatarMat.value['human']};
    if(mat.leftright<5){
      mat = {...mat,leftright: mat.leftright+1};
      avatarMat.value = {...avatarMat.value, human: mat};
    }
  }
  else if(action=='zoomout'){
    let mat = {...avatarMat.value['human']};
    if(mat.scaleupdown<-1){
      mat = {...mat,scaleupdown: mat.scaleupdown+1};
      avatarMat.value = {...avatarMat.value, human: mat};
    }
  }
  else if(action=='zoomin'){
    let mat = {...avatarMat.value['human']};
    
    if(mat.scaleupdown>-7){
      mat = {...mat,scaleupdown: mat.scaleupdown-1};
      avatarMat.value = {...avatarMat.value, human: mat};
    }
  }
  else if(action=='rotateleft'){
    let mat = {...avatarMat.value['head']};
    if(mat.rotate<1){
      mat = {...mat,rotate: mat.rotate+1};
      avatarMat.value = {...avatarMat.value, head: mat};
    }
  }
  else if(action=='rotateright'){
    let mat = {...avatarMat.value['head']};
    if(mat.rotate>-1){
      mat = {...mat,rotate: mat.rotate-1};
      avatarMat.value = {...avatarMat.value, head: mat};
    }
  }
}
const shapeName = (name:string) => {
  if(["ears","eyes","iris","brows","eyesback"].includes(name))
    return name+"Right";
  else
    return name;
}
</script>