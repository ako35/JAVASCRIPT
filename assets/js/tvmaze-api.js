const baseUrl = "https://api.tvmaze.com";

const searchShows = (query, callback) => {
    const url = `${baseUrl}/search/shows?q=${query}`;

    fetch(url)
        .then((response) => response.json())
        .then((data) => {
            console.log(data);
            callback(data);
        })
        .catch((error) => {
            console.log(error);
        })
}

const getShowDetails = () => {
    
}

export {
    searchShows,
    getShowDetails
}