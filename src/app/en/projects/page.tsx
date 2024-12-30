import React from 'react'
import './page.css'

import mongoose from 'mongoose';
import { Project } from '../../models/project';
import AddProject from '../../components/AddProject';
import ProjectFilter from '../../components/ProjectsFilter'
import { revalidatePath } from 'next/cache';


const page = async () => {

    mongoose.connect(process.env.MONGO_URL as string)

    const frontEndProjects = await Project.find({category: {$in: ["Frontend"]}}, {}, {sort: {createdAt: -1}})
    const fullStackProjects = await Project.find({category: {$in: ["Fullstack"]}}, {}, {sort: {createdAt: -1}})

    const allProjects = await Project.find({}, {}, {sort: {createdAt: -1}})

    revalidatePath('/');

  return (
     
    <div className="container mx-auto my-6">

        
            
                <div className="hidden">
                <AddProject  />
                </div>
    
    <ProjectFilter allProjects={allProjects} frontEndProjects={frontEndProjects}
                fullStackProjects={fullStackProjects} />
        
       




        
    </div>
        
  )
}

export default page
