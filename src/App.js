import React, { useEffect, useState } from 'react';
import Header from './components/header';
import Search from './components/search';
import Result from './components/result';
import lockerCount from './dbExtraction/locker-count';
import lockerInfo from './dbExtraction/locker-details';
import capsValidation from './validation/capsValidation';

function App() {

  const [searchResult, setSearchResult] = useState();
  const [searchCount, setSearchCount] = useState();
  const [cityId, setCityId] = useState();
  const [stateId, setStateId] = useState();


  function getLockers(query) {

    let url = `http://localhost:5000/api/search/${query}`;

    fetch(url)
      .then(response =>
        response.json()).then((data) => {
          setSearchCount(`${lockerCount(data)} Lockers Available`);
          setSearchResult(lockerInfo(data));
          setCityId(data.cityId);
          setStateId(data.stateId);
        })
      .catch(err => {
        setSearchCount('No Open Lockers Found');
        setSearchResult();
      });
  }

  function handleSearch(event) {
    let validatedText = capsValidation(event.target.value);
    getLockers(validatedText);
  }

  return (
    <div>
      <Header />
      <Search handleSearch={handleSearch} />
      <Result searchResult={searchResult} stateId={stateId} cityId={cityId} searchCount={searchCount} setSearchResult={setSearchResult} />
    </div>
  );
}

export default App;