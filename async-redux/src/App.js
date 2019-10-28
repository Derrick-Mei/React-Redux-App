import React from 'react';
import './App.css';

import AnimeList from './components/AnimeList'
import SearchForm from './components/SearchForm'

function App() {
  return (
    <div className="App">
      <SearchForm />
      <AnimeList />
    </div>
  );
}

export default App;
