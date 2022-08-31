const height = document.body.scrollHeight - window.innerHeight;
const fondo = document.getElementById('fondo');

window.onscroll = () => {
    let anchoFondo = (window.pageYOffset / height) * 400;
    if(anchoFondo <= 100){
        fondo.style.width = anchoFondo + '%';
    }
}