// import { v4 as uuid } from "uuid";
const { v4: uuidv4 } = require('uuid');
export const todos = [
    { 
    text: "go to gym", 
    id: uuidv4(),
    isComplete: false
    },
    { 
    text: "do laundry", 
    id: uuidv4(),
    isComplete: true 
    },
    { 
    text: "food shopping", 
    id: uuidv4(),
    isComplete: false 
    },
    { 
    text: "do homework", 
    id: uuidv4(),
    isComplete: false
    }
];