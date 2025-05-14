import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router";
import "./Header.scss";
import LOGO from "../../images/Logo.png";

export const Header = () => {
  const [currentPage, setCurrentPage] = useState("main");
  const currentPageStr = useLocation();
  useEffect(() => {
    if (currentPageStr.pathname.includes("groups")) {
      setCurrentPage("groups");
    } else if (currentPageStr.pathname.includes("teachers")) {
      setCurrentPage("teachers");
    } else {
      setCurrentPage("main");
    }
  }, [currentPageStr]);

  return (
    <header className="header">
      <img
        className="header__image"
        src={LOGO}
        alt="Логотип Челябинского Государственного Университета"
      />

      <nav className="navMenu">
        {currentPage === "main" ? (
          <Link
            className="navMenu__text navMenu__text--center navMenu__text--active"
            to={"/"}
          >
            Главная
          </Link>
        ) : (
          <Link className="navMenu__text navMenu__text--center" to={"/"}>
            Главная
          </Link>
        )}

        {currentPage === "groups" ? (
          <Link className="navMenu__text navMenu__text--active" to={"/groups"}>
            Расписание групп
          </Link>
        ) : (
          <Link className="navMenu__text" to={"/groups"}>
            Расписание групп
          </Link>
        )}

        {currentPage === "teachers" ? (
          <Link
            className="navMenu__text navMenu__text--active"
            to={"/teachers"}
          >
            Расписание преподавателей
          </Link>
        ) : (
          <Link className="navMenu__text" to={"/teachers"}>
            Расписание преподавателей
          </Link>
        )}
      </nav>
    </header>
  );
};
