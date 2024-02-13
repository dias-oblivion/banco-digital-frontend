import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom"

import Login from "@/pages/login/index"

const router = createBrowserRouter([
  {
    path: "/",
    element: 
    <Outlet/>
    ,
    children: [
      {
        path: "",
        element: <Outlet/>,
        errorElement: <></>,
        children: [
          {
            path:"login",
            element: <Login/>,
            // errorElement: ,
            // loader: ,
          }
        ]
      }
    ]
  }
])


function App() {
  return <RouterProvider router={router}/>
}

export default App