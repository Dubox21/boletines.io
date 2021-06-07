//console.log("hola mundo");

//DOM
/*let container = document.querySelector(".container");
console.log (container);*/
/*let links = document.querySelectorAll("a");

links.forEach(function(link){
console.log(link);
})
//console.log(links);

let celdas = document.querySelectorAll("td");
celdas.forEach(function(td){
    td.addEventListener('click', function(){
        console.log("click") //poner this devuelve lo que se haga interaccion
    });
});*/

//obtener los elementos de la clase .close, luego recorrerlos
//y agregar un click a cada uno de ellos

let links = document.querySelectorAll(".close");

links.forEach(function(link){

    link.addEventListener("click", function(evento){
     evento.preventDefault();
   // return false; //para no ejecutar el comportamiento por defecto
     let content = document.querySelector('.content');
   
     content.classList.remove("fadeInDown");
     content.classList.remove("animated");

     content.classList.add("fadeOutUp");
     content.classList.add("animated");

     setTimeout(function(){
       location.href = "/boletines";
     }, 600);
 
   

     return false;
});
});

/*let iconos = document.querySelectorAll("i");
iconos.forEach(function(icono){
    icono.classList.remove("fa-star");
    icono.classList.add("fa-star-o");
});*/


