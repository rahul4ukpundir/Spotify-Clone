import './App.css';
import Login from './components/Login';
import React from "react";
import SpotifyWebApi from 'spotify-web-api-js';
import Player from './components/Player';
import { useDataLayerValue } from './contextAPI/DataLayer';

const spotify = new SpotifyWebApi();

function App() {
   const [{token, user, playLists}, dispatch] = useDataLayerValue();
   
   React.useEffect(() => {
    const hash = window.location.hash
    if (!token && hash) {
    const _token = hash.substring(1).split("&").find(elem => elem.startsWith("access_token")).split("=")[1];
      window.location.hash = ""
      dispatch({
        type: "SET_TOKEN",
        token: _token
      })
      spotify.setAccessToken(_token);
      spotify.getMe().then(user => {
        dispatch({
          type: "SET_USER",
          user: user
        })
      })

      spotify.getUserPlaylists().then(playLists =>{
        dispatch({
          type: "SET_PLAYLISTS",
          playLists: playLists
        })
      })

      spotify.getPlaylist("65NSuQK9kmvjTLWTODufGJ").then(response =>{
        dispatch({
          type: "SET_OLDSONGS",
          songs: response
        })
      })

      spotify.getTrack("7dbO1k9ryxPFJG0fvYBffu").then(response =>{
       console.log("response", response)
      })
    } 
  }, [])

  return (
    <div className="App">
      {!token ? <Login /> : <Player />}
    </div>
  );
}

export default App;

