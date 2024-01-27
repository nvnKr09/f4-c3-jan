import './App.css';
import BooksList from './Components/BooksList';
import Navbar from './Components/Navbar';
import OneMovie from './Components/OneMovie';
import TopThree from './Components/TopThree';
import BooksContextProvider from './Context/BooksContextProvider';
import { useState } from 'react';

function App() {

  const [isTopThreeVisible, setIsTopThreeVisible] = useState(true)
  const [clickedPosterID, setClickedPosterID] = useState(null)
  const [searchedTerm, setSearchedTerm] = useState('')


  return (
    <BooksContextProvider
      searchedTerm={searchedTerm}
    >
      <Navbar
        setSearchedTerm={setSearchedTerm}
        setIsTopThreeVisible={setIsTopThreeVisible}
      />
      {
        isTopThreeVisible ? <TopThree /> : <OneMovie
          clickedPosterID={clickedPosterID}
        />
      }
      <BooksList
        setIsTopThreeVisible={setIsTopThreeVisible}
        setClickedPosterID={setClickedPosterID}
      />
    </BooksContextProvider>
  );
}

export default App;
