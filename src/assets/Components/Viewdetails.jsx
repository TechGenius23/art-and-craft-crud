import { useLoaderData, useParams } from "react-router-dom";


const Viewdetails = () => {
    const singleview=useLoaderData();
    console.log(singleview);
    const {id}=useParams();
    const parsint=parseInt(id)
    const sin=singleview?.find(sin=>sin.id===parsint)
    
   
    return (
        
            
                
                <div className="card card-compact bg-base-100 w-96 shadow-xl">
                    <figure>
                        <img
                            src={sin.image}
                            alt="Shirt" />
                    </figure>
                    <div className="card-body">
                        <h2 className="card-title font-bold text-2xl">Name: {sin.name}</h2>
                        <p className="font-bold">Product price: {sin.price} BDT</p>
                        <p className="font-bold">Product Model: {sin.whoMade}</p>
                        <p className="font-bold">From: {sin.whereMade}</p>
                        <p className="font-bold">This Fabric is: {sin.fabric}</p>
                        <p className="font-bold">Details: {sin.details}</p>
                        
                    </div>
                   
                </div>
        
    );
};

export default Viewdetails;