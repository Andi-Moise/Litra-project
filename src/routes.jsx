import { createBrowserRouter } from "react-router-dom"
import Layout from "./layouts/Layout"
import Home from "./pages/Home"
import Details from "./pages/Details"
import Beers from "./pages/Beers"
import Gallery from "./pages/Gallery"



export const routes = createBrowserRouter([
    {
        element: <Layout/>,
        children: [
            {
                path:"/",
                element: <Home/>
            },
            {
                path: "/beer/:slug",
                element: <Details/>
            },
            {
                path:"/beers",
                element: <Beers />,
            },
            {
                path: "/gallery",
                element: <Gallery/>
            }
        ]
    }
])