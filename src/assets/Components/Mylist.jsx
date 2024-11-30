


const Mylist = ({singleuser={}}) => {
    const {name,email,stock,time,example,rating,price,subcategory,itemname,image}=singleuser;
    return (
        <div>
            <div className="card card-compact bg-base-100 w-96 shadow-xl">
                <figure>
                    <img
                        src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
                        alt="Shoes" />
                </figure>
                <div className="card-body">
                    <h2 className="card-title">{name}</h2>
                    <p></p>
                    <div className="card-actions justify-end">
                        <button className="btn btn-primary">{email}</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Mylist;