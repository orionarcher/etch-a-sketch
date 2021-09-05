grid_size = getGridSize()
let grid_container = document.querySelector("#grid-container");

createGrid(grid_container, grid_size);


function getGridSize () {
    let grid_size;
    do {
        grid_size = prompt("How large would you like the grid to be (1-80)?")
        grid_size = parseInt(grid_size);
    } while (grid_size < 0 || grid_size > 40);
    return grid_size
}

function createGrid(grid_container, grid_size) {
    grid_container.style.gridTemplateColumns = "1fr ".repeat(grid_size);

    for (i = 0; i < grid_size ** 2; i++) {
        const div = document.createElement('div');
        div.setAttribute('class', 'etch-box')
        grid_container.appendChild(div);
    }
    divs = document.querySelectorAll('.etch-box')
    
    divs.forEach(div => { 
        div.addEventListener('mouseenter', changeColor)
    });
}


function changeColor(e) {
    this.classList.add('hovered')
}

function resetGrid() {
    gridSize = getGridSize()
    removeAllChildNodes(grid_container)
    createGrid(grid_container, gridSize)
}

function removeAllChildNodes(parent) {
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
}