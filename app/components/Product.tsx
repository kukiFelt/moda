

export default function Product(){
    return(
        <><div className="mt-7 gap-4 grid grid-cols-2 justify-items-center lg:grid-cols-4">
            <a href="#">
                <img src="/img/001.jpg" alt="" />
                <div>
                    <h4 className="font-bold">Whitw Dress</h4>
                    <p className="font-bold">$150</p>
                </div>
            </a>

            <a href="#">
                <img src="/img/002.jpg" alt="" />
                <div>
                    <h4 className="font-bold">Guess Watch</h4>
                    <p className="font-bold">$200</p>
                </div>
            </a>

            <a href="#">
                <img src="/img/003.jpg" alt="" />
                <div>
                    <h4 className="font-bold">Black Purse</h4>
                    <p className="font-bold">$350</p>
                </div>
            </a>

            <a href="#">
                <img src="/img/004.jpg" alt="" />
                <div>
                    <h4 className="font-bold">Gueci Bag</h4>
                    <p className="font-bold">$900</p>
                </div>
            </a>

            <a href="#">
                <img src="/img/005.jpg" alt="" />
                <div>
                    <h4 className="font-bold">Tapered Jeans</h4>
                    <p className="font-bold">$250</p>
                </div>
            </a>

            <a href="#">
                <img src="/img/006.jpg" alt="" />
                <div>
                    <h4 className="font-bold">Sunglases</h4>
                    <p className="font-bold">$150</p>
                </div>
            </a>

            <a href="#">
                <img src="/img/007.jpg" alt="" />
                <div>
                    <h4 className="font-bold">Brown TShirt</h4>
                    <p className="font-bold">$99</p>
                </div>
            </a>

            <a href="#">
                <img src="/img/008.jpg" alt="" />
                <div>
                    <h4 className="font-bold">Beige Heels</h4>
                    <p className="font-bold">$250</p>
                </div>
            </a>
        </div>
        <div className="mt-2 lg:grid justify-center">
                <button className="bg-red-600 rounded-md border-lime-500 text-white text-xs text-center p-2 mt-3 lg:flex ">
                    EXPLORE NOW
                </button>
        </div></>
    )
}