var menu = document.querySelector(".menu_movil_cont");
var boton_menu = document.querySelector(".menu_hamburguesa");

boton_menu.addEventListener('click',function(){
    menu.classList.toggle('aparecer');
})