import { useState } from "react";

function Toggle() {
  const [isVisible, setIsVisible] = useState(false);

  const handleToggle = () => {
    setIsVisible(prev => !prev);
  };

  return (
    <div>
        <h1>04_toggleComp</h1>
      <button onClick={handleToggle}>
        {isVisible ? "Hide" : "Show"} Text
      </button>

      {isVisible && <p>This text is now visible 👀</p>}
      <hr />
    </div>
  );
}

export default Toggle;

// multiple conditionn 
export function MultiCondition() {

    const [counter,setCounter] = useState(0);

    function increase(){
        setCounter(prev => prev + 1);
    }
    return (
        <>
            <h1>04_toggleComp</h1>
            <button onClick={increase}>Inc Value</button>
            {
                counter === 0 ? <h1>Condition 1</h1> :
                counter === 1 ? <h1>Condition 2</h1> :
                counter === 2 ? <h1>Condition 3</h1> : 
                <h1>Condition Greater than 3</h1>
            }
            <hr />
        </>
    );
}