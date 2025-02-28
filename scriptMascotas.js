// Arreglo de mascotas
const pets = [
    {
        type: 'perro',
        name: 'Firulais',
        age: '3 años',
        gender: 'Macho',
        image: 'img/perro1.jpg'
    },
    {
        type: 'gato',
        name: 'Misu',
        age: '2 años',
        gender: 'Hembra',
        image: 'img/gato1.jpg'
    },
    {
        type: 'perro',
        name: 'Rex',
        age: '5 años',
        gender: 'Macho',
        image: 'img/perro2.jpg'
    },
    {
        type: 'gato',
        name: 'Luna',
        age: '1 año',
        gender: 'Hembra',
        image: 'img/gato2.jpg'
    },
    {
        type: 'perro',
        name: 'Max',
        age: '4 años',
        gender: 'Macho',
        image: 'img/perro3.jpg'
    },
    {
        type: 'gato',
        name: 'Bella',
        age: '2 años',
        gender: 'Hembra',
        image: 'img/gato3.jpg'
    },
    {
        type: 'perro',
        name: 'Bolt',
        age: '2 años',
        gender: 'Macho',
        image: 'img/perro4.jpg'
      },
      {
        type: 'gato',
        name: 'Coco',
        age: '3 años',
        gender: 'Hembra',
        image: 'img/gato4.jpg'
      },
      {
        type: 'perro',
        name: 'Rocky',
        age: '6 años',
        gender: 'Macho',
        image: 'img/perro5.jpg'
      },
      {
        type: 'gato',
        name: 'Simba',
        age: '4 años',
        gender: 'Macho',
        image: 'img/gato5.jpg'
      }
];

// Referencias al DOM
const gallery = document.getElementById('gallery');
const modal = document.getElementById('modal');
const closeBtn = document.getElementById('close');
const petName = document.getElementById('pet-name');
const petAge = document.getElementById('pet-age');
const petGender = document.getElementById('pet-gender');

// Generar la galería a partir del arreglo
pets.forEach(pet => {
    // Solo mostramos perros y gatos (puedes filtrar si hay otros tipos)
    if (pet.type === 'perro' || pet.type === 'gato') {
        const img = document.createElement('img');
        img.src = pet.image;
        img.alt = pet.name;
        img.addEventListener('click', () => {
            // Al hacer click, se muestran los datos de la mascota en el modal
            petName.textContent = pet.name;
            petAge.textContent = pet.age;
            petGender.textContent = pet.gender;
            modal.style.display = 'flex';
        });
        gallery.appendChild(img);
    }
});

// Función para cerrar el modal
closeBtn.addEventListener('click', () => {
    modal.style.display = 'none';
});

// Cerrar modal al hacer click fuera del contenido
modal.addEventListener('click', (e) => {
    if (e.target === modal) {
        modal.style.display = 'none';
    }
});
