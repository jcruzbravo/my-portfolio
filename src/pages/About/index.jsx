import Layout from "../../components/Layout";

const About = () => {
  return (
    <Layout>
      <section className="bg-gray-100 mt-8">
        <div className="container mx-auto py-16 px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 items-center gap-8">
            <div className="max-w-lg">
              <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
                Joaquin de Jesus Cruz Bravo
              </h2>
              <p className="mt-4 text-gray-600 text-lg">
                Tengo más de 1 año de experiencia laboral en desarrollo web, me
                he especializado en frontend haciendo uso de tecnologías,
                frameworks y librerías clave como JavaScript, Angular, Vue y
                React. Mi enfoque principal sigue siendo el aprendizaje
                constante y la aplicación práctica de mis conocimientos para
                ofrecer resultados de calidad.
              </p>
              <p className="mt-4 text-gray-600 text-lg">
                Actualmente trabajo como desarrollador web fullstack.
              </p>
            </div>
            <div className="mt-12 md:mt-0 max-w-md">
              <img
                src="https://images.unsplash.com/photo-1531973576160-7125cd663d86"
                alt="About Us Image"
                className="object-cover rounded-lg shadow-md"
              />
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default About;
