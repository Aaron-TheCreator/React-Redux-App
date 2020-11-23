import React from "react";
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import SearchForm from "./components/SearchForm";
import LyricsPage from "./components/LyricsPage";
import rootReducer from "./reducers";
import thunk from "redux-thunk";

import './App.css';

const store = createStore(rootReducer, applyMiddleware(thunk));

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <h1>
          Lyric Finder
        </h1>
        <SearchForm />
        <LyricsPage />
    </div>
    </Provider>
  );
}

export default App;
