// Código para Slider
document.addEventListener('DOMContentLoaded', function() {
    const radios = document.querySelectorAll('input[name="btn-radio"]'); // Atualize aqui
    let currentIndex = 0;

    function autoSlide() {
        radios[currentIndex].checked = false; // Desmarca o botão atual
        currentIndex = (currentIndex + 1) % radios.length; // Incrementa o índice
        radios[currentIndex].checked = true; // Marca o próximo botão
    }

    setInterval(autoSlide, 5000); // Troca a cada 5 segundos
});

// Código para Cookies (scripts/cookies.js)
document.addEventListener('DOMContentLoaded', function() {
    const cookiesMsg = document.getElementById('cookies-msg');
    const acceptCookiesButton = document.getElementById('accept-cookies');
    
    if (acceptCookiesButton) {
        acceptCookiesButton.addEventListener('click', function() {
            cookiesMsg.style.display = 'none';
        });
    }
});

// Obtém o botão
const scrollToTopBtn = document.getElementById("scrollToTopBtn");

// Adiciona o evento de rolagem
window.onscroll = function() {
    const scrollableHeight = document.documentElement.scrollHeight - window.innerHeight; // Altura total rolável
    const scrollPosition = window.scrollY || document.documentElement.scrollTop; // Posição atual da rolagem

    // Aparece o botão quando chega perto do fim da página, ajustando o valor de -200 conforme necessidade
    if (scrollPosition >= scrollableHeight - 750) { 
        scrollToTopBtn.style.display = "block";
        scrollToTopBtn.style.opacity = "1"; // Suavidade ao aparecer
    } else {
        scrollToTopBtn.style.display = "none";
        scrollToTopBtn.style.opacity = "0"; // Suavidade ao desaparecer
    }
};

// Ao clicar no botão, rola suavemente para o topo
scrollToTopBtn.onclick = function() {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
};
