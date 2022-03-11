import React, { useEffect, useState } from "react";
import Card from "../components/Card/Card";
import Header from "../components/Header/Header";
import VideoPlayer from "../components/VideoPlayer/VideoPlayer";
import { useMovies } from "../hooks/useMovie";
import useMoviePopular from "../hooks/useMoviePopular";
import "./Home.scss";
const Home = () => {
  const [moviePopular, setMoviePopular] = useMoviePopular('popular');
  const [movieUpcoming, setMovieUpcoming] = useMoviePopular('upcoming');
  const [selectedId, setSelectedId] = useState<number>();


useEffect(() => {
    console.log('popular: ', moviePopular);
}, [moviePopular, movieUpcoming]);

const changeId = (id: number) => {
  setSelectedId(undefined);
  setTimeout(() =>{setSelectedId(id)},50);
}


  return (
    <>
      <Header />
      <button onClick={() => setSelectedId(undefined)}> reset youtube</button>
      <div className="my__container">
        { moviePopular && ( moviePopular.results.map((result) => {
          const {id} = result;
          return (
            <div key={id} onClick={() => changeId(id)} className="container__card">
              <Card result={result} />
            </div>
          )

        }) )
        }
      </div>
      { selectedId && <VideoPlayer idVideo={selectedId} /> }
    </>
  );
};

export default Home;
