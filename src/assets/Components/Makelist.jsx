import { Link, NavLink } from 'react-router-dom';
import swal from 'sweetalert2'


const Makelist = () => {
    const Adduser = (e) => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const email=form.email.value;
        const stock=form.stock.value;
        const time=form.time.value;
        const example=form.example.value;
        const rating=form.rating.value;
        const price=form.price.value;
        const subcategory=form.subcategory.value;
        const itemname=form.itemname.value;
        const image=form.image.value;
        const USER = {name,email,stock,time,example,rating,price,subcategory,itemname,image}
        console.log(USER);

        
        // send data to the server
        fetch('http://localhost:5000/user',{
            method:'POST',
            headers:{
                'content-type':'application/json',
            },
            body:JSON.stringify(USER)
        })
        .then(res=>res.json)
        .then(data=>
            {console.log(data);
            if(data.insertId){
                swal('Oops...', 'Something went wrong!', 'error')
            }
        })
    }
    return (



        <div>
            <form onSubmit={Adduser} >
                <div className="flex gap-4">
                    <input
                        type="text"
                        placeholder="Image URL" name="image"
                        className="input input-bordered input-success w-full max-w-xs" ></input>
                    <input
                        type="text"
                        placeholder="Item Name" name="itemname"
                        className="input input-bordered input-success w-full max-w-xs" ></input>
                </div>
                <div className="flex gap-4">
                    <input
                        type="text"
                        placeholder="subcategory" name="subcategory"
                        className="input input-bordered input-success w-full max-w-xs" ></input>
                    <input
                        type="text"
                        placeholder="Price" name="price"
                        className="input input-bordered input-success w-full max-w-xs" ></input>
                </div>
                <div className="flex gap-4">
                    <input
                        type="text"
                        placeholder="Rating" name="rating"
                        className="input input-bordered input-success w-full max-w-xs" ></input>
                    <input
                        type="text"
                        placeholder="Example" name="example"
                        className="input input-bordered input-success w-full max-w-xs" ></input>
                </div>
                <div className="flex gap-4">
                    <input
                        type="text"
                        placeholder="Time" name="time"
                        className="input input-bordered input-success w-full max-w-xs" ></input>
                    <input
                        type="text"
                        placeholder="Stock" name="stock"
                        className="input input-bordered input-success w-full max-w-xs" ></input>
                </div>
                <div className="flex gap-4">
                    <input
                        type="email"
                        placeholder="Type your email" name="email"
                        className="input input-bordered input-success w-full max-w-xs" ></input>
                    <input
                        type="text"
                        placeholder="Name" name="name"
                        className="input input-bordered input-success w-full max-w-xs" ></input>
                </div>
                <button className="btn btn-success">Add Now</button>
                {/* <button className="btn btn-success"><Link to={'/mycart'}><li className="font-bold"><a>Add now</a></li></Link></button> */}
            </form>
        </div>

    );
};

export default Makelist;