document.addEventListener('DOMContentLoaded', () => {
    // Inicializa AOS (Animate On Scroll)
    AOS.init({
        duration: 1200, // Duração da animação em ms
        once: true,    // Animações ocorrem apenas uma vez na rolagem para baixo
        mirror: false  // Se deve ou não espelhar animações ao rolar para cima (false para manter simples)
    });

    // Lógica do Carrossel de Depoimentos
    const carouselTrack = document.querySelector('.carousel-track');
    const testimonialItems = document.querySelectorAll('.testimonial-item');
    const prevBtn = document.querySelector('.prev-btn');
    const nextBtn = document.querySelector('.next-btn');

    let currentIndex = 0;
    const totalItems = testimonialItems.length;

    function updateCarousel() {
        // Calcula o deslocamento do track para mostrar o item atual
        carouselTrack.style.transform = `translateX(-${currentIndex * 100}%)`;
    }

    // Navegação anterior
    prevBtn.addEventListener('click', () => {
        currentIndex = (currentIndex > 0) ? currentIndex - 1 : totalItems - 1;
        updateCarousel();
    });

    // Navegação próxima
    nextBtn.addEventListener('click', () => {
        currentIndex = (currentIndex < totalItems - 1) ? currentIndex + 1 : 0;
        updateCarousel();
    });

    // Opcional: Carrossel automático (descomente se quiser)
    // setInterval(() => {
    //     currentIndex = (currentIndex < totalItems - 1) ? currentIndex + 1 : 0;
    //     updateCarousel();
    // }, 5000); // Muda a cada 5 segundos

    // Lógica do FAQ (Accordion)
    const faqQuestions = document.querySelectorAll('.faq-question');

    faqQuestions.forEach(question => {
        question.addEventListener('click', () => {
            const answer = question.nextElementSibling;
            const isActive = question.classList.contains('active');

            // Fecha todos os outros FAQs abertos
            faqQuestions.forEach(q => {
                if (q !== question && q.classList.contains('active')) {
                    q.classList.remove('active');
                    q.nextElementSibling.style.maxHeight = 0;
                    q.nextElementSibling.style.padding = '0 35px'; // Volta ao padding inicial
                }
            });

            // Abre ou fecha o FAQ clicado
            if (isActive) {
                question.classList.remove('active');
                answer.style.maxHeight = 0;
                answer.style.padding = '0 35px';
            } else {
                question.classList.add('active');
                answer.style.maxHeight = answer.scrollHeight + 'px'; // Pega a altura real do conteúdo
                answer.style.padding = '25px 35px'; // Restaura o padding
            }
        });
    });
});