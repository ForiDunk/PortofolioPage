import React from 'react';
import { store } from './store';
import ProjectCard from './ProjectCard';

const ProjectsList = () => (
  <div>
  {store.map((project, i) => <ProjectCard key={i} project={project} />)}
  </div>
);

export default ProjectsList;