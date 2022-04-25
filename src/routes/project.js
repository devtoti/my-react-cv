import { useParams } from "react-router-dom";
import { getProject, obtainProjects } from "../data";

export default function Project() {
  let params = useParams();
  let project = getProject(parseInt(params.id, 10));
  // console.log(project);

  return (
    <div className="selected-project">
      <h2>Project year: {project.year}</h2>
      <p>
        {project.name}: {project.techs}
      </p>
      <p> Due date: {project.due} </p>
    </div>
  );
}
