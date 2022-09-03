import { Navigation, Pagination, Scrollbar, A11y,Autoplay } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';
import images from '../../data/image'

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import Image from 'next/image';



const Carousel = () => {

    return (
        <div className="">
            <Swiper
                pagination={{ clickable: true }}
                modules={[Pagination,Autoplay]}
                //  modules={[Navigation, Pagination, Scrollbar, A11y]}
                spaceBetween={50}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                  }}
                //  slidesPerView={3}

                //  pagination={{ clickable: true }}
                scrollbar={{ draggable: true }}
                onSwiper={(swiper) => console.log(swiper)}
                onSlideChange={() => console.log('slide change')}

                className="mySwiper relative h-72 rounded-md">
                {
                    images.map((image, index) => (
                        <div key={index} className="">
                            <SwiperSlide >

                                <div className='relative h-full w-full  bg-white rounded-md overflow-clip shadow-md'>
                                    <div className='absolute z-10  h-full left-0 w-3/6'>
                                        <div className='flex flex-col p-10 justify-center space-y-4'>
                                            <div className='text-white text-2xl font-extrabold'>
                                                Benefits of Speaking in tongues
                                            </div>

                                            <div className='text-gray-50 text-xs'>
                                                Contrary To Popular Opinion,Tongues speaking is not for a select few,
                                                it is a primary way of communicating to the Father....

                                            </div>

                                            <div className=''>
                                                <button className='bg-blue-500 text-xs hover:bg-blue-400 text-white rounded-md p-2 shadow-md'>Play Now</button>

                                            </div>

                                        </div>
                                    </div>

                                    <Image alt='carousel' objectFit='cover' layout='fill' className='' src={image} />
                                </div>

                            </SwiperSlide>
                        </div>


                    ))
                }

            </Swiper>

        </div>

    );
}

export default Carousel;