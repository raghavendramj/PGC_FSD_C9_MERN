const searchBar = document.getElementById("searchbar");
const dishList = document.getElementById("dishList");
let mealsList = [];

const fetchDishesAjaxWay = () => {
  const url = "https://www.themealdb.com/api/json/v1/1/search.php?s";
  let xhr = new XMLHttpRequest();
  xhr.open("GET", url, true);
  xhr.send();

  console.log("Entered heere");
  xhr.onreadystatechange = () => {
    if ((xhr.readyState === 4) & (xhr.status === 200)) {
      //console.log("Result : ", xhr.response);
      let parsedObject = JSON.parse(xhr.response);
      mealsList = parsedObject.meals;
      printMeals(mealsList);
    }
  };
};

fetchDishesAjaxWay();

const printMeals = (dishes) => {
  let dishesString = dishes.map((eachDish) => {
    return `<li class='dishes'>
                <h3>${eachDish.strMeal}</h3>
                <p>${eachDish.strArea}</p>
                <img src="${eachDish.strMealThumb}"></img>
            </li>`;
  });

  dishesString = dishesString.join("");
  dishList.innerHTML = dishesString;
};

searchBar.addEventListener("keyup", (filterInput) => {
  let filterText = filterInput.target.value;
  filterText = filterText.toLowerCase();

  const filterdMealList = mealsList.filter((eachDish) => {
    return eachDish.strArea.toLowerCase().includes(filterText);
  });

  printMeals(filterdMealList);
});
