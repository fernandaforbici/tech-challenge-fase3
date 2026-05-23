import { Outlet } from "react-router-dom";
import { Header } from "../components/Header";

export function DefaultLayout() {
    return (
        <div>
            <Header />
            <main style={{ padding: "24px" }}>
                <Outlet />
            </main>
        </div>
    );
}
