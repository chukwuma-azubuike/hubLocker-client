import React, { useEffect, useState } from 'react';
import Header from './components/header';
import Search from './components/search';
import Result from './components/result';

function App() {

  const [searchResult, setSearchResult] = useState();

  function getLockers(query) {

    let url = `http://localhost:5000/api/search/${query}`;

    fetch(url)
      .then(response =>
        response.json()).then((data) => { data ? setSearchResult(data.name) : alert('null') })
      .catch(err => {
        setSearchResult('No Open Lockers Found');
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
      <Result searchResult={searchResult} />
    </div>
  );
}

export default App;
