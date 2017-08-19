var select_day = document.getElementById('select_day');
var select_month = document.getElementById('select_month');
var select_year = document.getElementById('select_year');

for(var i=1; i <=31; i++) {
  var day = document.createElement('option');
  day.setAttribute('value', i);
  var day_text = document.createTextNode(i);
  day.appendChild(day_text);
  select_day.appendChild(day);
}

for(var j=1; j <= 12; j++) {
  var month = document.createElement('option');
  month.setAttribute('value', j);
  var month_text = document.createTextNode(j);
  month.appendChild(month_text);
  select_month.appendChild(month);
}

for(var k=1980; k <= 2017; k++) {
  var year = document.createElement('option');
  year.setAttribute('value', k);
  var year_text = document.createTextNode(k);
  year.appendChild(year_text);
  select_year.appendChild(year);
}

var p_msg = document.getElementById('p_msg');

var js_date = new Date;
var js_year = js_date.getFullYear();
var js_month = (js_date.getMonth() + 1);
var js_day = js_date.getDate();

var choosen_day;
var choosen_month;
var choosen_year;

var year_diff;
var month_diff;
var day_diff;

var x_month;
var x_day;
var x_hours;
var x_min;
var x_sec;

document.getElementById('id_button').addEventListener('click', function() {
  if(select_day.options[ select_day.selectedIndex ].value == 0 || select_month.options[ select_month.selectedIndex ].value == 0 || select_year.options[ select_year.selectedIndex ].value == 0) {
    p_msg.innerHTML = 'wybierz datę urodzenia!';
  } else {
    
    p_msg.innerHTML = 'jesteś już na tym świecie:';
    
    choosen_day = select_day.options[select_day.selectedIndex].value;
    choosen_month = select_month.options[select_month.selectedIndex].value;
    choosen_year = select_year.options[select_year.selectedIndex].value;
    
    year_diff = js_year - choosen_year;
    month_diff = js_month - choosen_month;
    day_diff = js_day - choosen_day;
    
    x_month = (year_diff * 12) + month_diff;
    x_day = (year_diff * 365) + (month_diff * 31) + day_diff;
    x_hours = x_day * 24;
    x_min = x_hours * 60;
    x_sec = x_min * 60;
    
    document.getElementById('msg_sec').innerHTML = x_sec + ' sekund';
    document.getElementById('msg_min').innerHTML = x_min + ' minut';
    document.getElementById('msg_hours').innerHTML = x_hours + ' godzin';
    
    document.getElementById('msg_day').innerHTML = x_day + ' dni';
    document.getElementById('msg_month').innerHTML = x_month + ' miesięcy';
       
  }
});