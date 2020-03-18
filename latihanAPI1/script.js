function cari() {
  var cariKota = document.getElementById("cari").value;
  console.log(cariKota);
  fetch(
    "https://api.openweathermap.org/data/2.5/weather?q=" +
      cariKota +
      "&appid=51223dff47685f1bb97415e321f5ce0b"
  )
    .then(response => {
      return response.json();
    })
    .then(iniObject => {
      console.log(iniObject);
      document.getElementById("city").innerHTML = iniObject.name;
      document.getElementById("cordinat").innerHTML =
        iniObject.coord.lat + " lat " + iniObject.coord.lon + " lon ";
      var conversiSuhu = iniObject.main.temp - 273.15;
      conversiSuhu = conversiSuhu.toString();
      console.log(conversiSuhu);
      document.getElementById("temperatur").innerHTML =
        conversiSuhu.substring(0, 4) + " 'C";
      document.getElementById("keterangan").innerHTML =
        iniObject.weather[0].main;
    });
}

cari();
