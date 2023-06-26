import {
  Route,
  RouterProvider,
  Routes,
  createBrowserRouter,
} from "react-router-dom";
import Home from "./features/home";
import Contact from "./features/contact";
import Layout from "./components/layout";
import NoMatch from "./features/nomatch";
import "./styles/styles.scss";
import ProgressBar from "./features/progressbar";
import LoaderPage from "./features/loader/loader-page";
import SelectPage from "./features/select/select-page";
import Animals from "./features/animals/animals";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/contact",
      element: <Contact />,
    },
    {
      path: "/loader",
      element: <LoaderPage />,
    },
  ]);
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="contact" element={<Contact />} />
          <Route path="progress-bar" element={<ProgressBar value={90} />} />
          <Route path="loader" element={<LoaderPage />} />
          <Route path="select" element={<SelectPage />} />
          <Route path="animals" element={<Animals />} />
          <Route path="*" element={<NoMatch />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
