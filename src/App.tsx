import Loader from "components/atoms/Loader";
import Education from "components/organism/steps/Education";
import PersonalData from "components/organism/steps/PersonalData";
import Skills from "components/organism/steps/Skills";
import WorkExperience from "components/organism/steps/WorkExperience";
import { NewUserProvider } from "context/NewUserContext";
import { UsersProvider } from "context/UsersContext";
import { GlobalStyle } from "GlobalStyle";
import { lazy, Suspense } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

const Home = lazy(() => import("pages/home"));
const New = lazy(() => import("pages/new"));
const User = lazy(() => import("pages/user"));

const App = () => {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <Suspense fallback={<Loader centered />}>
        <UsersProvider>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route
              path="new"
              element={
                <NewUserProvider>
                  <New />
                </NewUserProvider>
              }
            >
              <Route path="personal-data" element={<PersonalData />} />
              <Route path="education" element={<Education />} />
              <Route path="work-experiences" element={<WorkExperience />} />
              <Route path="skills" element={<Skills />} />
            </Route>
            <Route path="users/:userId" element={<User />} />
          </Routes>
        </UsersProvider>
      </Suspense>
    </BrowserRouter>
  );
};

export default App;
