import { useLoaderData } from "react-router-dom";
import Mylist from "./Mylist";

const Beforemylist = () => {
    const users=useLoaderData();
   console.log('test',users);
    return (
        <div>
            <h1>{users?.length}</h1>
             {
                users?.map(user=><Mylist key={user._id} singleuser={user}></Mylist>)
             }
        </div>
    );
};

export default Beforemylist;