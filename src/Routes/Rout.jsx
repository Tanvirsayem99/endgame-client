import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layouts/MainLayout";
import Home from "../Pages/Home/Home";
import SingleCollage from "../Pages/Home/SingleCollage";
import Collages from "../Pages/Collages/Collages";
import Admission from "../Pages/Admission/Admission";
import TakeAdmission from "../Pages/Admission/TakeAdmission";
import SignUp from "../Pages/Authentication/SignUp";
import SignIn from "../Pages/Authentication/SignIn";




const router = createBrowserRouter([

    {
        path:"/",
        element: <MainLayout/>,
        children:[
            {
                path:"/",
                element:<Home/>
            },
            {
                path:"/singleCollage/:id",
                element:<SingleCollage/>,
                loader:({params})=>
                fetch(`https://endgame-task.vercel.app/collage/${params.id}`)
            },
            {
                path: "/collages",
                element: <Collages/>,
                loader:()=> fetch("https://endgame-task.vercel.app/collage")
            },
            {
                path:"/admission",
                element:<Admission/>,
                loader:()=> fetch("https://endgame-task.vercel.app/collage")
            },
            {
                path:"/takeAdmission/:id",
                element:<TakeAdmission/>,
                loader:({params})=>
                fetch(`https://endgame-task.vercel.app/collage/${params.id}`)

            },
            {
                path: "/signup",
                element: <SignUp/>
            },
            {
                path:"/login",
                element: <SignIn/>
            }
        ]
    }
])


export default router;