document.addEventListener("DOMContentLoaded", () =>{
    displayPets(pets)
    
})

function displayPets (pets){
    const petsContainer = document.querySelector("#content")

    // clear all elements
    petsContainer.innerHTML = "";

    pets.forEach(pet => {
        displayPet(pet, petsContainer)
    })
}


function displayPet(pet, parentDiv){
    // create a div for each product
    const petDiv = document.createElement("div")
    petDiv.classList.add("pet");
    petDiv.id = pet.name
    // add product to the container
    parentDiv.appendChild(petDiv)
    console.log(parentDiv.appendChild(petDiv))

}
function addPetName (pet, petDiv){
    // create the pet info div
    const petNameDiv = document.createElement("div")
    petDiv.appendChild(productHeader)
    // add pet name
    const petName = document.createElement("h4")
    petName.innerText = pet.name
}