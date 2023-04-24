// $(".search").on("click", function () {
//   $.ajax({
//     url:
//       "http://www.omdbapi.com/?apikey=ecadbc29&s=" + $(".input-keyword").val(),
//     success: (result) => {
//       // console.log(result);
//       const movies = result.Search;
//       let cards = "";
//       // console.log(movies);
//       movies.forEach((m) => {
//         //   console.log(m);
//         cards += showCards(m);
//       });
//       $(".container-movie").html(cards);

//       $(".show-detail-btn").on("click", function () {
//         //   console.log($(this).data("imdbid"));
//         $.ajax({
//           url:
//             "http://www.omdbapi.com/?apikey=ecadbc29&i=" +
//             $(this).data("imdbid"),
//           success: (m) => {
//             const modalBody = detailModalBody(m);

//             $(".modal-body").html(modalBody);
//           },
//           error: (e) => {
//             console.log(e.responseText);
//           },
//         });
//       });
//     },
//     error: (e) => {
//       console.log(e.response.Text);
//     },
//   });
// });

// const search = document.querySelector(".search");
// search.addEventListener("click", function () {
//   const inputKeyword = document.querySelector(".input-keyword");

//   fetch("http://www.omdbapi.com/?apikey=ecadbc29&s=" + inputKeyword.value)
//     .then((response) => response.json())
//     .then((response) => {
//       const movies = response.Search;
//       let cards = "";
//       // console.log(movies);
//       movies.forEach((m) => {
//         cards += showCards(m);
//         // console.log(cards);

//         const containerMovies = document.querySelector(".container-movie");
//         containerMovies.innerHTML = cards;

//         const showButton = document.querySelectorAll(".show-detail-btn");

//         showButton.forEach((btn) => {
//           btn.addEventListener("click", function () {
//             fetch(
//               "http://www.omdbapi.com/?apikey=ecadbc29&i=" + this.dataset.imdbid
//             )
//               .then((response) => response.json())
//               .then((m) => {
//                 const showModalBody = detailModalBody(m);

//                 const modalBody = document.querySelector(".modal-body");
//                 modalBody.innerHTML = showModalBody;
//               });
//           });
//         });

//         // console.log(showButton);
//       });
//     });
// });

const search = document.querySelector(".search");

search.addEventListener("click", async function () {
  const inputKeyword = document.querySelector(".input-keyword");
  const movies = await getMovies(inputKeyword.value);
  // updateUI(movies);
  console.log(movies);
});

function getMovies(keyword) {
  return fetch("http://www.omdbapi.com/?apikey=ecadbc29&s=" + keyword.value)
    .then((response) => response.json())
    .then((response) => response);
}

function updateUI(movies) {
  let cards = "";
  console.log(movies);
  movies.forEach((m) => {
    cards += showCards(m);
  });
  let containerMovies = document.querySelector(".container-movie");
  containerMovies.innerHTML = cards;
  // console.log(cards);
}

function showCards(m) {
  return `<div class="col-md-4 my-3">
          <div class="card">
              <img src="${m.Poster}" class="card-img-top img-thubnail" />
              <div class="card-body">
              <h5 class="card-title">${m.Title}</h5>
              <p class="card-text text-mute">${m.Year}</p>
              <a href="#" class="btn btn-primary show-detail-btn" data-bs-toggle="modal"
              data-bs-target="#showDetail" data-imdbid="${m.imdbID}">Show Details</a>
              </div>
          </div>
          </div>`;
}

function detailModalBody(m) {
  return ` <div class="container-fluid">
              <div class="row">
                  <div class="col-md-3">
                  <img src="${m.Poster}" class="img-fluid" alt="" />
                  </div>
                  <div class="col-md">
                  <ul class="list-group">
                      <li class="list-group-item"><strong>Title : </strong> ${m.Title} (${m.Year})</li>
                      <li class="list-group-item"><strong>Director : </strong> ${m.Director}</li>
                      <li class="list-group-item"><strong>Actor : </strong> ${m.Actor}</li>
                      <li class="list-group-item"><strong>Writer : </strong> ${m.Writer}</li>
                      <li class="list-group-item"><strong>Plot : </strong> ${m.Plot}</li>
                  </ul>
                  </div>
              </div>
              </div>`;
}
