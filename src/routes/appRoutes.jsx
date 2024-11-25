import { createBrowserRouter } from "react-router-dom";
import Root from "../pages/Root";
import List from "../pages/List";
import About from "../pages/About";
import { ErrorPage } from "../pages/ErrorPage";
import SinglePage from "../pages/SinglePage";

export const Router = createBrowserRouter([
    {
        path: '/',
        element: <Root />,
        errorElement: <ErrorPage />,
        children:[
        {path: '/list', element: <List />},
        {path: '/:id', element: <SinglePage />},
        {path: '/about', element: <About />},

        ]
    },

],

{
    future: {
        v7_relativeSplatPath: true,
        v7_fetcherPersist: true,
        v7_normalizeFormMethod: true,
        v7_partialHydration: true,
        v7_skipActionErrorRevalidation: true,
      },
},
);



