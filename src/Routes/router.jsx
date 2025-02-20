import { createBrowserRouter } from "react-router-dom";
import HomeLayout from "../Layout/HomeLayout";
import AddMovies from "../Components/AddMovies";

const router = createBrowserRouter([
    {
      path: "/",
      element: <HomeLayout></HomeLayout>,
    },
    {
      path: '/addmovies',
      element: <AddMovies></AddMovies>
    }
  ]);

export default router;