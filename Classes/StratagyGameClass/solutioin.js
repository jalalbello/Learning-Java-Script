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
      // Return the coordinates of all horizontal and vertical squares adjacent to the given square
      const adjacentSquares = [];
      for (let i = -1; i <= 1; i++) {
        for (let j = -1; j <= 1; j++) {
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
  

  This GameMap class could be used to represent a grid-based game map in a turn-based strategy game. It has a constructor that takes in the width and height of the map, and creates a 2D array to represent the grid. It also has methods for checking if a given coordinate is within the bounds of the map, and for getting the coordinates of all squares adjacent to a given square. These methods could be useful for implementing movement and attack ranges for units on the map.

I hope this example is helpful! Let me know if you have any questions or need further clarification.

Here is an exercise that asks students to use the provided GameMap class:

    Create a new instance of the GameMap class, using 10 as the width and 15 as the height. Save the instance to a variable called gameMap.
    Use the getAdjacentSquares method to get the coordinates of all squares adjacent to the square at position (5, 5) in the gameMap grid. Save the result to a variable called adjacentSquares.
    Use a for loop to iterate over the adjacentSquares array. In the loop, log the coordinates of each square to the console.
    Use the isInBounds method to check if the square at position (15, 20) is within the bounds of the gameMap grid. Save the result to a variable called inBounds.
    If the square at position (15, 20) is not within the bounds of the grid, use the createGrid method to create a new grid for the gameMap instance, and assign it to the grid property.
    Use the isInBounds method again to check if the square at position (15, 20) is now within the bounds of the gameMap grid. Save the result to a variable called inBoundsAfterReset.
    Log the value of inBounds and inBoundsAfterReset to the console to see if the createGrid method has correctly reset the grid.

Here is how the code could look:

const gameMap = new GameMap(10, 15);

const adjacentSquares = gameMap.getAdjacentSquares(5, 5);
for (const square of adjacentSquares) {
  console.log(square);
}

const inBounds = gameMap.isInBounds(15, 20);
if (!inBounds) {
  gameMap.grid = gameMap.createGrid();
}

const inBoundsAfterReset = gameMap.isInBounds(15, 20);
console.log(inBounds, inBoundsAfterReset);