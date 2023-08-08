let url = "https://kontests.net/api/v1/all";
let response = fetch(url)
response.then((v) => {
  return v.json()
}).then((contests) => {
  console.log(contests);
   ihtml = "";
  for (item in contests) {
    console.log(contests[item])
    ihtml += ` <div class="card mx-2 my-2" style="width: 18rem;">
  <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTpWuNT35PYF4wZiKbEqy5-nqHE3CRO-4Jy59uUP8bp&s" class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title">${contests[item].name}</h5>
    <p class="card-text">Status is :${contests[item].status}</p>
    <p>Starts at:${contests[item].start_time}</p>
      <p>Ends at:${contests[item].end_time}</p>
    <a href="${contests[item].url}" class="btn btn-primary my-2">Visit Contest</a>
  </div>
  </div>`
  }
cardContainer.innerHTML = ihtml;
  })




