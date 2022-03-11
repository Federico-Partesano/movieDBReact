import React, { useEffect, useState } from "react";
import YouTube from "react-youtube";
import useVideo from "../../hooks/useVideo";
import { CSSTransition } from "react-transition-group";
import "./VideoPlayer.scss";
import { RespVideo } from "../../models/RespVideo";
import { params } from "../../config";
import axios from "axios";

const VideoPlayer = ({ idVideo }: { idVideo: number }) => {
  const [video, setVideo] = useState<RespVideo>();

  useEffect(() => {
    const callApi = async () => {
      const { data } = await axios.get<RespVideo>(`https://api.themoviedb.org/3/movie/${idVideo}/videos`, {params: {...params}});
      setVideo(data)
      return data;
    };
    callApi();    
  }, [idVideo]);
  return (
    <>
      {(video && video.results.length > 0 && video.results[0].key) && (
        <YouTube videoId={video.results[0].key}  className="video__player" />
      )}
    </>
  );
};

export default VideoPlayer;
