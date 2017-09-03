var array_img_slide;
var array_i_max;
var i;
var next;
var previous;

array_img_slide = document.getElementsByClassName('img_slide');
  
array_img_slide[0].style.display = 'block';

function nextImg() {
    for (i = 0; i < array_img_slide.length; i++) {
      
      if (array_img_slide[i].style.display === 'block') {
        array_img_slide[i].style.display = 'none';
        next = ++i;
        if (array_img_slide[next] != null) {
          array_img_slide[next].style.display = 'block';
        } else {
          array_img_slide[0].style.display = 'block';
        }  
      }
    }   
}

function previousImg () {
  array_i_max = -- array_img_slide.length;
   for (i = array_i_max; i >= 0; i--) {
      
      if (array_img_slide[i].style.display === 'block') {
        array_img_slide[i].style.display = 'none';
        previous = --i;
        if (array_img_slide[previous] != null) {
          array_img_slide[previous].style.display = 'block';
        } else {
          array_img_slide[array_i_max].style.display = 'block';
        }  
      }
    }   
}

document.getElementById('button_previous').addEventListener('click', function () {
  previousImg();
});

document.getElementById('button_next').addEventListener('click', function () {
  nextImg();
});


