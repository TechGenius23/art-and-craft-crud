import { NavLink } from "react-router-dom";


const Addcraftitems = (data) => {
   
    const{name,price,image}=data;
    return (
        <div>
            <div className="card card-compact bg-base-100 w-96 shadow-xl">
                <figure>
                    <img
                        src={image}
                        alt="Shirt" />
                </figure>
                <div className="card-body">
                    <h2 className="card-title">{name}</h2>
                    <p>If a dog chews shoes whose shoes does he choose?</p>
                    <div className="card-actions justify-end">
                        <button className="btn btn-primary">{price}</button>
                    </div>
                </div>
               
            </div>
            <div className="items-center">
                <button className="btn btn-wide"><NavLink to={'/mycart'}> <li className="font-bold"><a>MyArt&CraftList</a></li></NavLink></button>
            </div>
        </div>
        
    );
};

export default Addcraftitems;