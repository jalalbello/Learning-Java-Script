class GameMap {
    constructor(width, height) {
      this.width = width;
      this.height = height;
      this.grid = this.createGrid();
    }
  
    createGrid() {
      // Create a 2D array to represent the game map
      const grid = [];
      for (let i = 0; i < this.height; i++) {
        grid.push(new Array(this.width).fill(null));
      }
      return grid;
    }
  
    isInBounds(x, y) {
      // Check if the given coordinates are within the bounds of the map
      return x >= 0 && x < this.width && y >= 0 && y < this.height;
    }
  
    getAdjacentSquares(x, y) {
      // Return the coordinates of all squares adjacent to the given square
      const adjacentSquares = [];
      for (let i = -1; i <= 1; i++) {
        for (let j = -1; j <= 1; j++) {
          if (i === 0 && j === 0) continue;  // Skip the center square
          if (this.isInBounds(x + i, y + j)) {
            adjacentSquares.push([x + i, y + j]);
          }
        }
      }
      return adjacentSquares;
    }
  }
  

  This GameMap class could be used to represent a grid-based game map in a turn-based strategy game. It has a constructor that takes in the width and height of the map, and creates a 2D array to represent the grid. It also has methods for checking if a given coordinate is within the bounds of the map, and for getting the coordinates of all squares adjacent to a given square. These methods could be useful for implementing movement and attack ranges for units on the map.

I hope this example is helpful! Let me know if you have any questions or need further clarification.