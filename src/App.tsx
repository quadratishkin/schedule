import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import "./App.css";
import { MainPage } from "./pages/MainPage";
import { GroupsPage } from "./pages/GroupsPage";
import { GroupsInfoPage } from "./pages/GroupsInfoPage";

function App() {
  return (
    <BrowserRouter>
      <div className="app">
        <div className="container">
          <h1 className="app__header">
            Расписание Челябинского Государственного Университета
          </h1>

          <nav className="navMenu">
            <Link className="navMenu__text navMenu__text--center" to={"/"}>
              Главная
            </Link>
            <Link className="navMenu__text" to={"/groups"}>
              Расписание групп
            </Link>
            <Link className="navMenu__text" to={"/teachers"}>
              Расписание преподавателей
            </Link>
          </nav>

          <main className="content">
            <Routes>
              <Route path="/" element={<MainPage />} />
              <Route path="/groups" element={<GroupsPage />} />
              {/* <Route path="/users/:userId" element={<UserInfoPage />} /> */}
              {/* <Route path="/teachers" element={<TeachersPage />} /> */}
              <Route path="/groups/:groupId" element={<GroupsInfoPage />} />
            </Routes>
          </main>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
