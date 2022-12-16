export class TriangleClassifier {
    static isTriangle(firstSide: number, secondSide: number, thirdSide: number) {
        if (firstSide + secondSide > thirdSide && firstSide + thirdSide > secondSide && secondSide + thirdSide > firstSide)
            return true
        else return false;
    }

    static isIsoscelesTriangle(firstSide: number, secondSide: number, thirdSide: number) {
        if (firstSide == secondSide && firstSide !== thirdSide || firstSide == thirdSide && firstSide !== secondSide || secondSide == thirdSide && thirdSide !== secondSide)
            return true
        else return false;
    }

    static isEquilateralTriangle(firstSide: number, secondSide: number, thirdSide: number) {
        if (firstSide == secondSide && firstSide == thirdSide)
            return true
        else return false;
    }

    static isStandardTriangle(firstSide: number, secondSide: number, thirdSide: number) {
        if (firstSide !== secondSide && firstSide !== thirdSide && secondSide !== thirdSide)
            return true
        else return false;
    }

    static checkTriangle(firstSide: number, secondSide: number, thirdSide: number) {
        if (this.isTriangle(firstSide, secondSide, thirdSide)) {
            if(this.isIsoscelesTriangle(firstSide, secondSide, thirdSide)) {
                return 'This is Isosceles Triangle'
            }
            else if(this.isEquilateralTriangle(firstSide, secondSide, thirdSide)) {
                return 'This is Equilateral Triangle'
            }
            else {
                return 'This is Standard Triangle'
            }
        }
        else {
            return 'This is not Triangle'
        }
    }
}