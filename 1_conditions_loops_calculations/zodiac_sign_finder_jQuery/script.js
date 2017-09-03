$(document).ready(function(){
  
  for(let i = 1; i <= 31; i++) {
    $('#select_day').append( '<option value="'+i+'">'+i+'</option>' );
  }
  
  for(let j = 1; j <= 12; j++) {
    $('#select_month').append( '<option value="'+j+'">'+j+'</option>' );
  }
  
  for(let k = 1980; k <= 2017; k++) {
    $('#select_year').append( '<option value="'+k+'">'+k+'</option>' );
  }
  
  $('#btn_name').click(function(){
    
    $('.div_name').hide();
    $('.div_age').hide();
    $('.div_zodiac').hide();
    $('.zodiac_desc').hide();
    
    let name_value = $('#input_name').val();
    
    if(name_value == '') {
      $('#msg').append('<div class="div_name">Witaj Nieznajoma/my!</div>');
    } else {
      $('#msg').append('<div class="div_name">Witaj ' + name_value + '!</div>');
    }
    
    let day_value = $('#select_day').val();
    let month_value = $('#select_month').val();
    let year_value = $('#select_year').val();
    
    if (day_value == 0 || month_value == 0 || year_value == 0) {
      $('#msg').append('<div class="div_zodiac">Aby poznać swój znak zodiaku musisz wybrać datę swoich urodzin.</div>');
    } else {
      let age_value = age(year_value);
    
      $('#msg').append('<div class="div_age"> Masz ' + age_value + ' lat/a.</div>');
    
      let user_zodiac = zodiac(day_value, month_value);
    
      $('#msg').append('<div class="div_zodiac">Twój znak zodiaku to: ' + user_zodiac + '</div>');
      
      description(user_zodiac);
    }   
    
    $('#input_name').val('');
    $('#input_name').focus();
   
  });
  
  function age(birthday) {
    return (new Date).getFullYear() - birthday;
  }
  
  function zodiac(day, month) {
    let zodiac;
    if( (month == 3 && day >= 21) || (month == 4 && day <= 19 ) ) {
       zodiac = 'Baran';
    } else if ( (month == 4 && day >= 20) || (month == 5 && day <= 22) ) {
         zodiac = 'Byk';
    } else if ( (month == 5 && day >= 23) || (month == 6 && day <= 21) ) {
         zodiac = 'Bliźnięta';
    } else if ( (month == 6 && day >= 22) || (month == 7 && day <= 22) ) {
         zodiac = 'Rak';
    } else if ( (month == 7 && day >= 23) || (month == 8 && day <= 23) ) {
         zodiac = 'Lew';
    } else if ( (month == 8 && day >= 24) || (month == 9 && day <= 22) ) {
         zodiac = 'Panna';
    } else if ( (month == 9 && day >= 23) || (month == 10 && day <= 22) ) {
         zodiac = 'Waga';
    } else if ( (month == 10 && day >= 23) || (month == 11 && day <= 21) ) {
         zodiac = 'Skorpion';
    } else if ( (month == 11 && day >= 22) || (month == 12 && day <= 21) ) {
         zodiac = 'Strzelec';
    } else if ( (month == 12 && day >= 22) || (month == 1 && day <= 19) ) {
         zodiac = 'Koziorożec';
    } else if ( (month == 1 && day >= 20) || (month == 2 && day <= 18) ) {
         zodiac = 'Wodnik';
    } else if ( (month == 2 && day >= 19) || (month == 3 && day <= 20) ) {
         zodiac = 'Ryby';
    } else {
      zodiac = 'jedyny w swoim rodzaju - nam nieznany';
    }
    return zodiac;
  }
  
  function description(zodiac) {
    switch(zodiac) {
        case 'Baran':
          $('#msg').append('<div class="zodiac_desc">Jestem i działam, idę naprzód. Moim motto jest aktywność, agresja, przywództwo, początek.</div>');
          break;
        case 'Byk':
          $('#msg').append('<div class="zodiac_desc">Gromadzę i posiadam, doceniam i rozkoszuję się. Jestem stały, przyziemny, wytrzymały, zmysłowy.</div>');
          break;
        case 'Bliźnięta':
          $('#msg').append('<div class="zodiac_desc">Myślę i mówię, zbieram i przekazuję informacje. Jestem gadatliwy, ciekawski, towarzyski.</div>');
          break;
        case 'Rak':
          $('#msg').append('<div class="zodiac_desc">Czuję, przeżywam, martwię się, kontempluję. Jestem delikatny, konserwatywny, uczuciowy.</div>');
          break;
        case 'Lew':
          $('#msg').append('<div class="zodiac_desc">Patrzcie na mnie i podziwiajcie - jestem w centrum uwagi. Wielkoduszność, autorytet, dramatyzm.</div>');
          break;
        case 'Panna':
          $('#msg').append('<div class="zodiac_desc">Porządkuję i segreguję, pomagam i służę. Moje motto to staranność, krytyka, rezerwa, dbałość o zdrowie.</div>');
          break;
        case 'Waga':
          $('#msg').append('<div class="zodiac_desc">Dążę do równowagi, sprawiedliwości i bezstronności. Jestem sprawiedliwy, wyrafinowany, dyplomatyczny.</div>');
          break;
        case 'Skorpion':
          $('#msg').append('<div class="zodiac_desc">Zgłębiam, drążę, ujawniam. Moje motto to skupienie, głębia, zaborczość, wnikliwośc, intensywność.</div>');
          break;
        case 'Strzelec':
          $('#msg').append('<div class="zodiac_desc">Idę naprzód i przekraczam granice. Moje motto to optymizm, entuzjazm, przygoda, szczerość.</div>');
          break;
        case 'Koziorożec':
          $('#msg').append('<div class="zodiac_desc">Dążę do celu. Jestem konserwatywny, zdyscyplinowany, wytrwały, ambitny.</div>');
          break;
        case 'Wodnik':
          $('#msg').append('<div class="zodiac_desc">Wolność i równość, przekraczanie granic. Moje motto to niezależność, humanitaryzm, wynalazczość.</div>');
          break;
        case 'Ryby':
         $('#msg').append('<div class="zodiac_desc">Ucieczka od rzeczywistości. Moje motto to intuicja, marzenia, sztuka, współczucie, iluzja.</div>');
          break;
        default:
          $('#msg').append('<div class="zodiac_desc">Ty wiesz najlepiej!</div>');
          break;
        }
      // http://www.astrolabium.pl/astrologia/zodiak/znaki-zodiaku
  }
  
});