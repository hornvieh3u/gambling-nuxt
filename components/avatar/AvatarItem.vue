<template>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    version="1.1"
    xmlns:xlink="http://www.w3.org/1999/xlink"
    xmlns:svgjs="http://svgjs.com/svgjs"
    class="svga-svg"
    viewBox="0 0 200 200"
    preserveAspectRatio="xMinYMin meet"
  >
    <defs>
      
    </defs>
    <g id="total">
      <g id="back" :transform="item.m" v-for="item in drawData.slice(0,1)">
        <path
          v-for="pathItem in item.path"
          :d="pathItem.d"
          :data-fromskin="pathItem?.fromskin"
          :data-filltype="pathItem?.fillType"
          :fill="pathItem.fill"
          :data-colored="pathItem?.colored"
          :data-stroketype="pathItem.strokeType"
          :stroke-width="pathItem?.strokeWidth"
          :opacity="pathItem?.opacity"
          :stroke="pathItem?.stroke"
        ></path>
      </g>
      <g id="human" :transform="matrix(props.mat.m, 'hm')">
        <g id="body-cloth-hair_back" :transform="item.m" v-for="item in drawData.slice(1,5)">
          <path
            v-for="pathItem in item.path"
            :d="pathItem.d"
            :data-fromskin="pathItem?.fromskin"
            :data-filltype="pathItem?.fillType"
            :fill="pathItem.fill"
            :data-colored="pathItem?.colored"
            :data-stroketype="pathItem.strokeType"
            :stroke-width="pathItem?.strokeWidth"
            :opacity="pathItem?.opacity"
            :stroke="pathItem?.stroke"
          ></path>
        </g>
        <g id="head" :transform="matrix(props.mat.h, 'h')">
          <g :transform="item.m" v-for="item in drawData.slice(5)">
            <path
              v-for="pathItem in item.path"
              :d="pathItem.d"
              :data-fromskin="pathItem?.fromskin"
              :data-filltype="pathItem?.fillType"
              :fill="pathItem.fill"
              :data-colored="pathItem?.colored"
              :data-stroketype="pathItem.strokeType"
              :stroke-width="pathItem?.strokeWidth"
              :opacity="pathItem?.opacity"
              :stroke="pathItem?.stroke"
            ></path>
          </g>
        </g>
      </g>
    </g>
  </svg>
</template>

<script setup lang="ts">
import { ref, onBeforeMount } from "vue";
import { colorTones} from './support';
import femaleData from './femaleAvatar.json';
import maleData from './maleAvatar.json';
const props = defineProps(["data","mat","gender"]);
const drawData = ref();
let avatarData;

watch(() => props.data,() => init());
watch(() => props.mat,() => init());

onBeforeMount(() => {
  init();
});

const init = () => {
  avatarData=props.gender?femaleData:maleData;
  let data: Object[] = [];
    Object.keys(props.data).map(zone=>{
      if(props.gender!="female" || zone != "mu" && zone != "be"){
        let zonePath = [];
        let shape = avatarData[zone].shapes[props.data[zone].s];
        
        Object.keys(shape).map(type=>{
          if(zone!='h' || type!='back'){
            zonePath = [...zonePath, ...shape[type]];
          }
        });
        let resultPathList = drawPathGradient(zonePath, props.data[zone].c, props.data.f.c);
        data.push({path: resultPathList, m: matrix(props.data[zone].m, zone)});
      }
    });
    data.splice(1,0,{path:drawPathGradient(avatarData.h.shapes[props.data.h.s].back, props.data.h.c, props.data.f.c), m: matrix(props.mat.h, 'h')});
    drawData.value = data;
}

const drawPathGradient = (pathData, color, faceColor) => {
  let pathlist = [];
  pathData.filter(path=>path?.hideoncanvas!=true).map((pathData, pathIndex) => {
    let path = {
      d: "",
      colored: true,
      fillType: "",
      strokeType: "",
      stroke: "",
      strokeWidth: "",
      fromskin: false,
      fill: "",
      opacity: 1,
    };
    path.d = pathData.path;
    path.colored = pathData.colored;
    path.fillType = pathData.fill;
    path.strokeType = pathData.stroke;
    if (pathData.fromskin) {
      path.fromskin = pathData.fromskin;
    }
    if (path.colored == true) {
      let tempColor;
      if (pathData.fromskin) {
        tempColor = faceColor; 
      } else {
        tempColor = color;
      }
      path.fill = colorTones(path.fillType, tempColor, false);
      path.stroke = colorTones(path.strokeType, tempColor, false); 
      path.strokeWidth = pathData?.strokeWidth;
    } 
    else {
      if (pathData.fill == "gradient") {
        path.fill = `url(#svg-humanbody-${pathIndex})`;
      } else {
        path.fill = pathData.fill;
        path.stroke = pathData.stroke;
        path.strokeWidth = pathData.strokeWidth;
      }
    }
    if (pathData.opacity) {
      path.opacity = pathData.opacity;
    }
    pathlist.push(path);
  });
  return pathlist;
};
const matrix = (data, zone) =>{
  let scaleX=0,scaleY=0,rotdeltaX=30, rotdeltaY=20;
  if(zone == 'bk'){
    return `matrix(1.5,0,0,1.5,-50,-40)`;
  }
  if(zone == 'h'){
    scaleX = 5; 
    scaleY =6.75;
    return `matrix(${1+data.io*0.05},${-0.2*data.r},${0.2*data.r},${1+data.io*0.05},${data.lr+data.tw-data.io*scaleX-data.r*rotdeltaX},${data.ud*1-data.io*scaleY+data.r*rotdeltaY})`;
  }
  if(zone == 'hm'){
    scaleX = 5; 
    scaleY = 5.88;
  return `matrix(${1+data.io*0.05},${-0.1*data.r},${0.1*data.r},${1+data.io*0.05},${data.lr+data.tw-data.io*scaleX-data.r*rotdeltaX},${data.ud*1-data.io*scaleY+data.r*rotdeltaY})`;
  }
  if(zone.includes('ea')){
    scaleX = 5; 
    scaleY = 5;
  return `matrix(${1+data.io*0.05},0,0,${1+data.io*0.05},${data.lr - data.io*scaleX},${data.ud - data.io*scaleY})`;
  }
  if(zone == 'f' || zone == 'h'){
    scaleX = 5; 
    scaleY = 6.75;
  return `matrix(${1+data.io*0.05},${-0.1*data.r},${0.1*data.r},${1+data.io*0.05},${data.lr+data.tw-data.io*scaleX-data.r*rotdeltaX},${data.ud*1-data.io*scaleY+data.r*rotdeltaY})`;
  }
  if(zone == 'm'){
    scaleX = 5; 
    scaleY = 6.75;
  return `matrix(${1+data.io*0.05},${-0.1*data.r},${0.1*data.r},${1+data.io*0.05},${data.lr+data.tw-data.io*scaleX-data.r*rotdeltaX},${data.ud*1-data.io*scaleY+data.r*rotdeltaY})`;
  }
  if(zone == 'n'){
    scaleX = 5; 
    scaleY = 6.2;
  return `matrix(${1+data.io*0.05},${-0.1*data.r},${0.1*data.r},${1+data.io*0.05},${data.lr+data.tw-data.io*scaleX-data.r*rotdeltaX},${data.ud*1-data.io*scaleY+data.r*rotdeltaY})`;
  }
  if(zone=='iR'){
    scaleX = 6; 
    scaleY = 4.2;
  return `matrix(${1+data.io*0.05},0,0,${1+data.io*0.05},${data.lr+data.tw-data.io*scaleX},${data.ud-data.io*scaleY})`;
  }
  if(zone=='iL'){
    scaleX = 3.8; 
    scaleY = 4.2;
  return `matrix(${1+data.io*0.05},0,0,${1+data.io*0.05},${data.lr+data.tw-data.io*scaleX},${data.ud-data.io*scaleY})`;
  }
  if(zone=='eR'){
    scaleX = 6; 
    scaleY = 4.5;
  return `matrix(${1+data.io*0.05},0,0,${1+data.io*0.05},${data.lr+data.tw-data.io*scaleX},${data.ud-data.io*scaleY})`;
  }
  if(zone=='eL'){
    scaleX = 4; 
    scaleY = 4.5;
  return `matrix(${1+data.io*0.05},0,0,${1+data.io*0.05},${data.lr+data.tw-data.io*scaleX},${data.ud-data.io*scaleY})`;
  }
  if(zone=='bR'){
    scaleX = 6.5; 
    scaleY = 4;
    rotdeltaX=15;
    rotdeltaY=24;
  return `matrix(${1+data.io*0.05},${-0.2*data.r},${0.2*data.r},${1+data.io*0.05},${data.lr+data.tw-data.io*scaleX-data.r*rotdeltaX},${data.ud*1-data.io*scaleY+data.r*rotdeltaY})`;
  }
  if(zone=='bL'){
    scaleX = 3; 
    scaleY = 4;
    rotdeltaX=15;
    rotdeltaY=15;
  return `matrix(${1+data.io*0.05},${-0.2*data.r},${0.2*data.r},${1+data.io*0.05},${data.lr+data.tw-data.io*scaleX-data.r*rotdeltaX},${data.ud*1-data.io*scaleY+data.r*rotdeltaY})`;
  }
  if(zone == 'g'){
    scaleX = 4.7; 
    scaleY = 4.5;
  return `matrix(${1+data.io*0.05},${-0.1*data.r},${0.1*data.r},${1+data.io*0.05},${data.lr+data.tw-data.io*scaleX-data.r*rotdeltaX},${data.ud*1-data.io*scaleY+data.r*rotdeltaY})`;
  }
  if(zone == 'mu'){
    scaleX = 5; 
    scaleY = 6.7;
  return `matrix(${1+data.io*0.05},${-0.1*data.r},${0.1*data.r},${1+data.io*0.05},${data.lr+data.tw-data.io*scaleX-data.r*rotdeltaX},${data.ud*1-data.io*scaleY+data.r*rotdeltaY})`;
  }
  if(zone == 'be'){
    scaleX = 5; 
    scaleY = 6.7;
  return `matrix(${1+data.io*0.05},${-0.1*data.r},${0.1*data.r},${1+data.io*0.05},${data.lr+data.tw-data.io*scaleX-data.r*rotdeltaX},${data.ud*1-data.io*scaleY+data.r*rotdeltaY})`;
  }
  if(zone == 'fh'){
    scaleX = 5; 
    scaleY = 6.7;
  return `matrix(${1+data.io*0.05},${-0.1*data.r},${0.1*data.r},${1+data.io*0.05},${data.lr+data.tw-data.io*scaleX-data.r*rotdeltaX},${data.ud*1-data.io*scaleY+data.r*rotdeltaY})`;
  }
  if(zone == 'c'){
    scaleX = 5; 
    scaleY = 6.7;
  return `matrix(${1+data.io*0.05},${-0.1*data.r},${0.1*data.r},${1+data.io*0.05},${data.lr+data.tw-data.io*scaleX-data.r*rotdeltaX},${data.ud*1-data.io*scaleY+data.r*rotdeltaY})`;
  }
  if(zone == 'cs'){
    scaleX = 5; 
    scaleY = 6.7;
  return `matrix(${1+data.io*0.05},${-0.1*data.r},${0.1*data.r},${1+data.io*0.05},${data.lr+data.tw-data.io*scaleX-data.r*rotdeltaX},${data.ud*1-data.io*scaleY+data.r*rotdeltaY})`;
  }
  if(zone == 'hb'){
    scaleX = 5; 
    scaleY = 6.7;
  return `matrix(${1+data.io*0.05},${-0.1*data.r},${0.1*data.r},${1+data.io*0.05},${data.lr+data.tw-data.io*scaleX-data.r*rotdeltaX},${data.ud*1-data.io*scaleY+data.r*rotdeltaY})`;
  }
}
</script>
