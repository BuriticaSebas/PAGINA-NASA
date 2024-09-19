const API_KEY = "ee1CW4LUKP12hV9keTQOiYY39IhgeOeztLfval0U";
let currentPage = 1;

const fetchData = async (p) => {
    const response = await fetch(
      `https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&page=${p}&api_key=${API_KEY}`
    );
    const data = await response.json();
    console.log(data)
    return data;
};
fetchData(currentPage)

const increment = async () => {
    currentPage++;
    const data = await fetchData(currentPage);
    console.log(data);
};

const decrement = async () => {
    if (currentPage > 1) {
        currentPage--;
        const data = await fetchData(currentPage);
        console.log(data);
    }
}


function agregarIdEnLocalStorage(id) {
    // esta funcion recibe por parametro el id de la fotografia para luego con ese id guardado en localstorage buscar la fotos en la api y mostrar los favoritos

    if (typeof id !== 'number') {
        console.error("El ID debe ser un número.");
        return;
    }
    
    // bro esto es pa buscar el array en localstorage si ya existe
    let idsGuardados = localStorage.getItem('nasaImageIds');
    
    // si aun no existe porque es primera vez entonces vamos a crearlo pero si si existe lo convertimos a json para poder usarlo con js como un objeto porque el localstorage guarda puro texto
    let idsArray = idsGuardados ? JSON.parse(idsGuardados) : [];
    
    // esto añade el id nuevom con el metodo incluides pruebas si ya esta dentro o no y lo mete
    if (!idsArray.includes(id)) {
        idsArray.push(id);
    } else {
        console.log(`El ID ${id} ya existe en el array.`);
        return;
    }

    // y aqui lo guardamos en localstorage con su nombre para poder llamarlo cuando queramos como en el primero codigo de esta funcion
    localStorage.setItem('nasaImageIds', JSON.stringify(idsArray));
    console.log(`ID ${id} añadido a localStorage.`);
}

// Ejemplo
agregarIdEnLocalStorage(12345);
agregarIdEnLocalStorage(67890);


