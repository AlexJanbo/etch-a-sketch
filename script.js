let containerElement = document.getElementById('container');

let columns = document.getElementsByClassName("grid-columns");
let rows = document.getElementsByClassName("grid-rows")

function createGrid(size) {
    
    containerElement.style.setProperty('--size', size)
    
    for(let i = 0; i < size; i++) {
        
        /*
        let rowElement = document.createElement("div")
        rowElement.className = "grid-rows";
        containerElement.appendChild(rowElement);
        */
        
        
    }
    for(let j = 0; j < size; j++) {
        for (let y = 0; y < size; y ++) {
        let columnElement = document.createElement("div");
        columnElement.className = "grid-columns";
        columnElement.addEventListener('mouseenter', function(event) {
            columnElement.style.backgroundColor = 'black';
        });
        containerElement.appendChild(columnElement);
        }
    }

}



createGrid(5);

function clearGrid() {
    let newGridSize = window.prompt("Enter new Grid Size: ");
    while(containerElement.firstChild) {
        containerElement.removeChild(containerElement.firstChild);
    }
    createGrid(newGridSize);        
    
}

let gridClearButton = document.getElementById("grid-clear");
gridClearButton.addEventListener('click', function(event) {
    clearGrid();
});
