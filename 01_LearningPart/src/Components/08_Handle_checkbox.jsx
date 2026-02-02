import { useState } from "react";

function Handle_checkbox() {

    const [Skills,setSkills] = useState([]);

    const handleSkill = (event)=>{
        console.log(event.target.value,event.target.checked);
        if(event.target.checked)
        {
            setSkills([...Skills,event.target.value]);
        }
        else 
        {
            setSkills(Skills.filter((item)=>(item != event.target.value)));
        }
         
        console.log(Skills.toLocaleString());
    }
    return (
        <>
            <h1>08_Handle_checkbox</h1>
            <h3>Select Your Skills</h3>
            <input onChange={handleSkill} type="checkbox" id="php" value={'php'}/> 
            <label htmlFor="php">PHP</label>{/*Connect checkbox and label*/}
            <br />
            <input onChange={handleSkill} type="checkbox" id="javascript" value={'Javascript'}></input>
            <label htmlFor="javascript">JavaScript</label>
            <br />
            <input onChange={handleSkill} type="checkbox"  id="cpp" value={'cpp'}></input>
            <label htmlFor="cpp">C++</label>

            <p>{Skills.toString()}</p>
            <hr />
        </>
    );
}

export default Handle_checkbox