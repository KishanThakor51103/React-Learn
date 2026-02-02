import { useCallback, useEffect, useState } from "react";

function App() {
  const [length, setLength] = useState(6);
  const [numAllow, setNumAllow] = useState(false);
  const [charAllow, setCharAllow] = useState(false);
  const [password, setPassword] = useState("");

  // Generate Password
  const passwordGenerator = useCallback(() => {
    let pass = "";
    let chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

    if (numAllow) chars += "0123456789";
    if (charAllow) chars += "!@#$%^&*()_+-={}[]|:;<>,.?/~";

    for (let i = 0; i < length; i++) {
      const idx = Math.floor(Math.random() * chars.length);
      pass += chars[idx];
    }

    setPassword(pass);
  }, [length, numAllow, charAllow]);

  // Auto-generate when options change
  useEffect(() => {
    passwordGenerator();
  }, [length, numAllow, charAllow, passwordGenerator]);

  // Copy to clipboard
  const copyPassword = () => {
    navigator.clipboard.writeText(password);
  };

  return (
    <div className="flex justify-center pt-24">
      <div className="w-full max-w-xl px-6 py-6 rounded-2xl bg-gradient-to-r from-slate-800 to-slate-700 shadow-2xl">

        {/* White Password Box */}
        <div className="flex mb-6 rounded-xl overflow-hidden bg-white shadow-md">
          <input
            type="text"
            value={password}
            readOnly
            className="w-full px-5 py-3 text-lg text-orange-500 outline-none bg-white"
          />
          <button
            onClick={copyPassword}
            className="px-6 bg-blue-600 text-white font-semibold hover:bg-blue-700 transition"
          >
            copy
          </button>
        </div>

        {/* Controls */}
        <div className="flex items-center gap-4 text-orange-400 flex-wrap">

          {/* Length Slider */}
          <input
            type="range"
            min={6}
            max={30}
            value={length}
            onChange={(e) => setLength(Number(e.target.value))}
            className="cursor-pointer"
          />

          <span>Length ({length})</span>

          {/* Numbers */}
          <label className="flex items-center gap-1 cursor-pointer">
            <input
              type="checkbox"
              checked={numAllow}
              onChange={() => setNumAllow((prev) => !prev)}
            />
            Numbers
          </label>

          {/* Characters */}
          <label className="flex items-center gap-1 cursor-pointer">
            <input
              type="checkbox"
              checked={charAllow}
              onChange={() => setCharAllow((prev) => !prev)}
            />
            Characters
          </label>

        </div>

      </div>
    </div>
  );
}

export default App;
