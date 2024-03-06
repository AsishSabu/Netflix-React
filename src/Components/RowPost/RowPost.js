import React, { useEffect, useState } from "react";
import Youtube from "react-youtube";
import axios from "../../axios";
import { imageUrl, API_KEY } from "../../constants/constants";
import "./RowPost.css";

const RowPost = (props) => {
  const [movies, setMovies] = useState([]);
  const [videoId, setVideoId] = useState("");
  useEffect(() => {
    axios.get(props.url).then((response) => {
      setMovies(response.data.results);
    });
  }, []);
  const opts = {
    height: "390",
    width: "640",
    playerVars: {
      autoplay: 1,
    },
  };
  const handleMovie = (id) => {
    axios
      .get(`/movie/${id}/videos?api_key=${API_KEY}&language=en=US`)
      .then((response) => {
        if (response.data.results.length !== 0) {
          setVideoId(response.data.results[0])
        }
      });
  };

   const closeModal = () => {
     setVideoId("");
   };

  return (
    <div className="row">
      <h2 className="">{props.title}</h2>
      <div className="posters">
        {movies.map((obj) => (
          <img
            onClick={() => handleMovie(obj.id)}
            className={props.isSmall ? "smallPoster" : "poster"}
            src={obj ? imageUrl + obj.backdrop_path : ""}
            alt=""
          />
        ))}
      </div>
      {videoId && (
        <div className="modal">
          <div className="modal-content">
            <span className="close" onClick={closeModal}>
              &times;
            </span>
            <Youtube opts={opts} videoId={videoId.key} />
          </div>
        </div>
      )}{" "}
    </div>
  );
};

export default RowPost;
