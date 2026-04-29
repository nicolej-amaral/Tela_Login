const form = document.getElementById("TelaLogin");

form.addEventListener("submit", function (e) {
    e.preventDefault();

   
    const email = document.getElementById("email").value;
    const senha = document.getElementById("senha").value;
   


   
    if (!email.includes("@")) return alert("Email inválido");
    if (senha.length < 8) return alert("Senha inválida");
    

    let informações = [{
      
        email,
        senha,
    
    }];

    alert("Formulário enviado!");
    alert(JSON.stringify(informações, null, ));
});