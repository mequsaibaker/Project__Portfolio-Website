import "./DropdownList.css";

const langs = ["عربي", "English"];

const DropdownList = ({ onLangChange }) => {
  return (
    <ul className="drop-down ">
      {langs.map((langItem) => {
        return <li onClick={() => onLangChange(langItem)}>{langItem}</li>;
      })}
    </ul>
  );
};

export default DropdownList;
