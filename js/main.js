let elMov_list = document.querySelector('.movies__list');
let partMovies = movies.slice(0,90)

partMovies.forEach((item) => {

    let newLi = document.createElement('li')
    newLi.className ="list__item"
    newLi.innerHTML =`
    <div class="card" class="card__item" style="width: 18rem;">
        <img class ="img" src="https://i.ytimg.com/vi/${item.ytid}/hq720.jpg?sqp=-…AFwAcABBg==&rs=AOn4CLDUzYxOIk6lPA_8VBE3ONmPM-87LA" class="card-img-top" alt="...">
        <div class="card-body">
             <h5 class="card-title">${item.Title}</h5>
            <p class="card-text">${item.summary.split("").slice(0,10).join("")} ...</p>
            <p class="card-text">reyting: ${item.imdb_rating}</p>
            <p class="card-text">year: ${item.movie_year}</p>
            <a href="https://www.youtube.com/watch?v=${item.ytid}" class="btn" target ="_blank" >view an ad</a>
        </div>
    </div>
    `
    elMov_list.appendChild(newLi)
});