import Image from "next/image";
import Link from "next/link";

import chillimaster from "@/public/work/chilli.png"
import envc from "@/public/work/envc.png"
import sch from "@/public/work/sch.png"
import ecommerce from "@/public/work/ecommerce.jpg"
import esportify from "@/public/work/esportify.png"
import portfolio from "@/public/work/portfolio.svg";

const ProjectCard = () => {
  const data = [
    {
      id: 1,
      image: chillimaster,
      title: "Chilli Master",
      description: "AI powred quiz Game developed in NextJs",
      link: "https://latestchillimaster.vercel.app/",
      target: "_blank",
    },
   
    {
      id: 2,
      image: sch,
      title: "School Chale Ham",
      description: "School Chale Ham is a startup to inspiring a new generation of learners",
      link: "https://www.schoolchaleham.in",
      target: "_blank",
    } 
  ];

  return (
    <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3">
      {data.map((project) => {
        return (
          <div
            className="rounded-lg mb-12 flex flex-col items-center"
            key={project.id}
          >
            <Link
              href={project.link}
              target={project.target}
              onClick={() => {
                project.title === "Portfolio"
                  ? alert("You are already on this site! 🤩")
                  : project.title === "Pokedex"
                  ? alert(
                      "Ash Ketchum asked you to open in desktop browser.. 🚀"
                    )
                  : "";
              }}
            >
              <Image
                loading="lazy"
                src={project.image}
                alt={project.title}
                width="200"
                className="rounded-lg drop-shadow-2xl hover:scale-110"
              />
            </Link>
            <div className="flex flex-col items-center">
              <h1 className="font-semibold text-[1.5rem] mt-3 text-gray-700 dark:text-white">
                {project.title}
              </h1>
              <p className="max-w-[90%] text-gray-400 font-light text-center text-sm">
                {project.description}
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ProjectCard;
