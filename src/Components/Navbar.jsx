import React, {useState} from 'react'
import { AiOutlineSearch, AiOutlineBell } from 'react-icons/ai';
import { BiBookHeart } from 'react-icons/bi';
import PremiumAcc from '../aseets/fluent_premium-person-20-regular.svg'
import AccountImg from '../aseets/account.jpg'
import logo from '../aseets/logo.svg'
const Navbar = ({setSearchedTerm, setIsTopThreeVisible}) => {

    const [SearchedTerm, setSetSearchedTerm] = useState('')
    const handleSearchClick = () => {
        setSearchedTerm(SearchedTerm);
        setIsTopThreeVisible(true)
        setSetSearchedTerm('')
    }

  return (
    <div className="navbar z-10 h-20 w-full flex items-center justify-between gap-5 md:px-20 bg-zinc-800 fixed top-0">
        <div className="left flex items-center justify-center gap-5">
            <img src={logo} className=' w-5 h-5 md:w-10 md:h-10 lg:w-16 lg:h-16' alt="logo" />
            <p className='text-white text-3xl'>KeazoN<span className=' text-xl font-thin'>Books</span></p>
        </div>
        <div className="middle flex items-center justify-center gap-2 text-white">
            <div className="search-div flex items-center justify-center bg-zinc-700 py-2 px-4 rounded-md gap-2">
                <AiOutlineSearch className='  text-zinc-500 text-2xl'/>
                <input type="text" placeholder='Search for the book you want and read it now... Sherlock Holmes, Harry Pot...'
                className='w-20 md:w-64 lg:w-96 bg-transparent  outline-none'
                value={SearchedTerm}
                onChange={(e) => setSetSearchedTerm(e.target.value)}
                />
            </div>
            <button 
            className='border-2 border-zinc-500 py-2 px-8 
            text-zinc-400 rounded-md active:transform active:translate-y-1 duration-300 transition-all hover:bg-zinc-700'
            onClick={handleSearchClick}
            >Search</button>
        </div>
        <div className="right lg:flex items-center justify-center gap-4 text-zinc-400 hidden ">
            <BiBookHeart className=' text-4xl cursor-pointer active:transform active:translate-y-1 duration-300 transition-all'/>
            <AiOutlineBell className=' text-4xl cursor-pointer active:transform active:translate-y-1 duration-300 transition-all'/>
            <img src={PremiumAcc} alt="Premium img" className='active:transform active:translate-y-1 duration-300 transition-all'/>
            <img src={AccountImg} className='w-10 h-10 rounded-full cursor-pointer active:transform active:translate-y-1 duration-300 transition-all' alt="Acc img" />
        </div>
    </div>
  )
}

export default Navbar