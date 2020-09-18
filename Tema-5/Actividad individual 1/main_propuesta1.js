let tabla = 
[ 
	{
    	lacteo:"Leche",
    	porcion:"200",
    	contenido_calcio:280
	},
	{
    	lacteo:"Yogurt bebible",
    	porcion:"200",
    	contenido_calcio:180
	},
	{
    	lacteo:"Yogurt firme",
    	porcion:"190",
    	contenido_calcio:203
	},
	{
    	lacteo:"Postre",
    	porcion:"125",
    	contenido_calcio:143
	},
	{
    	lacteo:"Queso rallado",
    	porcion:"8",
    	contenido_calcio:104
	}
];

//array[] de objects{} (string(""), string(""), number)


function identificarLacteoDeMayorContenidoDeCalcio( tabla_de_datos )
{
	//tabla_de_datos es el nombre del parametro de entrada de la funcion

    let nombre_del_lacteo = null;

    //tabla_de_datos.forEach(element => console.log(element.lacteo));

    let mayor = tabla_de_datos[0].contenido_calcio;
    let componente = tabla_de_datos[0];

    for ( element of tabla_de_datos)
    {
    	if ( element.contenido_calcio > mayor )
    	{
    		mayor = element.contenido_calcio;
    		componente = element; 
    	}
    }

    return componente.lacteo;
}

//console.log(identificarLacteoDeMayorContenidoDeCalcio(tabla));

document.getElementById("ui").innerHTML = identificarLacteoDeMayorContenidoDeCalcio(tabla);