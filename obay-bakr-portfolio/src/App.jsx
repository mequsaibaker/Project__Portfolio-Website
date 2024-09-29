import { useState } from "react";
import "./App.css";
import NavBarAr from "./components/NavBar/NavBarAr";

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
