'use client'
import React, { useState } from 'react'
import { ResumeHeaderEdit } from './ResumeHeader';
import { ResumeGoalEdit } from './ResumeGoal';
import { ResumeEducationEdit } from './ResumeEducation';
import { ResumeExperienceEdit } from './ResumeExperience';
import { ResumeLanguagesEdit } from './ResumeLanguages';


const SideMenu = () => {
    const [hidden,setHidden] = useState(true)

    return (
        <div className='absolute'
        >

            <div className={`${hidden?'-translate-x-full':null} transition-all duration-500 overflow-y-scroll pt-20 pb-10 fixed flex flex-col gap-8 top-0 bottom-0 justify-start items-start w-96 bg-gray-200 z-40`}>
                <ResumeHeaderEdit/>
                <ResumeGoalEdit/>
                <ResumeEducationEdit/>
                <ResumeExperienceEdit/>
                <ResumeLanguagesEdit/>
            </div>
            <button 
            className={`${hidden?'ml-10':null} transition-all duration-500 z-50 fixed top-1/2 -translate-y-1/2 ml-96 w-10 h-10 rounded-full bg-primary text-2xl font-bold text-white`}
            onClick={()=>setHidden(!hidden)}
            >{hidden?'<':'>'}</button>
        </div >
    )
}

export default SideMenu