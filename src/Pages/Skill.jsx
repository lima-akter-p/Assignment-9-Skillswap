import React from 'react';
import { Link, NavLink } from 'react-router';
import SkillDetails from './SkillDetails';

const Skill = ({singleSkill}) => {
    // console.log(singleSkill);
    const {image,skillName,rating,price,skillId} = singleSkill;
    return (
       <div className="card bg-base-100 w-96 shadow-sm p-6">
  <figure>
    <img className="w-full h-[300px] object-cover"
      src={image}
      alt="Shoes" />
  </figure>
  <div className="card-body">
    <h2 className="card-title font-bold">{skillName}</h2>
    <div className='flex justify-between py-3 text-xl font-semibold'>
        <div><p>Rating:{rating}</p></div>
        <div><p>Price:{price}$</p></div>
    </div>
    
    <div className="card-actions ">
     <Link to={`/skill-details/${skillId}`}> <button className="btn btn-primary">Skill Details</button></Link>
    </div>
    {/* <SkillDetails singleSkill={singleSkill}></SkillDetails> */}
  </div>
</div>

    );
};

export default Skill;