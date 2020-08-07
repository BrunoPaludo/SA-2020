function nomesobrenomecpf(){
    var nome = document.getElementById("txtNome").value;
    var sobrenome = document.getElementById("txtSobrenome").value;
    var cpf = document.getElementById("txtCpf").value
    var div = document.getElementById("divResultado");
    div.innerText = nome.toUpperCase() +" "+ sobrenome.toUpperCase() +" "+ cpf;
    }