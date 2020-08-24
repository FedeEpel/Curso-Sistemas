let leche = 
{
	marca: "La Serenisima",
	nombre: "leche",
	precio: 40,
	contenido: 1000,
	fecha_de_vencimiento: "12/10/2020"
};

let yogur_bebible =
{
	marca: "La Serenisima",
	nombre: "yogur danonino",
	precio: 30,
	contenido: 90,
	fecha_de_vencimiento: "25/09/2020"
};

let yogur = 
{
	marca: "La Serenisima",
	nombre: "yogur",
	precio: 50,
	contenido: 1000,
	fecha_de_vencimiento: "30/09/2020"
};

let manteca =
{
	marca: "SanCor",
	nombre: "manteca",
	precio: 60,
	contenido: 200,
	fecha_de_vencimiento: "08/12/2020"
};

let detergente =
{
	marca: "Magistral",
	nombre: "detergente",
	precio: 70,
	contenido: 215,
	fecha_de_vencimiento: "12/08/2021"
};

let lavandina =
{
	marca: "Ayudin",
	nombre: "lavandina",
	precio: 100,
	contenido: 2000,
	fecha_de_vencimiento: "13/09/2022"
};

let desinfectante = 
{
	marca: "Lysoform",
	nombre: "desinfectante aerosol",
	precio: 180,
	contenido: 360,
	fecha_de_vencimiento: "10/03/2022"
};

let pepsi = 
{
	marca: "PepsiCo",
	nombre: "pepsi",
	precio: 50,
	contenido: 500,
	fecha_de_vencimiento: "12/01/2021"
};

let sprite =
{
	marca: "The Coca-Cola Company",
	nombre: "sprite",
	precio: 50,
	contenido: 500,
	fecha_de_vencimiento: "25/01/2021"
};

let whiskey =
{
	marca: "Jack Danniels",
	nombre: "whiskey",
	precio: 3000,
	contenido: 750,
	fecha_de_vencimiento: "30/09/2025"
};

let agua = 
{
	marca: "Villavicencio",
	nombre: "agua mineral",
	precio: 45,
	contenido: 500,
	fecha_de_vencimiento: "30/10/2025"
};

let pan_lactal =
{
	marca: "Bimbo",
	nombre: "pan lactal",
	precio: 150,
	contenido: 350,
	fecha_de_vencimiento: "24/10/2020"
};

let pan_lactal_integral =
{
	marca: "Bimbo",
	nombre: "pan lactal integral",
	precio: 200,
	contenido: 350,
	fecha_de_vencimiento: "24/10/2020"
};

let pan_de_hamburguesa =
{
	marca: "Fargo",
	nombre: "pan de hamburguesa",
	precio: 50,
	contenido: 1000,
	fecha_de_vencimiento: "30/9/2020"
};

let jamon_cocido =
{
	marca: "Bafar",
	nombre: "jamon cocido",
	precio: 150,
	contenido: 250,
	fecha_de_vencimiento: "07/09/2020"
};

let jamon_crudo =
{
	marca: "Paladini",
	nombre: "jamon crudo",
	precio: 235,
	contenido: 250,
	fecha_de_vencimiento: "15/12/2020"
};

let panceta =
{
	marca: "La Piamontesa",
	nombre: "panceta",
	precio: 500,
	contenido: 1000,
	fecha_de_vencimiento: "30/11/2020"
};

let stock =
{
	lacteos: [ leche, yogur_bebible, yogur, manteca ],
	limpieza: [ detergente, lavandina, desinfectante ],
	bebidas: [ pepsi, sprite, whiskey, agua ],
	pan: [ pan_lactal, pan_lactal_integral, pan_de_hamburguesa ],
	fiambres: [ jamon_cocido, jamon_crudo, panceta ]
}

function actualiazcion( productos )
{
	let aumento_lacteo = lacteos.precio * 15 / 100;
	let precio_actualizado = lacteos.precio + aumento_lacteo;

	for( prodcuto in productos)
	{
		if (stock = lacteos)
		{
			lacteos.precio += aumento_lacteo;
		}
	}

	return precio_actualizado;
}

document.getElementById('ui').innerHTML = actualiazcion(stock);