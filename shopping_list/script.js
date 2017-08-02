var input_item;
var ul_list;
var list_item;
var list_text;
var checkbox_item;
var button_delete;
var button_text;
var array_checkbox;
var array_button_delete;
var i;

document.getElementById('id_button_add').addEventListener("click", function() {
  addInputToList(); 
});

document.getElementById('input_item').addEventListener('keydown', function (event) {
  if (event.which === 13) {
      addInputToList();
  }
});

document.getElementById('id_button_clear').addEventListener('click', function(){
  document.getElementById('items_list').innerHTML = '';
});

function addInputToList() {
  input_item = document.getElementById('input_item').value;
  
  document.getElementById('input_item').value = '';
  document.getElementById('input_item').focus();
 
  if(input_item == '') {
    document.getElementsByTagName('h4')[0].innerHTML = 'nic nie dodano do listy - spróbuj jeszcze raz';
    
    document.getElementsByTagName('h4')[0].style.color = '#d5340a';
  } else {
    
    document.getElementsByTagName('h4')[0].innerHTML = '';
    
    list_item = document.createElement('li');
    list_text = document.createTextNode(input_item);
    
    checkbox_item = document.createElement('input');
    checkbox_item.setAttribute('type', 'checkbox');
    checkbox_item.setAttribute('class', 'class_checkbox');
    
    button_delete = document.createElement('button');
    button_delete.setAttribute('class', 'button_delete');
    button_text = document.createTextNode('usuń');
    button_delete.appendChild(button_text);
    
    list_item.appendChild(button_delete);
    list_item.appendChild(checkbox_item);
    list_item.appendChild(list_text);
    
    ul_list = document.getElementById('items_list');
    ul_list.appendChild(list_item); 
  }
  
  array_checkbox = document.getElementsByClassName('class_checkbox');

  for(i = 0; i < array_checkbox.length; i++) {
    array_checkbox[i].addEventListener('change', function() {
      if_check_sign(this);
     });
  }
  
  array_button_delete = document.getElementsByClassName('button_delete');
  
  for(i=0; i < array_button_delete.length; i++) {
    array_button_delete[i].addEventListener('click', function() {    
      li_disappear(this);
    });
  }  
}

function if_check_sign(checkbox) {
  if(checkbox.checked == true){
    checkbox.parentNode.style.textDecoration = "line-through";
  } else {
    checkbox.parentNode.style.textDecoration = "none";
  }
}

function li_disappear(delBtn) {
   delBtn.parentNode.style.display = "none";
}