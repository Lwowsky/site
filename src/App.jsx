import { Navigate, Route, Routes } from "react-router-dom";

import { ROUTES } from "./config/routes.js";
import { DEFAULT_LANGUAGE } from "./config/site.js";

import MainLayout from "./layouts/MainLayout.jsx";

import Home from "./pages/Home/Home.jsx";
import About from "./pages/About/About.jsx";
import Contact from "./pages/Contact/Contact.jsx";
import NotFound from "./pages/NotFound/NotFound.jsx";

function App() {
  return (
    <Routes>
      <Route
        path="/"
        element={<Navigate to={`/${DEFAULT_LANGUAGE}`} replace />}
      />

      <Route path="/:lang" element={<MainLayout />}>
        <Route index element={<Home />} />

        <Route path={ROUTES.about} element={<About />} />

        <Route path={ROUTES.contact} element={<Contact />} />

        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}

export default App;
