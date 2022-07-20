import SearchIcon from '@mui/icons-material/Search';
import CloseIcon from '@mui/icons-material/Close';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { ReactComponent as SearchContent } from 'src//components/Icons/searchContent.svg'
import { useRef, useState } from 'react';
import { SCARY } from '../../mock/Scary'
import { SPECIALDATA } from '../../mock/Special';
import { CARTOON } from '../../mock/Cartoon'
import SwiperAll from 'src/components/SwiperAll';
import { DetailMovieProvider } from 'src/providers';

export default function Search() {

    const [filter, setFilter] = useState('')
    const [loading, setLoading] = useState(false)
    const [result, setResult] = useState([])
    const timeout = useRef(null)

    const filterChange = (ev) => {
        if (timeout.current)
            clearTimeout(timeout.current)

        const value = ev.target.value
        setFilter(value)
        setLoading(true)

        timeout.current = setTimeout(() => {
            let res = [];
            [SCARY, SPECIALDATA, CARTOON].forEach(arr => {
                arr.filter(item => item.name.includes(value)).forEach(item => {
                    if (!res.find(el => el.name === item.name))
                        res.push(item)
                })
                // console.log(arr.filter(item => item.name.includes(value)))
                // console.log(res)
            })
            setResult(res)
            // console.log(result)
            // const result1 = SCARY.filter(item => item.name.includes(value))
            // const result2 = SPECIALDATA.filter(item => item.name.includes(value))
            // const result3 = CARTOON.filter(item => item.name.includes(value))
            // setResult([...result1, ...result2, ...result3])
            setLoading(false)
        }, 1000)
        console.log(result)


    }
    console.log(filter)
    console.log(result)

    return (
        <DetailMovieProvider>
            <div className='text-[white] my-20'>
                <div className='container'>
                    <div className='flex justify-between items-center w-full'>
                        <div className='w-[95%] flex relative'>
                            <SearchIcon sx={{ width: '44px', height: '44px' }} className='absolute right-[11px] top-[8px] text-black' />
                            <input onChange={filterChange} className='bg-white p-[18px] w-full rounded-md outline-none pr-14 text-black placeholder:text-black' type="text" placeholder=" فیلم، سریال، بازیگر و ژانر" />
                        </div>
                        <button className='w-[5%] '>
                            <span className='mr-1'> <CloseIcon /> </span>
                            بستن
                        </button>
                    </div>
                    <div className='mb-10'>
                        <button className='bg-white text-black mt-3 rounded-md p-3'>
                            فیلتر
                            <span><KeyboardArrowDownIcon /></span>
                        </button>
                    </div>
                </div>
                {filter.length === 0 ?
                    <div className='mt-20 w-[18%] mx-auto '>
                        <SearchContent className='mx-auto mb-4' />
                        <p className='text-[14px]'>عنوان فیلم، سریال یا بازیگر مورد نظر خود را جستجو کنید و یا از طریق فیلترهای موجود، فیلم و سریال مورد علاقه خود را پیدا کنید.</p>
                    </div>
                    : loading ? "Loading ..." : result.length > 0
                        ? <SwiperAll Data={result} />
                        : <p className='container text-[22px]'>" چیزی یافت نشد "</p>}
            </div>
        </DetailMovieProvider>
    )
}