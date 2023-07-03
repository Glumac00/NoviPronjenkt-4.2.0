import { Route, Routes } from "react-router-dom";
import Home from "./features/home";
import Contact from "./features/contact";
import Layout from "./components/layout";
import NoMatch from "./features/nomatch";
import "./styles/styles.scss";
import ProgressBar from "./features/progressbar";
import LoaderPage from "./features/loader/loader-page";
import SelectPage from "./features/select/select-page";
import Animals from "./features/animals/animals";
import NewAnimal from "./features/animals/newAnimal";
import AnimalEdit from "./features/animals/animalEdit";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="contact" element={<Contact />} />
          <Route path="progress-bar" element={<ProgressBar value={25} />} />
          <Route path="loader" element={<LoaderPage />} />
          <Route path="select" element={<SelectPage />} />

          <Route path="animals" element={<Animals />} />
          <Route path="animals/new" element={<NewAnimal />} />
          <Route path="animals/:animalId" element={<AnimalEdit />} />
          {/* Using path="*" means "match anything", so this route
                acts like a catch-all for URLs that we don't have explicit
                routes for. */}
          <Route path="*" element={<NoMatch />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
