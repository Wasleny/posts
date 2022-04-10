import { Routes, Route } from "react-router-dom";
import Posts from "./pages/Posts";

const RoutesContext = () => {
    const route = process.env.MIX_APP_ROUTE;

    return (
        <Routes>
            <Route path={`${route}`} element={<Posts />} />
        </Routes>
    );
};

export default RoutesContext;
