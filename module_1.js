
// import { simple } from "./module1.mjs";

// simple();

// import {simple2 as simple} from "./module1.mjs"

// simple();

// Now if we try to import simple without braces it will show error because we don't have any default 
// function 

// Used to import all modules from .mjs
import * as a1 from "./module1.mjs"

console.log(a1.simple());