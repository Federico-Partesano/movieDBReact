import { useEffect, useState } from "react";
import { DispatchState } from "../models/DispatchState";
import axios from "axios";
import { params } from "../config";

type ReturnData<T>  =  [
 T | undefined,
 DispatchState<T | undefined>,
 boolean
]
export const useData = <T>(
  url: string
): ReturnData<T>=> {
  const [data, setData] = useState<T>();
  const [isLoading, setIsLoading] = useState<boolean>(true);

  const callApi = async () => {
    setIsLoading(true);
    const { data } = await axios.get<T>(`https://api.themoviedb.org/3/${url}`, {params: {...params}});
    setData(data)
    setIsLoading(false);
    return data;
  };

  useEffect(() => {
    callApi();
  },[])
  
  return [data, setData, isLoading];
};
