export default function Section_4()
{
    return (
        <section className="px-6 pb-10 md:px-16 lg:px-32 lg:mt-10">
            <div>
                <p className="text-primary-blue font-bold text-center">CARI TEMPAT WISATA</p>
                <h1 className="text-[35px] font-bold text-center mt-1 lg:text-5xl lg:my-5"><span><img src="/img/map-2.png" alt="" className="w-[12%] md:w-[5%] lg:w-[4%] inline" /></span> • Cari Tempat Wisata Didekatmu</h1>

                <p className="text-base mt-2 leading-relaxed text-center lg:w-[60%] mx-auto">Fitur ini memungkinkan kamu untuk mencari tempat wisata atau tempat yang sedang populer di daerah kamu dengan begitu kamu akan selalu update dan gak kudet lagi 👍🏻</p>

                <div className="mt-5 md:mt-7 shadow-xl shadow-blue-100">
                    <iframe className="w-[100%] h-[40vh] md:h-[20vh] lg:h-[50vh] rounded-xl" src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d36797.88386787686!2d112.02123722888645!3d-7.832405302209565!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sid!2sid!4v1677709023161!5m2!1sid!2sid" style={{ border: 0 }} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                </div>

                <div className="mt-10 md:grid grid-cols-2 place-content-center lg:grid-cols-3 lg:gap-10">
                    <div className="flex justify-start items-start gap-3 md:gap-5 mb-5">
                        <img src="/img/black-location.png" alt="" className="p-3 bg-slate-100 rounded-full"/>
                        <div>
                            <h1 className="font-extrabold font-manrope text-lg">Populer Didekatmu</h1>
                            <p className="font-manrope text-sm mt-1 text-slate-500 lg:w-[80%] font-medium">Tempat pariwisata yang populer dan pasti dikenal semua orang didekatmu</p>
                        </div>
                    </div>
                    <div className="flex justify-start items-start gap-3 md:gap-5 mb-5">
                        <img src="/img/black-love.png" alt="" className="p-3 bg-slate-100 rounded-full"/>
                        <div>
                            <h1 className="font-extrabold font-manrope text-lg">Favorit Didekatmu</h1>
                            <p className="font-manrope text-sm mt-1 text-slate-500 lg:w-[80%] font-medium">Tempat favorit dan disukai semua orang orang di sekitar daerah kamu</p>
                        </div>
                    </div>
                    <div className="flex justify-start items-start gap-3 md:gap-5 mb-5">
                        <img src="/img/black-people.png" alt="" className="p-3 bg-slate-100 rounded-full"/>
                        <div>
                            <h1 className="font-extrabold font-manrope text-lg">Ramai Didekatmu</h1>
                            <p className="font-manrope text-sm mt-1 text-slate-500 lg:w-[80%] font-medium">Spot yang paling ramai dikunjungi para warga sekaligus para wisatawan</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}