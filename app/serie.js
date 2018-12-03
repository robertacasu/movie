var serie = (function () {
    const url = "https://api.themoviedb.org/3/"
    const api = "api_key=6036c3b6e7390831e3c218ad42664edc"
    var language = "it-IT"
    var page = 1
    var getPopular = function () {
        return fetch(url + "tv/popular?" + api + "&language=" + language + "&page=" + page);
    }
    var getDetails = function (id) {
        return fetch(url + "tv/" + id + "?" + api + "&language=" + language);
    }
    var getGenere = function () {
        return fetch(url + "genre/tv/list" + "?" + api + "&language=" + language)
    }
    var getGenerevisualizza = function (genere) {
        return fetch(url + "discover/tv?" + api + "&language=" + language + "&page=" + page + "&with_genres=" + genere)
    }

    return {
        getPopular: getPopular,
        getDetails: getDetails,
        getGenere: getGenere,
        getGenerevisualizza : getGenerevisualizza
    }
})()


