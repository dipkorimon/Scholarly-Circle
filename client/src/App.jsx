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
import AuthorReports from "./pages/authorReports/AuthorReports";
import Degrees from "./pages/degrees/Degrees";
import Protected from "./protectedRoutes/Protected";
import UserRequests from "./pages/userRequests/UserRequests";
import UsersRequest from "./pages/usersRequest/UsersRequest";
import Search from "./pages/search/Search";

function App() {
  const chairmanLogin = localStorage.getItem("ChairmanLogin");
  const supervisorLogin = localStorage.getItem("SupervisorLogin");
  const authorLogin = localStorage.getItem("AuthorLogin");

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
          element: (
            <Protected
              login={chairmanLogin || supervisorLogin || authorLogin}
              url={<Home />}
            >
              <AddReport />
            </Protected>
          ),
        },
        {
          path: "/addSupervisor",
          element: (
            <Protected login={chairmanLogin} url={<Home />}>
              <AddSupervisor />
            </Protected>
          ),
        },
        {
          path: "/addAuthor",
          element: (
            <Protected login={chairmanLogin || supervisorLogin} url={<Home />}>
              <AddAuthor />
            </Protected>
          ),
        },
        {
          path: "/updateReport/:id",
          element: (
            <Protected
              login={chairmanLogin || supervisorLogin || authorLogin}
              url={<Home />}
            >
              <UpdateReport />
            </Protected>
          ),
        },
        {
          path: "/updateSupervisor/:id",
          element: (
            <Protected login={chairmanLogin} url={<Home />}>
              <UpdateSupervisor />
            </Protected>
          ),
        },
        {
          path: "/updateAuthor/:id",
          element: (
            <Protected login={chairmanLogin || supervisorLogin} url={<Home />}>
              <UpdateAuthor />
            </Protected>
          ),
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
          path: "/authorReports/:studentID",
          element: <AuthorReports />,
        },
        {
          path: "usersRequest",
          element: <UsersRequest />,
        },
        {
          path: "/userRequests",
          element: (
            <Protected login={chairmanLogin || supervisorLogin} url={<Home />}>
              <UserRequests />
            </Protected>
          ),
        },
        {
          path: "/search",
          element: <Search />,
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
