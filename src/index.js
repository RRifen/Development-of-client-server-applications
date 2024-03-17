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
import Item from "./routes/catalog/item/Item";
import Support from "./routes/support/Support";

const products = [
    {
        title: "title1",
        description: "description1",
        imageSrc: "https://opis-cdn.tinkoffjournal.ru/mercury/first-phones-pic-3.gowgy5.jpg",
        id: 1
    },
    {
        title: "title2",
        description: "description2",
        imageSrc: "https://www.ferra.ru/imgs/2018/11/24/16/2466602/3af742b2a1abb24e2af7bcf6d5adb8bede813971.jpg",
        id: 2
    },
    {
        title: "title3",
        description: "description3 description3 description3 description3 description3 description3 description3 description3 description3 description3 description3 description3 description3 description3 description3 description3",
        imageSrc: "https://www.dgl.ru/wp-content/uploads/2017/03/dgl_dgl_01_2114_7507.jpg",
        id: 3
    },
    {
        title: "title4",
        description: "description4",
        imageSrc: "https://pwv.ru/upload/iblock/237/7.jpg",
        id: 4
    },
    {
        title: "title5",
        description: "description5",
        imageSrc: "https://www.ferra.ru/imgs/2018/11/24/16/2466595/eaf8f04f73bac8273813224ab70487ad4face19c.jpg",
        id: 5
    }
];

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
                element: <Catalog products={products} />,
                children: [
                    {
                        path: ":itemId",
                        element: <Item products={products} />,
                    }
                ]
            },
            {
                path: "about",
                element: <About />
            },
            {
                path: "support",
                element: <Support />
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
