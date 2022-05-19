// Show password
function myFunction() {
  var x = document.getElementById("showPassword");
  if (x.type === "password") {
    x.type = "text";
  } else {
    x.type = "password";
  }
}

function showAlert() {
  alert("Selamat anda sudah berhasil login, lanjutkan untuk kembali berbelanja");
}
