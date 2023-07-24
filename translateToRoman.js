function translateToRoman(num) {
const ones=["","I","II","III","IV","V","VI","VII","VIII","IX","X"];
const tens=["","X","XX","XXX","XL","L","LX","LXX","LXXX","XC"];
const hundreds=["","C","CC","CCC","CD","D","DC","DCC","DCCC","CM"];
let result="Sayi çevrildi --> ";

const x=Math.floor(num/100);
const y=Math.floor((num-(x*100))/10);
const z=num-((x*100)+(y*10));

result+=hundreds[x];
result+=tens[y];
result+=ones[z];
console.log(result);
}
translateToRoman(478);