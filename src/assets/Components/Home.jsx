import { useLoaderData } from "react-router-dom";
import Addcraftitems from "./Addcraftitems";

import Homedecoros from "./Homedecoros";
import Mylist from "./Mylist";

import Slider from "./Slider";
import Souveniers from "./Souveniers";


const Home = () => {
    const {datas}=useLoaderData(null)
   
    return (
        <>
            <Slider></Slider>
            
            <Addcraftitems></Addcraftitems>
            <div className='grid grid-cols-2 gap-5'>
                {
                    datas?.slice(1,4).map(data=><Addcraftitems key={data.id} data={data}></Addcraftitems>)
                },
            </div>
            <Mylist></Mylist>
            <Souveniers></Souveniers>
            <Homedecoros></Homedecoros>
        </>
    );
};

export default Home;