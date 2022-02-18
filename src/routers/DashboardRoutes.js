
import { Route, Routes } from "react-router-dom";
import { Navbar } from "../components/ui/Navbar";
import { DcScreen } from "../components/dc/DcScreen";
import { MarvelScreen } from "../components/marvel/MarvelScreen";
import { SearchScreen } from "../components/search/SearchScreen";
import { HeroeScreen } from "../components/heroe/HeroeScreen";



export const  DashboardRoutes = () => {
    return (
        <>
            <Navbar />

            <div className="container">

                <Routes>
                    <Route path="marvel" element={<MarvelScreen />} />
                    <Route path="dc" element={<DcScreen />} />
                    <Route path="search" element={<SearchScreen />} />
                    <Route path="hero/:heroeId" element={<HeroeScreen />} />
                </Routes>

            </div>

            
        </>
    )
}
