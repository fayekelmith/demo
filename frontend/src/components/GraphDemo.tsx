import { useEffect } from "react";

// Class definition
export class Animal {
  name: string;
  constructor(name: string) {
    this.name = name;
  }
  speak() {
    return `${this.name} makes a noise.`;
  }
}

// Instance of class
const dog = new Animal("Rex");

// Function using instance
export function getDogName() {
  return dog.name;
}

// Function calling a method
export function makeDogSpeak() {
  return dog.speak();
}

// Variable assignment
const greeting = "Hello, world!";

// Function using variable
export function getGreeting() {
  return greeting;
}

// Function calling another function
export function getDogGreeting() {
  return `${getGreeting()} Meet ${getDogName()}`;
}

// React component using everything
export default function GraphDemo() {
  useEffect(() => {
    console.log(makeDogSpeak());
    console.log(getDogGreeting());
  }, []);
  return <div>Graph Demo</div>;
}
