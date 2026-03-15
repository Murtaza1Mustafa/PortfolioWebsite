import Image from "next/image";
import Header from "./components/Header";
export default function Home() {
  
  return (

    <div>
          <Header />
  <main className="flex  flex-col items-center justify-center h-screen">
    <h1 className="text-2xl font-bold">Welcome to My Portfolio
    </h1>
    <h2 className="text-xl font-bold">Here are some useful links</h2>
    <div className="flex flex-row">
    <a
  href="https://github.com/Murtaza1Mustafa"
  target="_blank"
  rel="noopener noreferrer"
  aria-label="GitHub repository"
  className="p-2 inline-flex hover:scale-110 transition"
>
    <img
    src="https://cdn.simpleicons.org/github/000000"
    alt="GitHub"
    className="w-12 h-12"
  />
</a>
    <a
  href="https://www.linkedin.com/in/murtazam1/"
  target="_blank"
  rel="noopener noreferrer"
  aria-label="GitHub repository"
  className="p-2 inline-flex hover:scale-110 transition"
>
    <img
    src="https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/linkedin.svg"
    alt="Linkedin"
    className="w-12 h-12"
  />
</a>

    </div>

</main>
    </div>
  );
}
