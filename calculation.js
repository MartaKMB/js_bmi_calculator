/* create form */

var label_weight = document.createElement('label');
var node_weight = document.createTextNode('Podaj swoją wagę (w kilogramach):');
label_weight.appendChild(node_weight);
label_weight.id = "id_label_weight"

var input_weight = document.createElement('input');
input_weight.id = 'id_weight';
		
var label_height = document.createElement('label');
var node_height = document.createTextNode('Podaj wzrost (w metrach lub centymetrach):');
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
var coma_weight;
var coma_height;	
var confrim_weight;
	
document.getElementById('id_button').addEventListener("click", function(){
			
	coma_weight = document.getElementById('id_weight').value;
	coma_height = document.getElementById('id_height').value;
		
	number_weight = parseFloat(coma_weight.replace(',', '.'));
	number_height = parseFloat(coma_height.replace(',', '.'));
		
	messageBMI(number_weight, number_height);	
			
});

/* calculation */

function calcBMIcases(numA, numB) {
		
	if(isNaN(numA) || numA == '' || numA == 0 || isNaN(numB) || numB == '' || numB == 0) {
				
		document.getElementById('result_div_number').innerHTML = 'Podaj dane liczbowe większe od zera';
	
	} else if (numA < 20 || numA > 500) {
		
		confrim_weight = window.confirm('Podałaś/eś prawidłowe dane w polu dotyczącym wagi?');
		
		if(confrim_weight) {
			calcBMI(numA, numB);
		} else {
			document.getElementById('id_weight').focus();
		}
		
	} else if (numB < 1 || numB > 400) {
		
		confrim_weight = window.confirm('Podałaś/eś prawidłowe dane w polu dotyczącym wzrostu?');
		
		if(confrim_weight) {
			calcBMI(numA, numB);
		} else {
			document.getElementById('id_height').focus();
		}
		
	}  else {
			
			calcBMI(numA, numB);
			
	}		
		return fixed_result;		
}


function calcBMI(numA, numB) {
	
	if(numB >= 100) {
		
		numB /= 100;
		
		result_number = numA / Math.pow(numB, 2);
		fixed_result = result_number.toFixed(2);
				
		document.getElementById('result_div_number').innerHTML = 'Twoje BMI: ' + fixed_result;
		
	} else {
		
		result_number = numA / Math.pow(numB, 2);
		fixed_result = result_number.toFixed(2);
				
		document.getElementById('result_div_number').innerHTML = 'Twoje BMI: ' + fixed_result;
	}

}
		
function messageBMI(numA, numB) {
			
	var result_to_message = calcBMIcases(numA, numB);

	if (result_to_message < 18.5) {
		
		document.getElementById('result_div_message').innerHTML = 'Interpretacja wyniku: niedowaga';
		document.getElementById('result_div_message').style.color = '#ff3f3d';	
				
	} else if (result_to_message < 24.9) {
		
		document.getElementById('result_div_message').innerHTML = 'Interpretacja wyniku: waga w normie';
		document.getElementById('result_div_message').style.color = '#fec262';
		
				
	} else if (result_to_message < 29.9) {
		
		document.getElementById('result_div_message').innerHTML = 'Interpretacja wyniku: nadwaga';
		document.getElementById('result_div_message').style.color = '#ff3f3d';
				
	} else if (result_to_message > 30) {
		
		document.getElementById('result_div_message').innerHTML = 'Interpretacja wyniku: otyłość';
		document.getElementById('result_div_message').style.color = '#ff3f3d';
				
	} else {
				
		document.getElementById('result_div_message').innerHTML = 'Spróbuj jeszcze raz!';
		document.getElementById('result_div_message').style.color = '#fec262';
	}
}

