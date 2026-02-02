// Q : what is different between hooks and variables
// Ans : hooks are functions and after execution of hooks your page will re-render(refresh)
//       variables are counters and after execution of variables your page will not refresh

import { useState } from "react";

function Statefruit(){

    const [fruit,setFruit] = useState("Apple")
    const changeFruit = ()=>{
        setFruit('Banana');
    }
    return (
        <>
            <h1>This is {fruit}</h1>
            <button onClick={changeFruit}>Change Fruit</button>
            <hr />
        </>
    );
}


export function Counter(){
    const [counter, setcounter] = useState(0);
    const increase = ()=>{
        setcounter(prevcounter=>prevcounter+1);
    }
    const decrease = ()=>{
        setcounter(prevcounter=>prevcounter-1);
    }
    return (
        <>
            <h1>Counter : {counter}</h1>
            <button onClick={increase} >+</button>
            <button onClick={decrease}>-</button>
            <hr />
        </>
    );
}
export default Statefruit;

