import React from "react";
import {
    BrowserRouter as Router,
    Routes,
    Route,
} from "react-router-dom";
import MainPage from "./pages/MainPage";
import StorePage from "./pages/ShopPage";
 
function App() {
    return (
        <Router>
            <Routes>
                <Route exact path="/" element={<MainPage />} />
                <Route path="/shop" element={<StorePage />} />
            </Routes>
        </Router>
    );
}
 
export default App;