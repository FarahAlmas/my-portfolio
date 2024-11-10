// components/ProjectCard.tsx
interface ProjectCardProps {
  title: string;
  description: string;
  link: string;
}

const ProjectCard = ({ title, description, link }: ProjectCardProps) => {
  return (
    <div className="bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 transition-colors duration-300 transform hover:scale-105 shadow-md rounded-lg p-6 flex flex-col">
      <h3 className="text-2xl font-semibold text-black">{title}</h3>
      <p className="text-black font-semibold mt-2">{description}</p>
      <a href={link} target="_blank" className="mt-4 text-blue-950">View Project</a>
    </div>
  );
};

export default ProjectCard;
