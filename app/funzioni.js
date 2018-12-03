const row = document.getElementById("row")


function disegna(lista) {
    row.innerHTML = ""
    var str = ""
    lista.forEach(element => {
        str += `
        <div class="col-5 bg-white shadow mx-5 mb-5 rounded">
                <div class="row">
                    <!--copertina-->
                    <div class="col-4">
                        <img class="img-fluid" src="https://image.tmdb.org/t/p/w500/${element.poster_path}" alt="">
                    </div>
                        <!--scheda-->
                    <div class="col-8">
                            <div class="row">
                                <div class="col-2">${element.vote_average}</div>
                                <div class="col-10">
                                    <h4>${element.title ? element.title : element.name}</h4>
                                </div> 
                            </div>
                            <div class="row">
                                <div class="col-12">${element.release_date ? element.release_date : element.first_air_date}</div>
                            </div>
                            <div class="row">
                                <div class="col-12"><p>${element.overview ? element.overview.slice(0, 500) + "..." : ""}</p></div>
                            </div>
                            `
        if (element.title) {
            str += `
                            <div class="col-12"><button id="dettagli" type="button" class="float-right btn btn-dark" onclick="getDetails(${element.id})">Dettagli</button></div>
                            `
        } if (element.name) {
            str += `
                            <div class="col-12"><button id="dettagli" type="button" class="float-right btn btn-dark" onclick="getDetailsSerie(${element.id})">Dettagli</button></div>
                            `
        }
        str +=
            `</div>
                </div>
        </div>
        `
    });
    row.innerHTML = str
}

function getMovies() {
    var filmspopolari = movies.getPopular()
        .then(response => response.json())
        .then(data => {
            console.log(data)
            filmspopolari = data.results
            var numerofilms = data.total_results
            disegna(filmspopolari)
        })
        .catch(err => console.log(err));
}

function getSeries() {
    serie.getPopular()
        .then(response => response.json())
        .then(data => {
            console.log(data)
            seriepopolari = data.results
            disegna(seriepopolari)
        })
        .catch(err => console.log(err));
}

function getDetails(id) {
    movies.getDetails(id)
        .then(response => response.json())
        .then(data => {
            filmdettaglio = data
            console.log(filmdettaglio)
            disegnadettaglio(filmdettaglio)
        })
        .catch(err => console.log(err));
}

function getDetailsSerie(id) {
    serie.getDetails(id)
        .then(response => response.json())
        .then(data => {
            seriedettaglio = data
            console.log(seriedettaglio)
            disegnadettaglio(seriedettaglio)
        })
        .catch(err => console.log(err));
}

function getGenerevisualizza(genere) {
    filmgenere = movies.getGenerevisualizza(genere)
        .then(response => response.json())
        .then(data => {
            filmgenere = data.results
            disegna(filmgenere)
        })
        .catch(err => console.log(err));
}

function getGenerevisualizzaserie(genere) {
    seriegenere = serie.getGenerevisualizza(genere)
        .then(response => response.json())
        .then(data => {
            seriegenere = data.results
            disegna(seriegenere)
        })
        .catch(err => console.log(err));
}

function disegnadettaglio(element) {
    row.innerHTML = ""
    var str = ""
    str += `
        <div class="col-10 bg-white shadow mx-5 mb-5 rounded">
                <div class="row">
                    <!--copertina-->
                    <div class="col-4">
                        <img class="img-fluid" src="https://image.tmdb.org/t/p/w500/${element.poster_path}" alt="">
                    </div>
                        <!--scheda-->
                    <div class="col-8">
                            <div class="row">
                                <div class="col-2">${element.vote_average}</div>
                                <div class="col-10">
                                    <h2>${element.title ? element.title : element.name}</h2>
                                </div> 
                            </div>
                            <div class="row">
                                <div class="col-12">${element.release_date ? element.release_date : element.first_air_date}</div>
                            </div>
                            <div class="row">
                                <div class="col-12"><p>${element.overview}</p></div>
                            </div>
                            <div class="row">
                                <div class="col-12"><p>`
                                element.genres.forEach (el =>{
                                    str += "<span><strong>" +el.name+ " </strong></span>"
                                })
                                str += `</p></div>
                            </div>
                            <div class="row text-center">
                                <div class="col-12"><h3>${element.tagline}</h3></div>
                            </div>

                            </div>
                </div>
        </div>
        `
    row.innerHTML = str
}