import { useEffect, useState } from "react";
import { Link } from "react-router-dom";



const Mylist = (singleuser) => {
    // console.log(singleuser);
    const [users, setUser] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/user')
            .then(res => res.json())
            .then(data => setUser(data))
        console.log(users);
    }, [])


    return (
        <>
            {
                users.map(user => {
                    const { name, email, stock, time, example, rating, price, subcategory, itemname, image } = user;
                    return (
                        <div key={user._id} className="card bg-base-100 w-96 shadow-xl flex">
                            <figure>
                                <img
                                    src={image}
                                    alt="Shoes" />
                            </figure>
                            <div className="card-body">
                                <h2 className="card-title">
                                    {name}
                                    <div className="badge badge-secondary">{email}</div>
                                </h2>
                                <p>{subcategory}</p>

                                <div className="badge badge-outline">{stock}</div>
                                <div className="badge badge-outline">{price}</div>
                                <div className="badge badge-outline">{example}</div>
                                <div className="badge badge-outline">{rating}</div>
                                <div className="badge badge-outline">{itemname}</div>
                                <div className="badge badge-outline">{time}</div>

                            </div>

                            <div className="flex gap-6">
                           <Link to={'/update'}> <button className="btn btn-success">Update</button></Link>
                            <button className="btn btn-error">Delete</button>
                            </div>
                        </div>
                    )


                })
            }

        </>
    );
};

export default Mylist;