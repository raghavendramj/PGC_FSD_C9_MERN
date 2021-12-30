async function loadCountries() {
  //The async keyword placed before a function means that the function will return a promise.
  let promise = new Promise(function (resolve, reject) {
    let url = "https://api.openaq.org/v1/countries";
    const xhttp = new XMLHttpRequest();
    xhttp.open("GET", url, true);
    xhttp.send();

    xhttp.onreadystatechange = () => {
      if (xhttp.readyState === 4 && xhttp.status === 200) {
        const countries = JSON.parse(xhttp.response).results;
        //console.log(countries);
        resolve(countries);
      }
      if (xhttp.readyState === 4 && xhttp.status === 404) {
        reject(xhttp.response);
      }
    };;
  });
  let result = await promise; //The await keyword makes JavaScript wait until the promise gets resolved or rejected and returns its result.
  return result;
}

let retPromise = loadCountries();

retPromise.then((result) => console.log("Result :- ", result));
