import Layout from "../../components/Layout";
import Hero from "../../components/Hero";
import About from "../About";

const Home = () => {
  return (
    <>
      <Hero />
      <Layout>
        <div className="absolute top-20 left-0 pt-10 pl-4">
          <h1 className="font-medium text-xl text-white">
            Hola, soy Joaquin de Jesus Cruz Bravo.
          </h1>
          <p className="text-base text-white">Desarrollador Frontend.</p>
        </div>
        <About />
        <hr className="w-2/3 h-px my-8 bg-gray-200 border-0 dark:bg-gray-700" />
      </Layout>
    </>
  );
};

export default Home;
