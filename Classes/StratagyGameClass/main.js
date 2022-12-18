class GameMap{
constructor(width, height){
    this.width = width;
    this.height = height
    this.grid = this.createGrid()
    
}
    createGrid = () =>{
        let grid = []
            for (let i = 1; i >=this.height; i++){
            grid.push(new Array(this.width).fill(null))
            // new Array(n) to create a new array with n number of elements
            // .full(null) to fill the n number of elements with null
            // .fill make the elements initialized to undefined
            }
        };
    }
        