import React from 'react';
import {Home} from "./views/Home";
import {ShowDetailPage} from "./views/ShowDetailPage";
import {createBrowserRouter, RouterProvider} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/show-details",
    element: <ShowDetailPage />,
  },
]);

function App() {
  return (
      <RouterProvider router={router} />
  );
}

export default App;
