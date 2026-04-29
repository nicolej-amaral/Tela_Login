document.getElementById("formDoacao").addEventListener("submit", function(e){
    e.preventDefault(); 

    let doadores = []

    let nome = document.getElementById("nome").value;
    let email = document.getElementById("email").value;
    
    let telefone = document.getElementById("Senha").value;
   

    if(nome.length < 3) return alert("Nome inválido");

    if(telefone.length == 0) return alert("Telefone inválido");



    document.getElementById("resultado").innerHTML = "Cadastro realizado com sucesso! <br>" + "Nome: " + nome + "<br>" + "Email: " + email + "<br>" + "Idade: " + idade + "<br>" + "Peso: " + peso + "<br>" + "Tipo Sanguíneo: " + tipoSanguineo + "<br>" + "Telefone: " + telefone + "<br>" + "Cidade: " + cidade + "<br>" + "Estado: " + estado + "<br>" + "Quintal: " + (quintal ? quintal.value : "Não informado");
});