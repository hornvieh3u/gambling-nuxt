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
      <g id="back" :transform="item.mat" v-for="item in drawData.slice(0,1)">
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
      <g id="human" :transform="matrix(props.mat.human, 'human')">
        <g id="body-cloth-hair_back" :transform="item.mat" v-for="item in drawData.slice(1,5)">
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
        <g id="head" :transform="matrix(props.mat.head, 'head')">
          <g :transform="item.mat" v-for="item in drawData.slice(5)">
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
import avatarData from './avatar.json';
const props = defineProps(["data","mat"]);
const drawData = ref();

watch(() => props.data,() => init());
watch(() => props.mat,() => init());

onBeforeMount(() => {
  init();
});

const init = () => {
  let data: Object[] = [];
    Object.keys(props.data).map(zone=>{
      let zonePath = [];
      let shape = avatarData[zone].shapes[props.data[zone].shapeIndex];
      
      Object.keys(shape).map(type=>{
        if(zone!='hair' || type!='back'){
          zonePath = [...zonePath, ...shape[type]];
        }
      });
      let resultPathList = drawPathGradient(zonePath, props.data[zone].color, props.data.face.color);
      data.push({path: resultPathList, mat: matrix(props.data[zone].mat, zone)});
    });
    data.splice(1,0,{path:drawPathGradient(avatarData.hair.shapes[props.data.hair.shapeIndex].back, props.data.hair.color, props.data.face.color), mat: matrix(props.mat.head, 'head')});
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
  let scaleX=0,scaleY=0,rotdeltaX=15, rotdeltaY=10;
  if(zone == 'backs'){
    return `matrix(1.5,0,0,1.5,-50,-40)`;
  }
  if(zone == 'head'){
    scaleX = 2.2; 
    scaleY = 0;
    return `matrix(${1+data.scaleupdown*0.05},${-0.1*data.rotate},${0.1*data.rotate},${1+data.scaleupdown*0.05},${data.leftright+data.tightlywider-data.scaleupdown*scaleX-data.rotate*rotdeltaX},${data.updown*1-data.scaleupdown*scaleY+data.rotate*rotdeltaY})`;
  }
  if(zone == 'human'){
    scaleX = 5; 
    scaleY = 5.88;
  return `matrix(${1+data.scaleupdown*0.05},${-0.1*data.rotate},${0.1*data.rotate},${1+data.scaleupdown*0.05},${data.leftright+data.tightlywider-data.scaleupdown*scaleX-data.rotate*rotdeltaX},${data.updown*1-data.scaleupdown*scaleY+data.rotate*rotdeltaY})`;
  }
  if(zone.includes('ears')){
    scaleX = 5; 
    scaleY = 5;
  return `matrix(${1+data.scaleupdown*0.05},0,0,${1+data.scaleupdown*0.05},${data.leftright - data.scaleupdown*scaleX},${data.updown - data.scaleupdown*scaleY})`;
  }
  if(zone == 'face' || zone == 'hair'){
    scaleX = 5; 
    scaleY = 6.75;
  return `matrix(${1+data.scaleupdown*0.05},${-0.1*data.rotate},${0.1*data.rotate},${1+data.scaleupdown*0.05},${data.leftright+data.tightlywider-data.scaleupdown*scaleX-data.rotate*rotdeltaX},${data.updown*1-data.scaleupdown*scaleY+data.rotate*rotdeltaY})`;
  }
  if(zone == 'mouth'){
    scaleX = 5; 
    scaleY = 6.75;
  return `matrix(${1+data.scaleupdown*0.05},${-0.1*data.rotate},${0.1*data.rotate},${1+data.scaleupdown*0.05},${data.leftright+data.tightlywider-data.scaleupdown*scaleX-data.rotate*rotdeltaX},${data.updown*1-data.scaleupdown*scaleY+data.rotate*rotdeltaY})`;
  }
  if(zone == 'nose'){
    scaleX = 5; 
    scaleY = 6.2;
  return `matrix(${1+data.scaleupdown*0.05},${-0.1*data.rotate},${0.1*data.rotate},${1+data.scaleupdown*0.05},${data.leftright+data.tightlywider-data.scaleupdown*scaleX-data.rotate*rotdeltaX},${data.updown*1-data.scaleupdown*scaleY+data.rotate*rotdeltaY})`;
  }
  if(zone=='irisRight'){
    scaleX = 6; 
    scaleY = 4.2;
  return `matrix(${1+data.scaleupdown*0.05},0,0,${1+data.scaleupdown*0.05},${data.leftright+data.tightlywider-data.scaleupdown*scaleX},${data.updown-data.scaleupdown*scaleY})`;
  }
  if(zone=='irisLeft'){
    scaleX = 3.8; 
    scaleY = 4.2;
  return `matrix(${1+data.scaleupdown*0.05},0,0,${1+data.scaleupdown*0.05},${data.leftright+data.tightlywider-data.scaleupdown*scaleX},${data.updown-data.scaleupdown*scaleY})`;
  }
  if(zone=='eyesRight'){
    scaleX = 6; 
    scaleY = 4.5;
  return `matrix(${1+data.scaleupdown*0.05},0,0,${1+data.scaleupdown*0.05},${data.leftright+data.tightlywider-data.scaleupdown*scaleX},${data.updown-data.scaleupdown*scaleY})`;
  }
  if(zone=='eyesLeft'){
    scaleX = 4; 
    scaleY = 4.5;
  return `matrix(${1+data.scaleupdown*0.05},0,0,${1+data.scaleupdown*0.05},${data.leftright+data.tightlywider-data.scaleupdown*scaleX},${data.updown-data.scaleupdown*scaleY})`;
  }
  if(zone=='browsRight'){
    scaleX = 6.5; 
    scaleY = 4;
    rotdeltaX=15;
    rotdeltaY=24;
  return `matrix(${1+data.scaleupdown*0.05},${-0.2*data.rotate},${0.2*data.rotate},${1+data.scaleupdown*0.05},${data.leftright+data.tightlywider-data.scaleupdown*scaleX-data.rotate*rotdeltaX},${data.updown*1-data.scaleupdown*scaleY+data.rotate*rotdeltaY})`;
  }
  if(zone=='browsLeft'){
    scaleX = 3; 
    scaleY = 4;
    rotdeltaX=15;
    rotdeltaY=15;
  return `matrix(${1+data.scaleupdown*0.05},${-0.2*data.rotate},${0.2*data.rotate},${1+data.scaleupdown*0.05},${data.leftright+data.tightlywider-data.scaleupdown*scaleX-data.rotate*rotdeltaX},${data.updown*1-data.scaleupdown*scaleY+data.rotate*rotdeltaY})`;
  }
  if(zone == 'glasses'){
    scaleX = 4.7; 
    scaleY = 4.5;
  return `matrix(${1+data.scaleupdown*0.05},${-0.1*data.rotate},${0.1*data.rotate},${1+data.scaleupdown*0.05},${data.leftright+data.tightlywider-data.scaleupdown*scaleX-data.rotate*rotdeltaX},${data.updown*1-data.scaleupdown*scaleY+data.rotate*rotdeltaY})`;
  }
  if(zone == 'mustache'){
    scaleX = 5; 
    scaleY = 6.7;
  return `matrix(${1+data.scaleupdown*0.05},${-0.1*data.rotate},${0.1*data.rotate},${1+data.scaleupdown*0.05},${data.leftright+data.tightlywider-data.scaleupdown*scaleX-data.rotate*rotdeltaX},${data.updown*1-data.scaleupdown*scaleY+data.rotate*rotdeltaY})`;
  }
  if(zone == 'beard'){
    scaleX = 5; 
    scaleY = 6.7;
  return `matrix(${1+data.scaleupdown*0.05},${-0.1*data.rotate},${0.1*data.rotate},${1+data.scaleupdown*0.05},${data.leftright+data.tightlywider-data.scaleupdown*scaleX-data.rotate*rotdeltaX},${data.updown*1-data.scaleupdown*scaleY+data.rotate*rotdeltaY})`;
  }
  if(zone == 'facehighlight'){
    scaleX = 5; 
    scaleY = 6.7;
  return `matrix(${1+data.scaleupdown*0.05},${-0.1*data.rotate},${0.1*data.rotate},${1+data.scaleupdown*0.05},${data.leftright+data.tightlywider-data.scaleupdown*scaleX-data.rotate*rotdeltaX},${data.updown*1-data.scaleupdown*scaleY+data.rotate*rotdeltaY})`;
  }
  if(zone == 'clothes'){
    scaleX = 5; 
    scaleY = 6.7;
  return `matrix(${1+data.scaleupdown*0.05},${-0.1*data.rotate},${0.1*data.rotate},${1+data.scaleupdown*0.05},${data.leftright+data.tightlywider-data.scaleupdown*scaleX-data.rotate*rotdeltaX},${data.updown*1-data.scaleupdown*scaleY+data.rotate*rotdeltaY})`;
  }
  if(zone == 'chinshadow'){
    scaleX = 5; 
    scaleY = 6.7;
  return `matrix(${1+data.scaleupdown*0.05},${-0.1*data.rotate},${0.1*data.rotate},${1+data.scaleupdown*0.05},${data.leftright+data.tightlywider-data.scaleupdown*scaleX-data.rotate*rotdeltaX},${data.updown*1-data.scaleupdown*scaleY+data.rotate*rotdeltaY})`;
  }
  if(zone == 'humanbody'){
    scaleX = 5; 
    scaleY = 6.7;
  return `matrix(${1+data.scaleupdown*0.05},${-0.1*data.rotate},${0.1*data.rotate},${1+data.scaleupdown*0.05},${data.leftright+data.tightlywider-data.scaleupdown*scaleX-data.rotate*rotdeltaX},${data.updown*1-data.scaleupdown*scaleY+data.rotate*rotdeltaY})`;
  }
}
</script>
