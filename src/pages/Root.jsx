import { Outlet } from "react-router-dom";
import { Header } from "../component/header";

const Root = () => {
    return (
    <div>
        <Header /> 
        <Outlet />
    </div>
    )
};

export default Root;