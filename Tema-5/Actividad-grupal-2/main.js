let datos_mdp =
{
	enero:
	{
		temp_max_abs:26.3,
		temp_min_abs:14.3,
		temp_media: 39.3,
		temp_min_media: 14,
		temp_min_abs: 14.2,
		precipitacion_total: 100.1,
		dias_de_precipitaciones: 9,
		horas_de_sol: 288.3,
		humedad_relativa:76
	},
	febrero:
	{
		temp_max_abs:26.3,
		temp_min_abs:14.3,
		temp_media: 39.3,
		temp_min_media: 14,
		temp_min_abs: 13.2,
		precipitacion_total: 100.1,
		dias_de_precipitaciones: 9,
		horas_de_sol: 288.3,
		humedad_relativa:76
	},
	marzo:
	{
		temp_max_abs:26.3,
		temp_min_abs:14.3,
		temp_media: 39.3,
		temp_min_media: 14,
		temp_min_abs: 11.7,
		precipitacion_total: 100.1,
		dias_de_precipitaciones: 9,
		horas_de_sol: 288.3,
		humedad_relativa:76
	},
	abril:
	{
		temp_max_abs:26.3,
		temp_min_abs:14.3,
		temp_media: 39.3,
		temp_min_media: 14,
		temp_min_abs:10.3,
		precipitacion_total: 100.1,
		dias_de_precipitaciones: 9,
		horas_de_sol: 288.3,
		humedad_relativa:76
	},
	mayo:
	{
		temp_max_abs:26.3,
		temp_min_abs:14.3,
		temp_media: 39.3,
		temp_min_media: 14,
		temp_min_abs:15.3,
		precipitacion_total: 100.1,
		dias_de_precipitaciones: 9,
		horas_de_sol: 288.3,
		humedad_relativa:76
	}
};

function TableToHTML ( table )
{
	let html = "";

	html += '<h1>Parametros climaticos</h1>';

	html += `<table>
	<tr>
		<th>Enero</th>
		<th>Febrero</th>
		<th>Marzo</th>
		<th>Abril</th>
		<th>Mayo</th>
	</tr>`;

	//codigo

	let meses = Object.entries(datos_mdp);

	html += '<tr>';

	//Object.entries(datos_mdp)[0][1].temp_max_abs
	let index = 0;

	for (index=0; index<meses.length; index++)
	{
		html +='<td>' + Object.entries(datos_mdp)[0][1].temp_max_abs + '<td>';
	}

	html += '</td>';

	html += '</table>';

	//API_DOM
	document.getElementById('ui').innerHTML = html;
}

TableToHTML(null);