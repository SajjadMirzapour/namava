import { Outlet } from "react-router-dom";
import Navigation from "./Navigation/Navigation";
import Footer from "./Footer/Footer";


export default function Layout() {
    return (
        <div className="">
            <Navigation />
            <div>
                <Outlet />
                <Footer />
            </div>
        </div>
    )
}