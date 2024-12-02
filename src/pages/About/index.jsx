import Layout from "../../components/Layout";

const About = () => {
  return (
    <Layout>
      <section className="bg-gray-100">
        <div className="container mx-auto py-4 px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-1 items-center justify-items-center gap-8 p-2">
            <div className="max-w-sm">
              <p className="mt-4 text-gray-600 text-md w-100">
                Tengo 2 años de experiencia laboral en desarrollo web, con un
                enfoque especializado en frontend. He cultivado habilidades
                sólidas en tecnologías, frameworks y librerías clave como
                JavaScript, Angular, Vue y React. Aunque también tengo
                experiencia en funciones fullstack, mi pasión y destreza
                principal residen en el frontend. Mi compromiso central sigue
                siendo el aprendizaje continuo y la aplicación práctica de mis
                conocimientos para ofrecer resultados de calidad.
              </p>
              <p className="mt-4 text-gray-600 text-md w-100">
                Actualmente me desempeño como desarrollador web fullstack, centrándome en el uso de tecnologias como Vue.js, Filamentphp, Laravel y Docker.
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
