var pass1 = document.getElementById("password1");
var pass2 = document.getElementById("password2");

function password() {
  if (pass1.value === pass2.value) {
    return true;
  }
}
