import SwiperCore, { Navigation, A11y, Autoplay, EffectFade, Pagination } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css/bundle'
import { BACKGROUND } from '../../../../mock/background'
import { ReactComponent as Circle } from 'src/components/Icons/circle.svg'
import { useWindowSize } from 'src/hooks';

SwiperCore.use([Autoplay])

export default function BackGround() {
    const { width } = useWindowSize();
    return (

        <div className="h-screen lg:h-screen md:h-[340px] relative" style={{
            //  backgroundImage: 'linear-gradient(to top, rgba(18, 18, 18, 1), rgba(18, 18, 18, 0))' 
        }}>
            <div className='h-full'>
                <Swiper
                    className='h-full'
                    dir='rtl'
                    modules={[Navigation, A11y, Autoplay, EffectFade, Pagination]}
                    autoplay={{ delay: 10000, disableOnInteraction: false }}
                    speed={3000}
                    slidesPerView={1}
                    navigation={{
                        nextEl: '#next-slide-backGround-button',
                        prevEl: '#prev-slide-backGround-button',
                    }}
                    effect={"fade"}
                    loop={true}
                    pagination={{ el: '#slide-backGround-pagination', type: 'bullets' }}
                    scrollbar={false}
                    observer
                    observeParents
                // breakpoints={{
                //     0: {
                //         slidesPerView: 2,
                //         spaceBetween: 10
                //     },
                //     768: {
                //         slidesPerView: 1,
                //         spaceBetween: 50
                //     }
                // }}
                >
                    {
                        BACKGROUND.map((data, i) =>
                            <SwiperSlide key={i}>
                                <div className={data.className + ' w-full h-full'}>
                                    {width && data.src
                                        ? width > 450 ? <video width="100%" height="100%" autoPlay muted loop>
                                            <source src={data.src} type="video/mp4" />
                                        </video>
                                            : <video width="100%" height="100%" autoPlay muted loop>
                                                <source src={data.src2} type="video/mp4" />
                                            </video>
                                        : null}
                                </div>
                            </SwiperSlide>)
                    }
                </Swiper>
                <div className='hidden md:flex absolute left-[65px] bottom-[40px] z-10 '>
                    <button className='group ml-5' id='prev-slide-backGround-button'> <Circle fill='#969090' className=' group-hover:fill-white w-[40px]' /></button>
                    <button className='group' id='next-slide-backGround-button'> <Circle fill='#969090' className='group-hover:fill-white w-[40px] rotate-180 text-[#969090]' /></button>
                </div>
                <div id='slide-backGround-pagination' class="flex justify-center md:hidden -translate-y-6 relative z-10"></div>
            </div>
        </div >
    )
}