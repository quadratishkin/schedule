import { BrowserRouter, Route, Routes } from "react-router";
import "./App.css";
import { MainPage } from "./pages/MainPage";
import { GroupsPage } from "./pages/GroupsPage";
import { GroupsInfoPage } from "./pages/GroupsInfoPage";
import { TeachersPage } from "./pages/TeachersPage";
import { TeachersInfoPage } from "./pages/TeachersInfoPage";
import { Header } from "./components/Header/Header";

function App() {
  return (
    <BrowserRouter>
      <div className="app">
        <div className="container">
          <div className="app__wrapper">
            <Header />
            <main className="content">
              <Routes>
                <Route path="/schedule" element={<MainPage />} />
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
