//Collapsible
$(document).ready(function(){
    $('.collapsible').collapsible();
});

//Parallax
$(document).ready(function(){
    $('.parallax').parallax();
});

//Modal
$(document).ready(function(){
    $('.modal').modal({
    	dismissible: false,
		opacity: .5,
		inDuration: 300,
		outDuration: 200,
		startingTop: '4%',
		endingTop: '10%',
    });
});

//Floating Acction Button
$(document).ready(function(){
    $('.fixed-action-btn').floatingActionButton();
});

//Sidenav
$(document).ready(function(){
    $('.sidenav').sidenav();
    $(".dropdown-trigger").dropdown();
});

//Sidenav
$(document).ready(function(){
    $(".dropdown-trigger").dropdown();
});

//Materialboxed
$(document).ready(function(){
    $('.materialboxed').materialbox();
});

//Picker
$(document).ready(function(){
    $('.datepicker').datepicker({
    	minDate: new Date(2018,5,23)
    });
});

//Select
$(document).ready(function(){
    $('select').formSelect();
});

//Autocomplete
var autocomplete = JSON.parse(sessionStorage.getItem('Archivo/autocomplete.json'));

$(document).ready(function(){
    $('input.autocomplete').autocomplete({
      data: autocomplete,
    });
});

//Carousel
$(document).ready(function(){
      $('.carousel').carousel();
    });