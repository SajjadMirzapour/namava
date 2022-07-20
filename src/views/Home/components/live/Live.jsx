import { Navigation, A11y } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css/bundle'
import Larrow from '@mui/icons-material/ArrowBackIosNew';
import Rarrow from '@mui/icons-material/ArrowForwardIos';
import { LIVEDATA } from '../../../../mock/Live';
import LiveCard from '../../../../components/LiveCard';


export default function Live() {
    return (
        <div className=" bg-black my-3 -mt-1 pt-4 text-white" style={{
            //  backgroundImage: 'linear-gradient(to top, rgba(18, 18, 18, 1), rgba(18, 18, 18, 0))' 
        }}>
            <div className="md:text-[22px] text-[18px] w-[95%] mx-auto mb-2 p-2">
                <div className="group flex items-center w-fit">
                    <div className='ml-4'>
                        <h1><a href="#">پخش زنده</a></h1>
                    </div>
                    <div>
                        <a href='#' className='opacity-0 group-hover:opacity-100 transition-all duration-300 text-[14px]'>مشاهده همه   <span><Larrow className='w-[5px]' sx={{ width: '15px', mr: '5px' }} /></span></a>
                    </div>
                </div>
            </div>

            <div className='group flex justify-end relative'>
                <div className='w-[98.5%]'>
                    <Swiper dir='rtl' modules={[Navigation, A11y]}
                        // slidesPerView={3.5}
                        navigation={{
                            disabledClass: 'invisible',
                            nextEl: '#next-slide-live-button',
                            prevEl: '#prev-slide-button',
                        }}
                        loop={false}
                        pagination={false}
                        scrollbar={false}
                        // slidesPerGroup={3}
                        speed={2000}
                        breakpoints={{
                            0: {
                                slidesPerView: 1.5,
                                slidesPerGroup: 1
                                // spaceBetween: 10
                            },
                            768: {
                                slidesPerView: 2.5,
                                slidesPerGroup: 2
                                // spaceBetween: 10
                            },
                            1024: {
                                slidesPerView: 3.5,
                                slidesPerGroup: 3
                                // spaceBetween: 50
                            }
                        }}
                    >

                        {LIVEDATA.map((data, i) =>
                            <SwiperSlide key={i}>
                                <LiveCard
                                    key={data.id}
                                    name={data.name}
                                    image={data.image}
                                    time={data.time}
                                    detail={data.detail}
                                />
                            </SwiperSlide>)}
                    </Swiper>
                </div>
                <button id='next-slide-live-button' className='next-slide opacity-0 group-hover:opacity-100 transition-all duration-500 absolute left-0  z-20 text-white text-[40px] h-full items-center'><Larrow className="mr-[6px]" /></button>
                <button id='prev-slide-live-button' className='prev-slide opacity-0 group-hover:opacity-100 transition-all duration-500 absolute right-0  z-20 text-white text-[40px] h-full items-center disabled:invisible'><Rarrow className="mr-[6px]" /></button>
            </div>
        </div>
    )
}