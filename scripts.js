function gridthingy(){


    for(let i = 0; i < 16; i++) {
        let divbox = document.querySelector("#mainbox");
        let gridbox = document.createElement('div');
        gridbox.className = "box"
        gridbox.style.cssText = "display:inline-block;height:12em;width:12em;border: solid 4px black;";
        divbox.appendChild(gridbox);
    }
}


//const gridItems = document.querySelectorAll('#grid-container > div');
//gridItems.addEventListener('mouseover',
   // (e) => e.target.classList.toggle('active')
//);

