

export default function Contact() {
    return(
        <div className="grid gap-4 text-start grid-cols-2 lg:grid-cols-3">
            <div className="grid grid-cols-1">
                <h1 className="mt-8 font-bold">CONTACT INFO</h1>
                <h4 className="mt-4">📍 123, London Bridge </h4>
                <h4 >Street, London</h4>
                <h4 className="mt-4">📧 support@Lebaba.com</h4>
                <h4 className="mt-4">📞(012) 3456 789</h4>
            </div>

            <div className="grid grid-cols-1">
                <a href="#"><h1 className="mt-8 font-bold"> COMPANY</h1></a>
                <a href="#"><h4 className="mt-4">Home</h4></a>
                <a href="#"><h4 className="mt-4">About Us</h4></a>
                <a href="#"><h4 className="mt-4">Work With Us</h4></a>
                <a href="#"><h4 className="mt-4">Our Blog</h4></a>
                <a href="#"><h4 className="mt-4">Terms & Consditions</h4></a>
            </div>

            <div className="grid grid-cols-1">
                <h1 className="mt-8 font-bold"> USEFUL LINK</h1>
                <a href="#"><h4 className="mt-4">Help</h4></a>
                <a href="#"><h4 className="mt-4">track My Order</h4></a>
                <a href="#"><h4 className="mt-4">Men</h4></a>
                <a href="#"><h4 className="mt-4">Women</h4></a>
                <a href="#"><h4 className="mt-4">Dresses</h4></a>
            </div>

        </div>
    )
}