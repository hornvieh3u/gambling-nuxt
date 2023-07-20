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
    bk: "#ecf0f1",
    hb: "#f0c7b1",
    c: "#386e77",
    h: "#2a232b",
    ea: "#f0c7b1",
    f: "#f0c7b1",
    cs: "#f0c7b1",
    fh: "#f0c7b1",
    b: "#2a232b",
    eb: "#000000",
    e: "#000000",
    i: "#4e60a3",
    g: "#26120B",
    mu: "#2a232b",
    be: "#2a232b",
    m: "#da7c87",
  },
  female: {
    bk: "#ecf0f1",
    hb: "#F3D4CF",
    c: "#09aac5",
    h: "#2a232b",
    ea: "#F3D4CF",
    f: "#F3D4CF",
    cs: "#F3D4CF",
    fh: "#F3D4CF",
    b: "#2a232b",
    eb: "#000000",
    e: "#000000",
    i: "#4e60a3",
    g: "#26120B",
    m: "#f771a9",
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
    if(props.type=='g')
      return "matrix(1.2,0,0,1.2,-20,-20)";
    else if(props.type=='h')
      return "matrix(1,0,0,1,0,0.001007080078125)";
    else if(props.type=='mu')
      return "matrix(2,0,0,2,-100,-100)";
    else if(props.type=='be')
      return "matrix(1,0,0,1,0,0.001007080078125)";
    else
      return props.mat;
  }
  else
    return props.mat;
}
</script>
