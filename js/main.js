let dataGlasses = [
    { id: "G1", src: "./img/g1.jpg", virtualImg: "./img/v1.png", brand: "Armani Exchange", name: "Bamboo wood", color: "Brown", price: 150, description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis ea voluptates officiis? " },
    { id: "G2", src: "./img/g2.jpg", virtualImg: "./img/v2.png", brand: "Arnette", name: "American flag", color: "American flag", price: 150, description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. In assumenda earum eaque doloremque, tempore distinctio." },
    { id: "G3", src: "./img/g3.jpg", virtualImg: "./img/v3.png", brand: "Burberry", name: "Belt of Hippolyte", color: "Blue", price: 100, description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit." },
    { id: "G4", src: "./img/g4.jpg", virtualImg: "./img/v4.png", brand: "Coarch", name: "Cretan Bull", color: "Red", price: 100, description: "In assumenda earum eaque doloremque, tempore distinctio." },
    { id: "G5", src: "./img/g5.jpg", virtualImg: "./img/v5.png", brand: "D&G", name: "JOYRIDE", color: "Gold", price: 180, description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Error odio minima sit labore optio officia?" },
    { id: "G6", src: "./img/g6.jpg", virtualImg: "./img/v6.png", brand: "Polo", name: "NATTY ICE", color: "Blue, White", price: 120, description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit." },
    { id: "G7", src: "./img/g7.jpg", virtualImg: "./img/v7.png", brand: "Ralph", name: "TORTOISE", color: "Black, Yellow", price: 120, description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim sint nobis incidunt non voluptate quibusdam." },
    { id: "G8", src: "./img/g8.jpg", virtualImg: "./img/v8.png", brand: "Polo", name: "NATTY ICE", color: "Red, Black", price: 120, description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit, unde enim." },
    { id: "G9", src: "./img/g9.jpg", virtualImg: "./img/v9.png", brand: "Coarch", name: "MIDNIGHT VIXEN REMIX", color: "Blue, Black", price: 120, description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit consequatur soluta ad aut laborum amet." }
];

const vglassesList = document.querySelector("#vglassesList");
const model = document.querySelector(".vglasses__model"); 
const glass = document.querySelector("#glasses")
const glassInfo = document.querySelector('.vglasses__info')

// List glasses
dataGlasses.map(dataGlass=> (
    vglassesList.innerHTML += `<div class="col-lg-4 my-4 col-md-12"><Button class='vglassButton'><image style="width:100%" key=${dataGlass.id} src=${dataGlass.virtualImg} alt=${dataGlass.name} class='vglassImage'></image></Button></div>`
    ))
    
// Change glass and show info when click
const vglassesButton = document.querySelectorAll(".vglassButton")

for (const vglassButton of vglassesButton) {
    vglassButton.addEventListener("click", (e) => {
        const dataGlass = dataGlasses.find(dataGlass => dataGlass.id === e.target.getAttribute("key"));

        // Show glass
        model.innerHTML = `<img src=${dataGlass.virtualImg} alt=${dataGlass.name} class='vglasses__model__img' id>`;

        // Show info
        glassInfo.innerHTML = `
        <div>
        <h3 style='font-size: 14px'>${dataGlass.name} - ${dataGlass.brand} (${dataGlass.color})</h3>
        <p>
        <span style='background-color: red; padding: 4px; border-radius: 8px; font-size: 10px'>${dataGlass.price}$</span>
        <span style='font-size: 10px; color: green'>Stoking</span>
        </p>
        <p style='font-size: 12px; color: white'>${dataGlass.description}</p>
        </div>`
        glassInfo.style.display = "block"

        
    })

    function removeGlasses(){
        if(true){
        glassInfo.style.display = "none";
        model.innerHTML = "";
        }
    }
}

