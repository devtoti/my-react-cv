import { NavLink, Outlet } from "react-router-dom";
import { obtainProjects } from "../data";
import { useState, useEffect } from "react";

export default function Projects() {
  let projects = obtainProjects();
  const [isSelected, setIsSelected] = useState(false);
  const [currArr, setCurrArr] = useState(projects);

  // useEffect(() => {
  //   let interval = setInterval(() => {
  //     console.log("curr array is_", currArr);
  //   }, 5000);
  //   return () => clearInterval(interval);
  // }, []);

  function filterArray(arr) {
    console.log(isSelected);
    setIsSelected((tf) => !tf);
    setCurrArr([arr]);
  }

  return (
    <>
      <main style={{ height: "auto" ? "auto" : "100%" }}>
        <div className="project-list" style={{ padding: "1rem 0" }}>
          <nav>
            {currArr.map((project, id) => (
              <NavLink
                to={`/Projects/${project.id}`}
                key={project.id}
                onClick={() =>
                  currArr.length > 1
                    ? filterArray(project)
                    : setCurrArr(projects)
                }
              >
                <h4>{project.name}</h4>
                <p>{project.techs}</p>
                <img className="project-image" src={project.img} />
              </NavLink>
            ))}
          </nav>
          <Outlet />
        </div>
      </main>
    </>
  );
}

// {currArr.map((p) => {
//   <small>{p}</small>;
// })}
