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
// tutor mire le dejo mi codigo de literalmente 3 dias para solucionar el problema que tenia al no poder pushear el json al array asi se rie un toque jajajajaj, igualmente fue un tema muy dificil
//  y todavia no lo tengo del todo resuelto porque aun me falta solucionar lo de las imagenes pero debo entregarlo luego le muestro el proyecto final asi veo que opina

    // let amd = []
    // const cargarAmd = async() =>{
    //     const response = await fetch("amd.json")
    //     const data = await response.json()
    //     console.log(data)    
    //     for(var i in amd){
    //         amd[i].modelo
            
    //     }
    // }


    // const response = await fetch("http://127.0.0.1:5500/desafio/desafioFinal/amd.json")
    // const json = await response.text()

    // json.forEach8function(function(modelo)){
    //     console.log(valor)
    // }



        
    // localStorage.setItem("amd", JSON.stringify(amd) )

    // async function amdF(){
    //     const response = await fetch("http://127.0.0.1:5500/desafio/desafioFinal/amd.json")
    //     const json = await response.text()

    //     console.log(JSON.parse(json))
    // }
    // // amdF()
    // amd.push(amdF())
    // let amdContainer = {}

    // function traerAmd(AMD){
    //     fetch("http://127.0.0.1:5500/desafio/desafioFinal/amd.json")
    //     .then((res)=>res.json())
    //     .then((data) => console.log(data))
    // }  

    

    // //Revisa si existe en el local y lo trae 

    // if(localStorage.getItem("amd")){
    //     amd = JSON.parse(localStorage.getItem("amd"))
    // }
    // else{
    //     console.log("Seteando por primera vez el array")
    //     //Invoco la function async
    //     cargarAmd()
    // }

const cargarAmd = async ()=>{
    const response = await fetch("http://127.0.0.1:5500/desafio/desafioFinal/amd.json")
    const data = await response.json()
    console.log(data)
    for(let procesadoress of data){
        let nuevoProcesador = new procesadores(procesadoress.modelo, procesadoress.core, procesadoress.precio, procesadoress.imagen)
        amd.push(nuevoProcesador)
    }
}

    let amd = []

cargarAmd()



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


const cargarIntel = async ()=>{
    const response = await fetch("intel.json")
    const data = await response.json()
    console.log(data)
    for(let procesadoresss of data){
        let nuevoProcesadorr = new procesadores(procesadoresss.modelo, procesadoresss.core, procesadoresss.precio, procesadoresss.imagen)
        intel.push(nuevoProcesadorr)
    }
}

    let intel = []

cargarIntel()

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

