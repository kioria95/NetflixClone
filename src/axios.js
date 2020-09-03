import axios from "axios";

//Base url is used to make requests to the movie databse(TMDB)
const instance = axios.create({
    baseURL: "https://api.themoviedb.org/3",

});

export default instance;