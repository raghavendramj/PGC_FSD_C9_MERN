let searchbook = () => {
  let findText = document.getElementById("booksearch").value;
  let url = "https://www.googleapis.com/books/v1/volumes?q=" + findText;

  let xhr = new XMLHttpRequest();
  xhr.open("GET", url, true);
  xhr.send();

  xhr.onreadystatechange = () => {
    if (xhr.readyState === 4 && xhr.status === 200) {
      //console.log("Response :- ", xhr.response);
      let responseObject = JSON.parse(xhr.response);
      let bookItemsArray = responseObject.items;
      let bookTitlesParasArray = bookItemsArray.map((eachBookItem) => {
        return `<p>${eachBookItem.volumeInfo.title}</p>`;
      });

      //console.log("Books bookTitleArray -> ", bookTitlesParasArray);
      let displaysearchedresults = document.getElementById("displaysearchedresults");
      displaysearchedresults.innerHTML = bookTitlesParasArray.join("");
    }
  };
};
