// export const getRandomBG = () => {
//     const colors = ['#f6b100', '#025cca', '#be3e3f', '#02ca3a' ];
//     const color = colors[Math.floor(Math.random() * colors.length)];
//     console.log(color, "color")
//     return "bg-["+color+"]";
// }

export const getBgColor = () => {
    const bgarr = [
        '#b73e3e',
         '#5b45b0', 
         '#7f167f', 
         '#735f32',
         '#1d2569',
          '#285430', 
          '#f6b100', 
          '#025cca', 
          '#be3e3f',
           '#02ca3a'];
    const ramdomBg = Math.floor(Math.random() * bgarr.length);
    const color = bgarr[ramdomBg];
    return color;
}