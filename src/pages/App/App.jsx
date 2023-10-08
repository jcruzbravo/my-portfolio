import { useRoutes, BrowserRouter } from "react-router-dom";
import Home from "../Home";
import About from "../About";
import Projects from "../Projects";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import "./App.css";


const AppRoutes = () => {
  const routes = useRoutes([
    {
      path: "/",
      element: <Home/>
    },
    {
      path: "/about",
      element: <About/>
    },
    {
      path: "/projects",
      element: <Projects/>
    },
    // {
    //   path: "/resume",
    //   element: <Resume/>
    // },
    // {
    //   path: "*",
    //   element: <NotFound/>
    // }
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
