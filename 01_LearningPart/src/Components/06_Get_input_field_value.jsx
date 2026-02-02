import { useState } from "react";
function InputText(){
    const [value,setValue] = useState('');    
    return(
        <>    
            <h1>This is Input and Remove Task</h1>
            <input type="text" value={value} onChange={(event)=>setValue(event.target.value)} placeholder="Enter Your Name" />
            <p>{value}</p>
            <button onClick={() => setValue('')}>Remove Task</button>
            <hr />
        </>
    );
}

export default InputText;