let containerElement = document.getElementById('container');

let columns = document.getElementsByClassName("grid-columns");
let rows = document.getElementsByClassName("grid-rows")

function createGrid(size) {
    
    containerElement.style.setProperty('--size', size)
    
    for(let i = 0; i < size; i++) {
        let rowElement = document.createElement("div");
        rowElement.className = "grid-rows";
        containerElement.appendChild(rowElement);
    }
    for(let j = 0; j < rows.length; j++) {
        for (let y = 0; y < size; y ++) {
        let columnElement = document.createElement("div");
        columnElement.className = "grid-columns";
        columnElement.addEventListener('mouseenter', function(event) {
            columnElement.style.backgroundColor = 'black';
        });
        rows[y].appendChild(columnElement);
        }
    }

}



createGrid(16);