function prosesMenu() {
  var input = document.getElementById("cariKat");
  var filter = input.value.toLowerCase();
  var ul = document.getElementById("daftarKategori");
  var li = document.querySelectorAll("li");
  console.log(li);
  for (var i = 0; i < li.length; i++) {
    var ahref = document.querySelectorAll("a")[i];
    if (ahref.innerHTML.toLowerCase().indexOf(filter) > -1) {
      li[i].style.display = "";
    } else {
      li[i].style.display = "none";
    }
  }
}
