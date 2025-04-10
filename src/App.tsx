import { Route, Routes } from "react-router";
import "./App.css";
import { MainPage } from "./pages/MainPage";
import { GroupsPage } from "./pages/GroupsPage";
import { GroupsInfoPage } from "./pages/GroupsInfoPage";
import { TeachersPage } from "./pages/TeachersPage";
import { TeachersInfoPage } from "./pages/TeachersInfoPage";
import { Header } from "./components/Header/Header";

function App() {
  return (
    <div className="app">
      <div className="container">
        <div className="app__wrapper">
          <Header />
          <main className="content">
            <Routes>
              <Route path="/" element={<MainPage />} />
              <Route path="/groups" element={<GroupsPage />} />
              <Route path="/groups/:groupId" element={<GroupsInfoPage />} />
              <Route path="/teachers" element={<TeachersPage />} />
              <Route
                path="/teachers/:teacherId"
                element={<TeachersInfoPage />}
              />
            </Routes>
          </main>
        </div>
      </div>
    </div>
  );
}

export default App;
