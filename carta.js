function cambiarImagen() {
    let imagen = document.getElementById("valentineImage");
    imagen.src = "img/R.png"; 
    lanzarConfeti(); 
}

function mostrarMensaje() {
    let mensaje = document.getElementById("mensajeEspecial");
    mensaje.innerText = "Gracias por ser mi refugio, mi risa y mi alma gemela.💕";
    mensaje.style.opacity = "1";
}


function lanzarConfeti() {
    const confettiContainer = document.createElement("div");
    confettiContainer.classList.add("confetti-container");
    document.body.appendChild(confettiContainer);

    for (let i = 0; i < 100; i++) {
        let confetti = document.createElement("div");
        confetti.classList.add("confetti");

        confetti.style.left = Math.random() * 100 + "vw";
        confetti.style.top = Math.random() * 100 + "vh";

    
        confetti.style.width = Math.random() * 10 + 5 + "px";
        confetti.style.height = confetti.style.width;

        
        confetti.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 70%)`;

       
        confetti.style.animationDuration = Math.random() * 3 + 2 + "s";

        confettiContainer.appendChild(confetti);

        
        setTimeout(() => confetti.remove(), 5000);
    }
}