class procesadores{
    constructor(modelo,core, ghz, precio, imagen){
    this.modelo = modelo
    this.core = core,
    this.ghz = ghz,
    this.precio = precio,
    this.imagen = imagen   
    }
    mostrarData (){
        console.log(`el procesador ${this.modelo} esta compuesto por ${this.core} nucleos e logra llegar a una velocidad media de ${this.ghz} y costa unos ${this.precio}`)
    }
}

// let amd = []
// const cargarAmd = async() =>{
//     const response = await fetch("amd.json")
//     const data = await response.json()
//     console.log(data)    
//     for(var i in amd){
//         amd[i].modelo
        
//     }
// }
    
// localStorage.setItem("amd", JSON.stringify(amd) )
let amd = []

async function amdF(){
    const response = await fetch("http://127.0.0.1:5500/desafio/desafioFinal/amd.json")
    const json = await response.text()

    console.log(JSON.parse(json))

}

amdF()

json.modelo.forEach(modelo =>{modelo})

// //Revisa si existe en el local y lo trae 

// if(localStorage.getItem("amd")){
//     amd = JSON.parse(localStorage.getItem("amd"))
// }
// else{
//     console.log("Seteando por primera vez el array")
//     //Invoco la function async
//     cargarAmd()
// }

// amd
    const procesador1 = new procesadores("ryzen 3350",4, "3.6 GHz","150€", "ryzen-3.jpg")
    const procesador2 = new procesadores("ryzen 5500",6, "4.0 GHZ","200€", "ryzen-5.jpg")
    const procesador3 = new procesadores("ryzen 5700g",8, "4,2 GHz","300€", "ryzen-7.jpg")
    const procesador4 = new procesadores("ryzen 5900x",16, "4,4","400€","ryzen-9.jpg")

    // const amd = []
    // amd.push(procesador1, procesador2, procesador3, procesador4)

    let divProductos = document.getElementById("productos")
    function mostrarCatalogo(array){
        divProductos.innerHTML = ""
        array.forEach((procesador)=>{
            let nuevoProducto = document.createElement("div")
            nuevoProducto.innerHTML = `<div id="${procesador.modelo}" class="card" style="width: 18rem;">
                                        <img class="card-img-top" style="height: 250px;" src="Amd//${procesador.imagen}" alt="${procesador.modelo}">
                                        <div class="card-body">
                                            <h4 class="card-title">${procesador.modelo}</h4>
                                            <p>core: ${procesador.core}</p>
                                            <p>core: ${procesador.ghz}</p>
                                            <p class="">Precio: ${procesador.precio}</p>
                                            <button class="btn btn-outline-success btnComprar">Agregar al carrito</button>
                                        </div></div>`
            divProductos.append(nuevoProducto)
        })
        let btnCompra = document.getElementsByClassName("btnComprar")
        for(let compra of btnCompra){
        compra.addEventListener("click", ()=>{
  
        })
    }
    }
    let btnMostrarCatalogo = document.getElementById("verAmd")
    btnMostrarCatalogo.addEventListener("click", ()=>{
        mostrarCatalogo(amd)
    })
// intel

const Procesador5 = new procesadores("intel i9 11900" ,"8 nucleos y 16 hilos", "5ghz","521€" ,"i9.jpg")
const Procesador6 = new procesadores("intel i7 11700f" ,8 ,"4,8ghz" ,"324€" ,"i7.jpg")
const Procesador7 = new procesadores("intel i5 11400f",6 ,"4,4ghz" ,"174€" ,"i5.jpg")
const Procesador8 = new procesadores("intel i3 12100", 4 ,"3,3", "160€" ,"i3.jpg")
const intel = []
intel.push(Procesador5, Procesador6, Procesador7, Procesador8)



let divProductos1 = document.getElementById("productos1")
function mostrarIntel(array1){
    divProductos1.innerHTML = ""
    array1.forEach((procesador)=>{
        let nuevoProducto1 = document.createElement("div")
        nuevoProducto1.innerHTML = `<div id="${procesador.modelo}" class="card" style="width: 18rem;">
                                    <img class="card-img-top" style="height: 250px;" src="intel//${procesador.imagen}" alt="${procesador.modelo}">
                                    <div class="card-body">
                                        <h4 class="card-title">${procesador.modelo}</h4>
                                        <p>core: ${procesador.core}</p>
                                        <p>core: ${procesador.ghz}</p>
                                        <p class="">Precio: ${procesador.precio1}</p>
                                        <button class="btn btn-outline-success btnComprar">Agregar al carrito</button>
                                    </div>`
        divProductos1.append(nuevoProducto1)
    })


}

let btnMostrarCatalogoI = document.getElementById("verIntel")
btnMostrarCatalogoI.addEventListener("click", ()=>{
    mostrarIntel(intel)
})

