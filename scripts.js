function gridthingy(){


    for(let i = 0; i < (16*16)-16-16; i++) {
        let divbox = document.querySelector("#mainbox");
        let gridbox = document.createElement('div');
        gridbox.className = "box"
        gridbox.style.cssText = "display:inline-block;height:3.125em;width:3.125em;border: solid 4px white;";
        divbox.appendChild(gridbox);
    }
    document.querySelector("#generate").disabled = true;
    document.querySelector("#reset").disabled = false;
}
window.onresize = (function (){
    let textbox = document.querySelector('.text');
    let mainbox = document.querySelector('#mainbox');
    let bigbox = document.querySelector('.bigbox');
    console.log(bigbox.clientWidth);
    console.log(mainbox.clientWidth);
    let g = (bigbox.clientWidth - mainbox.clientWidth) -50;
    console.log(g);
    textbox.style.width = g+'px';
    console.log(textbox.clientWidth)
});

function setwidth(){
    let textbox = document.querySelector('.text');
    let mainbox = document.querySelector('#mainbox');
    let bigbox = document.querySelector('.bigbox');
    console.log(bigbox.clientWidth);
    console.log(mainbox.clientWidth);
    let g = (bigbox.clientWidth - mainbox.clientWidth) -50;
    console.log(g);
    textbox.style.width = g+'px';
    console.log(textbox.clientWidth)
}

function reset(){
    const grid = document.querySelector('#mainbox');
    while (grid.firstChild) {
        grid.removeChild(grid.firstChild);
    }
    document.querySelector("#generate").disabled = false;
    document.querySelector("#reset").disabled = true;
}


//const gridItems = document.querySelectorAll('#grid-container > div');
//gridItems.addEventListener('mouseover',
   // (e) => e.target.classList.toggle('active')
//);

