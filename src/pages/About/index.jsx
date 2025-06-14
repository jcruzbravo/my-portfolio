import Layout from "../../components/Layout";

const About = () => {
  return (
    <Layout>
      <section className="bg-gray-100">
        <div className="container mx-auto py-4 px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-1 items-center gap-8 p-2">
            <div className="max-w-lg">
              <p className="mt-4 text-gray-600 text-lg">
                Tengo más de dos años de experiencia laboral creando soluciones
                dinámicas y eficientes. Me especializo en frontend usando
                JavaScript, Vue, Angular y React.
              </p>

              <p className="mt-4 text-gray-600 text-lg">
                Me apasiona diseñar interfaces intuitivas y
                desarrollar funcionalidades robustas que aporten valor real.
                Siempre busco aprender nuevas tecnologías y mejorar mis habilidades para entregar proyectos de alta calidad,
                colaborando de manera efectiva en equipos multidisciplinarios.
              </p>
              <p className="mt-4 text-gray-600 text-lg">
                Actualmente, trabajo como desarrollador web fullstack,
                utilizando principalmente PHP, Laravel, Filament PHP, Vue y JavaScript.
              </p>
            </div>
            <div className="md:mt-0 max-w-xs">
              <img
                src="https://res.cloudinary.com/dubztfhgv/image/upload/v1697405298/foto_xt1z1d.jpg"
                alt="Me"
                className="object-cover rounded-lg shadow-md w-100"
              />
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default About;
