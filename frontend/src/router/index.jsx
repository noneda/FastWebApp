import { createBrowserRouter } from "react-router-dom";

import Layout from "../layouts"

import Not_Found from "../components/Not Found";
import Login from "../pages/Login";
import Home from "../pages/Home";

const paths = [
    {
        path : "/",
        element : <Login/>,
        errorElement : <Not_Found/>,
    },
    {    
        path : "/home",
        element : <Layout/>,
        errorElement : <Not_Found/>,
        children : [{
            index : true,
            element : <Home/>
        }]
    }
];

const Router = createBrowserRouter(paths)

export default Router;