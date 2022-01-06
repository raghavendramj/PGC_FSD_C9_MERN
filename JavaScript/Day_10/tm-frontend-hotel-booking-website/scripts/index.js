let appendCitiesToDiv = (idOfTheDiv, cities) => {
  let defaultCityCards = document.getElementById(idOfTheDiv);
  let defaultCityDivHTMLArray = cities.map((cityObject) => {
    return `
      <div>
          <div class="city-card-and-name-inner">
              <a href="list.html">  
                  <img src="${cityObject.imageLink}" class="city-image">
                  <div class='overlay'><span>${cityObject.cityName}</span></div>
              </a>
          </div> 
      </div>
      `;
  });

  let defaultCityDivHTMLString = defaultCityDivHTMLArray.join("");
  defaultCityCards.innerHTML = defaultCityDivHTMLString;
};

let cities = [
  {
    cityName: "Delhi",
    imageLink:
      "https://media-cdn.tripadvisor.com/media/photo-s/15/33/fe/a2/new-delhi.jpg",
  },
  {
    cityName: "Goa",
    imageLink:
      "https://media-cdn.tripadvisor.com/media/photo-s/15/33/fc/f0/goa.jpg",
  },
  {
    cityName: "Hyderabad",
    imageLink:
      "https://media-cdn.tripadvisor.com/media/photo-s/0f/98/f7/df/charminar.jpg",
  },
  {
    cityName: "Kolkata",
    imageLink:
      "https://media-cdn.tripadvisor.com/media/photo-s/15/33/fe/ac/kolkata-calcutta.jpg",
  },
];
appendCitiesToDiv("city-cards", cities);

let moreCities = [
  {
    cityName: "Agra",
    imageLink:
      "https://media-cdn.tripadvisor.com/media/photo-s/15/33/fc/fc/agra.jpg",
  },

  {
    cityName: "Jaipur",
    imageLink:
      "https://media-cdn.tripadvisor.com/media/photo-s/10/a3/3b/8a/screenshot-2017-09-12.jpg",
  },
  {
    cityName: "Bengaluru",
    imageLink:
      "https://media-cdn.tripadvisor.com/media/photo-s/0c/d2/2f/7a/palace-from-the-outside.jpg",
  },
  {
    cityName: "Chennai",
    imageLink:
      "https://media-cdn.tripadvisor.com/media/photo-s/15/4d/46/b8/chennai-madras.jpg",
  },
];

let viewMoreCities = () => {
  console.log("View More button clicked!");
  let viewMoreBtn = document.getElementById("view-more-btn");
  let viewMoreCitiesDiv = document.getElementById("view-more-city-cards");

  if (viewMoreBtn.innerText === "View More") {
    appendCitiesToDiv("view-more-city-cards", moreCities);
    viewMoreCitiesDiv.style.display = "flex";
    viewMoreBtn.innerText = "View Less";
  } else {
    viewMoreCitiesDiv.style.display = "none";
    viewMoreBtn.innerText = "View More";
  }
};
