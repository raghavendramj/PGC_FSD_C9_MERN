const getContinents = (callBack) => {
  setTimeout(() => {
    let continent = "Asia";
    console.log("The Continent is", continent);
    callBack(continent);
  }, 3000);
};

const getCountries = (continent, callBack) => {
  setTimeout(() => {
    let country = "India";
    console.log("The Country is", country);
    callBack(country);
  }, 3000);
};

const getStates = (country, callBack) => {
  setTimeout(() => {
    let state = "Karnataka";
    console.log("The State is", state);
    callBack(state);
  }, 3000);
};

const getCities = (city, callBack) => {
  setTimeout(() => {
    let city = "Bangalore";
    console.log("The city is", city);
    callBack();
  }, 3000);
};

completeAddressFetch = () => {
  setTimeout(() => {
    console.log("Address fetching is now stands complete!");
  }, 1000);
};

const getAddress = () => {
  console.log("Lets fetch the address...");
  getContinents((continent) => {
    getCountries(continent, (country) => {
      getStates(country, (state) => {
        getCities(state, () => {
          completeAddressFetch();
        });
      });
    });
  });
};

getAddress();
