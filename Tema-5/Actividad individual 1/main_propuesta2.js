let table = 
[ 
	{
		lacteo:"Leche",
		porcion:"200cc",
		contenido_calcio:280
	}, 
	{
		lacteo:"Yogurt Bebible",
		porcion:"200cc",
		contenido_calcio:180
	}, 
	{
		lacteo:"Yogurt Firme",
		porcion:"190g",
		contenido_calcio:203
	}, 
	{
		lacteo:"Postre",
		porcion:"125g",
		contenido_calcio:143
	}, 
	{
		lacteo:"Queso Rallado",
		porcion:"8g",
		contenido_calcio:104
	}
];

function moreCalcium (data_table)
{
	for (element of data_table)
	{
		table.sort((a, b) => a.contenido_calcio - b.contenido_calcio);
	}


	return table[4].contenido_calcio;
}

document.getElementById('ui').innerHTML = moreCalcium(table);