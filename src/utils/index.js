export const getRandomBG = () => {
    const colors = ['#f6b100', '#025cca', '#be3e3f', '#02ca3a' ];
    const color = colors[Math.floor(Math.random() * colors.length)];
    console.log(color, "color")
    return "bg-["+color+"]";
}