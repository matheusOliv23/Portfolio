function typeWriter(titulo){
    const textoArray = titulo.innerHTML.split('');
    titulo.innerHTML = '';
    textoArray.forEach((letra, i)=>{
        setTimeout(() =>
            titulo.innerHTML += letra, 160 * i)        
        
    });
}
const titulo = document.querySelector('h1'); /* pega o título do meu banner*/
typeWriter(titulo);
