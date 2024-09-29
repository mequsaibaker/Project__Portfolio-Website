import "./NavListAr.css";

const navs = ["تواصل معي", "نبذة عني", "مقالات"];
const links = ["#", "#", "#"];

const navsEn = ["Articles", "About Me", "Contact Me"];
const linksEn = ["#", "#", "#"];

const NavListAr = ({ lang = "" }) => {
  function getNavList() {
    if (lang === "en") {
      return navsEn.map((navItem, ind) => {
        return (
          <li>
            <a href={linksEn[ind]}>{navItem}</a>
          </li>
        );
      });
    } else {
      return navs.map((navItem, ind) => {
        return (
          <li>
            <a href={links[ind]}>{navItem}</a>
          </li>
        );
      });
    }
  }

  return <ul className="nav-list">{getNavList()}</ul>;
};

export default NavListAr;
