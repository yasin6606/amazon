import React, {Suspense, FunctionComponent} from "react";
import {useRoutes, RouteObject} from "react-router-dom";
import RouteInterface from "Assets/Interfaces/Route";
import Loading from "Pages/Misc/Loading/Loading";

const RoutesSwitch: FunctionComponent<any> = (props: { routesList: RouteInterface[] }): JSX.Element => {

    const routes: RouteObject[] = props.routesList.map(eachRoute => ({...eachRoute}));

    const route = useRoutes(routes);

    return <>
        <Suspense fallback={<Loading/>} children={route}/>
    </>;

};

export default RoutesSwitch;
