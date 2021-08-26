//we make an array filled with booleans, then we turn those values into numbers
// false turns to 0, true turns to 1
const spiralize = (size: number) => {
  //make bidimensional array
  let spiral = Array(size)
    .fill(Array(size).fill(0))
    .map((i, row) =>
      i.map((j: any, column: number) => {
        const isEven = (x: number) => x % 2 === 0;
        const isOdd = (x: number) => x % 2 === 1;
        const northArea =
          row < size / 2 && //deal with middle square
          isEven(row) && //jump row
          column >= row - 1 && //diagonal cut cinit to rend
          column <= size - row - 1; //diagonal cut cend to rend
        const eastArea =
          isOdd(size - column) && //jump column
          row <= column && //diagonal cut cinit to cend
          row > size - column - 1; //diagonal cut rend to cend
        const southArea =
          isOdd(size - row) && //jump row
          column < row && //diagonal cut cinit to cend
          column > size - row - 1; //diagonal cut cend to rinit
        const westArea =
          isEven(column) && //jump column
          row < size - column &&
          row > column + 1; //diagonal cut

        const drawSpiral = northArea || eastArea || southArea || westArea;
        //turn boolean into number
        return Number(drawSpiral);
      })
    );
  return spiral;
};
console.log(spiralize(8));
