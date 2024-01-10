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
import SingleReport from "./pages/singleReport/SingleReport";
import SupervisorLogin from "./pages/supervisorLogin/SupervisorLogin";
import AuthorLogin from "./pages/authorLogin/AuthorLogin";
import UpdateAuthor from "./pages/updateAuthor/UpdateAuthor";
import UpdateReport from "./pages/updateReport/UpdateReport";
import UpdateSupervisor from "./pages/updateSupervisor/UpdateSupervisor";
import Categories from "./pages/categories/Categories";
import Sessions from "./pages/sessions/Sessions";
import ReportTypes from "./pages/reportTypes/ReportTypes";
import CurrentPositions from "./pages/currentPositions/CurrentPositions";
import AuthorSessions from "./pages/authorSessions/AuthorSessions";
import SupervisorReports from "./pages/supervisorReports/SupervisorReports";
import Degrees from "./pages/degrees/Degrees";
import RequestSupervisors from "./pages/requestSupervisors/RequestSupervisors";
import RequestAuthors from "./pages/requestAuthors/RequestAuthors";

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
          path: "/singleReport/:id",
          element: <SingleReport />,
        },
        {
          path: "/categories/:category",
          element: <Categories />,
        },
        {
          path: "/sessions/:session",
          element: <Sessions />,
        },
        {
          path: "/degrees/:degree",
          element: <Degrees />,
        },
        {
          path: "/reportTypes/:reportType",
          element: <ReportTypes />,
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
        {
          path: "/currentPositions/:currentPosition",
          element: <CurrentPositions />,
        },
        {
          path: "/authorSessions/:session",
          element: <AuthorSessions />,
        },
        {
          path: "/supervisorReports/:supervisorID",
          element: <SupervisorReports />,
        },
        {
          path: "/requestSupervisors",
          element: <RequestSupervisors />,
        },
        {
          path: "/requestAuthors",
          element: <RequestAuthors />,
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
    {
      path: "/authorLogin",
      element: <AuthorLogin />,
    },
  ]);
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
