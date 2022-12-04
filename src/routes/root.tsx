import {createBrowserRouter, createRoutesFromElements, Route} from "react-router-dom";
import MainPage from "../page/MainPage";

export const Root  =
        createBrowserRouter(
            createRoutesFromElements(
                <Route
                    path="/"
                    element={<MainPage/>}
                ></Route>
            )
        )
