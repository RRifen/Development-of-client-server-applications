import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap.bundle'
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import Root from "./routes/root/Root";
import ErrorPage from "./routes/error/ErrorPage";
import Profile from "./routes/profile/Profile";
import Catalog from "./routes/catalog/Catalog";
import About from "./routes/about/About";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Root />,
        errorElement: <ErrorPage />,
        children: [
            {
                path: "profile",
                element: <Profile/>
            },
            {
                path: "catalog",
                element: <Catalog />
            },
            {
                path: "about",
                element: <About />
            }
        ]
    },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>
);
