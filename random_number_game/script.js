var randomNr;
var id_nr_game;
var check_answer;
var msg_confirm;

randomNr = Math.floor((Math.random() * 100) + 1);

document.getElementById('id_button').addEventListener('click', function() { 
  check_nr();
});

document.getElementById('id_nr_game').addEventListener('keyup', function(event){
  if (event.which === 13) {
    check_nr();
  }
});

function check_nr() {
  id_nr_game = document.getElementById('id_nr_game').value;
  
  document.getElementById('id_nr_game').value = '';
  document.getElementById('id_nr_game').focus();
  
  check_answer = document.getElementById('check_answer');
  
  if (id_nr_game.indexOf('.') != -1 || id_nr_game.indexOf(',') != -1) {
    check_answer.innerHTML = 'Wpisz liczbę NATURALNĄ (bez przecinka), aby zagrać.';
  } else if (id_nr_game == '' || isNaN(id_nr_game)) {
    check_answer.innerHTML = 'Wpisz LICZBĘ naturalną, aby zagrać.';
  } else if (id_nr_game < 0 || id_nr_game > 100) {
    check_answer.innerHTML = 'Podana liczba jest spoza wymaganego zakresu (mniejsza od 0 lub większa od 100).';
  }   
  else {
      if(id_nr_game == randomNr) {
      
      msg_confirm = window.confirm('Brawo! Jesteś zwycięzcą! Czy chcesz zagrać jeszcze raz?');
        check_answer.innerHTML = '';
        if(msg_confirm == true) {
          randomNr = Math.floor((Math.random() * 100) + 1);
        } else {
          document.getElementById('game_field').style.display = 'none';
          check_answer.innerHTML = 'Gratulujemy wygranej. Dziękujemy za wspólną grę.';
          check_answer.style.color = 'red';
        }
      
    } else if(id_nr_game > randomNr) {
      check_answer.innerHTML = 'Podana liczba jest większa od losowej. Spróbuj jeszcze raz!';
    } else {
      check_answer.innerHTML = 'Podana liczba jest mniejsza od losowej. Spróbuj jeszcze raz!';
    }
  }
}