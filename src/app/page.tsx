import Image from "next/image";
import Link from "next/link";
import Header from "./components/Header";
import Bubbles from "./components/Bubbles";

export default function HeroSection() {
  return (
    <div className="relative">
      <Header />

      {/* Bubbles */}
      <div>
        {Array.from({ length: 20 }).map((_, i) => (
          <Bubbles key={i} />
        ))}
      </div>

      <section className="w-full min-h-screen flex flex-col items-center justify-center px-6 text-center bg-[#f0fbff]">
        {/* Title */}
        <h1
          style={{ textShadow: "2px 2px 0 #90e0ef" }}
          className="text-4xl md:text-5xl font-bold mb-6 text-[#0077b6]"
        >
          Welcome to my portfolio
        </h1>

        {/* Profile Image */}
        <div className="w-40 h-40 relative mb-6">
          <Image
            src="/photo.jpg"
            alt="Murtaza Mustafa"
            fill
            className="rounded-full object-cover shadow-lg border-4 border-[#00b4d8]"
          />
        </div>

        {/* Intro */}
        <p className="text-lg md:text-xl max-w-2xl mb-8 text-[#023e8a]">
          I’m{" "}
          <span className="font-semibold text-[#0077b6]">Murtaza Mustafa</span>,
          a game and software developer passionate about building interactive
          systems and creative experiences.
        </p>

        {/* Links */}
        <div className="flex gap-4 flex-wrap justify-center mb-12">
          <Link
            href="https://github.com/Murtaza1Mustafa"
            target="_blank"
            className="px-4 py-2 rounded-full bg-[#00b4d8] text-white hover:bg-[#0077b6] transition"
          >
            GitHub
          </Link>

          <Link
            href="https://linkedin.com/in/yourprofile"
            target="_blank"
            className="px-4 py-2 rounded-full bg-[#00b4d8] text-white hover:bg-[#0077b6] transition"
          >
            LinkedIn
          </Link>

          <Link
            href="/Resume.pdf"
            target="_blank"
            className="px-4 py-2 rounded-full bg-[#00b4d8] text-white hover:bg-[#0077b6] transition"
          >
            Resume
          </Link>

          <Link
            href="mailto:Murtaza1mustafa1@email.com"
            className="px-4 py-2 rounded-full bg-[#00b4d8] text-white hover:bg-[#0077b6] transition"
          >
            Contact
          </Link>
        </div>

        {/* Current Work */}
        <div className="flex flex-col bg-[#00b4d8] rounded-2xl shadow-lg shadow-[#0077b6]/40 p-4 md:p-6 2xl:p-8 hover:scale-[1.01]  transition-all duration-100 cursor-pointer">
          <h2 className="text-2xl font-semibold mb-2 text-white">
            What I’m Currently Working On
          </h2>

          <Link
            href="/Projects/1"
            className="text-lg text-[#ade8f4] hover:text-white underline transition"
          >
            Scale The Depths
          </Link>

          <p className="text-white mt-2 max-w-md">
            A fishing game that goes through the loop of fishing, cleaning the
            fish and feeding them to a variety of customers
          </p>
        </div>
      </section>
    </div>
  );
}
