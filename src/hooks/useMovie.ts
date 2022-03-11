import axios from "axios";
import { Dispatch, useEffect, useReducer, useState } from "react";
import { params } from "../config";
import { DispatchState } from "../models/DispatchState";
import { RespMovie } from "../models/RespMovie";
import { useData } from "./useData";

type TypeMovies =  | "popular" | "upcoming" | "top_rated";
type State = Record<TypeMovies, RespMovie | undefined>;

type Actions = "callApi";

const initialState: State = {
  popular: undefined,
  upcoming: undefined,
  top_rated: undefined,
};

export const useMovies = ( typeMovies: Array<TypeMovies> ): [State, DispatchState<State>] => {
  const [state, setMovie] = useState<State>(initialState);


  const fetch = async () => {
    let newState = {...initialState};
    const uniqueMovies = Array.from(new Set(typeMovies));           
   await axios.all(uniqueMovies.map((promise) => axios.get(`https://api.themoviedb.org/3/movie/${promise}`, {params: {...params}}))).then(
        axios.spread((...allData) => {
          allData.forEach((_, index) => {            
            newState[uniqueMovies[index]] = allData[index].data;
            
          })
    }));
    return {...newState};
  }
  const firstCall = async() => {
    setMovie(await fetch())

  }
  useEffect(() => {
  firstCall();
  }, []);

  return [state, setMovie];
  
};
