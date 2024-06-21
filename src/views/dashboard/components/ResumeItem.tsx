import { Notebook } from "lucide-react";
import { Link } from "react-router-dom";

interface Resume {
  id: string;
  title: string;
  resume_id: string;
  first_name: string;
  last_name: string;
}

interface ResumeItemProps {
  resume: Resume;
  index: number;
}

function ResumeItem(props: ResumeItemProps) {
  const { resume } = props;
  return (
    <Link to={`/dashboard/resume/` + resume.resume_id + "/edit"}>
      <div
        className="p-14 bg-secondary flex items-center justify-center h-[280px] border-primary rounded-lg
      hover:scale-105 transition-all hover:shadow-md shadow-primary cursor-pointer"
      >
        <Notebook />
      </div>
      <h1 className="text-center my-1">{resume?.title}</h1>
    </Link>
  );
}

export default ResumeItem;
