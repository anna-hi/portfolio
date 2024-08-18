import Image from "next/image";
import Link from "next/link";

type ProjectCardInfo = {
  title: string;
  link: string;
  description: string;
  thumbnail: string;
};

export default function Main() {
  const project_map: ProjectCardInfo[] = [
    {
      title: "Faculty Activity Tracker",
      link: "/projects/faculty-activity-tracker",
      description: "if wanted",
      thumbnail: "",
    },
    {
      title: "Penella",
      link: "/projects/penella",
      description: "if wanted",
      thumbnail: "",
    },
  ];

  return (
    <div>
      <h1 className="p-2">Main</h1>
      <p className="p-2">
        This is the main page. You can find all my projects here.
      </p>
      <ul className="p-2">
        {project_map.map((project) => (
          <li
            className="m-2 p-1 border border-black rounded-md bg-slate-100"
            key={project.title}
          >
            <Link href={project.link}>
              <h3>{project.title}</h3>
              <Image src={project.thumbnail} alt={project.title} />
              <p className="pl-2">{project.description}</p>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
