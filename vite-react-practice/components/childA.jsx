function ChildA({count, setCount})
{
    return (
        <div>
            <h2>Child A</h2>
            <button onClick={()=>setCount(count+1)}>Increase</button>
        </div>
    );
}

export default ChildA;