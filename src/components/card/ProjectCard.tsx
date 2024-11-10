// components/ProjectCard.tsx
interface ProjectCardProps {
  title: string;
  description: string;
  link: string;
}

const ProjectCard = ({ title, description, link }: ProjectCardProps) => {
  return (
    <div className="bg-white shadow-md rounded-lg p-6 flex flex-col  hover:scale-105 transition ">
      <h3 className="text-xl font-semibold">{title}</h3>
      <p className="text-gray-600 font-semibold mt-2">{description}</p>
      <a href={link} target="_blank" className="mt-4 text-purple-800">View Project</a>
    </div>
  );
};

export default ProjectCard;
