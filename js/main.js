function typeWriter(){
    const textoArray = titulo.innerHTML.split('');
    titulo.innerHTML = '';
    textoArray.forEach((letra, i)=>{
        setTimeout(() =>
            titulo.innerHTML += letra, 180 * i)  
            console.log(letra);      
        
    });
}
const titulo = document.querySelector('h1'); /* pega o título do meu banner*/
typeWriter(titulo);


let hamburguer = document.querySelector('.hamburguer');


hamburguer.addEventListener('click',()=> 
    document.querySelector('.container').classList.toggle('mostrar-menu')
);