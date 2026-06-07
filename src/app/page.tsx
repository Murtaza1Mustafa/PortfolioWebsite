import Image from 'next/image';
import Link from 'next/link';
import Header from './components/Header';
import Bubbles from './components/Bubbles';
import { FaGithub, FaLinkedin, FaEnvelope, FaRegFilePdf } from 'react-icons/fa';

export default function HeroSection() {
  return (
    <div className='relative overflow-hidden'>
      <Header />

      <div>
        {Array.from({ length: 20 }).map((_, i) => (
          <Bubbles key={i} />
        ))}
      </div>

      <section
        className='
                  w-full min-h-screen grid grid-cols-1 md:grid-cols-[1fr_140px] gap-6 px-6 py-10 bg-[#f0fbff] '
      >
        <div className='flex flex-col gap-6 relative isolate z-10'>
          <div className='flex flex-col bg-[#00b4d8] rounded-2xl shadow-lg shadow-[#0077b6]/40 p-6 md:p-8 gap-6'>
            <div className='w-32 h-32 md:w-40 md:h-40 relative'>
              <Image
                src='/Photo.jpeg'
                alt='Murtaza Mustafa'
                fill
                className='rounded-full object-cover border-4 border-[#ade8f4]'
              />
            </div>

            <h1
              style={{ textShadow: '2px 2px 0 rgba(0,0,0,0.15)' }}
              className='text-2xl md:text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl text-white font-bold '
            >
              Murtaza Mustafa
            </h1>

            <h2
              style={{ textShadow: '2px 2px 0 rgba(0,0,0,0.15)' }}
              className='text-lg md:text-xl lg:text-2xl xl:text-3xl 2xl:text-4xl font-semibold text-[#0077b6]'
            >
              Game Designer & Software Developer
            </h2>

            <p className='text-base md:text-lg lg:text-xl xl:text-xl 2xl:text-2xl text-white leading-relaxed'>
              Lead Game Designer for{' '}
              <span className='font-bold text-[#0077b6]'>Scale The Depths</span>. I build commercial
              games in Unity with a focus on systems-driven design, gameplay loops, and player
              experience. I also work with React and modern web technologies in personal projects,
              applying software engineering principles to interactive systems and UI development.
            </p>
          </div>
          {/*current work */}
          <div className='flex flex-col md:grid md:grid-cols-[2fr_2fr] bg-[#00b4d8] rounded-2xl shadow-lg shadow-[#0077b6]/40 p-6 md:p-8'>
            <div className='flex flex-col gap-4'>
              <h2 className='text-lg md:text-xl lg:text-2xl xl:text-3xl 2xl:text-4xl font-bold text-white'>
                Featured Project
              </h2>

              <p className='text-base md:text-lg lg:text-xl xl:text-xl text-white leading-relaxed'>
                Contributing to the ongoing development of Scale the Depths, implementing gameplay
                features, UI systems, and quality-of-life improvements for a released commercial
                title.
              </p>

              <Link
                href='/Projects/1'
                className='mt-2 inline-flex w-fit items-center shadow-lg px-5 py-3 font-semibold text-white bg-[#0077b6] rounded-full hover:scale-[1.05] hover:bg-[#023e8a] transition'
              >
                Learn More
              </Link>
            </div>

            <section className='p-2 '>
              <div className='relative max-w-lg m-0 overflow-hidden'>
                <div className='flex aspect-video overflow-x-auto snap-x snap-mandatory scroll-smooth shadow-lg rounded-md no-scrollbar'>
                  <Image
                    className='w-full flex-none snap-start'
                    id='slide-1'
                    src='/STD_Slider1.jpg'
                    alt='Scale the Depths image'
                  />
                  <Image
                    className='w-full flex-none snap-start'
                    id='slide-2'
                    src='/STD_Slider2.jpg'
                    alt='Scale the Depths image'
                  />
                  <Image
                    className='w-full flex-none snap-start'
                    id='slide-3'
                    src='/STD_Slider3.jpg'
                    alt='Scale the Depths image'
                  />
                </div>
                <div className='absolute bottom-2 left-0 right-0 flex justify-center gap-2 z-10'>
                  <a
                    href='#slide-1'
                    className='w-3 h-3 rounded-full bg-white/70 hover:bg-white transition shadow-md'
                  />
                  <a
                    href='#slide-2'
                    className='w-3 h-3 rounded-full bg-white/70 hover:bg-white transition shadow-md'
                  />
                  <a
                    href='#slide-3'
                    className='w-3 h-3 rounded-full bg-white/70 hover:bg-white transition shadow-md'
                  />
                </div>
              </div>
            </section>
          </div>
        </div>
        {/*links */}
        <div className='hidden md:flex md:sticky md:top-6 h-fit  '>
          <div className='relative isolate z-[10] flex flex-col items-center justify-between bg-[#006494] rounded-2xl shadow-lg shadow-[#0077b6]/40 p-4 w-[140px]'>
            <div className='text-[10px] text-[#ade8f4] tracking-[0.3em] mb-6'>LINKS</div>

            <div className='flex flex-col gap-8 items-center'>
              <Link
                href='https://github.com/Murtaza1Mustafa'
                className='group flex flex-col items-center gap-1 hover:'
              >
                <FaGithub className='w-6 h-6 text-white group-hover:text-[#ade8f4] transition-all duration-200' />
                <span className='text-[10px] text-[#ade8f4]'>GitHub</span>
              </Link>

              <Link
                href='https://www.linkedin.com/in/murtazam1/'
                className='group flex flex-col items-center gap-1'
              >
                <FaLinkedin className='w-6 h-6 text-white group-hover:text-[#ade8f4] transition-all duration-200' />
                <span className='text-[10px] text-[#ade8f4]'>LinkedIn</span>
              </Link>

              <Link href='/Resume.pdf' className='group flex flex-col items-center gap-1'>
                <FaRegFilePdf className='w-6 h-6 text-white group-hover:text-[#ade8f4] transition-all duration-200' />
                <span className='text-[10px] text-[#ade8f4]'>Resume</span>
              </Link>

              <Link
                href='mailto:murtaza1mustafa1@gmail.com'
                className='group flex flex-col items-center gap-1'
              >
                <FaEnvelope className='w-6 h-6 text-white group-hover:text-[#ade8f4] transition-all duration-200' />
                <span className='text-[10px] text-[#ade8f4]'>Contact</span>
              </Link>
            </div>
          </div>
        </div>

        <div className='md:hidden fixed bottom-4 left-1/2 -translate-x-1/2 flex flex-row gap-6 bg-[#006494] px-4 py-3 rounded-2xl shadow-lg shadow-[#0077b6]/40 z-[10]'>
          <Link href='https://github.com/Murtaza1Mustafa' className='text-white'>
            <FaGithub />
          </Link>
          <Link href='https://www.linkedin.com/in/murtazam1/' className='text-white'>
            <FaLinkedin />
          </Link>
          <Link href='/Resume.pdf' className='text-white'>
            <FaRegFilePdf />
          </Link>
          <Link href='mailto:murtaza1mustafa1@gmail.com' className='text-white'>
            <FaEnvelope />
          </Link>
        </div>
      </section>

      {/* WAVE */}
      <svg
        className='absolute bottom-0 left-0 mt-2 z-[0]'
        xmlns='http://www.w3.org/2000/svg'
        viewBox='0 0 1440 320'
      >
        <path
          fill='#0077b6'
          fillOpacity='1'
          d='M0,192L80,202.7C160,213,320,235,480,229.3C640,224,800,192,960,176C1120,160,1280,160,1360,160L1440,160L1440,320L0,320Z'
        />
      </svg>
    </div>
  );
}
