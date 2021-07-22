import { getGridFor, getWinningCombinationFor } from "./gridHelper"

describe('Grid Helper', () => {
    it('should return grid for 3 X 3', () => {
        expect(getGridFor(3)).toStrictEqual([["1_1", "1_2", "1_3"], ["2_1", "2_2", "2_3"], ["3_1", "3_2", "3_3"]])
    })
    it('should return winning combination for 3 X 3', () => {
        expect(getWinningCombinationFor(3)).toStrictEqual([
            [
                "1_1",
                "2_1",
                "3_1"
            ],
            [
                "1_1",
                "2_1",
                "3_1"
            ],
            [
                "1_1",
                "2_2",
                "3_3"
            ],
            [
                "1_2",
                "2_2",
                "3_2"
            ],
            [
                "1_3",
                "2_3",
                "3_3"
            ],
            [
                "1_3",
                "2_2",
                "3_1"
            ],
            [
                "1_2",
                "2_2",
                "3_2"
            ],
            [
                "1_3",
                "2_3",
                "3_3"
            ]
        ])
    })
})