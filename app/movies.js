//modulo: 
var movies = (function (){
    const url ="https://api.themoviedb.org/3/"
    const api = "api_key=6036c3b6e7390831e3c218ad42664edc"
    var language ="it-IT"
    var page = 1
    var getPopular = function () {
        return fetch(url+"movie/popular?"+api+"&language="+language+"&page="+page);
    }
    var getSearch = function (query) {
        return fetch(url+"search/multi?"+api+"&language="+language+"&page="+page+"&query="+ query);
    }
    var getDetails = function (id) {
        return fetch(url + "movie/" +id+"?" + api + "&language=" + language);
    }
    var getGenere = function () {
        return fetch(url + "genre/movie/list" + "?" + api + "&language=" + language)
    }
    var getGenerevisualizza = function (genere) {
        return fetch(url +"discover/movie?"+ api + "&language=" + language  + "&page=" + page+ "&with_genres="+ genere)
    }
    return {
        getPopular:getPopular,
        getSearch: getSearch,
        getDetails : getDetails,
        getGenere : getGenere,
        getGenerevisualizza : getGenerevisualizza
    }
})()

