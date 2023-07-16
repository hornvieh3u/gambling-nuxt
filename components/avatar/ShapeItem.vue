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
    <g :transform="calcMat()">
      {{ calcMat() }}
      <path
        v-for="item in pathList"
        :d="item.d"
        :data-fromskin="item?.fromskin"
        :data-filltype="item?.fillType"
        :fill="item.fill"
        :data-colored="item?.colored"
        :data-stroketype="item.strokeType"
        :stroke-width="item?.strokeWidth"
        :opacity="item?.opacity"
        :stroke="item?.stroke"
      ></path>
    </g>
  </svg>
</template>

<script setup lang="ts">
import { ref, onBeforeMount } from "vue";
import { useStore } from "vuex";
import { colorTones} from './support';

    interface path {
      d: string,
      colored: boolean,
      fillType: string,
      strokeType: string,
      stroke: string,
      strokeWidth: string,
      fromskin: boolean,
      fill: string,
      opacity: number,
    };
const props = defineProps(["shape","type","index","mat","gender"]);
const pathList = ref<path[]>([]);
const colorsStorage = {
  male: {
    backs: "#ecf0f1",
    humanbody: "#f0c7b1",
    clothes: "#386e77",
    hair: "#2a232b",
    ears: "#f0c7b1",
    face: "#f0c7b1",
    chinshadow: "#f0c7b1",
    facehighlight: "#f0c7b1",
    brows: "#2a232b",
    eyesback: "#000000",
    eyes: "#000000",
    iris: "#4e60a3",
    glasses: "#26120B",
    mustache: "#2a232b",
    beard: "#2a232b",
    mouth: "#da7c87",
  },
  female: {
    backs: "#ecf0f1",
    humanbody: "#F3D4CF",
    clothes: "#09aac5",
    hair: "#2a232b",
    ears: "#F3D4CF",
    face: "#F3D4CF",
    chinshadow: "#F3D4CF",
    facehighlight: "#F3D4CF",
    brows: "#2a232b",
    eyesback: "#000000",
    eyes: "#000000",
    iris: "#4e60a3",
    glasses: "#26120B",
    mouth: "#f771a9",
  },
};
watch(
  () => props.shape,
  () => {
    let result = [];
    Object.keys(props.shape).map((key) => {
      if (key != "left") result = [...result, ...props.shape[key]];
    });
    drawPathGradient(result);
  }
);

onBeforeMount(() => {
  
  let result = [];
    Object.keys(props.shape).map((key) => {
      if (key != "left") result = [...result, ...props.shape[key]];
    });
    
    drawPathGradient(result);
});

const drawPathGradient = (data) => {
  let colorTheme = props.gender ? colorsStorage["female"] : colorsStorage["male"];
  
  let pathlist:path[] = [],
    colorZone;
  data.map((pathData, pathIndex) => {
  
    let path:path = {
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
    if (pathData.colored == true) {
      if (pathData.fromskin) {
        colorZone = "#ffffff"; 
      } else {
        colorZone = colorTheme[props?.type];
      }
      path.fill = colorTones(path.fillType, colorZone, false);
      path.stroke = colorTones(path.strokeType, colorZone, false); /////
      path.strokeWidth = pathData?.strokeWidth;
    } 
    else {
      if(pathData.fill == "gradient") {
        path.fill = `url(#svg-${props.type}-${pathIndex})`;
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
  pathList.value = pathlist;
};
const calcMat = () => {
  if(props.index==0){
    if(props.type=='glasses')
      return "matrix(1.2,0,0,1.2,-20,-20)";
    else if(props.type=='hair')
      return "matrix(1,0,0,1,0,0.001007080078125)";
    else if(props.type=='mustache')
      return "matrix(2,0,0,2,-100,-100)";
    else if(props.type=='beard')
      return "matrix(1,0,0,1,0,0.001007080078125)";
    else
      return props.mat;
  }
  else
    return props.mat;
}
</script>
