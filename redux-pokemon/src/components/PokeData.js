import React from "react";
import { connect } from "react-redux";
import { fetchPokemon } from "../actions";
import Loading from "./Loading";
import styled, { keyframes } from 'styled-components';
import { bounceInRight } from 'react-animations';

const bounceAnimation = keyframes`${bounceInRight}`;
const BouncyDiv = styled.h1`
  animation: 5s ${bounceAnimation};
`;


function PokeList(props) {
  console.log("PokeList", props);
  return (
    <>
    <BouncyDiv>PokeMon</BouncyDiv>
      <button onClick={props.fetchPokemon}>Get Data</button>
  {props.isFetching && <div><Loading/></div>}
      {props.error && <div>{props.error.message}</div>}
      <div>
        {props.pokemon.map(p => (
          
          <p className="pokemon" key={p.name}>
            {p.name}
          </p>
          
        ))}
      </div>
    </>
  );
}

const mapStateToProps = state => {
  return{
  pokemon: state.pokemon,
  error: state.error,
  isFetching: state.isFetching 
  }
};

export default connect( 
  mapStateToProps, {fetchPokemon}
)(PokeList);