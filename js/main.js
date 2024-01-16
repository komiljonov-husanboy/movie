let elMov_list = document.querySelector('.movies__list');
let partMovies = movies.slice(0,90)
fnMapp(partMovies)
function fnMapp(data) {
    elMov_list.innerHTML = ''
    data.forEach((item) => {
    
        let newLi = document.createElement('li')
        newLi.className ="list__item"
        newLi.innerHTML =`
        <div class="card" class="card__item" style="width: 18rem;">
            <img class ="img" src="https://i.ytimg.com/vi/${item.ytid}/hq720.jpg?sqp=-…AFwAcABBg==&rs=AOn4CLDUzYxOIk6lPA_8VBE3ONmPM-87LA" class="card-img-top" alt="...">
            <div class="card-body">
                 <h5 class="card-title">${item.Title.toString().split("").slice(0,5).join("")}</h5>
                <p class="card-text">${item.summary.split("").slice(0,10).join("")} ...</p>
                <p class="card-text">Category: ${item.Categories.split("").slice(0,7).join("")}</p>
                <p class="card-text">reyting: ${item.imdb_rating}</p>
                <p class="card-text">year: ${item.movie_year}</p>
                <a href="https://www.youtube.com/watch?v=${item.ytid}" class="btn" target ="_blank" >view an ad</a>
            </div>
        </div>
        `
        elMov_list.appendChild(newLi)
    });
}
    window.addEventListener("scroll", function() {
        var heads = document.querySelector(".heads");
        heads.classList.toggle("scrolled", window.scrollY > 50);
    });



         function fnYear(year) {
        if (year == "new") {
            fnMapp(partMovies.sort((a,b) => b.movie_year - a.movie_year));
        }
        else{
            fnMapp(partMovies.sort((a,b) => a.movie_year - b.movie_year));
        }
      } 
    
    function fnRating(rating) {
        if (rating == "max") {
            fnMapp(partMovies.sort((a,b) => b.imdb_rating - a.imdb_rating));
        }
        else{
            fnMapp(partMovies.sort((a,b) => a.imdb_rating - b.imdb_rating));
        }
    } 
   
  
let arrCategory =[]
partMovies.forEach((item) =>{
    if (arrCategory.includes(item.Categories) == false) {
        arrCategory.push(item.Categories);
    }
})

    let elSelect = document.querySelector('.sel__category')
    arrCategory.forEach((item) => {
        let newOption = document.createElement('option')
        newOption.textContent = item
        newOption.value = item
        elSelect.appendChild(newOption)
    })
    function fnCategory(category) {
        fnMapp(partMovies.filter((item) => item.Categories == category));
    } 

// var Modal = document.querySelector('.modal')

//     function fnModal(params) {
        
//     }


// function Modal(params) {
//   const signupBtn = document.getElementById("signup-btn");
//   const modal = document.getElementById("modal");
//   const close = document.getElementsByClassName("close")[0];

//   signupBtn.addEventListener("click", function() {
//     modal.style.display = "block";
//   });

//   close.addEventListener("click", function() {
//     modal.style.display = "none";
//   });

//   window.addEventListener("click", function(event) {
//     if (event.target == modal) {
//       modal.style.display = "none";
//     }
// //   });


