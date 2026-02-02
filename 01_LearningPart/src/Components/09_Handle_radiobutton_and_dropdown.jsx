import { useState } from "react";
function HandleRadiobuttonAndDropdown() {

    const [gender,setGender] = useState('');
    const [city,setCity] = useState('');
    const handleGender = (event)=>{
        setGender(event.target.value);
    }     
    return (
        <>
            <h1>09_Handle_radiobutton_and_dropdown</h1>
            <h3>Your Gender: {gender}</h3> 
            <input type="radio" name="gender" id="male" value={'Male'} onChange={handleGender}/>
            <label htmlFor="male">Male</label>
            <input type="radio" name="gender" id="female" value={'Female'} onChange={handleGender}/>
            <label htmlFor="female">Female</label>

            <h4>Select City</h4>
            <select onChange={(event)=>setCity(event.target.value)}>
                <option value="">Enter Your City</option>
                <option value="Noida">Noida</option>
                <option value="Delhi">Delhi</option>
                <option value="Gujarat">Gujarat</option>
                <option value="Mumbai">Mumbai</option>
            </select>

            <h2>Your City : {city}</h2>
            <hr />
        </>
    );
}

export default HandleRadiobuttonAndDropdown