import Link from "next/link";
import Image from "next/image";

export default function Home() {
  return (
    <main className="text-white">
      <div className="flex min-h-screen flex-col items-center justify-between px-16 mt-3">
        <div id="projects" className="">
          <h2 className="m-3 text-center">My projects</h2>
          <div className="flex flex-col md:flex-row gap-3">
            <div className="card rounded-s-sm text-black">
              <Link
                href="https://jcruzbravo.github.io/introduction-react-js/"
                target="_blank"
              >
                TODO List
              </Link>
            </div>
            <div className="card rounded-s-sm text-black">
              <Link
                href="https://jcruzbravo.github.io/react-shop/"
                target="_blank"
              >
                React Shop
              </Link>
            </div>
            <div className="card rounded-s-sm text-black">
              <Link href="https://fortnite-info.vercel.app/" target="_blank">
                Fortnite Informer
              </Link>
            </div>
          </div>
        </div>
        <div
          id="skills"
          className="flex flex-col gap-3 items-center justify-center"
        >
          <h2>My skills</h2>
          <div className="frontend-skills flex justify-center items-center gap-4">
            <h3>Frontend</h3>
            <div>
              <Image
                src="/html.png"
                alt="Logo HTML"
                width={50}
                height={30}
                className="rounded-full object-cover"
              />
            </div>
            <div>
              <Image src="/css.png" alt="Logo Css" width={50} height={30} />
            </div>
            <div>
              <Image
                src="/javascript.png"
                alt="Logo JavaScript"
                width={50}
                height={30}
              />
            </div>
            <div>
              <Image src="/react.png" alt="Logo React" width={50} height={30} />
            </div>
            <div>
              <Image
                src="/angular.png"
                alt="Logo Angular"
                width={50}
                height={30}
              />
            </div>
            <div>
              <Image
                src="/typescript.png"
                alt="Logo TypeScript"
                width={50}
                height={30}
              />
            </div>
            <div>
              <Image
                src="/tailwind.png"
                alt="Logo Tailwind"
                width={50}
                height={30}
              />
            </div>
            <div>
              <Image
                src="/bootstrap.png"
                alt="Logo Bootstrap"
                width={50}
                height={30}
              />
            </div>
            <div>
              <Image src="/sass.png" alt="Logo Sass" width={50} height={30} />
            </div>
            <div className="invert">
              <Image src="/nextjs.png" alt="Logo Next" width={50} height={30} />
            </div>
          </div>
          <div className="backend-skills flex justify-center items-center gap-4">
            <h3>Backend</h3>
            <div>
              <Image
                src="/nodejs.png"
                alt="Logo NodeJs"
                width={50}
                height={30}
              />
            </div>
            <div>
              <Image src="/csharp.png" alt="Logo C#" width={50} height={30} />
            </div>
            <div>
              <Image src="/php.png" alt="Logo PHP" width={50} height={30} />
            </div>
            <div>
              <Image
                src="/laravel.png"
                alt="Logo Laravel"
                width={50}
                height={30}
              />
            </div>
            <div>
              <Image
                src="/cakephp.jpg"
                alt="Logo CakePhp"
                width={50}
                height={30}
              />
            </div>
            <div className="invert">
              <Image
                src="/express.png"
                alt="Logo Express Js"
                width={50}
                height={30}
              />
            </div>
            <div>
              <Image src="/dotnet.png" alt="Logo .NET" width={50} height={30} />
            </div>
          </div>
          <div className="tools-skills flex justify-center items-center gap-4">
            <h3>Tools</h3>
            <div>
              <Image src="/git.png" alt="Logo Git" width={50} height={30} />
            </div>
            <div>
              <Image src="/npm.png" alt="Logo Npm" width={50} height={30} />
            </div>
            <div className="invert">
              <Image
                src="/apirest.png"
                alt="Logo ApiRest"
                width={50}
                height={30}
              />
            </div>
            <div className="invert">
              <Image
                src="/github.svg"
                alt="Logo Github"
                width={50}
                height={30}
              />
            </div>
            <div>
              <Image
                src="/gitlab.png"
                alt="Logo Gitlab"
                width={50}
                height={30}
              />
            </div>
          </div>
          <div className="data-base-skills flex justify-center items-center gap-4">
            <h3>Data Base</h3>
            <div>
              <Image src="/mysql.png" alt="Logo MySQL" width={50} height={30} />
            </div>
            <div className="invert">
              <Image
                src="/sqlserver.svg"
                alt="Logo SQL Server"
                width={50}
                height={30}
              />
            </div>
            <div>
              <Image
                src="/postgresql.png"
                alt="Logo PostgreSQL"
                width={50}
                height={30}
              />
            </div>
          </div>
        </div>
        <div id="about" className="max-w-md">
          <h2>About me</h2>
          <p className="text-justify">
            Hello! Im Joaquin, a passionate Junior Front-End Developer with
            experience in modern web development and technologies such as HTML,
            CSS and JavaScript, Angular, React. I am looking for opportunities
            to grow and continue learning in the field of web development.
          </p>
        </div>
      </div>
    </main>
  );
}
