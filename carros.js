let carros = [{
    id: "",
    marca: "Fiat",
    modelo: "Freemont"
},
{
    id: "",
    marca: "Fiat",
    modelo: "Doblo"
},
{
    id: "",
    marca: "Dodge",
    modelo: "Journey"
},
{
    id: "",
    marca: "Kia",
    modelo: "Sorento"
},
{
    id: "",
    marca: "Hyundai",
    modelo: "Gran Santa Fé"
},
{
    id: "",
    marca: "Chevrolet",
    modelo: "Zafira"
},
]

let marcaCarro = [];

let listaCarrosPadrao = function(lista){
        for(let i in lista){
            let car = lista[i].modelo
            let id = Number([i])+1
            let mar = lista[i].marca
            document.getElementById("listarCarros").innerHTML += "<option>"+id+"-"+mar+"-"+car+"</option>"
        }
    }
listaCarrosPadrao(carros)

let carregarDados = (lista) =>{
    let indice = document.getElementById("listarCarros").selectedIndex
    document.getElementById("idCarro").value = indice + 1
    for(let i in lista){
        if(i == indice){
            document.getElementById("marcaCarro").value = lista[i].marca
            document.getElementById("txtModelo").value = lista[i].modelo
        }
    }
}

let cadastrarMarca = () =>{
    let marca = document.getElementById("marca").value
    document.getElementById("listarMarcas").innerHTML = "<li>"+marca+"</li>"
}
cadastrarMarca()        

