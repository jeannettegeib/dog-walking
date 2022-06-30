import { getPets, getWalkers, getCities, getWalkerCities } from "./database.js"

// Get copy of state for use in this module
const pets = getPets()
const walkers = getWalkers()
const cities = getCities()
const cityWalkers = getWalkerCities()


// Function whose responsibility is to find the walker assigned to a pet
const findWalker = (pet, allWalker) => {
    let petWalker = null

    for (const walker of allWalker) {
        if (walker.id === pet.walkerId) {
            petWalker = walker
        }
    }

    return petWalker
}
//Function to find what cityName the pet is located in
const alignCityNameToPet =(paramCities, paramPet) =>{
    let cityName=""
    for (const city of paramCities){
        if (paramPet.cityId ===city.id){
            cityName=city.name;
        }
    }
    return cityName
}

export const Assignments = () => {
    let assignmentHTML = ""
    assignmentHTML = "<ul>"

    for (const currentPet of pets) {
        const currentPetWalker = findWalker(currentPet, walkers)
        //update currentPetWalker.city based on new data structure 
        const petsCity = alignCityNameToPet(cities, currentPet)
        assignmentHTML += `
            <li>
                ${currentPet.name} is being walked by
                ${currentPetWalker.name} in ${petsCity}
            </li>
        `
    }

    assignmentHTML += "</ul>"

    return assignmentHTML
}

