// What is Props ? : when we want to pass data from one component to another component then 
// we use props and that datas are anything(variable,function,array,object)

import { Children } from "react";

// props are one type of parameter we can say it's not exactly parametet but we can say that

// Small Example : 
/*
    function Fruits(fruit1, fruit2)

    we pass props when we use this component in our file
    <Fruits fruit1 = "Apple" fruit2 = "Banana"></Fruits>

    This is called props

*/

// we can give defualt value to props
function User({name ='New User',age,country}){

    return (
        <>
            <p>My name is {name}. <br />My age is {age}. <br />I am from {country}.</p>
            <hr />
        </>
    );
}

// Everything we write in Wrapper tag in App.jsx it's consider as children 
export function Wrapper({children}){

    return (
        <>
            <h1 style={{color:'green',border:"2px solid red",width:'230px'}}>
                {children}
            </h1>
            <hr />
        </>
    );
}
export default User;