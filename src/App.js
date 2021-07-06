import React, { useState } from 'react';
// import axios from 'axios';
import Header from './components/header';
import Search from './components/search';
import Result from './components/result';

function App() {

  const [searchQuery, setSearchQuery] = useState();
  const [searchResult, setSearchResult] = useState();

  function getLockers() {

    const url = 'http://localhost:5000/api/search';
    let options = {
      method: 'POST',
      headers: {
        'Content-type': 'application/json'
      },
      body: { query: searchQuery }
    };

    // axios.post(url, { options })
    //   .then(res => {
    //     console.log(res);
    //     setSearchResult(res);
    //   })
    //   .catch(err => console.log(err));
  }

  function handleSearch(event) {
    let searchInput = event.target.value;
    setSearchQuery(searchInput);
    getLockers();
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
