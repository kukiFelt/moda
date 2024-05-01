

export default function ImgBanner2(){
    return(
        <div className="justify-items-center grid grid-cols-2 lg:grid-cols-4">
            <div>
                <a href="#">
                <img src="/img/01.jpg" alt="" />
                <h2 className="font-bold">Accessories</h2>
                </a>
            </div>
            <div>
                <a href="#">
                <img src="/img/02.jpg" alt="" />
                <h2 className="font-bold">Dress Collection</h2>
                </a>
            </div>
            <div>
                <a href="#">
                <img src="/img/03.jpg" alt="" />
                <h2 className="font-bold">Jewellery</h2>
                </a>
            </div>
            <div>
                <a href="#">
                <img src="/img/04.jpg" alt="" />
                <h2 className="font-bold">Cosmeties</h2>
                </a>
            </div>
        </div>
    )
}