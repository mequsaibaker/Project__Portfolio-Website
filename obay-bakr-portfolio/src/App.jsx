import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import NavListAr from "./components/NavListAr/NavListAr";
import NavBarAr from "./components/NavBar/NavBarAr";
import DropdownList from "./components/DropdownList/DropdownList";

function App() {
  const [lang, setLang] = useState("");

  function handleLangChange(langItem) {
    if (langItem === "English") {
      setLang("en");
    } else {
      setLang("");
    }
  }

  return (
    <>
      <NavBarAr lang={lang} onLangChange={handleLangChange} />
    </>
  );
}

export default App;
