import React from 'react'

const Top3Card = ({bgColor, poster, Title, Description, goTo }) => {
  return (
    <div style={{backgroundColor: bgColor}} className=' relative w-[360px] h-64 flex items-center justify-between gap-1 cursor-pointer hover:scale-105 duration-300 rounded-md p-5'>
        <div className="left relative w-96 h-auto">
            <img src={poster} alt="bookimg" className=' -left-20 -top-32 -rotate-6 h-64 w-[240px] absolute'/>
        </div>
        <div className="right text-white pr-5 flex flex-col items-start justify-center gap-5">
            <div className="title text-2xl font-bold">{Title}</div>
            <div className="Description text-[10px]">
            {Description}
            </div>
            <a href={goTo}
            target='_blank'
            rel='noreferrer'
            >
            <button className='border-2 border-white py-2 px-5 rounded-md hover:bg-zinc-800 duration-300 active:translate-y-1 active:transform'>Now Read</button>
            </a>
        </div>
    </div>
  )
}

export default Top3Card