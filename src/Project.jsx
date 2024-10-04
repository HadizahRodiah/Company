import React from 'react'


const Project = () => {
    const service=[
        {
            
            id:1,
            title:"To-Do Application",
            description:"This is a user Friendly ToDo application that helps you stay on track with your daily task. it features a sleek military digital clock,the app also include a simple task counter.with an intuitive interface, you can easily add and delete tasks while keeping an eye on your productivity in real time",
            Technology: "Javascript, Html, CSS",
            Access:"https://hadizahrodiah.github.io/TODO/"


        },
        {
            id:2,
            title:"Simple  Login Form(No Functionality)",
            description:"this is a basic login form designed with a clean and minimalistic layout.it includes fields for username and password input along with a submit button.It is for demonstrating front-end design concepts or as a starting point for integrating authentication in future.ideal for practice in creating user-interface",
            Technology:"react,html,tailwindcss,css",
            Access:"https://psychic-bassoon.onrender.com"

        },


        {
            id:3,
            title:"Fashion Gallery(No Functionality)",
            description:"This is a gallery application designed to showcase images in a visually appealing layout.The application features a clean, minimalist interface, allowing users to brose through images seamlessly ",
            Technology:"react, html,css ,Tailwindcss",
            Access:"https://galler-e6o0.onrender.com"

        },
        {
            id:4,
            title:"A PortFolio",
            description:"The Portfolio showcases skils and project as a backend developer. The portfolioincludes a selection of projects,demonstrating ability to create a user friendly application.each project is accompanied by descriptions detailing the technologies used.",
            Technology:"React,html,Tailwind css",
            Access:"https://yunus-k6fx.onrender.com"
            
        },
    
    ]
  return (
    <div className='text-black py-20' Id='project'>
        <div className='container mx-auto px-8 md:px-16 lg:px-24'>
            <h2 className='text-4xl font-bold text-center mb-12'>Project</h2>
        </div>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
           {service.map(service=>
        <div key={service.id} className='px-10 pb-6 rounded-lg' id='box'>
        <div className='text-2xl font-bold text-black'>{service.id}
        </div>
     <h3 className='text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-slate-900 to-yellow-900'>
        {service.title}
     </h3>
     <p>
        {service.description}
     </p>
     <p className='font-bold'>
      <h3 className='bg-gradient-to-r
         from-yellow-800 to-slate-900'>Technology</h3> {service.Technology}
     </p>
     <div className='mt-5'>
     <a href={service.Access} className='bg-gradient-to-r mx-5 my-5 from-slate-900 mt-10 
                    to-yellow-500  text-center ml-20 text-black  md:inline hover:text-white transform px-4 py-2 rounded-full'>
                    Access
                    </a>
                    <h4>click on Access to check it out</h4>
          </div>
       </div> )}
        </div>

    </div>
  )
}

export default Project