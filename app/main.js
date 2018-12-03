const form = document.getElementById("ricerca")
var tenda = document.getElementById("dropdown")
var bottone = document.getElementById("bottone")
var selectfilm = document.getElementById("selectfilm")
var selectserie = document.getElementById("selectserie")


//mio tentativo bellissimo
// var inputcerca = document.getElementById("inputcerca")
// inputcerca.onkeyup = function () {
//     var filmcercati = filmspopolari.filter(filmcercato => {
//         return filmcercato.title.toLowerCase().startsWith(inputcerca.value.toLowerCase());
//     })
//     disegna(filmcercati)
// }

form.addEventListener("submit", function (e) {
    e.preventDefault()
    var valore = form["inputcerca"].value

    form["inputcerca"].value = ""
    var filmstrovati = movies.getSearch(valore)
        .then(response => response.json())
        .then(data => {
            console.log(data)
            filmstrovati = data.results
            var numerofilms = data.total_results
            disegna(filmstrovati)
        })
        .catch(err => console.log(err));
})


tenda.addEventListener("click", function (e) {
    var valore = e.target.getAttribute("nome")
    switch (valore) {
        case "film":
            getMovies();
            break;
        case "serie":
            getSeries();
            break;
    }
})

getMovies()
var generifilmglob
movies.getGenere()
    .then(response => response.json())
    .then(data => {
        var generi = data.genres;
        // generi.forEach(genere => {
        //     var option = document.createElement("option")
        //     option.setAttribute("value", genere.id)
        //     option.textContent = genere.name
        //     selectfilm.appendChild(option)
        $("<option></option", {
            value: genre.id,
            text: genre.name
        }).appendTo(selectfilm)
    })

    .catch(err => console.log(err));

selectfilm.addEventListener("change", function () {
    var valore = this.value;
    selectserie.value = "tutti"
    if (valore == "tutti") {
        getMovies()
    } else {
        getGenerevisualizza(valore)
    }
})

serie.getGenere()
    .then(response => response.json())
    .then(data => {
        var generi = data.genres;
        generi.forEach(genere => {
            var option = document.createElement("option")
            option.setAttribute("value", genere.id)
            option.textContent = genere.name
            selectserie.appendChild(option)
        })
    })
    .catch(err => console.log(err));
    
selectserie.addEventListener("change", function () {
    var valore = this.value;
    selectfilm.value = "tutti"
    if (valore == "tutti") {
        getMovies()
    } else {
        getGenerevisualizza(valore)
    }
    getGenerevisualizzaserie(valore)
})