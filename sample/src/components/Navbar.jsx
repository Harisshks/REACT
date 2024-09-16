const Navbar =({appname})=>{
    console.log(appname)
    return(
        <div className="w-full h-[3vh] grad-[#3f3c3c]-bg text-black flex justify-center items-center">
            {appname}
        </div>
    )
}
export default Navbar;