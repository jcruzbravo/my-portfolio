import Link from "next/link";
import Image from "next/image";

export default function Home() {
  return (
    <main className="text-white">
      <div className="flex min-h-screen flex-col items-center justify-between px-16 mt-3 gap-8">
        <section id="projects" className="max-w-full mt-5 mb-5">
          <h2 className="m-3 text-center font-bold text-2xl">Projects</h2>
          <div className="flex flex-col md:flex-row gap-3">
            <div className="max-w-sm rounded overflow-hidden shadow-lg bg-black transition-transform ease-in-out hover:scale-105">
              <Image
                className="w-full"
                src="https://res.cloudinary.com/dyfmjmdb4/image/upload/v1684695318/fortnite-informer_h2uv1c.png"
                width={300}
                height={300}
                alt="Fortnite Informer"
              />
              <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2">Fortnite Informer</div>
                <p className="text-white-700 text-base">
                  This application built with React allows Fortnite players to
                  consult mainly the most relevant information, such as the
                  news, the item shop, etc.
                </p>
                <div className="flex gap-4">
                  <Link
                    href="http://github.com/jcruzbravo/fortnite-informer"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="underline"
                  >
                    Repository
                  </Link>
                  <a
                    href="https://fortnite-info.vercel.app/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="underline"
                  >
                    Production
                  </a>
                </div>
              </div>
              <div className="px-6 pt-4 pb-2">
                <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                  #React
                </span>
                <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                  #JavaScript
                </span>
                <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                  #HTML
                </span>
                <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                  #CSS
                </span>
              </div>
            </div>
            <div className="max-w-sm rounded overflow-hidden shadow-lg bg-black transition-transform ease-in-out hover:scale-105">
              <Image
                className="w-full"
                src="https://res.cloudinary.com/dyfmjmdb4/image/upload/v1684699633/react-shop_j8effx.png"
                width={300}
                height={300}
                alt="TODO List"
              />
              <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2">TODO List</div>
                <p className="text-white-700 text-base">
                  This application built with React allows anyone to register
                  their tasks to be done and finish them, also each of these
                  tasks is saved in the browser.
                </p>
                <div className="flex gap-4">
                  <Link
                    href="https://github.com/jcruzbravo/introduction-react-js"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="underline"
                  >
                    Repository
                  </Link>
                  <a
                    href="https://jcruzbravo.github.io/introduction-react-js/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="underline"
                  >
                    Production
                  </a>
                </div>
              </div>
              <div className="px-6 pt-4 pb-2">
                <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                  #React
                </span>
                <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                  #JavaScript
                </span>
                <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                  #HTML
                </span>
                <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                  #CSS
                </span>
              </div>
            </div>
          </div>
        </section>
        <section id="about" className="max-w-md mt-8 mb-5">
          <h2 className="m-3 text-center font-bold text-2xl mt-5 mb-5">About me</h2>
          <p className="text-justify">
            Hello! Im Joaquin, a passionate Junior Front-End Developer with
            experience in modern web development and technologies such as HTML,
            CSS and JavaScript, Angular, React. I am looking for opportunities
            to grow and continue learning in the field of web development.
          </p>
        </section>
        <section
          id="skills"
          className="flex flex-col gap-3 items-center justify-center mt-5 mb-5"
        >
          <h2 className="m-3 text-center font-bold text-2xl mt-5 mb-5">My skills</h2>
          <div className="frontend-skills flex justify-center items-center gap-4">
            <h3>Frontend</h3>
            <div>
              <Image
                src="/html.png"
                alt="Logo HTML"
                width={75}
                height={75}
                className="rounded-full object-cover"
              />
            </div>
            <div>
              <Image src="/css.png" alt="Logo Css" width={75} height={75} />
            </div>
            <div>
              <Image
                src="/javascript.png"
                alt="Logo JavaScript"
                width={75}
                height={75}
              />
            </div>
            <div>
              <Image src="/react.png" alt="Logo React" width={75} height={75} />
            </div>
            <div>
              <Image
                src="/angular.png"
                alt="Logo Angular"
                width={75}
                height={75}
              />
            </div>
            <div>
              <Image
                src="/typescript.png"
                alt="Logo TypeScript"
                width={75}
                height={75}
              />
            </div>
            <div>
              <Image
                src="/tailwind.png"
                alt="Logo Tailwind"
                width={75}
                height={75}
              />
            </div>
            <div>
              <Image
                src="/bootstrap.png"
                alt="Logo Bootstrap"
                width={75}
                height={75}
              />
            </div>
            <div>
              <Image src="/sass.png" alt="Logo Sass" width={75} height={75} />
            </div>
            <div className="invert">
              <Image src="/nextjs.png" alt="Logo Next" width={75} height={75} />
            </div>
          </div>
          <div className="backend-skills flex justify-center items-center gap-4">
            <h3>Backend</h3>
            <div>
              <Image
                src="/nodejs.png"
                alt="Logo NodeJs"
                width={75}
                height={75}
              />
            </div>
            <div>
              <Image src="/csharp.png" alt="Logo C#" width={75} height={75} />
            </div>
            <div>
              <Image src="/php.png" alt="Logo PHP" width={75} height={75} />
            </div>
            <div>
              <Image
                src="/laravel.png"
                alt="Logo Laravel"
                width={75}
                height={75}
              />
            </div>
            <div>
              <Image
                src="/cakephp.jpg"
                alt="Logo CakePhp"
                width={75}
                height={75}
              />
            </div>
            <div className="invert">
              <Image
                src="/express.png"
                alt="Logo Express Js"
                width={75}
                height={75}
              />
            </div>
            <div>
              <Image src="/dotnet.png" alt="Logo .NET" width={75} height={75} />
            </div>
          </div>
          <div className="tools-skills flex justify-center items-center gap-4">
            <h3>Tools</h3>
            <div>
              <Image src="/git.png" alt="Logo Git" width={75} height={75} />
            </div>
            <div>
              <Image src="/npm.png" alt="Logo Npm" width={75} height={75} />
            </div>
            <div className="invert">
              <Image
                src="/apirest.png"
                alt="Logo ApiRest"
                width={75}
                height={75}
              />
            </div>
            <div className="invert">
              <Image
                src="/github.svg"
                alt="Logo Github"
                width={75}
                height={75}
              />
            </div>
            <div>
              <Image
                src="/gitlab.png"
                alt="Logo Gitlab"
                width={75}
                height={75}
              />
            </div>
          </div>
          <div className="data-base-skills flex justify-center items-center gap-4">
            <h3>Data Base</h3>
            <div>
              <Image src="/mysql.png" alt="Logo MySQL" width={75} height={75} />
            </div>
            <div className="invert">
              <Image
                src="/sqlserver.svg"
                alt="Logo SQL Server"
                width={75}
                height={75}
              />
            </div>
            <div>
              <Image
                src="/postgresql.png"
                alt="Logo PostgreSQL"
                width={75}
                height={75}
              />
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
