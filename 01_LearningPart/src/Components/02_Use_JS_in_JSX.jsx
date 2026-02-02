function VariableUse(){
    const Name = "Kishan Thakor From VariableUse";
    const fun = function (){
        return "Hello from fun";    
    }
    return (
        <>
            {/* How to use variable here */}
            <h1>{Name}</h1>
            <h2>{fun()}</h2>
            <hr />
        </>
    )
};
export default VariableUse;