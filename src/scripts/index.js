import {text} from "./test"
import "../index.html";
import "../styles/index.scss";

const fn = () =>{
    console.log("I am learning Webpack");
}
fn();

console.log(text);

class X {
    constructor(){
        this.a = 10;
    }
    text(){
        console.log(this.a);
    }
 
}

let x = new X();
x.text();