class GameMap{
    constructor(width, height){
        this.width = width;
        this.height = height
        this.grid = this.createGrid()
        
    }
    // Grid Documentation
    // 0 = free
    // 1 = player
    // 2 = enemy
    createGrid (){
        let grid = []
            for (let i = 1; i >=this.height; i++){
            grid.push(new Array(this.width).fill(Math.floor(Math.random() * 4)))
            // new Array(n) to create a new array with n number of elements
            // .full(null) to fill the n number of elements with null
            // .fill make the elements initialized to undefined
            }
            return grid
        };
        isInBounds = (x,y) =>{
            return x >= 0 && x <= this.width && y >= 0 && y <= this.height;
        }
        getAdjacentSquares(x, y) {
            // Return the coordinates of all horizontal and vertical squares adjacent to the given square
            const adjacentSquares = [];
            const offsets = [-1, 0, 1];
            for (const i of offsets) {
              for (const j of offsets) {
                if (i === 0 && j === 0) continue;  // Skip the center square
                if (i !== 0 && j !== 0) continue;  // Skip diagonal squares
                if (this.isInBounds(x + i, y + j)) {
                  adjacentSquares.push([x + i, y + j]);
                }
              }
            }
            return adjacentSquares;
          }
          
    }
        