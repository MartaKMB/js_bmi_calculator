var id_input_pesel;
var id_input_pesel_int;
var p_msg;
var sum;
var modulo_sum;
var last_nr;
var day;
var month;
var year;
var js_date;
var js_year;

document.getElementById('id_button').addEventListener('click', function() {
  allAboutPesel();  
});

document.getElementById('id_input_pesel').addEventListener('keyup', function(event) {
  if (event.which == 13) {
    allAboutPesel();
  }
});

function allAboutPesel() {
  id_input_pesel = document.getElementById('id_input_pesel').value;
  id_input_pesel_int = parseInt(id_input_pesel);
  
  document.getElementById('id_input_pesel').value = '';
  document.getElementById('id_input_pesel').focus();
  
  p_msg = document.getElementById('p_msg');
 
    if (isNaN(id_input_pesel_int)) {
      clearInf();
      p_msg.innerHTML = 'PESEL to zbiór liczb - popraw dane';
    } else if (id_input_pesel.length != 11) {
      clearInf();
      p_msg.innerHTML = 'PESEL składa się z 11 liczb - popraw dane';
    } else {
      verification(id_input_pesel);
      dateOfBirth(id_input_pesel);
      checkGender(id_input_pesel);
    }
}

function verification(array) {
  sum = ((array[0] * 1) + (array[1] * 3) + (array[2] * 7) + (array[3] * 9) + (array[4] * 1) + (array[5] * 3) + (array[6] * 7) + (array[7] * 9) + (array[8] * 1) + (array[9] * 3));
  
  modulo_sum = sum % 10;
  
  last_nr = 10 - modulo_sum;
  
  if ((last_nr != array[10]) || (modulo_sum == 0 && array[10] != 0)) {
      p_msg.innerHTML = 'Podany PESEL jest nieprawidłowy - sprawdź wprowadzone dane';
  } else {
      p_msg.innerHTML = 'PESEL: ' + id_input_pesel + '<br>' + 'zawiera informacje:';    
  }
}

function checkGender(array) {
  if (array[9] % 2 == 0) {
    document.getElementById('id_gender').innerHTML = 'płeć: kobieta';
  } else {
    document.getElementById('id_gender').innerHTML = 'płeć: mężczyzna';
  }
}

function dateOfBirth(array) {
  day = array[4].toString() + array[5].toString();
  if (array[2] > 1) {
    month = parseInt(array[2].toString() + array[3].toString()) % 20;
    year = '20' + array[0].toString() + array[1].toString();
  } else {
    month = array[2].toString() + array[3].toString();
    year = '19' + array[0].toString() + array[1].toString();
  }
  document.getElementById('id_date_of_birth').innerHTML = 'data urodzenia: ' + day + '.' + month + '.' + year;
  
  getAge(parseInt(year));
}

function getAge(int) {
  js_date = new Date();
  js_year = js_date.getFullYear();  
  age = js_year - int;
  document.getElementById('id_age').innerHTML = 'wiek: ' + age;
}

function clearInf() {
  document.getElementById('id_date_of_birth').innerHTML = '';
  document.getElementById('id_age').innerHTML = '';
  document.getElementById('id_gender').innerHTML = '';
}