function nomesobrenome(){
    var nome = document.getElementById("txtNome").value;
    
    var img = document.createElement("IMG");
    img.src = "https://i.imgur.com/F543MoZ.png";
    img.style.width = "30px";
    img.style.height = "30px";
    document.getElementById('imagens').appendChild(img);

    var div = document.getElementById("divResultado");
    div.innerText = nome +" Seja bem vindo" ;
}
