import React from 'react';

const Project = () => {
  const projects = [
    {
      id: 1,
      title: "Project One Title",
      description: "Project One Describtion.Check out the project by clicking on the button",
      access: "https://nn",
    },
    {
      id: 2,
      title: "Project Two Title",
      description: "Project Two Describtion.Check out the project by clicking on the button",
      access: "https://",
    },
    {
      id: 3,
      title: "Project Three Title",
      description: "Project Three Describtion.Check out the project by clicking on the button",
      access: "https://",
    },
    {
      id: 4,
      title: "Project Four Title",
      description: "Project Four Describtion.Check out the project by clicking on the button",
      access: "https://",
    },
    {
      id: 5,
      title: "Project Five Title",
      description: "Project Five Describtion.Check out the project by clicking on the button",
      access: "https://",
    },
  ];

  return (
    <div className='bg-white p-10 text-black py-20 overflow-x-hidden' id='project'>
      <div className='container mx-auto px-8 md:px-16 lg:px-24'>
        <h2 className='text-4xl font-bold text-center mb-12 text-indigo-800'>Projects</h2>
      </div>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
        {projects.map((project) => (
          <div
            key={project.id}
            className='bg-slate-900 p-6 rounded-lg shadow-lg transition-transform duration-300 transform hover:scale-105'
          >
            <div className='text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-slate-400 to-blue-500 mb-2'>
              Project {project.id}
            </div>
            <h2 className='text-white font-bold mb-3'>{project.title}</h2>
            <p className='text-gray-300 mb-5'>{project.description}</p>
            <a
              href={project.access}
              className='bg-gradient-to-r from-indigo-900 to-slate-300 text-black py-2 px-4 rounded-lg shadow-md hover:bg-gradient-to-l transition-all duration-300'
              target="_blank"
              rel="noopener noreferrer"
            >
              Access
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Project;
