import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Routerlayout from "./layout";
import Home from "./pages/home";
import Project from "./pages/project";
import Contact from "./pages/technologies";
import Experience from "./pages/experience";

const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Routerlayout />,
      children: [
        {
          index: true,
          element: <Home />
        },
        {
          path: "/experience",
          element: <Experience />
        },
        {
          path: "/project",
          element: <Project />
        },
        {
          path: "/technologies",
          element: <Contact />
        }
      ]
    }
  ]);
  return (
    <> 
      <RouterProvider router={router}/>
    </>
  )
}

export default App;