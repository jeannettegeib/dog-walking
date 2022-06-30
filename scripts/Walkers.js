import { getWalkers, getCities, getWalkerCities } from "./database.js"

const cities = getCities()
const walkerCities = getWalkerCities()

//for this currentWalker, go through walkerCities and push cityIds they cover into an array called serviceAreas
const alignWalkerToCities = (currentWalker)=>{
    let serviceAreas =[];
    for (const record of walkerCities){
        if (currentWalker.id === record.walkerId){
            serviceAreas.push(record.cityId)
            //i++
        }
    }
    return serviceAreas
}   

//get the city names for the serviceAreas. Build a string.
const getCityNameByID=(serviceAreas)=>{
    let cityString = ""
   for (const city of cities){
        
        if (serviceAreas.includes(city.id)){
       
          cityString += `${city.name} `
         
   }
 }
 return cityString
}



document.addEventListener(
    "click",
    (clickEvent) => {
        const itemClicked = clickEvent.target
        if (itemClicked.id.startsWith("walker")) {
            const [,walkerId] = itemClicked.id.split("--")

            for (const walker of walkers) {
                if (walker.id === parseInt(walkerId)) {
                    let serviceCities = alignWalkerToCities(walker)
                    let theseCities = getCityNameByID(serviceCities) 
                    
                    window.alert(`${walker.name} services ${theseCities}`)
                }
            }
        }
    }
)

const walkers = getWalkers()



export const Walkers = () => {
    let walkerHTML = "<ul>"

    for (const walker of walkers) {
        walkerHTML += `<li id="walker--${walker.id}">${walker.name}</li>`
       
    }

    return walkerHTML += "</ul>"

}


