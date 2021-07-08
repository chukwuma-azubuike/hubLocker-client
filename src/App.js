import React, { useEffect, useState } from 'react';
import Header from './components/header';
import Search from './components/search';
import Result from './components/result';
import lockerCount from './dbExtraction/locker-count';
import lockerInfo from './dbExtraction/locker-details';

function App() {

  const [searchResult, setSearchResult] = useState();
  const [searchCount, setSearchCount] = useState();
  const [cityId, setCityId] = useState()


  function getLockers(query) {

    let url = `http://localhost:5000/api/search/${query}`;

    fetch(url)
      .then(response =>
        response.json()).then((data) => {
          setSearchCount(`${lockerCount(data)} Lockers Available`);
          setSearchResult(lockerInfo(data));
          setCityId(data.cityId)
        })
      .catch(err => {
        setSearchCount('No Open Lockers Found');
        setSearchResult();
      });
  }

  function handleSearch(event) {
    let searchInput = event.target.value;
    getLockers(searchInput);
  }

  return (
    <div>
      <Header />
      <Search handleSearch={handleSearch} />
      <Result searchResult={searchResult} cityId={cityId} searchCount={searchCount} setSearchResult={setSearchResult} />
    </div>
  );
}

export default App;
