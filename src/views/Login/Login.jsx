import { ReactComponent as Namavasvg } from 'src/components/Icons/namava.svg'
import LoginIcon from '@mui/icons-material/Login';
import { NavLink } from 'react-router-dom';

export default function Login() {
    return (
        <div className="login text-white w-full h-full">
            <div className="w-[33%] mx-auto  py-16">
                <div className='flex justify-between items-center mb-6'>
                    <NavLink to={'/'} >
                        <Namavasvg />
                    </NavLink>
                    <NavLink to={'/register'} className='bg-[rgba(255,255,255,0.2)] p-3 rounded-md hover:bg-[rgba(255,255,255,0.4)]'>
                        <LoginIcon />
                        <span> ثبت نام </span>
                    </NavLink>
                </div>
                <div className='p-12 pb-24 bg-[#222327] rounded-md'>
                    <h1 className='text-[20px] mb-5'>ورود از طریق شماره تلفن همراه</h1>
                    <h2 className='text-[#aaaaaa] text-[12px] mb-5'>لطفا کشور خود را انتخاب کنید و شماره تلفن همراه خود را وارد کنید</h2>
                    <p className='text-[12px] mb-2'>شماره تلفن همراه</p>
                    <div className='mb-5 w-full flex justify-between items-center '>
                        <input className='bg-[rgb(55,56,62)] rounded-r-md p-3 w-[80%] outline-none' dir='ltr' type="text" placeholder='09*********' />
                        <div className='bg-[rgb(55,56,62)] rounded-l-md w-[20%] py-[12px]'>
                            <button className='border-r px-[10px] flex mx-auto'>+98</button>
                        </div>
                    </div>
                    <div className='mb-6'>
                        <input className='bg-[rgb(55,56,62)] w-full outline-none placeholder:text-[white] p-3 rounded-md' type="text" placeholder='رمز عبور' />
                    </div>
                    <button className='bg-[#1993ff] w-full rounded-md py-3 mt-5 mb-8'>ورود</button>
                    <a className='mb-7 text-center text-[12px] block' href="#">رمز عبور خود را فراموش کرده ام</a>
                    <a className='text-center text-[12px] block' href="#">ورود از طریق ایمیل</a>
                </div>
            </div>
        </div>
    )
}