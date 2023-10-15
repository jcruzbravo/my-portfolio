import { useRoutes, BrowserRouter } from "react-router-dom";
import Home from "../Home";
import Projects from "../Projects";
import NotFound from "../../components/NotFound";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import "./App.css";
import Skills from "../../containers/Skills";


const AppRoutes = () => {
  const routes = useRoutes([
    {
      path: "/",
      element: <Home/>
    },
    {
      path: "/about",
      element: <Skills/>
    },
    {
      path: "/projects",
      element: <Projects/>
    },
    {
      path: "*",
      element: <NotFound/>
    }
  ]);

  return routes;
};

function App() {
  return( 
    <BrowserRouter>
      <Header/>
      <AppRoutes/>
      <Footer/>
    </BrowserRouter>
  );
}

export default App;
