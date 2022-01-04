function encodeAndDecode() {
  let username = "raghav@gmail.com";
  let encodedUsername = window.btoa(username);

  console.log("Encoded Username :- ", encodedUsername);

  let decodedUsername = window.atob(encodedUsername);
  console.log("Decoded Username :- ", decodedUsername);
}

encodeAndDecode();
