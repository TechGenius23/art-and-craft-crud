import { Link, NavLink } from "react-router-dom";


const Addcraftitems = ({data={}}) => {

    const{name,price,image,id}=data;
    return (
       
            <Link to={`/viewdetails/${id}`}>
                
                <div>
               
                <div className="card card-compact bg-base-100 w-96 h-96 shadow-xl">
                    <figure>
                        <img
                            src={image}
                            alt="Shirt" />
                    </figure>
                    <div className="card-body">
                        <h2 className="card-title">Cloth Name: {name}</h2>
                        
                        <p className="font-bold">Product Price: {price} BDT</p>
                    </div>
                   
                </div>
                
               
            </div>
            </Link>
        
        
    );
};

export default Addcraftitems;