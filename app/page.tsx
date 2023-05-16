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
        <div id="skills">
          <h2>My skills</h2>
          <div className="flex flex-col md:flex-row gap-3">
            <div>
              <Image
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/2300px-React-icon.svg.png"
                alt="Logo React"
                width={25}
                height={25}
              />
            </div>
            <div>
              <Image
                src="https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png"
                alt="Logo JavaScript"
                width={25}
                height={25}
              />
            </div>
            <div></div>
            <div></div>
            <div></div>
          </div>
        </div>
        <div id="about">
          <h2>About me</h2>
          <p>
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
