import { searchShows, getShowDetails } from "./tvmaze-api.js";

let timeoutSearch=null;

document.getElementById('txtSearch').addEventListener('input', (e) => {
    if (timeoutSearch) clearTimeout(timeoutSearch);

    timeoutSearch = setTimeout(() => {
        searchShows(e.target.value, (shows) => {
            createMovies(shows);
        });
    }, 500);
    
});

const createMovies = (shows) => {
    const lstTvShows = document.getElementById('lstTvShows');

    lstTvShows.innerHTML = '';

    shows.forEach((item) => {
        const movieCard = createMovieCard(item);
        lstTvShows.insertAdjacentHTML('afterbegin', movieCard);
    })
}

const createMovieCard = (item) => {
    const {image, name, genres} = item.show;

    let movieImage='../../assets/img/noimage.png';

    if (image) {
        movieImage = image.medium;
    }
    return `
            <div class="col">
                <div class="card h-100">
                    <img src="${movieImage}" class="card-img-top" alt="${name}">
                    <div class="card-body">
                        <h5 class="card-title">${name}</h5>
                        <p class="card-text">${genres.join(', ')}</p>
                    </div>
                </div>
            </div>
    `;
}

