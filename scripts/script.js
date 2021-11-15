// Se crea el objeto Usuario que recibe por parametro los valores de: usuario, nombre del usuario y plan seleccionado.
class Usuario {
	constructor(user,userName, planSelection){
		this.user = user;
		this.userName = userName;
		this.planSelection = planSelection;
	}
    
	cambiarPlan(){
        // Este metodo permite cambiar el plan de hosting seleccionado por el usuario
		this.planSelection = planSelection()
	}
    
	cambiarUser(){
        // Este metodo permite cambiar el usuario
		this.user = getUser()
	}
    
	cambiarNombre(){
        // Este metodo permite cambiar el nombre del usuario registrado
		this.userName = getName()
	}
}
// -------------------------------------------------------------------------------------------------------------------------------------------------
// Array de servicios con su informacion
const servicios = [
	{
		id: 1,
		nombre: "Hosting sencillo",
		precio: 799,
		descripcion: "Certificado SSL, 30GB de almacenamiento, 1 sitio web",
	},
	{
		id: 2,
		nombre: "Hosting Premium",
		precio: 999,
		descripcion: "Certificado SSL, Dominio gratis, 100 GB de almacenamiento, 100 sitios web",
	},
	{
		id: 3,
		nombre: "Hosting empresarial",
		precio: 1299,
		descripcion: "Certificado SSL, Acceso GIT, Email gratis, Dominio gratis, 250 GB de almacenamiento, Ancho de banda ilimitado",
	},
]
// ---------------------------------------------------------------------------------------------------------------
// Se declara el array vacio que va a contener los objetos creados por cada usuario registrado
const listaUsuarios = [];

// Declaro el valor de la variable carrito para luego ser modificada por el plan seleccionado por el usuario
let carrito = 0; 


// ----------------------------------------------------------------------------------------------------------------------------------------------------
function getName() {
// La funcion solicita al usuario que ingrese su nombre completo, devuelve el string ingresado
let userName = prompt('Ingrese su nombre completo: ')
return userName;
}

function getUser(){
// La funcion solicita al usuario que ingrese un user para identificarse, devuelve el string ingresado
	let user = prompt('Ingrese el nombre de usuario deseado: ')
	return user 
}

function viewOptions(){
// La funcion muestra mediante alert() las opciones de hosting que se le ofrecen al usuario
	alert('1 - Hosting Sencillo: $799 - Certificado SSL, 30GB de almacenamiento, 1 sitio web')
	alert('2 - Hosting Premium: $999 - Certificado SSL, Dominio gratis, 100 GB de almacenamiento, 100 sitios web')
	alert('3 - Hosting empresarial: $1299 - Certificado SSL, Acceso GIT, Email gratis, Dominio gratis, 250 GB de almacenamiento, Ancho de banda ilimitado')
}

function planNumber(){
// La funcion le solicita al usuario ingresar un valor, se parsea el valor ingresado y se devuelve en la variable seleccion
	let seleccion = parseInt(prompt('Ingrese numero de plan deseado: '))
	return seleccion
}

function planSelection(){
// Funcion que solicita al usuario que ingrese un valor, lo compara con un valor valido y muestra en un alert() el total a pagar
	viewOptions()
	let plan = planNumber()
	while ((plan != 1) || (plan != 2) || (plan != 3)){
		switch(plan){
			case 1:
				carrito = 799
				alert("Gracias por su selección, el coste a abonar es $" + carrito)
				return plan;
			case 2:
				carrito = 999
				alert("Gracias por su seleccion, el coste a abonar es $" + carrito)
				return plan;
			case 3:
				carrito = 1299 
				alert("Gracias por su seleccion, el coste a abonar es $" + carrito)
				return plan;
			default: 
			alert("La opción ingresada no es valida. Intente nuevamente.")
			plan = parseInt(prompt("Ingrese numero de plan deseado: "))
		}
	}
}

function addUser(user){
// La funcion agrega un objeto creado a la lista final de usuarios llamada listaUsuarios
	listaUsuarios.push(user);
}

function esValido(user){
// La funcion recorre el array listaUsuarios y devuelve True o False en caso de que el user ingresado por el usuario ya se encuentre creado.
	let resultado = false;
		for (const usuario of listaUsuarios){
			if (usuario.user.includes(user)){
				resultado = true;
			}
		}
		return resultado;
}





// Funcion central --------------------------------------------------------
function bienvenida(){
// El proceso de la funcion se resume en solicitar (mediante funciones anidadas) datos al usuario y almacenarlos en un objeto
// el cual es agregado al array listaUsuarios
	alert('Bienvenido a AtomEG! A continuacion le pediremos sus datos para registrarlo en la plataforma.');
	let userName = getName();
	let user = getUser();
	let enUso = esValido(user);

	while (enUso === true){
		alert('El usuario ingresado no se encuentra disponible. Ingrese otro. ')
		user = getUser();
		enUso = esValido(user);
	}

	alert('Gracias, ahora seleccione su plan de Hosting deseado.')

	plan = planSelection();
	usuarioNuevo = new Usuario (user, userName, plan);
	addUser(usuarioNuevo)

	return usuarioNuevo
}
// -------------------------------------------------------------------------------


const servicio1 = document.getElementsByClassName("servicio")[0]
const servicio2 = document.getElementsByClassName("servicio")[1]
const servicio3 = document.getElementsByClassName("servicio")[2]

let contador = 0
servicios.forEach((service)=>{
	let dataTitulo = service.nombre
	let servicioTitulo = document.getElementsByClassName("servicioTitulo")[contador]
	let dataDescripcion = service.descripcion
	let servicioDescripcion = document.getElementsByClassName("servicioDescripcion")[contador]
	servicioDescripcion.innerText = dataDescripcion
	servicioDescripcion.innerHTML = `<p>${dataDescripcion}</p>
									 <p><strong>Precio: $${service.precio}</strong></p>`;
	servicioTitulo.innerText = dataTitulo

	contador++
})