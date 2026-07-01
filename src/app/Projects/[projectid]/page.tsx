import fs from 'fs';
import path from 'path';
import Image from 'next/image';
import { Project } from '../page'; // adjust path if needed
import Header from '@/app/components/Header';
import Bubbles from '@/app/components/Bubbles';
import { FaDownload, FaGithub } from 'react-icons/fa';
import Link from 'next/link';

interface ProjectPageProps {
  params: { projectid: string }; // matches folder name [projectId]
}

export default function ProjectDetails({ params }: ProjectPageProps) {
  const projectId = Number(params.projectid);
  const filePath = path.join(process.cwd(), 'public/projects.JSON');
  const jsonData = fs.readFileSync(filePath, 'utf-8');
  const projects: Project[] = JSON.parse(jsonData);
  const project = projects.find((p) => p.id === projectId);

  if (!project) {
    return <div>Project not found</div>;
  }

  return (
    <div className='relative min-h-screen bg-[#f0fbff]'>
      <Header />

      {/* Bubbles background */}
      <div className='absolute inset-0 z-[0] pointer-events-none'>
        {Array.from({ length: 20 }).map((_, i) => (
          <Bubbles key={i} />
        ))}
      </div>

      {/* Back button */}
      <Link
        href='/Projects'
        className='inline-flex items-center shadow-lg p-4 m-4 font-semibold text-white bg-[#0077b6] rounded-full hover:scale-[1.05] hover:bg-[#023e8a] transition'
      >
        ← Projects
      </Link>

      <div className='flex flex-col items-center z-10 px-4'>
        {/* Title */}
        <h1 className='text-xl md:text-4xl 2xl:text-6xl font-bold mb-4 text-center'>
          {project.title}
        </h1>

        {/* Type badge */}
        <p className='bg-[#0077b6] text-white px-3 py-1 rounded-full text-md xl:text-lg'>
          {project.type}
        </p>

        {/* Tech stack */}
        <div className='flex flex-wrap gap-2 mt-2 justify-center'>
          {project.techStack.map((tech) => (
            <span
              key={tech}
              className='bg-[#caf0f8] text-[#023e8a] px-3 py-1 mx-0.5 rounded-full text-sm xl:text-md '
            >
              {tech}
            </span>
          ))}
        </div>
        <div className='flex gap-2'>
          {project.gitlink != null && (
            <a
              href={project.gitlink}
              target='_blank'
              rel='noopener noreferrer'
              aria-label='GitHub repository'
              className='p-2 inline-flex hover:scale-110 transition'
            >
              <FaGithub className='w-12 h-12' />
            </a>
          )}
          {project.dllink != null && (
            <a
              href={project.dllink}
              target='_blank'
              rel='noopener noreferrer'
              aria-label='Download link'
              className='p-2 inline-flex hover:scale-110 transition'
            >
              <FaDownload className='w-12 h-12' />
            </a>
          )}
        </div>

        <hr className='border-t border-gray-300 shadow-lg my-6 w-full' />
        {project.content.map((block, index) => {
          if (block.type === 'paragraph') {
            return (
              <p
                key={index}
                className='my-4 whitespace-pre-line mx-12 text-sm md:text-lg 2xl:text-2xl text-black leading-normal md:leading-relaxed mb-4 md:max-w-6xl'
              >
                {block.text}
              </p>
            );
          }

          if (block.type === 'image') {
            return (
              <div
                key={index}
                className='shadow-xl shadow-[#0077b6]/20 mb-2 rounded-xl z-10 overflow-hidden'
              >
                <Image src={block.src} alt={project.title} width={700} height={200} />
              </div>
            );
          }

          return null;
        })}
      </div>
    </div>
  );
}
