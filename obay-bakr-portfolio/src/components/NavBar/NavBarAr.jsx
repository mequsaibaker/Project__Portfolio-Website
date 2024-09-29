import { useState } from "react";
import DropdownList from "../DropdownList/DropdownList";
import NavListAr from "../NavListAr/NavListAr";
import "./NavBarAr.css";

const NavBarAr = ({ lang = "", onLangChange }) => {
  const [isLangDropdownVisible, setIsLangDropdownVisible] = useState(false);
  return (
    <nav className={"nav-bar " + lang}>
      <div className={"nav-items " + lang}>
        <NavListAr lang={lang} />
        <span
          className="en"
          onClick={() => setIsLangDropdownVisible(!isLangDropdownVisible)}
        >
          <span className="dd-title">
            {lang === "en" ? (
              <>
                <img src="caret-down-solid.svg" alt="" /> English
              </>
            ) : (
              <>
                عربي <img src="caret-down-solid.svg" alt="" />
              </>
            )}
          </span>
          {isLangDropdownVisible && (
            <div className={" " + lang}>
              <DropdownList onLangChange={onLangChange} />
            </div>
          )}
        </span>
      </div>
      <a href="#">
        <h4 className={lang === "en" ? "en" : ""}>
          {lang === "en" ? "DR. OBAY BAKER" : "د. أُبي بكر"}
        </h4>
      </a>
    </nav>
  );
};

export default NavBarAr;
