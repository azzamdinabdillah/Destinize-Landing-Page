
function Section3()
{
    return (
        <section className="px-6 pb-20 md:px-16 lg:px-32 lg:flex justify-start items-center lg:gap-32 lg:mt-10">
        <div>
            <div className="mb-10">
                <p className="text-primary-blue font-bold">RESERVASI TEMPAT</p>
                <h1 className="text-[35px] font-bold lg:text-5xl lg:w-[70%] lg:leading-[60px]">Gak mau ngantri? reservasi aja! 🤙🏻</h1>
            </div>
            <div className="flex flex-col justify-start items-start gap-3">
                <div className="flex justify-center items-center gap-5 mb-7">
                    <img src="img/search-hd.png" alt="" className="bg-[#EFE0B4] p-3 rounded-lg"/>
                    <div>
                        <h1 className="font-semibold text-slate-600">Cari tempat yang kamu mau</h1>
                        <p className="text-slate-500 leading-relaxed text-sm mt-1">Temukan destinasi selanjutnya yang akan kamu kunjungi dengan Destinize</p>
                    </div>
                </div>
                <div className="flex justify-center items-center gap-5 mb-7">
                    <img src="img/pensil.png" alt="" className="bg-[#EFE0B4] p-3 rounded-lg"/>
                    <div>
                        <h1 className="font-semibold text-slate-600">Isi data dan konfirmasi pembayaran</h1>
                        <p className="text-slate-500 leading-relaxed text-sm mt-1">Tulis dan lengkapi data kamu untuk keperluan data booking</p>
                    </div>
                </div>
                <div className="flex justify-center items-center gap-5 mb-7">
                    <img src="img/emot-1.png" alt="" className="bg-[#EFE0B4] p-3 rounded-lg"/>
                    <div>
                        <h1 className="font-semibold text-slate-600">Tinggal masuk dan enjoy!</h1>
                        <p className="text-slate-500 leading-relaxed text-sm mt-1">Kamu bisa langsung masuk dan enjoy liburan kamu tanpa hambatan</p>
                    </div>
                </div>
            </div>
        </div>
        <div className="md:mx-auto relative">
            <div className="bg-white shadow-xl rounded-2xl relative  md:w-[40%] lg:w-[90%] md:mt-5 lg:-translate-x-20 md:mx-auto md:-translate-x-10">
                <div className="z-10">
                    <img src="img/bali-2.jpg" alt="" className="p-4"/>
                    <div className="px-5 pb-8">
                        <h1 className="font-semibold text-lg">Liburan Ke Bali <span><img src="/img/car-ilustration.png" alt="" className="w-[10%] inline ml-1" /></span></h1>
                        <p className="font-medium text-slate-400 my-3">14-29 Juni &nbsp; &nbsp; | &nbsp; &nbsp; by Sandhika</p>
                        <div className="flex justify-start items-center gap-2 mt-5">
                            <img src="img/leaf.png" alt="" className="p-3 bg-slate-100 rounded-full"/>
                            <img src="img/map.png" alt="" className="p-3 bg-slate-100 rounded-full"/>
                            <img src="img/paper-plane.png" alt="" className="p-3 bg-slate-100 rounded-full"/>
                        </div>
                        <div className="flex justify-between items-center gap-2 text-sm text-slate-400 mt-8">
                            <div className="flex justify-start items-center gap-2">
                                <img src="img/gedung.png" alt=""/>
                                <p>12 Orang pergi bersama</p>
                            </div>
                            <img src="/img/love.png" alt="" />
                        </div>
                    </div>
                </div>
                <div className="flex justify-start items-start gap-3 px-8 pb-8 md:pt-8 shadow-xl md:absolute md:bottom-10 md:-right-40 -right-5 z-20 bg-white rounded-xl">
                    <img src="/img/bendera.png" alt="" className="rounded-full"/>
                    <div>
                        <p className="text-slate-400 text-xs">ONGOING</p>
                        <h1 className="font-bold text-lg my-1">Jelajah Indonesia</h1>
                        <p className="text-sm mt-3"><span className="text-blue-800 font-medium">40%</span> Complete</p>
                        <div className="w-full h-1.5 mt-2 bg-slate-200 rounded-full relative">
                            <div className="absolute top-0 left-0 w-16 bg-primary-blue rounded-full h-1.5">

                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <img src="/img/biru-blur.png" alt="" className="absolute md:-top-28 md:-right-0 lg:-right-10 -z-10 hidden md:block" />
        </div>
    </section>
    )
}

export default Section3;