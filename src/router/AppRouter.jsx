import { Routes, Route } from "react-router-dom"
import { ClothingRoutes } from "../clothing"

export const AppRouter = () =>{
    return (
        <>
        <Routes>
            <Route path="/*" element={<ClothingRoutes/>} />
        </Routes>
        </>
    )
}

export default AppRouter;