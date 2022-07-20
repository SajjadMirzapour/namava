import { Navigation, A11y } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css/bundle'
import Larrow from '@mui/icons-material/ArrowBackIosNew';
import Rarrow from '@mui/icons-material/ArrowForwardIos';
import Card from './Card';


export default function SwiperAll({ Data }) {
    return (
        <div className='group flex justify-end relative'>
            <div className='w-[97.5%]'>
                <Swiper dir='rtl' modules={[Navigation, A11y]}
                    // slidesPerView={7.5}
                    navigation={{
                        disabledClass: 'invisible',
                        nextEl: '#next-slide-button',
                        prevEl: '#prev-slide-button',

                    }}
                    loopFillGroupWithBlank={true}
                    loop={false}
                    pagination={false}
                    scrollbar={false}
                    // slidesPerGroup={7}
                    speed={2000}
                    breakpoints={{
                        0: {
                            slidesPerView: 2.5,
                            slidesPerGroup: 2,
                            spaceBetween: 10
                        },
                        440: {
                            slidesPerView: 3.5,
                            slidesPerGroup: 3,
                            spaceBetween: 15
                        },
                        768: {
                            slidesPerView: 5.5,
                            slidesPerGroup: 5,
                            spaceBetween: 10
                        },
                        1024: {
                            slidesPerView: 7.3,
                            slidesPerGroup: 7,
                            spaceBetween: 25
                        }
                    }}
                >
                    {Data.map((data, i) =>
                        <SwiperSlide key={i}>
                            <Card
                                key={data.id}
                                id={data.id}
                                name={data.name}
                                image={data.image}
                            />
                        </SwiperSlide>)}
                </Swiper>
            </div>
            <button id='next-slide-button' className='bg-gradient-to-r from-[rgba(18,18,18,1)] to-[rgba(18,18,18,0)] opacity-0 group-hover:opacity-100 transition-all duration-500 w-[30px] absolute left-0 bottom-[23px] h-full items-center z-20 text-white text-[40px]'><Larrow className="mr-[6px]" /></button>
            <button id='prev-slide-button' className='bg-gradient-to-l from-[rgba(18,18,18,1)] to-[rgba(18,18,18,0)] opacity-0 group-hover:opacity-100 transition-all duration-500 w-[30px] absolute right-[29px] bottom-[23px] h-full items-center z-20 text-white text-[40px]'><Rarrow className="mr-[6px]" /></button>
        </div>
    )
}

