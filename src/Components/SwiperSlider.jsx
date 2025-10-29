import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';


const SwiperSlider = () => {
    return (
         <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
            <div className='flex items-center justify-between max-h-[60vh] gap-5 flex-col md:flex-row p-9'>
                <img className='object-cover w-full max-w-150 mx-auto h-full  ' src="https://i.ibb.co.com/3YF1Xg6Y/images-1.jpg" alt="" />
                <h1 className='text-3xl font-bold text-center'>Learn the basics of programming and data structures using Python.</h1>

            </div>
        </SwiperSlide>

         <SwiperSlide>
            <div className='flex items-center justify-between max-h-[60vh] gap-5 flex-col md:flex-row p-9'>
                <img className='w-full max-w-150 mx-auto h-full ' src="https://i.ibb.co.com/L753PGW/ms-onset.jpg" alt="" />
                <h1 className='text-3xl font-bold'>Learning English Vocavolery and language</h1>

            </div>
        </SwiperSlide>
         <SwiperSlide>
            <div className='flex items-center justify-between max-h-[60vh] gap-5 flex-col md:flex-row p-6'>
                

                <img className='w-150' src="https://i.ibb.co.com/DDkPpqdR/giterlesson.webp" alt="" />
                 <h1 className='text-3xl font-bold w-full max-w-150 mx-auto h-full '>Acoustic guitar classes for complete beginners.</h1>
               
            </div>
        </SwiperSlide>
        
      </Swiper>
    );
};

export default SwiperSlider;