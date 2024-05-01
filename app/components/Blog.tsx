

export default function Blog(){
    return(
        <div className="mt-10 grid gap-4 rounded-3xl justify-items-center grid-cols-1 bg-slate-200">
            <div className="mt-4">
                <h1 className="font-bold"> Lastest from Blog</h1>
                <h2 className="mt-2">
                    Elevate Wardrobe with our freshest style 
                    tips, trends, and inspiration on our blog.
                </h2>
            </div>
            <div className="mt-8 mb-8 grid gap-4 rounded-3xl justify-items-center lg:grid-cols-3 align-items-baseline">
                <div className="bg-white grid grid-cols-1 rounded-2xl">
                <a href="#">
                        <img src="/img/bl01.jpg" alt="" />
                    <div>
                        <h5 className="text-red-600 font-bold">Timeless Elegance</h5>
                        <h4 className="font-bold">Mastering the Art of Capsule</h4>
                        <h4 className="font-bold">Wardrobes</h4>
                        <p>12 th August 2022</p>
                    </div>
                </a>
                </div>

                <div className="bg-white grid grid-cols-1 rounded-3xl">
                <a href="#">
                        <img src="/img/bl02.jpg" alt="" />
                    <div>
                        <h5 className="text-red-600 font-bold">Summer Breeze</h5>
                        <h4 className="font-bold">Univeiling the Hottest Beachwear</h4>
                        <h4 className="font-bold">Trends</h4>
                        <p>18 th January 2023</p>
                    </div>
                </a>
                </div>

                <div className="bg-white grid grid-cols-1 rounded-3xl">
                <a href="#">
                        <img src="/img/bl03.jpg" alt="" />
                    <div>
                        <h5 className="text-red-600 font-bold">Power Dressing</h5>
                        <h4 className="font-bold">Navigating th World of Womens</h4>
                        <h4 className="font-bold">Tailoring</h4>
                        <p>25 th May 2023</p>
                    </div>
                </a>
                </div>

            </div>

        </div>
    )
}