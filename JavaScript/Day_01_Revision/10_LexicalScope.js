function grandparent() {
  var g_age = 75;
  parent();

  function parent() {
    var p_age = 50;
    child();

    function child() {
      var c_age = 25;
      console.log(c_age, p_age, g_age);
    }
  }
}

grandparent();
