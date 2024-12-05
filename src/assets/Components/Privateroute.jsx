import { useContext } from "react";
import { AuthContext } from "./Authprovider";
import { Navigate } from "react-router-dom";


const Privateroute = ({children}) => {
    const{user}=useContext(AuthContext);
    
    if(user!== undefined && user !==null){
        console.log(user);

        return children;
        

    }
        console.log(user);
    
    return <Navigate to={'/login'}></Navigate>;
   
};

export default Privateroute;