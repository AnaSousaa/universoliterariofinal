const form = document.getElementById("form");
const campos = document.querySelectorAll(".required");
const spans = document.querySelectorAll(".span-required");
const emailRegex = /^([a-z0-9_\.\-])+\@(([a-z0-9\-])+\.)+([a-z0-9]{2,4})+$/;

// Mostrar erro (borda dos inputs em cor vermelha)
function setError(index) {
  campos[index].style.border = "2px solid #e63636";
  spans[index].style.display = "block";
}

// Remover erro
function removeError(index) {
  campos[index].style.border = "2px solid #228B22";
  spans[index].style.display = "none";
}

// Validação dos campos de Email
function emailValidate() {
  if (!emailRegex.test(campos[0].value)) {
    setError(0);
  } else {
    removeError(0);
  }
}
