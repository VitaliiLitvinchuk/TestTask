import { Outlet } from "react-router";
import Header from "./Header";

const Layout = () => {

    return (
        <>
            <header>
                <Header />
            </header>
            <main className="flex-grow-1">
                <Outlet />
            </main >
        </>
    );
}

export default Layout;