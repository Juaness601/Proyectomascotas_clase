// Función para obtener una imagen aleatoria de perro mediante la API de Dog CEO
document.getElementById("btn-dog").addEventListener("click", function() {
    fetch("https://dog.ceo/api/breeds/image/random")
      .then(response => response.json()) // Convierte la respuesta a JSON
      .then(data => {
        // Inserta la imagen obtenida en el contenedor "dog-image"
        document.getElementById("dog-image").innerHTML = `<img src="${data.message}" alt="Imagen de perro">`;
      })
      .catch(error => console.error("Error al obtener la imagen:", error)); // Manejo de errores
  });

  // Función para obtener una imagen aleatoria de gato mediante la API de The Cat API
  document.getElementById('btn-cat').addEventListener('click', async () => {
    try {
      const respuesta = await fetch('https://api.thecatapi.com/v1/images/search');
      const datos = await respuesta.json();
      const urlGatito = datos[0].url;
      document.getElementById('cat-image').innerHTML = `<img src="${urlGatito}" alt="Gatito aleatorio" class="img-cat">`;
    } catch (error) {
      console.error('Error al obtener la imagen del gatito:', error);
    }
  });
  
  // Funcionalidad del Carrusel de Fotos
  document.addEventListener('DOMContentLoaded', function() {
    const slides = document.querySelector('.slides');
    if (slides) {
      const images = document.querySelectorAll('.slides img');
      const prevBtn = document.querySelector('.prev');
      const nextBtn = document.querySelector('.next');
      let currentIndex = 0;
      const totalSlides = images.length;
  
      function updateCarousel() {
        slides.style.transform = 'translateX(' + (-currentIndex * 100) + '%)';
      }
  
      if (prevBtn && nextBtn) {
        prevBtn.addEventListener('click', function() {
          currentIndex = (currentIndex === 0) ? totalSlides - 1 : currentIndex - 1;
          updateCarousel();
        });
  
        nextBtn.addEventListener('click', function() {
          currentIndex = (currentIndex === totalSlides - 1) ? 0 : currentIndex + 1;
          updateCarousel();
        });
      }
    }
  });
  