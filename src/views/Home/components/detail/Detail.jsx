import ClassNames from 'classnames';
import { useContext, useEffect, useState, } from 'react';
import { DetailMovieContext } from 'src/providers/DetailMovieProvider';

export default function Detail() {
    const [details] = useContext(DetailMovieContext)
    const [animate, setAnimatie] = useState(true)
    useEffect(() => {
        setAnimatie(false)
        setTimeout(() => {
            setAnimatie(true)
        }, 10)
    }, [details])
    if (details)
        return (
            <div className={`hello h-[515px] mb-5 text-white mt-10 grid grid-cols-4`}>
                <div className="col-span-1 py-10 pr-8 z-10 h-full bg-[#1A1A1A]">
                    <div className=''>
                        <h1 className="mb-4 text-[20px]">گستره</h1>
                        <p className="mb-3">{details.information}</p>
                        <p className="mb-3">{details.information}</p>
                    </div>
                </div>
                <div id='detail-image-home-page' className={`col-span-3 relative`}>
                    <img src={animate ? details.image : ''} alt="" className={ClassNames({ 'animate-fade': animate }, `w-full h-full`)} />
                </div>
            </div>
        )
}