let promedio =
[
	[ 'Mes', 'Ene.', 'Feb.', 'Mar.', 'Abr.', 'May.', 'Jun.', 'Jul.', 'Ago.', 'Sep.', 'Oct.', 'Nov.', 'Dic.', 'Anual'],
	[ 'Temperatura Max Abs (ºC)', 39.3, 38.1, 36.3, 32.5, 27.4, 22.2, 27.7, 24.7, 28.8, 34.4, 35.7, 39.4, 39.4],
	[ 'Temperatura Min Abs (ºC)', 4.7, 1.2, 1.9, -1.0, -3.0, -5.5, -9.3, -6.4, -5.5, -3.0, -2.0, -0.2, -9.3],
	[ 'Humedad relativa (%)', 76, 77, 79, 81, 83, 84, 81, 81, 80, 80, 77, 76, 80]

];

function promediosAnuales( data_promedio )
{
	let html = "";

	html += '<h1>Parametros Climaticos</h1>';

	html += '<table>';

	for( row of data_promedio)
	{
		html += '<tr>';

		for( column of row)
		{
			html += '<td>'+column+'</td>';
		}

		html += '</tr>';
	}

	html += '</table>';

	return html;
}

document.getElementById('ui').innerHTML = promediosAnuales(promedio);






//problema 3
//string.split(" ") -- Array
/*
for ( array )
{
	if ( palabra[0] == "n")
}
*/
















