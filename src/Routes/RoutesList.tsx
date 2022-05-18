import {lazy} from "react";
import RouteInterface from "Assets/Interfaces/Route";

const Main = lazy(() => import("Pages/Main/Main"));
const Home = lazy(() => import("Pages/Home/Home"));

const RoutesList: RouteInterface[] = [
    {
        // Main Page
        path: "/",
        element: <Main/>,
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