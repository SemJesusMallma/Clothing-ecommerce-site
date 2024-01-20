import { Routes, Route, Navigate } from "react-router-dom";
import ProductsPage from "../pages/ProductsPage";
import HomePage from "../pages/HomePage";
import CartPage from "../pages/CartPage";
import Contac from "../pages/Contact";
import DetailsProductPage from "../components/DetailsProductPage";
import Header from "../../ui/components/Header";
import { Navbar } from "../../ui/components/Navbar";
import Footer from "../../ui/components/Footer";

export const ClothingRoutes = () => {
    return (
        <>
        <Header />
        <Navbar />
        <Routes>
            <Route path="productos" element={<ProductsPage />} />
            <Route path="home" element={<HomePage />} />
            <Route path="contacto" element={<Contac />} />
            <Route path="carrito" element={<CartPage />} />
            <Route path="detalles/:id" element={<DetailsProductPage/>} />
            <Route path="/*" element={<Navigate to={"/home"} />} />
        </Routes>
        <Footer />
        </>
    )
}

export default ClothingRoutes;