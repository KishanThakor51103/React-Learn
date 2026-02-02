function ToDo(){
    // Write JavaScript code here (function and variable)
    function funCall(){
        alert("Thank You");
    }
    function fruit(fruitName)
    {
        alert(fruitName);
    }
    return (
        <>
            {/* write HTML code only here  */}
            {/* 
            (1) In Javascript only function name replace by it's definition
            so when we write only function name that means we replace that funtion name
            with it's definition...
            (2) But when we call function that mean control goes to there where function 
            definition write...  */}
            {/* here we write only function name */}
            <button onClick={funCall}>Click Me</button>
            <br />
            <br />
            <button onClick={()=>fruit('APPLE')}>Fruit</button>
            {/* Q : but we only write function name which is replace by function definition 
            so when function need arguments then how pass that arguments ?
            Ans : For that we write aero function and In that aero function we call to 
            that function and pass arguments */}
            <hr />
        </>
    );
}

export default ToDo;