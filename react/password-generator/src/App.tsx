import { CopyIcon } from "lucide-react";
import { useEffect, useState } from "react";
import { copyToClipboard } from "./utils/clipboard";
import {
  DEFAULT_PASSWORD_OPTIONS,
  generatePassword,
  type PasswordOptions,
} from "./utils/password";

type Strength = "Easy" | "Medium" | "Hard";

const App = () => {
  const [password, setPassword] = useState<string>("");
  const [passwordOptions, setPasswordOptions] = useState<PasswordOptions>(
    DEFAULT_PASSWORD_OPTIONS
  );
  const [strength, setStrength] = useState<Strength>("Easy");

  const { length, lowercase, numbers, symbols, uppercase } = passwordOptions;

  useEffect(() => {
    setPassword(generatePassword({ ...DEFAULT_PASSWORD_OPTIONS }));
  }, []);

  const handlePasswordOptionsChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    const { id, value, checked } = e.target;
    let finalValue: boolean | number;
    if (parseInt(value)) {
      finalValue = parseInt(value);
    } else if (checked || checked === false) {
      finalValue = checked;
    }
    setPasswordOptions((prev) => ({ ...prev, [id]: finalValue }));
    if (length < 12) {
      setStrength("Easy");
    } else if (length < 24) {
      setStrength("Medium");
    } else {
      setStrength("Hard");
    }
  };

  const handleGeneratePassword = () => {
    setPassword(generatePassword({ ...passwordOptions }));
  };

  const handleCopyPassword = async () => {
    await copyToClipboard(password);
  };

  return (
    <div className="bg-gray-800 h-[500px] w-[700px] rounded-md text-white p-8 space-y-8">
      {/* header */}
      <div className="flex items-center justify-center gap-4 text-xl">
        <div className="border border-white py-2 px-4 w-full rounded h-12 overflow-x-scroll no-scrollbar">
          {password}
        </div>
        {/* copy button */}
        <button
          className="size-12 bg-green-600 rounded cursor-pointer hover:bg-green-500 transition"
          onClick={handleCopyPassword}
        >
          <CopyIcon className="w-full" />
        </button>
      </div>
      {/* length */}
      <div className="flex items-center justify-between text-xl">
        <h1>Character Length</h1>
        <h2>{length}</h2>
      </div>
      {/* length slider */}
      <input
        type="range"
        name="length"
        id="length"
        className="w-full"
        min={8}
        max={128}
        value={length}
        onChange={handlePasswordOptionsChange}
      />
      {/* additional options */}
      <div className="grid grid-rows-2 grid-cols-2 gap-4">
        {/* uppercase */}
        <div className="flex justify-start items-center gap-2 text-xl">
          <input
            type="checkbox"
            name="uppercase"
            id="uppercase"
            className="size-5"
            checked={uppercase}
            onChange={handlePasswordOptionsChange}
          />
          <h2>Include Uppercase Letters</h2>
        </div>
        {/* lowercase */}
        <div className="flex justify-start items-center gap-2 text-xl">
          <input
            type="checkbox"
            name="lowercase"
            id="lowercase"
            className="size-5"
            checked={lowercase}
            onChange={handlePasswordOptionsChange}
          />
          <h2>Include Lowercase Letters</h2>
        </div>
        {/* numbers */}
        <div className="flex justify-start items-center gap-2 text-xl">
          <input
            type="checkbox"
            name="numbers"
            id="numbers"
            className="size-5"
            checked={numbers}
            onChange={handlePasswordOptionsChange}
          />
          <h2>Include Numbers</h2>
        </div>
        {/* symbols */}
        <div className="flex justify-start items-center gap-2 text-xl">
          <input
            type="checkbox"
            name="symbols"
            id="symbols"
            className="size-5"
            checked={symbols}
            onChange={handlePasswordOptionsChange}
          />
          <h2>Include Symbols</h2>
        </div>
      </div>
      {/* strength */}
      <div className="flex items-center justify-between text-xl">
        <h1>Strength</h1>
        <h2>{strength}</h2>
      </div>

      {/* generate password */}
      <button
        className="bg-green-600 hover:bg-green-500 w-full text-2xl p-4 cursor-pointer transition"
        onClick={handleGeneratePassword}
      >
        Generate Password
      </button>
    </div>
  );
};

export default App;
