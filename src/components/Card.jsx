import Heart from '@mui/icons-material/Favorite';
import { ReactComponent as Imdb } from 'src/components/Icons/imdb.svg'
import Microphone from '@mui/icons-material/KeyboardVoice';
import { useContext } from 'react';
import { DETAILS } from '../mock/detail'
import { DetailMovieContext } from 'src/providers/DetailMovieProvider';


export default function Card({ name, image, id }) {
    const [detail, setDetail] = useContext(DetailMovieContext)
    const handleDetail = (id) => {

        if (detail?.id === id) {
            setDetail(null)
            return;
        }
        // if (detail) {
        //     if (detail.id === id) {
        //         setDetail(null)
        //         return;
        //     }
        // }

        const selected = DETAILS.find(detail => detail.id === id)
        setDetail(selected)
    }

    return (
        <button onClick={() => handleDetail(id)} className={`${detail?.id === id ? 'pt-5' : 'pt-0'} w-full`} >
            <div className='relative '>
                <img className="rounded mb-2 w-full" src={image} alt="#" />
                <div className="backCard hover:opacity-95 absolute top-0 w-full h-full">
                    <div className='md:text-xs text-[10px] absolute bottom-2 right-2'>
                        <h1 className='mb-2 last:mb-0'>2013</h1>
                        <div className='mb-2 last:mb-0'>
                            <span> <Heart /> </span>
                            <span className='mr-1'>95%</span>
                        </div>
                        <div className='mb-2 last:mb-0 flex items-center'>
                            <span><Imdb /> </span>
                            <span className='mr-1'>8.8</span>
                        </div>
                        <div className='mb-2 last:mb-0'>
                            <span> <Microphone /> </span>
                            <span className='mr-1'>دوبله نماوا</span>
                        </div>
                    </div>
                </div>
            </div>
            <span className="bg-black text-[rgb(255,255,255)] mt-2 text-[10px] md:text-[14px]">{name}</span>
        </button>
    )
}