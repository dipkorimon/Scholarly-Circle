import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import "./styles/global.scss";
import NavBar from "./components/navBar/NavBar";
import Footer from "./components/footer/Footer";
import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import AddReport from "./pages/addReport/AddReport";
import AddSupervisor from "./pages/addSupervisor/AddSupervisor";
import AddAuthor from "./pages/addAuthor/AddAuthor";
import Protect from "./components/Protect";
import Supervisors from "./pages/supervisors/Supervisors";
import Authors from "./pages/authors/Authors";
import Reports from "./pages/reports/Reports";

function App() {
  const Layout = () => {
    return (
      <div className="main">
        <NavBar />
        <Outlet />
        <Footer />
      </div>
    );
  };

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/supervisors",
          element: <Supervisors />,
        },
        {
          path: "/authors",
          element: <Authors />,
        },
        {
          path: "/reports",
          element: <Reports />,
        },
        {
          path: "/addReport",
          element: <Protect Component={AddReport} />,
        },
        {
          path: "/addSupervisor",
          element: <Protect Component={AddSupervisor} />,
        },
        {
          path: "/addAuthor",
          element: <Protect Component={AddAuthor} />,
        },
      ],
    },
    {
      path: "/register",
      element: <Register />,
    },
    {
      path: "/login",
      element: <Login />,
    },
  ]);
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
