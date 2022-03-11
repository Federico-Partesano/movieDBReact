import React from 'react'
import { DispatchState } from '../models/DispatchState';
import { RespVideo } from '../models/RespVideo';
import { useData } from './useData';

const useVideo = (id: number): [RespVideo | undefined, DispatchState< RespVideo | undefined>] => {
    const [state, useState]= useData<RespVideo>(`movie/${id}/videos`);

    return [state, useState];
}

export default useVideo