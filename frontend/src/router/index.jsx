import { createBrowserRouter } from "react-router-dom";

import Home from "../pages";
import Layout from "../layouts"

import Not_Found from "../components/Not Found";

const paths = [
    {
        path : "/",
        element : <Layout/>,
        errorElement : <Not_Found/>,
        children : [
            {
                index : true,
                element : <Home/>
            }
        ]
        
    }
];

const Router = createBrowserRouter(paths)

export default Router;