
const getHorizontalCombination = (
    griddy: string[][],
    rowIndex: number,
    columnIndex: number
): string[] => {
    const output: string[] = [];
    if (columnIndex == 0) {
        for (let index = 0; index < griddy.length; index++) {
            output.push(griddy[index][rowIndex]);
        }
        return output;
    }
    return output;
}
const getVerticalCombination = (
    griddy: string[][],
    rowIndex: number,
    columnIndex: number
): string[] => {
    const output: string[] = [];
    if (rowIndex == 0) {
        for (let index = 0; index < griddy.length; index++) {
            output.push(griddy[index][columnIndex]);
        }
        return output;
    }
    return output;
}

const getDiagonalCombination = (
    griddy: string[][],
    rowIndex: number,
    columnIndex: number
): string[] => {
    const output: string[] = [];
    const topLeft = rowIndex == 0 && columnIndex == 0;
    const topRight = columnIndex == griddy.length - 1 && rowIndex == 0;
    if (topLeft) {
        for (let index = 0; index < griddy.length; index++) {
            output.push(griddy[rowIndex][columnIndex]);
            rowIndex += 1;
            columnIndex += 1;
        }
        return output;
    }
    if (topRight) {
        for (let index = 0; index < griddy.length; index++) {
            output.push(griddy[rowIndex][columnIndex]);
            rowIndex += 1;
            columnIndex -= 1;
        }
        return output;
    }
    return output;
};

export const getGridFor = (numberOfColumns: number): string[][] => {
    const grid: string[][] = [];
    let row: string[] = [];
    for (let rowIndex = 1; rowIndex <= numberOfColumns; rowIndex++) {
        for (let columnIndex = 1; columnIndex <= numberOfColumns; columnIndex++) {
            row.push(`${rowIndex}_${columnIndex}`);
        }
        grid.push(row);
        row = [];
    }
    return grid;
}
export const getWinningCombinationFor = (numberOfColumns: number): string[][] => {
    const grid = getGridFor(numberOfColumns);
    const result: string[][] = [];
    for (let rowIndex = 0; rowIndex < grid.length; rowIndex++) {
        const row = grid[rowIndex];
        for (let columnIndex = 0; columnIndex < row.length; columnIndex++) {
            const cell = row[columnIndex];
            const horizontalPossibleCombination = getHorizontalCombination(
                grid,
                rowIndex,
                columnIndex
            );
            const diagonalPossibleCombination = getDiagonalCombination(
                grid,
                rowIndex,
                columnIndex
            );
            const verticalPossibleCombination = getVerticalCombination(
                grid,
                rowIndex,
                columnIndex
            );
            if (horizontalPossibleCombination.length) {
                result.push(horizontalPossibleCombination);
            }
            if (verticalPossibleCombination.length) {
                result.push(verticalPossibleCombination);
            }
            if (diagonalPossibleCombination.length) {
                result.push(diagonalPossibleCombination);
            }
        }
    }
    return result;
};
