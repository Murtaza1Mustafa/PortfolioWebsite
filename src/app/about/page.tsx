import Image from 'next/image';
import Header from '../components/Header';
import Bubbles from '../components/Bubbles';

export default function About() {
  return (
    <div className='relative'>
      <Header />

      <main className='relative w-full min-h-screen flex flex-col bg-[#f0fbff] items-center gap-12 py-10 px-6 z-0'>
        {Array.from({ length: 15 }).map((_, i) => (
          <Bubbles key={i} />
        ))}

        {/* ABOUT */}
        <section className='w-full z-10 max-w-3xl xl:max-w-4xl 2xl:max-w-6xl xl:hover:scale-[1.01] transition-all duration-300 mx-auto bg-[#00b4d8] rounded-2xl shadow-lg shadow-[#0077b6]/40 p-6 md:p-8'>
          <span className='ripple absolute inset-0 pointer-events-none'></span>

          <h1
            style={{ textShadow: '2px 2px 0 #023e8a' }}
            className='text-2xl md:text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl text-white font-bold underline text-center py-4'
          >
            A little bit about me
          </h1>

          <p className='text-base md:text-lg lg:text-xl xl:text-xl 2xl:text-2xl text-white drop-shadow-lg leading-relaxed px-4 md:px-6'>
            Greetings! My name is Murtaza, and I&apos;m a graduate from the University of Calgary
            with a passion for creative endeavors that truly challenge my mind and adaptability. I
            first got into coding because I was fascinated by its puzzle-solving nature and the way
            it allows you to express yourself while finding different solutions to the same
            problems. It&apos;s like an open-ended sandbox, where the possibilities are endless. I
            have years of academic, personal, and some professional experience in Web Development,
            Game Development, and Software Development. My most recent role is working part-time as
            a Game Designer and light coder for the video game Scale the Depth with the team at
            Glass Gecko Games. I thrive in team environments and value bringing a strong positive
            mindset within any space I am present within.
          </p>
        </section>

        {/* DIVIDER */}
        <div className='w-10 h-10 rounded-full bg-[#0077b6] shadow-md'></div>

        {/* PROFICIENCIES */}
        <section className='w-full z-10 max-w-3xl xl:max-w-4xl 2xl:max-w-6xl hover:scale-[1.01] transition-all duration-300 mx-auto bg-[#00b4d8] rounded-2xl shadow-lg  shadow-[#0077b6]/40 p-6 md:p-8'>
          <h1
            style={{ textShadow: '2px 2px 0 #023e8a' }}
            className='text-2xl md:text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl text-white font-bold underline text-center py-4'
          >
            Proficiencies
          </h1>

          <ul className='space-y-3'>
            <li>
              <span className='text-[#ade8f4] text-base md:text-lg lg:text-xl xl:text-2xl 2xl:text-3xl underline font-semibold'>
                Languages:
              </span>{' '}
              <span className='text-white text-base md:text-lg lg:text-xl xl:text-xl 2xl:text-2xl'>
                C++, Typescript, C#, Java, Python, SQL
              </span>
            </li>

            <li>
              <span className='text-[#ade8f4] text-base md:text-lg lg:text-xl xl:text-2xl 2xl:text-3xl underline font-semibold'>
                Tools:
              </span>{' '}
              <span className='text-white text-base md:text-lg lg:text-xl xl:text-xl 2xl:text-2xl'>
                Git/GitHub, Docker, MySQL, MongoDB, REST APIs
              </span>
            </li>

            <li>
              <span className='text-[#ade8f4] text-base md:text-lg lg:text-xl xl:text-2xl 2xl:text-3xl underline font-semibold'>
                Game Tech:
              </span>{' '}
              <span className='text-white text-base md:text-lg lg:text-xl xl:text-xl 2xl:text-2xl'>
                Unity, Unreal Engine, Godot, OpenGL, PhysX
              </span>
            </li>

            <li>
              <span className='text-[#ade8f4] text-base md:text-lg lg:text-xl xl:text-2xl 2xl:text-3xl underline font-semibold'>
                Concepts:
              </span>{' '}
              <span className='text-white text-base md:text-lg lg:text-xl xl:text-xl 2xl:text-2xl'>
                OOP, Agile workflow, optimization, Testing & Debugging
              </span>
            </li>
          </ul>
        </section>

        {/* DIVIDER */}
        <div className='w-10 h-10 rounded-full bg-[#0077b6] shadow-md'></div>

        {/* INTERESTS */}
        <section className='w-full z-10 max-w-3xl xl:max-w-4xl 2xl:max-w-6xl hover:scale-[1.01] transition-all duration-300 mx-auto bg-[#00b4d8] rounded-2xl shadow-lg  shadow-[#0077b6]/40 p-6 md:p-8'>
          <h1
            style={{ textShadow: '2px 2px 0 #023e8a' }}
            className='text-2xl md:text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl text-white font-bold underline text-center py-4'
          >
            My Interests
          </h1>

          <h2 className='text-[#ade8f4] text-lg md:text-xl lg:text-2xl xl:text-3xl 2xl:text-4xl underline font-semibold mt-4'>
            Gaming
          </h2>

          <p className='text-white text-base md:text-lg lg:text-xl xl:text-xl 2xl:text-2xl leading-relaxed'>
            Since childhood, I&apos;ve held a deep love for games, especially the way their worlds
            and levels are designed. I was always fascinated by how they came together, often
            experimenting with creating my own in various software. Because of this, my natural
            inclination within the space lies with well-crafted experiences that bring a space to
            life.
          </p>

          <h2 className='text-[#ade8f4] text-lg md:text-xl lg:text-2xl xl:text-3xl 2xl:text-4xl underline font-semibold mt-4'>
            Hiking
          </h2>

          <p className='text-white text-base md:text-lg lg:text-xl xl:text-xl 2xl:text-2xl leading-relaxed'>
            Hiking is something I started doing more recently, but the beautiful views and scenic
            walks make the experiences worthwhile and allow you to feel connected to nature. It
            helps that Alberta and the places neighboring it have countless trails to explore.
          </p>

          <h2 className='text-[#ade8f4] text-lg md:text-xl lg:text-2xl xl:text-3xl 2xl:text-4xl underline font-semibold mt-4'>
            Cooking
          </h2>

          <p className='text-white text-base md:text-lg lg:text-xl xl:text-xl 2xl:text-2xl leading-relaxed'>
            Cooking took me a while to get into, but once I started doing it more it really
            brightened up my daily life. It gives me a creative outlet in what I make while also
            serving a practical purpose that makes everyday living smoother.
          </p>
        </section>

        {/* WAVE */}
        <svg
          className='absolute bottom-0 left-0 z-0'
          xmlns='http://www.w3.org/2000/svg'
          viewBox='0 0 1440 320'
        >
          <path
            fill='#0077b6'
            fillOpacity='1'
            d='M0,192L80,202.7C160,213,320,235,480,229.3C640,224,800,192,960,176C1120,160,1280,160,1360,160L1440,160L1440,320L0,320Z'
          />
        </svg>
      </main>
    </div>
  );
}
