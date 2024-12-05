
const Update = () => {
    return (
        <div>
            
        <div>
            <form >
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
        </div>
    );
};

export default Update;