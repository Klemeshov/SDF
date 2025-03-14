import React from 'react';
import {Outlet, Route, Routes} from "react-router";
import {routes} from "./routes.js";
import {Counter} from "../components/Counter/index.js";
import {Registration} from "../components/Registration/index.js";
import {AuthForm} from "../components/AuthForm/index.js";
import {FlexTest} from "../components/FlexTest/index.js";
import {ClassComponent} from "../components/ClassComponent/ClassComponent.jsx";
import {News} from "../components/News/index.js";
import {Friends} from "../components/Friends/Friends.jsx";

export const AppRoutes = () => {
    return (
        <Routes>
            <Route path={routes.counter} element={<Counter/>}/>
            <Route path={routes.form1} element={<Registration/>}/>
            <Route path={routes.form2} element={<AuthForm/>}/>
            <Route path={routes.flexTest} element={<FlexTest/>}/>
            <Route path={routes.classComponents} element={<ClassComponent/>}/>

            <Route element={(
                <div style={{background: 'red'}}>
                    <Outlet/>
                </div>
            )}>
                <Route path={routes.friends} element={<Friends/>} />
                <Route path={routes.news} element={<News/>} />
            </Route>

            <Route path="*" element={<div>404 page not found</div>}/>
        </Routes>
    );
};