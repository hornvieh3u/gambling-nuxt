

const toHsv = (hex) => {  
  const set = {
    0: 0,
    1: 1,
    2: 2,
    3: 3,
    4: 4,
    5: 5,
    6: 6,
    7: 7,
    8: 8,
    9: 9,
    a: 10,
    b: 11,
    c: 12,
    d: 13,
    e: 14,
    f: 15,
    A: 10,
    B: 11,
    C: 12,
    D: 13,
    E: 14,
    F: 15,
  };
  let r, g, b;
  r = (Number(set[hex.slice(1, 2)]) * 16 + Number(set[hex.slice(2, 3)])) / 256;
  g = (Number(set[hex.slice(3, 4)]) * 16 + Number(set[hex.slice(4, 5)])) / 256;
  b = (Number(set[hex.slice(5, 6)]) * 16 + Number(set[hex.slice(6, 7)])) / 256;  
  let h, s, v;
  let max_rgb = r > g ? (r > b ? r : b) : g > b ? g : b;
  let min_rgb = r > g ? (g > b ? b : g) : r > b ? b : r;
  let difference = max_rgb - min_rgb;
  if (max_rgb == min_rgb) h = 0;
  else if (max_rgb == r) h = ((60 * (g - b)) / difference + 360) % 360;
  else if (max_rgb == g) h = (60 * ((b - r) / difference) + 120) % 360;
  else if (max_rgb == b) h = (60 * ((r - g) / difference) + 240) % 360;
  if (max_rgb == 0) s = 0;
  else s = (difference / max_rgb);
  v = max_rgb;
  return { h: h, s: s, v: v };
};
const toHex = (col) => {
  const set =['0','1','2','3','4','5','6','7','8','9','a','b','c','d','e','f'];
  let c, x, m, r, g, b;
  c = (col.v * col.s);
  x = c * (1 - Math.abs((col.h / 60) % 2 - 1));
  m = col.v - c;
  if (col.h < 60) {
    r = c;
    g = x;
    b = 0;
  } else if (col.h < 120) {
    r = x;
    g = c;
    b = 0;
  } else if (col.h < 180) {
    r = 0;
    g = c;
    b = x;
  } else if (col.h < 240) {
    r = 0;
    g = x;
    b = c;
  } else if (col.h < 300) {
    r = x;
    g = 0;
    b = c;
  } else {
    r = c;
    g = 0;
    b = x;
  }
  r = (r + m) * 256;
  g = (g + m) * 256;
  b = (b + m) * 256;
  if(r>255) r=255;
  if(g>255) g=255;
  if(b>255) b=255;
  return (
    "#" +
    set[Math.floor(r / 16)] +
    set[Math.floor(r % 16)] +
    set[Math.floor(g / 16)] +
    set[Math.floor(g % 16)] +
    set[Math.floor(b / 16)] +
    set[Math.floor(b % 16)]
  );
};
   const ShadowHighlight = (color, ds, dv) => {
    let c = toHsv(color);
    c.s = c.s + ds;
    if (c.s < 0) {
      c.s = 0;
    }
    if (c.s > 1) {
      c.s = 1;
    }
    c.v = c.v + dv;
    if (c.v < 0) {
      c.v = 0;
    }
    if (c.v > 1) {
      c.v = 1;
    }
    return toHex(c);
  };

export const colorTones = (type, themeColor, ifGradient) => {
    let color;
    switch (type) {
      case "none": {
        color = "none";
        break;
      }
      case "tone": {
        color = themeColor;
        break;
      }
      case "hl05": {
        color = ShadowHighlight(themeColor, -0.5 * 0.1, 0.5 * 0.06);
        break;
      }
      case "hl1": {
        color = ShadowHighlight(themeColor, -0.1, 0.06);
        break;
      }
      case "hl2": {
        color = ShadowHighlight(themeColor, -2 * 0.1, 2 * 0.06);
        break;
      }
      case "sd05": {
        color = ShadowHighlight(themeColor, 0.5 * 0.1, -0.5 * 0.06);
        break;
      }
      case "sd1": {
        color = ShadowHighlight(themeColor, 0.1, -0.06);
        break;
      }
      case "sd2": {
        color = ShadowHighlight(themeColor, 2 * 0.1, -2 * 0.06);
        break;
      }
      case "sd3": {
        color = ShadowHighlight(themeColor, 3 * 0.1, -3 * 0.06);
        break;
      }
      case "sd35": {
        color = ShadowHighlight(themeColor, 3.5 * 0.1, -3.5 * 0.06);
        break;
      }
      default: {
        color = themeColor;
        if (ifGradient) {
          color = type;
        }
        break;
      }
    };
    return color;
  };



