import { number } from 'yargs';
import { TriangleClassifier } from '../TriangleClassifier';

describe('Check Triangle', () => {
        test('Case 222', () => {
                let firstSide = 2;
                let secondSide = 2;
                let thirdSide = 2;
                let expected = 'This is Equilateral Triangle'
                expect(TriangleClassifier.checkTriangle(firstSide, secondSide, thirdSide)).toEqual(expected)
            }
        )

        test('Case 223', () => {
                let firstSide = 2;
                let secondSide = 2;
                let thirdSide = 3;
                let expected = 'This is Isosceles Triangle'
                expect(TriangleClassifier.checkTriangle(firstSide, secondSide, thirdSide)).toEqual(expected)
            }
        )

        test('Case 345', () => {
                let firstSide = 3;
                let secondSide = 4;
                let thirdSide = 5;
                let expected = 'This is Standard Triangle'
                expect(TriangleClassifier.checkTriangle(firstSide, secondSide, thirdSide)).toEqual(expected)
            }
        )

        test('Case 823', () => {
                let firstSide = 8;
                let secondSide = 2;
                let thirdSide = 3;
                let expected = 'This is not Triangle'
                expect(TriangleClassifier.checkTriangle(firstSide, secondSide, thirdSide)).toEqual(expected)
            }
        )

        test('Case -121', () => {
                let firstSide = -1;
                let secondSide = 2;
                let thirdSide = 1;
                let expected = 'This is not Triangle'
                expect(TriangleClassifier.checkTriangle(firstSide, secondSide, thirdSide)).toEqual(expected)
            }
        )

        test('Case 011', () => {
                let firstSide = 0;
                let secondSide = 1;
                let thirdSide = 1;
                let expected = 'This is not Triangle'
                expect(TriangleClassifier.checkTriangle(firstSide, secondSide, thirdSide)).toEqual(expected)
            }
        )
    }
)