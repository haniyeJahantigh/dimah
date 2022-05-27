import AddUser from "../Pages/dashboard/AddUser/AddUser";
import DashHome from "../Pages/dashboard/DashHome/DashHome";
import Users from "../Pages/dashboard/Users/Users"

const dashMain= [
    {path:"/dashboard" , exact:true , Component : DashHome},
    {path:"/dashboard/adduser" , exact:true , Component : AddUser},
    {path:"/dashboard/users" , exact:true , Component : Users},
]
export default dashMain;