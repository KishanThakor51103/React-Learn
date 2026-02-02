// Control component is a form whose input field value is control by react's state...
//->>> 
// Here's how it works :
// -> store input field value in state
// -> use change handler with input field
// -> value attribut attached with state

import { useState } from "react";

// Benefits : 
    // (1) Single Source of Truth
    // (2) Validation and manipulation Before submit 
    // (3) Dynamic Updates values


function Control_comp(){

    const [name,setName] = useState('');
    const [password,setPassword] = useState('');
    const [email,setEmail] = useState(''); 
    return(
        <>
            <h1>Contorl Component</h1>
            <form action="" method="get">
                <input type="text" value={name} placeholder="Enter Name" onChange={(event)=>setName(event.target.vaue)}/><br />
                <input type="password" value= {password} placeholder="Enter Password" onChange={(event)=>setPassword(event.target.value)}/><br />
                <input type= "email" value={email} placeholder="Enter Email" onChange={(event)=>setEmail(event.target.value)}/><br/><br/>
                <button>SUBMIT</button>
                <button onClick={()=>{setName('');setEmail(''),setPassword('')  }}>Clear</button>

            </form>
            <hr />
        </>
    );
}

export default Control_comp;