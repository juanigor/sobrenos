document.getElementById("login-btn").addEventListener("click", function (e) {
  e.preventDefault();

  // IDs corrigidos conforme o HTML
  const username = document.getElementById("nome").value;
  const password = document.getElementById("senha").value;

  if (username === "luysa" && password === "06062025") {
    document.body.classList.add("fade-out");

    setTimeout(() => {
      window.location.href = "landing.html"; // página de destino
    }, 600);
  } else {
    alert("Usuário ou senha inválidos");
  }
});
