

export default function Header() {
    return(
        <><div className="mt-2 bg-pink-200 gird grid-cols-1 ">
            <div className="mt-4 text-pink-500">
                <h3>UP TO 20% DESCOUNT ON</h3>
            </div>
            <div className="font-bold">
                <h1>Girls</h1>
                <h1>Fashion</h1>
            </div>
            <div>
                <h4>
                    Discover the latest tends and express your
                    unique style with our Womens Fashion
                    Website. Explore a curated collectio of
                    clothing.accessories, and footwear that
                    caters to every taste and occasion.
                </h4>
            </div>
            <div>
                <a href="/admin">
                <button className="bg-pink-600 rounded-md border-lime-500 text-xs text-center p-2 mt-3 lg:flex ">
                    EXPLORE NOW
                </button>
                </a>
            </div>
        </div>
        </>
    )
}