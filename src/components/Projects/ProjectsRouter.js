import ProjectsList from "./ProjectsList"

import PhorosSerwis from "./Project/PhorosSerwis"
import CarGame from "./Project/CarGame"
import CurrencyCalculator from "./Project/CurrencyCalculator"
import WeatherApp from "./Project/WeatherApp"
import Eclinic from "./Project/Eclinic"
import DrinkFinder from "./Project/DrinkFinder"

import { Routes, Route } from "react-router-dom"

const ProjectsRouter = () => {
    
    return (
            <Routes>
                <Route path="*" element={<ProjectsList />}/>
                <Route path="/phoros-serwis" element={<PhorosSerwis />}/>
                <Route path="/car-game" element={<CarGame />}/>
                <Route path="/currency-calculator" element={<CurrencyCalculator />}/>
                <Route path="/weather-app" element={<WeatherApp />}/>
                <Route path="/eclinic" element={<Eclinic />}/>
                <Route path="/drink-finder" element={<DrinkFinder />}/>
            </Routes>
    )
}


export default ProjectsRouter