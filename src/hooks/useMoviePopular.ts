import { useState, useEffect } from "react";
import { DispatchState } from "../models/DispatchState";
import { RespMovie } from "../models/RespMovie";
import { useData } from "./useData";

const useMoviePopular = (type: 'popular' | 'upcoming'): [RespMovie | undefined, DispatchState< RespMovie | undefined>] => {
  const [moviePopular, setmoviePopular] = useData<RespMovie>(`movie/${type}`);

  return [moviePopular, setmoviePopular];
};
export default useMoviePopular;
