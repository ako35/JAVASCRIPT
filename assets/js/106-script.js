import { searchShows } from "./tvmaze-api.js";

const lstTvShows = document.getElementById('lstTvShows');

let timeoutSearch=null;

lstTvShows.addEventListener('click', (e) => {
    const selectedCard = e.target.closest('.card');
    const showId = selectedCard.dataset.show;
    location.href = `107-tvshow-details.html?id=${showId}`;
})

document.getElementById('txtSearch').addEventListener('input', (e) => {
    if (timeoutSearch) clearTimeout(timeoutSearch);

    timeoutSearch = setTimeout(() => {
        searchShows(e.target.value, (shows) => {
            createMovies(shows);
        });
    }, 500);
    
});

const createMovies = (shows) => {

    lstTvShows.innerHTML = '';

    shows.forEach((item) => {
        const movieCard = createMovieCard(item);
        lstTvShows.insertAdjacentHTML('afterbegin', movieCard);
    })
}

const createMovieCard = (item) => {
    const {image, name, genres, id} = item.show;

    let movieImage='../../assets/img/noimage.png';

    if (image) {
        movieImage = image.medium;
    }
    return `
            <div class="col">
                <div class="card h-100" style='cursor:pointer' data-show="${id}">
                    <img src="${movieImage}" class="card-img-top" alt="${name}">
                    <div class="card-body">
                        <h5 class="card-title">${name}</h5>
                        <p class="card-text">${genres.join(', ')}</p>
                    </div>
                </div>
            </div>
    `;
}

