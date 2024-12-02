import Layout from "../../components/Layout";
import Hero from "../../components/Hero";
import About from "../About";

const Home = () => {
  return (
    <>
      <Hero />
      <Layout>
        <div className="absolute top-20 left-0 pt-16 pl-4">
          <h1 className="font-bold text-xl text-white">
            Hola, soy Joaquin de Jesus Cruz Bravo.
          </h1>
          <small className="text-base text-white font-bold">
            Desarrollador web, amante del café, la tecnología, los videojuegos y fan de Oracle Red Bull Racing.
          </small>
        </div>
        <About />
      </Layout>
    </>
  );
};

export default Home;
