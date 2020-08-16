// Your code here
class Polygon {
  constructor(sides) {
    this.sides = sides;
  }
  get countSides() {
    return this.sides.length;
  }
  get perimeter() {
    let sum = 0;
    sides.forEach( item =>  sum += this.item);
    return sum;
  }
}
let polygon = new Polygon([5, 5, 5]);
polygon.countSides;
console.log(polygon.perimeter);