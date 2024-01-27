import React, { useEffect, useState } from 'react'
import axios from 'axios'

const OneMovie = ({clickedPosterID}) => {

    const [data, setData] = useState(null)

    async function fetchPosterData (clickedPosterID) {
        const API_KEY = 'AIzaSyDYiV954fqlqsVcj4t0gLr_bgta7x-ZJuE'
        const res  = await axios.get(`https://www.googleapis.com/books/v1/volumes/${clickedPosterID}?key=${API_KEY}`)
        console.log(res.data.volumeInfo.imageLinks.thumbnail);
        setData(res.data.volumeInfo);
    }

    useEffect(() => {
        fetchPosterData(clickedPosterID);
    }, [clickedPosterID])

    // Function to truncate the description to a maximum of 100 words
  const truncateDescription = (description, maxWords) => {
    if (typeof description !== 'string') {
      return ''; // Handle cases where description is not a string
    }
    const words = description.split(' ');
    if (words.length > maxWords) {
      return words.slice(0, maxWords).join(' ') + '...';
    }
    return description;
  };
  return (
    data && 
    <div className='w-full h-auto bg-zinc-900 pt-40 relative pb-20 text-white'>
    <div className=' h-full md:mx-20 bg-slate-800 relative rounded-lg flex items-center justify-center  gap-10 p-5'>
        <div className="left w-1/5">
            <img src={data.imageLinks.thumbnail} className=' w-1/6 -top-3 absolute rounded-md -ml-10 -rotate-6' alt="poster img" />
        </div>
        <div className="right w-4/5 flex flex-col items-start justify-between gap-3">
            <div className="Title text-4xl font-bold">{data.title}</div>
            {
                data.authors.map((author) => {
                    return (
                        <span className="Author text-xl font-medium">{author}</span>
                    )
                })
            }
            <div className="Description">{truncateDescription(data.description, 50)}</div>
            <div className="Moreinfo flex items-center justify-center gap-5">
                <div className="avg-rating">Avg Rating: {data.averageRating}</div>
                <div className="rating-count">Rating Count: {data.ratingsCount}</div>
                <div className="publisher">Plublisher: {data.publisher}</div>
                <div className="language">Language: {data.language}</div>
            </div>
            <div className="buttons self-end flex gap-5">
                <a href={data.previewLink} target='_blank' rel="noreferrer"><button className=' border-white border-2 rounded-md py-2 px-6 hover:bg-zinc-950 duration-300 transition-all active:transform active:translate-y-1 text-white'>Now Read</button></a>
                <a href={data.infoLink} target='_blank' rel="noreferrer"><button className=' border-white border-2 rounded-md py-2 px-6 hover:bg-zinc-950 duration-300 transition-all active:transform active:translate-y-1 text-white'>More info</button></a>
            </div>
        </div>
    </div>
    </div>

  )
}

export default OneMovie