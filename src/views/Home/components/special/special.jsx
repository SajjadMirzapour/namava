import Arrow from '@mui/icons-material/ArrowBackIosNew';
import { SPECIALDATA } from '../../../../mock/Special';
import SwiperAll from 'src/components/SwiperAll';


export default function Special() {
    return (
        <div className="bg-black my-3 -mt-1 pt-4 text-white" style={{
            //  backgroundImage: 'linear-gradient(to top, rgba(18, 18, 18, 1), rgba(18, 18, 18, 0))' 
        }}>
            <div className="md:text-[22px] text-[18px] w-[95%] mx-auto mb-2 p-2">
                <div className="group flex items-center w-fit">
                    <div className='ml-4'>
                        <h1><a href="#">ویژه</a></h1>
                    </div>
                    <div>
                        <a href='#' className='opacity-0 group-hover:opacity-100 transition-all duration-300 text-[14px]'>مشاهده همه  <span><Arrow className='w-[5px]' sx={{ width: '15px', mr: '5px' }} /></span></a>
                    </div>
                </div>
            </div>
            <SwiperAll Data={SPECIALDATA} />
        </div>
    )
}