import React from "react";

interface GraphDemoProps {
  // Add props here if needed
}
export interface Person {
  id: number;
  name: string;
  email: string;
}

export class Person {
  id: number;
  name: string;
  email: string;

  constructor(id: number, name: string, email: string) {
    this.id = id;
    this.name = name;
    this.email = email;
  }
  static fromJson(json: any): Person {
    return new Person(json.id, json.name, json.email);
  }
  toJson(): any {
    return {
      id: this.id,
      name: this.name,
      email: this.email,
    };
  }
}

const GraphDemo: React.FC<GraphDemoProps> = () => {
  return (
    <div className="graph-demo">
      <h2>Graph Demo</h2>
      {/* Add your graph components here */}
    </div>
  );
};

export default GraphDemo;
