const containerVenta = document.querySelector(".venta");
const containerAlquiler = document.querySelector(".alquiler");

const propiedades_venta = [
  //arreglo
  {
    nombre: "Casa de Campo",
    src: "img/casa1.jpeg",
    descripcion: "Casa de campo estilo rustico",
    ubicacion: "La Florida, 1193",
    habitacion: 2,
    costo: 800,
    smoke: false,
    pets: false,
  },
  {
    nombre: "Casa en la playa",
    src: "img/casa2.avif",
    descripcion: "Zona tranquila",
    ubicacion: " Viña del mar, 1190",
    habitacion: 2,
    costo: 800,
    smoke: true,
    pets: false,
  },
  {
    nombre: "Casa Frente al Lago",
    src: "img/cabaña.webp",
    descripcion: "Cabaña, zona tranquila",
    ubicacion: " Viña del mar, 1190",
    habitacion: 2,
    costo: 800,
    smoke: false,
    pets: true,
  },
  {
    nombre: "Casa en la ciudad",
    src: "img/ciudad.webp",
    descripcion: "Zona tranquila",
    ubicacion: " Viña del mar, 1190",
    habitacion: 2,
    costo: 800,
    smoke: true,
    pets: true,
  },
];

const propiedades_alquilar = [
  {
    nombre: "Casa de Campo",
    src: "img/casa1.jpeg",
    descripcion: "Casa de campo estilo rustico",
    ubicacion: "La Florida, 1193",
    habitacion: 2,
    costo: 800,
    smoke: false,
    pets: false,
  },
  {
    nombre: "Casa en la playa",
    src: "img/casa2.avif",
    descripcion: "Zona tranquila",
    ubicacion: " Viña del mar, 1190",
    habitacion: 2,
    costo: 800,
    smoke: true,
    pets: false,
  },
  {
    nombre: "Casa Frente al Lago",
    src: "img/cabaña.webp",
    descripcion: "Cabaña, zona tranquila",
    ubicacion: " Viña del mar, 1190",
    habitacion: 2,
    costo: 800,
    smoke: false,
    pets: true,
  },
  {
    nombre: "Casa en la ciudad",
    src: "img/ciudad.webp",
    descripcion: "Zona tranquila",
    ubicacion: " Viña del mar, 1190",
    habitacion: 2,
    costo: 800,
    smoke: true,
    pets: true,
  },
];

const enviar_informacion = (propiedades, containerPropiedad) => {
  propiedades.forEach(
    (
      currentObject,
      contador //currenteObjet es mi data de objeto, no iniciamos contador ya que el forEach lo tiene por defecto
    ) => {
      if (contador <= 2) {
        // condicion para que se imprima 3 cartas
        const card = document.createElement("div");
        card.classList.add("propiedad-block"); // es la caja de las tarjetas

        //LLAMAMOS AL NOMBRE
        const nombre = document.createElement("h2");
        nombre.classList.add("nombre");
        nombre.textContent = currentObject.nombre;

        //LLAMAMOS A LA IMAGEN
        const src = document.createElement("img");
        src.classList.add("img-container");
        src.src = currentObject.src;

        //LLAMAMOS DESCRIPCION
        const descripcion = document.createElement("p");
        descripcion.classList.add("parrafos");
        descripcion.textContent = currentObject.descripcion;

        //LLAMAMOS UBICACION
        const ubicacion = document.createElement("p");
        ubicacion.classList.add("parrafos");
        ubicacion.textContent = currentObject.ubicacion;

        //LLAMAMOS HABITACION
        const habitacion = document.createElement("p");
        habitacion.classList.add("parrafos");
        habitacion.textContent = currentObject.habitacion;

        //LLAMAMOS COSTO
        const costo = document.createElement("p");
        costo.classList.add("parrafos");
        costo.textContent = currentObject.costo;

        //LLAMAMOS SMOKE
        const div_smoke = document.createElement("div");
        div_smoke.classList.add("row_smoke");
        const smoke = document.createElement("h3");
        // evaluo la condicion y se cumple ? true : false
        let text_smoke =currentObject.smoke === true ? `Se puede fumar` : "No se puede fumar";

        let color = currentObject.smoke ? "green" : "red";
        const icon_smoke = document.createElement("i");
        icon_smoke.classList.add("fa-smoking");
        icon_smoke.classList.add("fa-solid");
        smoke.textContent = text_smoke;
        icon_smoke.style.color = color;
        smoke.style.color = color;

        //LLAMAMOS PETS
        const div_pets = document.createElement("div");
        div_pets.classList.add("row_pets");
        const pets = document.createElement("h3");
        // evaluo la condicion y se cumple ? true : false
        let text_pets =currentObject.pets === true ? `Se puede tener mascotas`: "No se puede";

        let color1 = currentObject.pets ? "green" : "red";
        const icon_pets = document.createElement("i");
        icon_pets.classList.add("fa-solid");
        icon_pets.classList.add("fa-paw");
        pets.textContent = text_pets;
        icon_pets.style.color = color1;
        pets.style.color = color1;
        


        //agremos todos a la card con appenchild
        card.appendChild(nombre);
        card.appendChild(src);
        card.appendChild(descripcion);
        card.appendChild(ubicacion);
        card.appendChild(habitacion);
        card.appendChild(costo);

        div_smoke.appendChild(icon_smoke);
        div_smoke.appendChild(smoke);
        card.appendChild(div_smoke);

        div_pets.appendChild(icon_pets);
        div_pets.appendChild(pets);
        card.appendChild(div_pets);

        containerPropiedad.appendChild(card); // lo mand
      }
      //console.log(currentObject)
    }
  );
};

// esto se ejecuta si containerVenta no es undefined
console.log(containerVenta);
if (containerVenta !== null) {
  enviar_informacion(propiedades_venta, containerVenta);
}

// y esto se ejecuta si containerAlquiler no es undefined
if (containerAlquiler !== null) {
  enviar_informacion(propiedades_alquilar, containerAlquiler);
}

// if (smoke) {
//   smoke.classList.add("verdadero");
// } else {
//   smoke.classList.add("falso");
// }
