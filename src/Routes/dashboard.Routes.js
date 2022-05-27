import Form from "../Pages/Form/Form";
import Login from "../Pages/Login/Login";
import Dashboard from '../Layouts/Dashboard'

const dashRoute = [
    {path:"/" , exact:true , Component : Login},
    {path:"/form" , exact:false , Component : Form},
    { path: "/dashboard", exact: false, Component: Dashboard  },
  ];
  export default dashRoute;