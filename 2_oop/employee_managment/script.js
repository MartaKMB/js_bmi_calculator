function Employee(firstName, surname, salary) {
  this.firstName = firstName;
  this.surname = surname;
  this.salary = salary;
}

let emp1 = new Employee('agata', 'super', '15000');
let emp2 = new Employee('marta', 'butelka', '15000');
let emp3 = new Employee('artur', 'wiadro', '5000');
let emp4 = new Employee('michał', 'suszarka', '10000');
let emp5 = new Employee('agata', 'żelazko', '10000');
let emp6 = new Employee('krzysztof', 'wiadro', '6000');

const empArray = [emp1, emp2, emp3, emp4, emp5, emp6];

document.getElementById('button_add').addEventListener('click', function(){
  let add_name = document.getElementById('input_add_name').value;
  let add_surname = document.getElementById('input_add_surname').value;
  let add_salary = document.getElementById('input_add_salary').value;
  
  let emp_add_from_user = new Employee(add_name.toLowerCase(), add_surname.toLowerCase(), add_salary.toLowerCase());
  empArray.push(emp_add_from_user);
});

document.getElementById('button_name').addEventListener('click', function(){
  check_name();
});

document.getElementById('input_name').addEventListener('keydown', function (event) {
  if (event.which === 13) {
    check_name();
  }
});

document.getElementById('button_surname').addEventListener('click', function(){
  check_surname();
});

document.getElementById('input_surname').addEventListener('keydown', function (event) {
  if (event.which === 13) {
    check_surname();
  }
});

document.getElementById('button_salary').addEventListener('click', function(){
  check_salary();
});

document.getElementById('input_salary').addEventListener('keydown', function (event) {
  if (event.which === 13) {
    check_salary();
  }
});

document.getElementById('button_all').addEventListener('click', function(){
  result_all();
});

function check_name() {
  let emp_check = document.getElementById('input_name').value;
  
  document.getElementById('input_name').value = '';
  document.getElementById('input_name').focus();
  
  document.getElementById('list_result_name').innerHTML = '';
  
  for (let i = 0; i < empArray.length; i ++) {
    
    if (empArray[i].firstName == emp_check.toLowerCase()) {
      
      let li_element = document.createElement('li');
      let li_text = document.createTextNode('imię: ' + firstToUpper(empArray[i].firstName) + ' | nazwisko: ' + firstToUpper(empArray[i].surname) + ' | zarobki miesięczne: ' + empArray[i].salary + 'zł');
      li_element.appendChild(li_text);

      document.getElementById('list_result_name').appendChild(li_element);
      
    } else if (emp_check.toLowerCase() == '') {
      document.getElementById('div_message').innerHTML = '!!! wpisz imie, aby przeszukać bazę !!!';
    } else { 
      document.getElementById('div_message').innerHTML = '!!! nie ma w bazie pracownika o takim imieniu !!!';
    }   
    
    if(document.getElementById('list_result_name').getElementsByTagName('li').length >= 1) {
    document.getElementById('div_message').innerHTML = '';
  }
}
}

function check_surname() {
  let emp_check = document.getElementById('input_surname').value;
  
  document.getElementById('input_surname').value = '';
  document.getElementById('input_surname').focus();
  
  document.getElementById('list_result_surname').innerHTML = '';
  
  for (let i = 0; i < empArray.length; i ++) {
    
    if (empArray[i].surname == emp_check.toLowerCase()) {
      
      let li_element = document.createElement('li');
      let li_text = document.createTextNode('imię: ' + firstToUpper(empArray[i].firstName) + ' | nazwisko: ' + firstToUpper(empArray[i].surname) + ' | zarobki miesięczne: ' + empArray[i].salary + 'zł');
      li_element.appendChild(li_text);

      document.getElementById('list_result_surname').appendChild(li_element);
      
    } else if (emp_check.toLowerCase() == '') {
      document.getElementById('div_message').innerHTML = '!!! wpisz nazwisko, aby przeszukać bazę !!!';
    } else { 
      document.getElementById('div_message').innerHTML = '!!! nie ma w bazie pracownika o takim nazwisku !!!';
    }   
    
    if(document.getElementById('list_result_surname').getElementsByTagName('li').length >= 1) {
    document.getElementById('div_message').innerHTML = '';
  }
}
}

function check_salary() {
  let emp_check = document.getElementById('input_salary').value;
  
  document.getElementById('input_salary').value = '';
  document.getElementById('input_salary').focus();
  
  document.getElementById('list_result_salary').innerHTML = '';
  
  for (let i = 0; i < empArray.length; i ++) {
    
    if (parseInt(empArray[i].salary) >= parseInt(emp_check)) {
      
      let li_element = document.createElement('li');
      let li_text = document.createTextNode('imię: ' + firstToUpper(empArray[i].firstName) + ' | nazwisko: ' + firstToUpper(empArray[i].surname) + ' | zarobki miesięczne: ' + empArray[i].salary + 'zł');
      li_element.appendChild(li_text);

      document.getElementById('list_result_salary').appendChild(li_element);
      
    } else if (isNaN(emp_check) || emp_check == '') {
      document.getElementById('div_message').innerHTML = '!!! wpisz kwotę (liczbę), aby przeszukać bazę !!!';
    } else {
      document.getElementById('div_message').innerHTML = '!!!! nie ma w bazie pracownika zarabiającego taką kwotę miesięcznie !!!!';
    }   
    
    if(document.getElementById('list_result_salary').getElementsByTagName('li').length >= 1) {
    document.getElementById('div_message').innerHTML = '';
  }
}
}

function result_all() {
  for (let i = 0; i < empArray.length; i ++) {
      
      let li_element = document.createElement('li');
      let li_text = document.createTextNode('imię: ' + firstToUpper(empArray[i].firstName) + ' | nazwisko: ' + firstToUpper(empArray[i].surname) + ' | zarobki miesięczne: ' + empArray[i].salary + 'zł');
      li_element.appendChild(li_text);

      document.getElementById('list_result_all').appendChild(li_element);
      
  }
}

function firstToUpper(string) 
{
    return string.charAt(0).toUpperCase() + string.slice(1);
}