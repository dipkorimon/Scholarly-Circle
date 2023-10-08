import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import "./styles/global.scss";
import NavBar from "./components/navBar/NavBar";
import Footer from "./components/footer/Footer";
import Home from "./pages/home/Home";
import ChairmanLogin from "./pages/chairmanLogin/ChairmanLogin";
import ChairmanRegister from "./pages/chairmanRegister/ChairmanRegister";
import AddReport from "./pages/addReport/AddReport";
import AddSupervisor from "./pages/addSupervisor/AddSupervisor";
import AddAuthor from "./pages/addAuthor/AddAuthor";
import Supervisors from "./pages/supervisors/Supervisors";
import Authors from "./pages/authors/Authors";
import Reports from "./pages/reports/Reports";
import SupervisorLogin from "./pages/supervisorLogin/SupervisorLogin";
import UpdateAuthor from "./pages/updateAuthor/UpdateAuthor";
import UpdateReport from "./pages/updateReport/UpdateReport";
import UpdateSupervisor from "./pages/updateSupervisor/UpdateSupervisor";

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
          element: <AddReport />,
        },
        {
          path: "/addSupervisor",
          element: <AddSupervisor />,
        },
        {
          path: "/addAuthor",
          element: <AddAuthor />,
        },
        {
          path: "/updateReport/:id",
          element: <UpdateReport />,
        },
        {
          path: "/updateSupervisor/:id",
          element: <UpdateSupervisor />,
        },
        {
          path: "/updateAuthor/:id",
          element: <UpdateAuthor />,
        },
      ],
    },
    {
      path: "/chairmanRegister",
      element: <ChairmanRegister />,
    },
    {
      path: "/chairmanLogin",
      element: <ChairmanLogin />,
    },
    {
      path: "/supervisorLogin",
      element: <SupervisorLogin />,
    },
  ]);
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
