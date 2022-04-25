let projects = [
  {
    name: "Day Planner",
    year: 2021,
    techs: "HTML, CSS & JS",
    due: "12/05/1995",
    id: 0,
    img:
      "https://images.pexels.com/photos/8519315/pexels-photo-8519315.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
  },
  {
    name: "Medizen",
    year: 2021,
    techs: "React, HTML, CSS",
    due: "10/31/2000",
    id: 1,
    img:
      "https://images.pexels.com/photos/11329839/pexels-photo-11329839.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
  },
  {
    name: "Loma Residencial Website",
    year: 2042,
    techs: "Nextjs, Sass, PostCSS",
    due: "07/22/2003",
    id: 2,
    img:
      "https://images.pexels.com/photos/11629663/pexels-photo-11629663.png?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
  },
  {
    name: "Totisketches Website",
    year: 2032,
    techs: "React, HTML, CSS",
    due: "09/01/1997",
    id: 3,
    img:
      "https://images.pexels.com/photos/11041919/pexels-photo-11041919.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
  },
  {
    name: "Image Gallery",
    year: 2012,
    techs: "axios, React, CSS",
    due: "01/27/1998",
    id: 4,
    img:
      "https://images.pexels.com/photos/11155273/pexels-photo-11155273.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
  }
];

export function obtainProjects() {
  return projects;
}

export function getProject(id) {
  return projects.find((project) => project.id === id);
}
