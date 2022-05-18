import React from 'react';
import {BrowserRouter} from "react-router-dom";
import RoutesSwitch from "Routes/RoutesSwitch";
import RoutesList from "Routes/RoutesList";

function App() {
    return <>
        <BrowserRouter>
            <RoutesSwitch routesList={RoutesList}/>
        </BrowserRouter>
    </>;
}

export default App;
