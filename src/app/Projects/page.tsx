'use client';
import Image from 'next/image';
import Header from '../components/Header';
import React, { useEffect, useState } from 'react';
import Link from 'next/link';

type ContentBlock = { type: 'paragraph'; text: string } | { type: 'image'; src: string };

export interface Project {
  id: number;
  title: string;
  description: string;
  story: string;
  status: string;
  type: string;
  role: string;
  Team_size: number;
  startDate: Date;
  endDate: Date;
  techStack: string[];
  gitlink: string;
  dllink: string;
  thumbimage: string;
  content: ContentBlock[];
  image2: string;
  image3: string;
}

export default function Projects() {
  const [projects, setProjects] = useState<Project[]>([]);
  const [selectedType, setSelectedType] = useState('');

  useEffect(() => {
    fetch('/projects.JSON')
      .then((res) => res.json())
      .then((data: Project[]) => setProjects(data))
      .catch((err) => console.error(err));
  }, []);

  const types = Array.from(new Set(projects.map((project) => project.type)));
  const filteredProjects = projects.filter(
    (project) => selectedType === '' || project.type === selectedType
  );

  return (
    <div className='relative'>
      <Header />

      <main className='relative w-full min-h-screen flex flex-col items-center gap-12 bg-[#f0fbff] p-6 md:p-10 z-10'>
        {/* Filter dropdown */}
        <div className='max-w-xs w-full'>
          <select
            value={selectedType}
            onChange={(e) => setSelectedType(e.target.value)}
            className='w-full border-2 border-[#0077b6] rounded-full p-2 text-black'
          >
            <option value=''>All projects</option>
            {types.map((type) => (
              <option key={type} value={type}>
                {type}
              </option>
            ))}
          </select>
        </div>

        {/* Projects grid */}
        <div className='flex flex-col gap-8 w-full md:max-w-4xl 4xl:max-w-6xl'>
          {filteredProjects.map((project) => (
            <Link key={project.id} href={`/Projects/${project.id}`} className='block'>
              <div className='flex flex-col bg-[#00b4d8] rounded-2xl shadow-lg shadow-[#0077b6]/40 p-4 md:p-6 2xl:p-8 hover:scale-[1.05] hover:bg-[#0096c7] transition-all duration-250 cursor-pointer'>
                {/* Project Title */}
                <h2 className='text-2xl md:text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl font-bold underline text-center text-white m-1 '>
                  {project.title}
                </h2>
                {/* Description */}
                <p className='text-base xl:text-lg 2xl:text-xl  text-white drop-shadow-lg leading-relaxed px-1 md:px-3 text-right'>
                  {project.startDate.toString()} {' - '}{' '}
                  {project.status == 'Completed' ? project.endDate.toString() : 'Present'}
                </p>

                {/* Description */}
                <p className='text-base xl:text-lg 2xl:text-xl text-white drop-shadow-lg leading-relaxed m-1 px-1 md:px-3'>
                  {project.description}
                </p>

                {/* Role */}
                <p className='text-base xl:text-lg 2xl:text-xl text-[#ade8f4] drop-shadow-lg leading-relaxed m-1 px-1 md:px-3'>
                  Role: <span className='text-white'>{project.role}</span>
                </p>

                {/* Team Size*/}
                <p className='text-base xl:text-lg 2xl:text-xl text-[#ade8f4] drop-shadow-lg leading-relaxed m-1 px-1 md:px-3'>
                  Team Size: <span className='text-white'>{project.Team_size}</span>
                </p>

                {/* Tag */}
                <p className='text-base md:text-lg lg:text-xl xl:text-xl 2xl:text-2xl text-[#ade8f4] drop-shadow-lg leading-relaxed m-1 px-1 md:px-3'>
                  Type:{' '}
                  <span className='bg-[#0077b6] text-white px-3 py-1 max-w-xl rounded-full text-base xl:text-base 2xl:text-lg'>
                    {project.type}
                  </span>
                </p>

                {/* Tech Stack */}
                <p className='flex flex-wrap text-base xl:text-lg 2xl:text-xl text-[#ade8f4] w-full drop-shadow-lg leading-relaxed m-1 px-1 md:px-3'>
                  Tech:
                  {project.techStack.map((tech) => (
                    <span
                      key={tech}
                      className='bg-white  text-[#0077b6] px-3 py-1 mx-0.5 rounded-full text-base xl:text-base 2xl:text-lg'
                    >
                      {tech}
                    </span>
                  ))}
                </p>

                {/* Git / Project Link */}
                {/* {project.gitlink && (
                  <a
                    href={project.gitlink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white underline font-semibold  hover:text-[#023e8a] transition-colors duration-300 mb-4 block px-2 md:px-6"
                  >
                    View Project
                  </a>
                )} */}

                {/* Thumbnail */}
                {project.thumbimage && (
                  <div className='w-full max-w-2xl mx-auto overflow-hidden rounded-xl  shadow-lg m-1'>
                    <Image
                      src={project.thumbimage}
                      alt={project.title}
                      width={800}
                      height={400}
                      className='w-full h-auto object-contain'
                    />
                  </div>
                )}
              </div>
            </Link>
          ))}
        </div>
      </main>
    </div>
  );
}
