
//-----Prueba de carrito de compras con prompty alerts-----
//const productos = [
//    {nombre: "tomate", precio: 2 },
//    {nombre: "lechuga", precio: 5 }, 
//    {nombre: "pepino", precio: 3 }, 
//    {nombre: "durazno", precio: 2 }, 
//    {nombre: "pera", precio: 1 },    
//]

//let carrito =[]

//let seleccion = prompt ("Hola desea comprar algun producto si o no")

//while(seleccion != "si" && seleccion != "no"){
//    alert("por favor ingresa si o no")
//    seleccion = prompt ("hola desea comprar algo si o no")
//}

//if (seleccion == "si"){
//    alert ("a continuacion nuestra lista de productos")
//    let todoslosproductos = productos.map((producto)=> producto.nombre + ""  + producto.precio + "$" );
// alert(todoslosproductos.join(" - "))

//} else if (seleccion == "no"){
//    alert("Gracias por venir, hasta pronto")
//}

//while (seleccion != "no"){
//    let producto = prompt("agrega un producto a tu carrito")
//    let precio = 0

//    if(producto == "tomate" || producto == "lechuga" || producto == "pepino" || producto == "durazno" || producto == "pera"){
//        switch(producto){
//            case "tomate":
//            precio = 2;
//            break;
//            case "lechuga":
//            precio = 5;
//            break;
//            case "pepino":
//            precio = 3;
//            break; case "durazno":
//            precio = 2;
//            break; case "pera":
//            precio = 1;
//        default:
//            break;    

//        }
//        let unidades = parseInt(prompt("Cuantas unidades desea llevar?"))

//        carrito.push({producto,unidades,precio})
//        console.log(carrito)
//    }else {
//        alert ("No tenemos ese producto")
//    }

//    seleccion = prompt ("Desea seguir comprando?")
//    while(seleccion === "no"){
//        alert("gracias por la compra! hasta pronto")
//        carrito.forEach((carritoFinal)=>{
//            document.write(`producto:${carritoFinal.producto}, unidades ${carritoFinal.unidades}, total a pagar por producto ${carritoFinal.unidades * carritoFinal.precio}`)

//        })
//        break;
//    }
//}

//const total = carrito.reduce((acc,el)=> acc + el.precio * el.unidades, 0)
//document.write(`El total a pagar por su compra es:${total}`)

const shopContent = document.getElementById("shopContent");
const verCarrito = document.getElementById("verCarrito");
const modalContainer = document.getElementById("modal-container");
const showAlert = document.getElementById("showAlert");
const cantidadCarrito = document.getElementById("cantidadCarrito");



let carrito = JSON.parse(localStorage.getItem("carrito")) || [];

productos.forEach((product) => {
  let content = document.createElement("div");
  content.className = "card";
  content.innerHTML = `
    <img src="${product.img}">
    <h3>${product.nombre}</h3>
    <p class="price">${product.precio} $</p>
  `;

  shopContent.append(content);

  let comprar = document.createElement("button");
  comprar.innerText = "Comprar";
  comprar.className = "Comprar";

  content.append(comprar);

  comprar.addEventListener("click", () => {
   const repeat = carrito.some((repeatProduct) => repeatProduct.id === product.id);

    if (repeat) {
      carrito.map((prod) => {
        if (prod.id === product.id) {
          prod.cantidad++;
        }
      });
    } else {
      carrito.push({
        id: product.id,
        img: product.img,
        nombre: product.nombre,
        precio: product.precio,
        cantidad: product.cantidad,
      });
      console.log(carrito);
      console.log(carrito.length);
      carritoCounter();
      saveLocal();
    }
  });
  
}

);

//set item
const saveLocal = () => {
  localStorage.setItem("carrito", JSON.stringify(carrito));
};

//get item
