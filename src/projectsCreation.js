let projectsArray = [];

const projectCreation = (title, description) => {

  const project = {
    title,
    description,
    todos: [],
  };

  projectsArray.push(project);
};

export {projectsArray, projectCreation};