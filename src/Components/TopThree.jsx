import React, { useContext } from 'react';
import Top3Card from './Top3Card';
import BooksContext from '../Context/BooksContext';

const TopThree = () => {
  const data = useContext(BooksContext);

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
    <div className='flex items-center justify-between gap-5 flex-wrap h-auto py-20 bg-zinc-900 mt-20 md:px-20'>
      <Top3Card
        bgColor={"rgba(113, 197, 244, 0.38)"}
        poster={data[0]?.volumeInfo?.imageLinks?.thumbnail}
        Title={data[0]?.volumeInfo.title}
        Description={truncateDescription(data[0]?.volumeInfo.description, 50)}
        goTo={data[0]?.volumeInfo.infoLink}
      />
      <Top3Card
        bgColor={"rgba(171, 113, 244, 0.38)"}
        poster={data[1]?.volumeInfo?.imageLinks?.thumbnail}
        Title={data[1]?.volumeInfo.title}
        Description={truncateDescription(data[1]?.volumeInfo.description, 50)}
        goTo={data[1]?.volumeInfo.infoLink}
      />
      <Top3Card
        bgColor={"rgba(244, 113, 168, 0.38)"}
        poster={data[2]?.volumeInfo?.imageLinks?.thumbnail}
        Title={data[2]?.volumeInfo.title}
        Description={truncateDescription(data[2]?.volumeInfo.description, 50)}
        goTo={data[2]?.volumeInfo.infoLink}
      />
    </div>
  );
};

export default TopThree;
