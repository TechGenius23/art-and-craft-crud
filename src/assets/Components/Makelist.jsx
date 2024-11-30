import { NavLink } from 'react-router-dom';
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
                        placeholder="Type here" name="image"
                        className="input input-bordered input-success w-full max-w-xs" ></input>
                    <input
                        type="text"
                        placeholder="Type here" name="itemname"
                        className="input input-bordered input-success w-full max-w-xs" ></input>
                </div>
                <div className="flex gap-4">
                    <input
                        type="text"
                        placeholder="Type here" name="subcategory"
                        className="input input-bordered input-success w-full max-w-xs" ></input>
                    <input
                        type="text"
                        placeholder="Type here" name="price"
                        className="input input-bordered input-success w-full max-w-xs" ></input>
                </div>
                <div className="flex gap-4">
                    <input
                        type="text"
                        placeholder="Type here" name="rating"
                        className="input input-bordered input-success w-full max-w-xs" ></input>
                    <input
                        type="text"
                        placeholder="Type here" name="example"
                        className="input input-bordered input-success w-full max-w-xs" ></input>
                </div>
                <div className="flex gap-4">
                    <input
                        type="text"
                        placeholder="Type here" name="time"
                        className="input input-bordered input-success w-full max-w-xs" ></input>
                    <input
                        type="text"
                        placeholder="Type here" name="stock"
                        className="input input-bordered input-success w-full max-w-xs" ></input>
                </div>
                <div className="flex gap-4">
                    <input
                        type="email"
                        placeholder="Type here" name="email"
                        className="input input-bordered input-success w-full max-w-xs" ></input>
                    <input
                        type="text"
                        placeholder="Type here" name="name"
                        className="input input-bordered input-success w-full max-w-xs" ></input>
                </div>
                <button className="btn btn-success">Add Now</button>
                {/* <button className="btn btn-success"><NavLink to={'/mycart'}><li className="font-bold"><a>Add now</a></li></NavLink></button> */}
            </form>
        </div>

    );
};

export default Makelist;