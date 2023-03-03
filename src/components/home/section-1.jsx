function Section_1(){
    return (
        <section className="px-6 md:px-16 lg:px-28 lg:flex justify-center items-center mt-5 md:mt-10">
        <div className="lg:-translate-y-10">
            <div className="lg:w-[95%]">
                {/* <img src="img/pesawat-header.png" alt="" className="bg-[#E5EDFF] px-4 py-4 rounded-full mt-1" /> */}
                <h1 className="bg-[#E5EDFF] px-4 py-4 rounded-full font-semibold text-start text-xs text-primary-blue inline my-10 relative top-3 md:text-base"><span><img src="/img/plane-ilustration.png" alt="" className="w-[10%] md:w-[8%] lg:w-[8%] inline" /></span> • Temukan Destinasi Favoritmu</h1>
                <h1 className="font-extrabold mt-8 text-[38px] md:text-5xl md:leading-normal leading-snug md:w-[100%] lg:text-7xl lg:leading-snug">Liburan & nikmati 
                    <span className="text-primary-blue"> tempat  baru</span> di
                    indonesia <span><img src="/img/beach-ilustration.png" alt="" className="w-[15%] md:w-[9%] lg:w-[15%] inline ml-3" /></span></h1>
                <p className="text-slate-400 font-medium text-[15px] md:text-base my-3 lg:w-[80%]">Destinize membuat kamu selalu update terkait tempat liburan baru di Indonesia dengan mengikuti perkembangan para influencer di sosial media ✨</p>
                <div className="mt-5 lg:mt-7 flex items-center gap-5 justify-start">
                    <button className="bg-primary-blue text-white font-medium md:px-8 px-5 py-3 rounded-xl shadow-2xl shadow-primary-blue">Mulai Sekarang</button>
                    <div className="flex justify-start items-center gap-3 mt-2">
                        <img src="img/play-demo.png" alt="" className="bg-white border-2 border-primary-blue p-3 rounded-full shadow-2xl shadow-primary-blue" />
                        <p className="text-slate-500 font-medium">Play Demo</p>
                    </div>
                </div>
            </div>
        </div>

        <img src="img/main-header.png" alt="" className="mt-8 lg:mt-0 md:mx-auto scale-110 md:w-[60%] lg:w-[50%] lg:scale-100 lg:translate-y-5" />
    </section>
    )
}

export default Section_1;