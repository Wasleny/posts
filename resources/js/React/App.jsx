import { BrowserRouter } from "react-router-dom";
import RoutesContext from "./routes";
import { ToastContainer } from "react-toastify";
import GlobalStyle from "./global";

const App = () => {
    return (
        <BrowserRouter>
            <GlobalStyle />
            <RoutesContext />
            <ToastContainer
                position="top-center"
                autoClose={5000}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                // theme="colored"
                draggable
            />
        </BrowserRouter>
    );
};

export default App;
