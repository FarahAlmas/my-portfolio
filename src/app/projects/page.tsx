// pages/projects.tsx

import ProjectCard from '@/components/card/ProjectCard';

const Projects = () => {
  return (
    <div>
      <main className="bg-white min-h-screen py-12">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-semibold text-gray-800">My Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
            <ProjectCard
              title="Portfolio Website"
              description="A personal portfolio built with Next.js and Tailwind CSS."
              link="https://github.com/FarahAlmas/Nextjs-assingment.git"
            />
            <ProjectCard
              title="E-Commerce Store"
              description="An e-commerce application with shopping cart."
              link="https://github.com/FarahAlmas/Multi-web-page-CSS.git"
            />
            <ProjectCard
              title="Resume Builder"
              description="Use of HTML, CSS & TYPESCRIPT"
              link="https://github.com/FarahAlmas/Resume_Builder.git"
            />
             <ProjectCard
              title="My CountDown Timer"
              description="It Built with NEXT.js and Tailwind CSS."
              link="https://github.com/FarahAlmas/count-down-timer.git"

            />
             <ProjectCard
              title="Simple CalCulator"
              description="This is my First project in HTML,CSS & TYPESCTIPT."
              link="https://github.com/FarahAlmas/UI-base-calculator.git"

            />
             <ProjectCard
              title="TodoList"
              description="tODO build with HTML,CSS & TYPESCRIPT."
              link=""

            />
            <ProjectCard
              title="Figma Design"
              description=""
              link=""

            />

            <ProjectCard
              title="My TypeScript Project"
              description=""
              link="https://github.com/FarahAlmas/typescript_project.git"
            />
            <ProjectCard
              title="Blog Templates"
              description="A blogging platform where users can create, read, and comment on posts (in process)."
              link="https://github.com/blogplatform"
            />
          </div>
        </div>
      </main>
    </div>
  );
};

export default Projects;
