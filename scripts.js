function gridthingy(){


    for(let i = 0; i < (16*16)-16-16; i++) {
        let divbox = document.querySelector("#mainbox");
        let gridbox = document.createElement('div');
        gridbox.className = "box"
        gridbox.style.cssText = "display:inline-block;height:3.125em;width:3.125em;border: solid 4px white;";
        divbox.appendChild(gridbox);
    }
}


//const gridItems = document.querySelectorAll('#grid-container > div');
//gridItems.addEventListener('mouseover',
   // (e) => e.target.classList.toggle('active')
//);

