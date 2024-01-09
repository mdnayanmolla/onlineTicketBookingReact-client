
import { createBrowserRouter,} from "react-router-dom";
import Main from "../layout/Main";
import Landing from "../pages/Landing/Landing";
import Registration from "../pages/Registration/Registration";
import Login from "../pages/Login/Login";
import SignUp from "../pages/SignUp/SignUp";


const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children: [
       {
        path: '/',
        element: <Landing></Landing>
       },
       {
        path: '/registration',
        element: <Registration></Registration>,
       },
       {
        path: '/login',
        element: <Login></Login>
       },
       {
        path: '/signup',
        element: <SignUp></SignUp>
       }
      ]
    },
  ]);
  export default router;