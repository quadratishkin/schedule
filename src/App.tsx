import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import "./App.css";
import { MainPage } from "./pages/MainPage";
import { GroupsPage } from "./pages/GroupsPage";
import { GroupsInfoPage } from "./pages/GroupsInfoPage";
import { TeachersPage } from "./pages/TeachersPage";
import { TeachersInfoPage } from "./pages/TeachersInfoPage";

function App() {
  return (
    <BrowserRouter>
      <div className="app">
        <div className="container">
          <div className="app__wrapper">
            <h1 className="app__header">
              Расписание Челябинского Государственного Университета
            </h1>

            <nav className="navMenu">
              <Link
                className="navMenu__text navMenu__text--center"
                to={"/schedule/"}
              >
                Главная
              </Link>
              <Link className="navMenu__text" to={"/schedule/groups"}>
                Расписание групп
              </Link>
              <Link className="navMenu__text" to={"/schedule/teachers"}>
                Расписание преподавателей
              </Link>
            </nav>

            <main className="content">
              <Routes>
                <Route path="/schedule/" element={<MainPage />} />
                <Route path="/schedule/groups" element={<GroupsPage />} />
                <Route
                  path="/schedule/groups/:groupId"
                  element={<GroupsInfoPage />}
                />
                <Route path="/schedule/teachers" element={<TeachersPage />} />
                <Route
                  path="/schedule/teachers/:teacherId"
                  element={<TeachersInfoPage />}
                />
              </Routes>
            </main>
          </div>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
