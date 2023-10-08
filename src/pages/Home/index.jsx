import Layout from "../../components/Layout";
const Home = () => {
  return (
    <Layout>
      <div className="flex flex-col items-center justify-center w-full h-full">
        <div className="bg-hero-pattern h-96 w-full bg-no-repeat bg-size-cover">
          Hola
        </div>
        <h1 className="font-medium text-xl">Hola, soy Joaquin de Jesus Cruz Bravo.</h1>
        <p className="text-lg">Soy desarrollador web frontend.</p>
      </div>
    </Layout>
  );
};

export default Home;
