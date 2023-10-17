document.addEventListener('DOMContentLoaded', function () {
    const carousel = document.querySelector('.carousel');
    let counter = 0;

    setInterval(() => {
        counter++;
        carousel.style.transform = `translateX(${-counter * 100}%)`;

        if (counter === 3) {
            counter = 0;
            setTimeout(() => {
                carousel.style.transition = 'none';
                carousel.style.transform = 'translateX(0)';
            }, 500);
            setTimeout(() => {
                carousel.style.transition = 'transform 0.5s ease-in-out';
            }, 600);
        }
    }, 3000);
});
// formulario
document.addEventListener('DOMContentLoaded', function () {
    const contactForm = document.getElementById('contact-form');

    contactForm.addEventListener('submit', function (event) {
        event.preventDefault();

        // Validación básica
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const message = document.getElementById('message').value;

        if (name.trim() === '' || email.trim() === '' || message.trim() === '') {
            alert('Por favor, complete todos los campos.');
        } else {
            // Puedes enviar el formulario aquí (o realizar otras acciones)
            alert('Formulario enviado con éxito!');
            contactForm.reset(); // Limpiar el formulario
        }
    });
});