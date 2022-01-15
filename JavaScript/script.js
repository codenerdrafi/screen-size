let btn = document.querySelector('button');
let screenSize = document.getElementById('screenSize');

btn.addEventListener('click', ()=>{
    screenSize.innerText = ` Screen Width & Height :
     ${screen.width} X  ${screen.height} `
});