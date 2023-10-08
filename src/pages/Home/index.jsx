import Layout from "../../components/Layout";
import Hero from "../../components/Hero";
import About from "../../containers/About";

const Home = () => {
  return (
    <>
      <Hero />
      <Layout>
        <div className="absolute top-20 left-0 z-10 pt-10 pl-4">
          <h1 className="font-medium text-xl text-white">
            Hola, soy Joaquin de Jesus Cruz Bravo.
          </h1>
          <p className="text-base text-white">Desarrollador web frontend.</p>
        </div>
        <About/>
      </Layout>
    </>
  );
};

export default Home;
