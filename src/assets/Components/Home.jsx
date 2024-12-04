import { Outlet, useLoaderData } from "react-router-dom";
import Addcraftitems from "./Addcraftitems";

import Homedecoros from "./Homedecoros";


import Slider from "./Slider";
import Souveniers from "./Souveniers";
import Text from "./Text";





const Home = () => {
    const { datas } = useLoaderData(null)

    return (
        <>
            <Slider></Slider>
            <Text></Text>
          
            <div className='grid grid-cols-3 gap-5'>
                {
                    datas?.map(data => <Addcraftitems key={data.id} data={data}></Addcraftitems>)
                },
            </div>
            
            
            <Souveniers></Souveniers>
            <Homedecoros></Homedecoros>
        </>
    );
};

export default Home;