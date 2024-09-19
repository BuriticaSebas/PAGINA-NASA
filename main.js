const API_KEY = "ee1CW4LUKP12hV9keTQOiYY39IhgeOeztLfval0U";
let currentPage = 1;

const fetchData = async (p) => {
    const response = await fetch(
      `https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&page=${p}&api_key=${API_KEY}`
    );
    const data = await response.json();
    return data;
};

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
};


document.getElementById("increment").addEventListener("click", increment);
document.getElementById("decrement").addEventListener("click", decrement);

