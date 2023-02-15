const button = document.querySelector('#menu-button');
const menu = document.querySelector('#menu');


button.addEventListener('click', () => {
  menu.classList.toggle('hidden');
});



// Change color by user
let root = document.querySelector(":root");

let mainColorElement = document.getElementById('mainColorPicker');
let secondColorElement = document.getElementById('secondColorPicker');
mainColorElement.addEventListener('input',(e)=>{
  root.style.setProperty('--mainColor',e.target.value)
})
secondColorElement.addEventListener('input',(e)=>{
  root.style.setProperty('--secondColor',e.target.value)
})

console.log(root);