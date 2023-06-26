import { getShowDetails } from "./tvmaze-api.js";

const url=new URL(document.URL);
const searchParams=url.searchParams;
const showId=searchParams.get("id");

getShowDetails(showId, (show) => {
    console.log(show);    

    const title = document.getElementById('title');
    const image = document.getElementById('image');
    const cardBody = document.getElementById('card-body');

    title.innerHTML = show.name;
    image.setAttribute('src', show.image.original);
    image.setAttribute('alt', show.name);
    cardBody.classList.remove('d-none');
});