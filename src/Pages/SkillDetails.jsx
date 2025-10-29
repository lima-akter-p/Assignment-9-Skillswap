
import {  useParams } from 'react-router';
import useData from '../Hook/UseData';

const SkillDetails = () => {
    const {data,loading,} = useData()
    const {skillId} = useParams()
    if(loading) return
    const id = Number(skillId)
     console.log(id)
    
    const match = data.find(d=>d.skillId == id)
    console.log(match)
     return (
       <div className='mt-6'>
        

         <img className='w-100 mt-5 p-5' src={match?.image} alt="" />
         <h2 className='text-xl font-bold'>Name: {match?.providerName}</h2>
         <h2 className='font-semibold'> Email:  {match?.providerEmail}</h2>
         <p className='font-semibold'>Skill: {match?.skillName}</p>
         <p className='font-semibold'>Price: {match?.price}$</p>
         <p className='font-semibold'>Rating: {match?.rating}</p>
         <p className='font-semibold'>Slot available: {match?.slotsAvailable}</p>
         <div>
         <h3 className='font-semibold'>{match?.description}</h3> 
         </div>
         
         

       </div>
      
    );
};

export default SkillDetails;