import { createBrowserRouter } from "react-router";
import HomeLayout from "../Layout/HomeLayout";
import Home from "../Pages/Home";
import SkillDetails from "../Pages/SkillDetails";
import MyProfile from "../Pages/MyProfile";
import AuthLayout from "../Layout/AuthLayout";
import Login from "../Pages/Login";
import Register from "../Pages/Register";
import PrivateRouter from "./PrivateRouter";
import EditProfile from "../Pages/EditProfile";



  export const router = createBrowserRouter([
    {
        path:"/",
        element:<HomeLayout></HomeLayout>,
        children: [
          {
            index:true,
            
            
          
            element:<Home></Home>,
          },
          {
            path:"/skill-details/:skillId",
            
            

            element:<PrivateRouter>
              <SkillDetails></SkillDetails>
            </PrivateRouter>


          },
          {
            path:"/profile",
            element:<PrivateRouter>
              <MyProfile></MyProfile>
            </PrivateRouter>
          },
          {
            path:"/edit-profile",

            element:<PrivateRouter>
              <EditProfile></EditProfile>
            </PrivateRouter>
          }
        ],
       
        

    },
    {
      path:"/auth",
      element:<AuthLayout></AuthLayout>,
      children:[
        {
          path:"/auth/login",
          element:<Login></Login>

        },
        {
          path:"/auth/register",
          element:<Register></Register>
          
        }
      ]

    }
])