import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import "./Header.scss";

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
      <h1 className="app__header">
        Расписание Челябинского Государственного Университета
      </h1>

      <nav className="navMenu">
        {currentPage === "main" ? (
          <Link
            className="navMenu__text navMenu__text--center navMenu__text--active"
            to={"/schedule"}
          >
            Главная
          </Link>
        ) : (
          <Link
            className="navMenu__text navMenu__text--center"
            to={"/schedule"}
          >
            Главная
          </Link>
        )}

        {currentPage === "groups" ? (
          <Link
            className="navMenu__text navMenu__text--active"
            to={"/schedule/groups"}
          >
            Расписание групп
          </Link>
        ) : (
          <Link className="navMenu__text" to={"/schedule/groups"}>
            Расписание групп
          </Link>
        )}

        {currentPage === "teachers" ? (
          <Link
            className="navMenu__text navMenu__text--active"
            to={"/schedule/teachers"}
          >
            Расписание преподавателей
          </Link>
        ) : (
          <Link className="navMenu__text" to={"/schedule/teachers"}>
            Расписание преподавателей
          </Link>
        )}
      </nav>
    </header>
  );
};
