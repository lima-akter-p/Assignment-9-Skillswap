

import useData from '../Hook/UseData';
import Skills from './Skills';


const Home = () => {
    const {data,loading} = useData()
      if(loading) return
    
    console.log(data);
    return (
        <div className='w-11/12 mx-auto mt-10 bg-base-300'>
          <Skills data={data}></Skills>
        </div>
    );
};

export default Home;