/**Learning TypeScript. Classes & Interfaces. Implement interface methods
Overview
One of TypeScript’s core principles is that type-checking focuses on the shape that values have. 
This is sometimes called “duck typing” or “structural subtyping”.
 In TypeScript, interfaces fill the role of naming these types, and are a powerful way of defining contracts within 
 your code as well as contracts with code outside of your project. 
 Task
You are given an interface IGeometricFigure:

interface IGeometricFigure {
  Calculates area of the figure *
  area: () => number;
  Calculates perimeter of the figure 
  perimeter: () => number;
}
Your task is to implement classes Square and Circle:*/ 
interface IGeometricFigure {
  area: () => number;
  perimeter: () => number;
}

export class Square implements IGeometricFigure {
  value:number;
  constructor(value:number){
    this.value=value
  }
    area(){ return (this.value*this.value) };
  perimeter(){ return (this.value+this.value)*2 }

}

export class Circle implements IGeometricFigure {
    value:number;
  constructor(value:number){
    this.value=value
  }
  area(){ return (this.value*this.value)*Math.PI };
  perimeter(){ return this.value*2*Math.PI }

}
