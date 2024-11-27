

const Slider = () => {
    return (
        <div>
            <div className="carousel w-full h-80 rounded-xl">
                <div id="item1" className="carousel-item w-full">
                    <img
                        src="https://i.ibb.co.com/xLjdTYW/8fb790610bc7ff25591155d83e61f6ed.jpg"
                        className="w-full" />
                </div>
                <div id="item2" className="carousel-item w-full">
                    <img
                        src="https://i.ibb.co.com/tQB8h04/OIP-5.jpg"
                        className="w-full" />
                </div>
                <div id="item3" className="carousel-item w-full">
                    <img
                        src="https://i.ibb.co.com/bQs8LkV/OIP-4.jpg"
                        className="w-full" />
                </div>
                <div id="item4" className="carousel-item w-full">
                    <img
                        src="https://i.ibb.co.com/YWFQ9t9/OIP-3.jpg"
                        className="w-full" />
                </div>
            </div>
            <div className="flex w-full justify-center gap-2 py-2">
                <a href="#item1" className="btn btn-xs">1</a>
                <a href="#item2" className="btn btn-xs">2</a>
                <a href="#item3" className="btn btn-xs">3</a>
                <a href="#item4" className="btn btn-xs">4</a>
            </div>
        </div>
    );
};

export default Slider;