
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
       <div>
        

         <img className='w-100 ' src={match?.image} alt="" />
         <h2 className='text-xl font-bold'>{match?.providerName}</h2>
         <h2 className='font-semibold'>{match?.providerEmail}</h2>
         <p className='font-semibold'>{match?.skillName}</p>
         <p className='font-semibold'>{match?.price}</p>
         <p className='font-semibold'>{match?.rating}</p>
         <p className='font-semibold'>{match?.slotsAvailable}</p>
         <div>
         <h3 className='font-semibold'>{match?.description}</h3> 
         </div>
         
         

       </div>
      
    );
};

export default SkillDetails;