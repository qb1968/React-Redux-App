import React from "react";
import ReactDOM from "react-dom";
import { applyMiddleware, createStore } from "redux";
import logger from "redux-logger";
import thunk from "redux-thunk";
import { Provider } from "react-redux";
import reducer from "./reducers";
import PokeData from "./components/PokeData";
import { composeWithDevTools } from "redux-devtools-extension";
import css from './App.css'
import styled, { keyframes } from 'styled-components';
import { bounceInLeft } from 'react-animations';

const bounceAnimation = keyframes`${bounceInLeft}`;
const BouncyDiv = styled.h1`
  animation: 5s ${bounceAnimation};
`;


const store = createStore(
  reducer,
  composeWithDevTools(applyMiddleware(thunk, logger))
);

function App() {
  return (
    <div className="App">
      <BouncyDiv>Gotta Catch Em' All</BouncyDiv>
      <PokeData />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  rootElement
);
