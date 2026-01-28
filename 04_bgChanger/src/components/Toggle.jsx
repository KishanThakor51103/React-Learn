import { useState } from "react";

function Toggle() {
  const [show, setShow] = useState(true);

  function toggleText() {
    setShow(!show);
  }

  return (
    <div>
      <button onClick={toggleText}>
        {show ? "Hide" : "Show"}
      </button>

      {show && <p>This text is visible</p>}
    </div>
  );
}

export default Toggle;
