import { TodoItem } from "./tofoİtem";

export class Model{
  name : string;
  items: TodoItem[];

  constructor(){
    this.name = "Kadriye";
    this.items = [
      { description: "spor", action:"yes"},
  { description: "alışveriş", action:"no"},
  {  description: "Kahvaltı", action:"yes"}

    ];
  }

}
const m = new Model();
