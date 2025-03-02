import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Routerlayout from "./layout";
import Home from "./pages/home";
import About from "./pages/about";
import Project from "./pages/project";
import Contact from "./pages/contact";

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
          path: "/about",
          element: <About />
        },
        {
          path: "/project",
          element: <Project />
        },
        {
          path: "/contact",
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