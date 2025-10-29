import React from 'react';
import Skill from './Skill';

const Skills = ({data}) => {
    // console.log(data);
    return (
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 p-6'>
         {
            data.map((singleSkill)=><Skill key={singleSkill.skillId} singleSkill={singleSkill}></Skill>)
         }
        </div>
    );
};

export default Skills;