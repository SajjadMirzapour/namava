import SearchIcon from '@mui/icons-material/Search';
import { ReactComponent as Namavasvg } from 'src/components/Icons/namava.svg'
import { NavLink, useLocation } from 'react-router-dom'
import { useEffect, useState } from 'react';

const MENU = [
    {
        title: "خانه",
        href: "#",
        id: 1,
        location: '/'
    },
    {
        title: "فیلم ها",
        href: "#",
        id: 2,
        location: '/films'
    },
    {
        title: "سریال ها",
        href: "#",
        id: 3,
        location: '/series'
    },
    {
        title: "دسته بندی",
        href: "#",
        id: 4,
        location: '/categories'
    },
    {
        title: "تازه ها",
        href: "#",
        id: 5,
        location: '/news'
    },
    {
        title: "کودکان",
        href: "#",
        id: 6,
        location: '/children'
    },
    {
        title: "نماوا مگ",
        href: "#",
        id: 7,
        location: '/namavameg'
    },
]


export default function Navigation() {


    // var prevScrollpos = window.pageYOffset;
    // window.onscroll = function () {
    //     var currentScrollPos = window.pageYOffset;
    //     prevScrollpos = currentScrollPos;
    // }

    // const [show, setShow] = useState(false);
    // useEffect(() => {
    //     window.addEventListener('scroll', ev => {
    //         if (window.scrollY > 400) {
    //             setShow(true);
    //             // console.log("should fix")
    //         } else {
    //             setShow(false);
    //         }
    //     })
    // }, [])


    const [show, setShow] = useState(true);

    useEffect(() => {
        var prevScrollpos = window.pageYOffset;
        window.addEventListener('scroll', () => {
            var currentScrollPos = window.pageYOffset;
            // console.log('prevScrollpos', prevScrollpos)
            // console.log('currentScrollPos', currentScrollPos)
            if (window.scrollY > 80) {
                if (currentScrollPos > prevScrollpos) { setShow(true) }
                else { setShow(false) }
            }
            else { setShow(true) }
            prevScrollpos = currentScrollPos;
            // console.log('prevScrollpos2', prevScrollpos)
        })
    });

    const location = useLocation()
    const navigator = !['/login', '/register'].includes(location.pathname)
    return (<>
        <div className={`absolute top-0 ${navigator ? '' : 'hidden'} w-full text-white z-20 bg-gradient-to-b from-[rgba(18,18,18,1)] to-[rgba(18,18,18,0)]`}>
            <div className="container flex justify-between items-center ">
                <ul className="flex justify-between items-center h-20">
                    <li className=''>
                        <a href="#"><Namavasvg /></a>
                    </li>
                    {
                        MENU.map((menu) => <li key={menu.id} className={`${menu.location === location.pathname ? 'text-[#6eb8ff]' : ''} hover:text-[#6eb8ff] mr-6 lg:text-xs text-[10px] hidden md:flex `} >
                            <a href={menu.href}>{menu.title}</a>
                        </li>)
                    }
                </ul>
                <div className="flex justify-between items-center ">
                    <NavLink to={'/search'}>
                        < SearchIcon sx={{ color: 'white', fontSize: 44 }} />
                    </NavLink>
                    <div className='hover:text-[#6eb8ff] mr-6 text-xs md:text-sm' href="#">
                        خرید اشتراک
                    </div>
                    <NavLink to={'login'} className="border text-xs md:text-sm border-white hover:text-black p-2 rounded hover:bg-white mr-6">ورود/ ثبت نام</NavLink>
                </div>
            </div>
        </div >
        <div className={`${navigator ? '' : 'hidden'} w-full text-white  z-30 transition-all duration-500 fixed ${show ? "-top-20" : "bg-[rgba(18,18,18,1)] top-0"}`}  >
            <div className="container flex justify-between items-center ">
                <ul className="flex justify-between items-center h-20">
                    <li className=''>
                        <a href="#"><Namavasvg /></a>
                    </li>
                    {
                        MENU.map((menu) => <li key={menu.id} className={`${menu.location === location.pathname ? 'text-[#6eb8ff]' : ''} hover:text-[#6eb8ff] mr-6 lg:text-xs text-[10px] hidden md:flex `} >
                            <a href={menu.href}>{menu.title}</a>
                        </li>)
                    }
                </ul>
                <div className="flex justify-between items-center ">
                    <NavLink to={'/search'}>
                        < SearchIcon sx={{ color: 'white', fontSize: 44 }} />
                    </NavLink>
                    <div className='hover:text-[#6eb8ff] mr-6 text-xs md:text-sm' href="#">
                        خرید اشتراک
                    </div>
                    <NavLink to={'login'} className="border text-xs md:text-sm border-white hover:text-black p-2 rounded hover:bg-white mr-6">ورود/ ثبت نام</NavLink>
                </div>
            </div>
        </div >

    </>
    )
}
