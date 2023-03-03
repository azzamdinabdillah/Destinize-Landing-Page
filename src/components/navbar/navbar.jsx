function Navbar(){
    return (
        <>
            <nav className="px-3 py-5 md:px-16 lg:py-5 lg:pt-5 lg:px-28 border-b-2">
            <div className="flex justify-between items-center">
                <div className="flex justify-start items-center gap-2">
                    <img src="img/brand-icon.png" alt="" />
                    <h1 className="font-bold">Destinize</h1>
                </div>
                <div className="relative">
                    <img src="img/seacrh.png" alt="" className="absolute top-1/2 -translate-y-1/2 pl-5" />
                    <input type="text" className="bg-[#F0F1F2] rounded-full py-2 pl-12 lg:py-3 lg:w-[700px]" placeholder="Cari apapun disini" />
                </div>
                <div className="lg:flex justify-center items-center gap-3 hidden">
                    <img src="img/globe.png" alt="" />
                    <p className="text-slate-500 text-sm">Bahasa Indonesia</p>
                </div>
                <div className="lg:flex justify-center items-center gap-2 hidden">
                    <img src="img/location.png" alt="" className="bg-primary-blue bg-opacity-30 p-2 rounded-full" />
                    <div>
                        <p className="text-slate-500 text-xs">Bahasa Indonesia</p>
                        <h1 className="text-blue-700 text-sm font-bold">Indonesia, Yogyakarta</h1>
                    </div>
                </div>
            </div>

            </nav>
            <div className="px-5 mt-3 md:flex justify-around lg:justify-between items-center gap-5 lg:px-28 md:px-16 lg:mt-5 hidden">
                <div className="flex justify-start items-center gap-2 lg:gap-10 flex-wrap md:text-sm">
                    <div className="flex justify-start items-center gap-2 text-slate-400 font-medium">
                        <a href="#">Gunung</a>
                        <img src="/img/arrow-down.png" alt="" />
                    </div>
                    <div className="flex justify-start items-center gap-2 text-slate-400 font-medium">
                        <a href="#">Pantai</a>
                        <img src="/img/arrow-down.png" alt="" />
                    </div>
                    <div className="flex justify-start items-center gap-2 text-slate-400 font-medium">
                        <a href="#">Kuliner</a>
                        <img src="/img/arrow-down.png" alt="" />
                    </div>
                    <div className="flex justify-start items-center gap-2 text-slate-400 font-medium">
                        <a href="#">Outbound</a>
                        <img src="/img/arrow-down.png" alt="" />
                    </div>
                    <div className="flex justify-start items-center gap-2 text-slate-400 font-medium">
                        <a href="#">Sejarah</a>
                        <img src="/img/arrow-down.png" alt="" />
                    </div>
                    <div className="flex justify-start items-center gap-2 text-slate-400 font-medium">
                        <a href="#">Edukasi</a>
                        <img src="/img/arrow-down.png" alt="" />
                    </div>
                    <div className="flex justify-start items-center gap-2 text-slate-400 font-medium">
                        <a href="#">Romantis</a>
                        <img src="/img/arrow-down.png" alt="" />
                    </div>
                    <div className="flex justify-start items-center gap-2 text-slate-400 font-medium">
                        <a href="#">Alam</a>
                        <img src="/img/arrow-down.png" alt="" />
                    </div>
                </div>

                <div className="mt-4 md:mt-0 flex justify-start items-center gap-3">
                    <img src="/img/bag-icon.png" alt="" className="bg-primary-blue p-4 rounded-full"/>
                    <img src="img/user.png" alt="" className="bg-primary-blue bg-opacity-30 p-4 rounded-full" />
                </div>
            </div>
        </>
    )
}

export default Navbar;