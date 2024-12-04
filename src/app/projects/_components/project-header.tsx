import { PONTANO_SANS } from "@/util/fonts";
import ImageViewer from "./image-viewer";

type projectHeader = {
  header: string;
  subheader?: string;
  photo?: string;
};

interface ProjectHeaderProps {
  projectHeader: projectHeader;
}

export default function ProjectHeader({ projectHeader }: ProjectHeaderProps) {
  return (
    <div className="project-text-container">
      <h1 className="my-4">{projectHeader.header}</h1>
      {projectHeader.subheader && (
        <h3 className={`my-4 ${PONTANO_SANS.className}`}>
          {projectHeader.subheader}
        </h3>
      )}
      {projectHeader.photo && (
        <ImageViewer src={projectHeader.photo} alt={projectHeader.header} />
      )}
    </div>
  );
}
