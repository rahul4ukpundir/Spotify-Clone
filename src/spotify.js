export const authEndPoint = "https://accounts.spotify.com/authorize";
const redirectUrl = "http://localhost:3000/"//"https://spotify-clone-5648d.web.app/"
const clientId ="27d7fbc942fc4c399bdd3f06dbdcc1ef";

const scopes = [
    "user-read-currently-playing",
    "user-read-recently-played",
    "user-top-read",
    "user-read-playback-state",
    "user-modify-playback-state",

]

export const getTokenFromUrl = () =>{
  return window.location.hash
  .substring(1)
  .split('&')
  .reduce((initial, item)=> {
     let parts = item.split('=');
     initial[parts[0]] =decodeURIComponent(parts[1]);
     return initial;
  }
  )
}

export const loginUrl = `${authEndPoint}?client_id=${clientId}&redirect_uri=${redirectUrl}&scope=${scopes.join("%20")}&&response_type=token&show_dialog=true`
