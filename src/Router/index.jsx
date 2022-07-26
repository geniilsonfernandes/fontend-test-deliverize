import { Routes, Route } from "react-router-dom";
import { ProductSingle } from "../pages/ProductSingle";
import { Cart } from "../pages/Cart";

function Router() {
    return (
        <Routes>
            <Route path="/" element={<ProductSingle />} />
            <Route path="cart" element={<Cart />} />
        </Routes>

    );
}

export default Router