import {lazy} from "react";
import RouteInterface from "Assets/Interfaces/Route";

const Layout = lazy(() => import("Pages/Index"));
const Home = lazy(() => import("Pages/Home/Home"));

const RoutesList: RouteInterface[] = [
    {
        // Main Page (Home Page)
        path: "/",
        element: <Layout/>,
        redirect: "/",
        caseSensitive: false,
        needAuthenticating: false,
        children: [
            {
                // Redirect to this child, When route matches by /
                index: true,
                element: <Home/>
            }
        ]
    },
    {
        // Not Found Page 404
        path: "*",
        element: lazy(() => import("Pages/Misc/404/404")),
        redirect: "/",
        caseSensitive: false,
        needAuthenticating: false,
    }
];

export default RoutesList;