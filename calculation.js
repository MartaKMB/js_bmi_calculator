/* create form */

var label_weight = document.createElement('label');
var node_weight = document.createTextNode('Podaj swoją wagę w kilogramach:');
label_weight.appendChild(node_weight);
label_weight.id = "id_label_weight"

var input_weight = document.createElement('input');
input_weight.id = 'id_weight';
		
var label_height = document.createElement('label');
var node_height = document.createTextNode('Podaj wzrost w metrach:');
label_height.appendChild(node_height);	
label_height.id = 'id_label_height'	
		
var input_height = document.createElement('input');
input_height.id = 'id_height';
		
		
var submit_button = document.createElement('button');
submit_button.id = 'id_button';
var node_button = document.createTextNode('Kliknij aby uzyskać wynik');
submit_button.appendChild(node_button);
		
var page_container = document.getElementById('page_container');

page_container.appendChild(label_weight);
page_container.appendChild(input_weight);
		
page_container.appendChild(label_height);
page_container.appendChild(input_height);
		
page_container.appendChild(submit_button);
		
/* fields for result */
		
var result_div_number;
result_div_number = document.createElement('div');
result_div_number.id = 'result_div_number';
		
page_container.appendChild(result_div_number);
		
var result_div_message;
result_div_message = document.createElement('div');
result_div_message.id = 'result_div_message';
		
page_container.appendChild(result_div_message);

/* click and view result */

var number_weight;
var number_height;
var result_number;
var fixed_result;		
	
document.getElementById('id_button').addEventListener("click", function(){
			
	number_weight = parseFloat(document.getElementById('id_weight').value);
	number_height = parseFloat(document.getElementById('id_height').value);
			
	messageBMI(number_weight, number_height);			
});

/* calculation */

function calcBMI(numA, numB) {
		
	if(isNaN(numA) || numA == '' || numA == 0 || isNaN(numB) || numB == '' || numB == 0) {
				
		document.getElementById('result_div_number').innerHTML = 'Podaj dane liczbowe większe od zera';
	
	} else {
		
		result_number = numA / Math.pow(numB, 2);
		fixed_result = result_number.toFixed(2);
				
		document.getElementById('result_div_number').innerHTML = fixed_result;
				
		return fixed_result;		
	}
}
		
function messageBMI(numA, numB) {
			
	var result_to_message = calcBMI(numA, numB);

	if (result_to_message < 18.5) {
		
		document.getElementById('result_div_message').innerHTML = 'Niedowaga';
		document.getElementById('result_div_message').style.color = '#ff3f3d';	
				
	} else if (result_to_message < 24.9) {
		
		document.getElementById('result_div_message').innerHTML = 'Waga w normie';
		document.getElementById('result_div_message').style.color = '#fec262';
		
				
	} else if (result_to_message < 29.9) {
		
		document.getElementById('result_div_message').innerHTML = 'Nadwaga';
		document.getElementById('result_div_message').style.color = '#ff3f3d';
				
	} else if (result_to_message > 30) {
		
		document.getElementById('result_div_message').innerHTML = 'Otyłość';
		document.getElementById('result_div_message').style.color = '#ff3f3d';
		
		
			
	} else {
				
		document.getElementById('result_div_message').innerHTML = 'Spróbuj jeszcze raz!';
		document.getElementById('result_div_message').style.color = '#fec262';
	}
}

