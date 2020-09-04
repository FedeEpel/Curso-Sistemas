function calculator(){
	let html = `<table class="calculator">
			<tr>
				<td colspan="4">
					<input id="display" type="text" value="" class="display"></input>
				</td>
			</tr>
			<tr>
				<td><button id="button7" class="blue_button font_button button_calc_grid">7</button></td>
				<td><button id="button8" class="blue_button font_button button_calc_grid">8</button></td>
				<td><button id="button9" class="blue_button font_button button_calc_grid">9</button></td>
				<td><button id="sumButton"class="green_button font_button button_calc_grid">+</button></td>
			</tr>
			<tr>
				<td><button id="button4" class="blue_button font_button button_calc_grid">4</button></td>
				<td><button id="button5" class="blue_button font_button button_calc_grid">5</button></td>
				<td><button id="button6" class="blue_button font_button button_calc_grid">6</button></td>
				<td><button id="lessButton" class="green_button font_button button_calc_grid">-</button></td>
			</tr>
			<tr>
				<td><button id="button1" class="blue_button font_button button_calc_grid">1</button></td>
				<td><button id="button2" class="blue_button font_button button_calc_grid">2</button></td>
				<td><button id="button3" class="blue_button font_button button_calc_grid">3</button></td>
				<td><button id="multiplyButton" class="green_button font_button button_calc_grid">*</button></td>
			</tr>
			<tr>
				<td><button id="button0" class="blue_button font_button button_calc_grid">0</button></td>
				<td><button id="pointButton" class="blue_button font_button button_calc_grid">.</button></td>
				<td><button id="equalButton" class="yellow_button font_button button_calc_grid">=</button></td>
				<td><button id="divideButton" class="green_button font_button button_calc_grid">/</button></td>
			</tr>
			<tr>
				<td colspan="4">
					<button id="buttonClear" class= "red_button font_button">Borrar</button> 
				</td>
			</tr>
		</table>`;

	return html;
}

//funcion flecha, la normal seria function onButtonClick(action){};
let num1;
let num2;
let operation;

function onButton0Click ()
{
	document.getElementById('display').value += '0';
};

function onButton1Click ()
{
	document.getElementById('display').value += '1';
};

function onButton2Click ()
{
	document.getElementById('display').value += '2';
};

function onButton3Click ()
{
	document.getElementById('display').value += '3';
};

function onButton4Click ()
{
	document.getElementById('display').value += '4';
};

function onButton5Click ()
{
	document.getElementById('display').value += '5';
};

function onButton6Click ()
{
	document.getElementById('display').value += '6';
};

function onButton7Click ()
{
	document.getElementById('display').value += '7';
};

function onButton8Click ()
{
	document.getElementById('display').value += '8';
};

function onButton9Click ()
{
	document.getElementById('display').value += '9';
};

function onSumButtonClick ()
{
	num1 = document.getElementById('display').value
	document.getElementById('display').value += '+';
};

function onLessButtonClick ()
{
	num1 = document.getElementById('display').value
	document.getElementById('display').value += '-';
};

function onMultiplyButtonClick ()
{
	num1 = document.getElementById('display').value
	document.getElementById('display').value += '*';
};

function onDivideButtonClick ()
{
	num1 = document.getElementById('display').value
	document.getElementById('display').value += '/';
};

function onPointButtonClick ()
{
	num1 = document.getElementById('display').value
	document.getElementById('display').value += '.';
};

function onEqualButtonClick ()
{
	num2 = document.getElementById('display').value
	document.getElementById('display').value += '=';
	result();
};

function onButtonClearClick ()
{
	document.getElementById('display').value = "";
	num1 = 0;
	num2 = 0;
	operation = "";
};

function result()
{
	var result = 0;

	switch(operation)
	{
		case document.getElementById('display').value = "+":
			result = parseFloat(num1) + parseFloat(num2);
			break;

		case document.getElementById('display').value = "-":
			result = parseFloat(num1) - parseFloat(num2);
			break;

		case document.getElementById('display').value = "*":
			result = parseFloat(num1) * parseFloat(num2);
			break;

		case document.getElementById('display').value = "/":
			result = parseFloat(num1) / parseFloat(num2);
			break;
	}
	document.getElementById('display').value = result;
};

document.getElementById('app').innerHTML = calculator();
document.getElementById('sumButton').addEventListener('click', onSumButtonClick);
document.getElementById('lessButton').addEventListener('click', onLessButtonClick);
document.getElementById('multiplyButton').addEventListener('click', onMultiplyButtonClick);
document.getElementById('divideButton').addEventListener('click', onDivideButtonClick);
document.getElementById('pointButton').addEventListener('click', onPointButtonClick);
document.getElementById('equalButton').addEventListener('click', onEqualButtonClick);
document.getElementById('buttonClear').addEventListener('click', onButtonClearClick);
document.getElementById('button0').addEventListener('click', onButton0Click);
document.getElementById('button1').addEventListener('click', onButton1Click);
document.getElementById('button2').addEventListener('click', onButton2Click);
document.getElementById('button3').addEventListener('click', onButton3Click);
document.getElementById('button4').addEventListener('click', onButton4Click);
document.getElementById('button5').addEventListener('click', onButton5Click);
document.getElementById('button6').addEventListener('click', onButton6Click);
document.getElementById('button7').addEventListener('click', onButton7Click);
document.getElementById('button8').addEventListener('click', onButton8Click);
document.getElementById('button9').addEventListener('click', onButton9Click);

