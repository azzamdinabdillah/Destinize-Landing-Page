import LabuanBajo from '../../assets/labuan-bajo-2.png';

export default function Section5()
{
    return (
        <section className="px-6 pb-10 md:px-16 lg:px-32 lg:mt-20">
            <div className="lg:flex justify-between items-center mb-5">
                <div>
                    <p className="text-primary-blue text-sm font-semibold text-center md:text-lg lg:text-start lg:text-base">MENGENAL DESTINIZE</p>
                    <h1 className="mt-2 text-2xl font-semibold text-center md:text-3xl my-2 lg:text-start lg:text-4xl"><span><img src="/img/photo-ilustration.png" alt="" className="w-[10%] md:w-[8%] lg:w-[10%] inline" /></span> • Galeri Pariwisata & Blog Travel</h1>
                </div>
                <div className="hidden lg:block">
                    <h1 className="text-primary-blue font-semibold">Lihat Semua</h1>
                </div>
            </div>
            <div className='md:flex justify-between items-end gap-5'>
                <div className="bg-white shadow-2xl w-full rounded-xl overflow-hidden mt-5 md:w-[60%] lg:w-[30%]">
                    <img src="/img/bromo-4.png" alt="" className="bg-cover w-full" />
                    <div className="px-5 py-5">
                        <p className="text-slate-300 text-sm">26 DESEMBER 2021</p>
                        <h1 className="font-bold text-lg font-manrope mt-2">Tips naik gunung Bromo 
                            Biar gak capek cyin 😥😛</h1>
                        <p className="text-slate-400 my-3">Jadi gini gann, anda tau bromo?
                            yaaa gunung kann!</p>
                        <p className="text-blue-600 text-sm mt-5">Baca Selengkapnya.......</p>
                    </div>
                </div>
                <div className="w-full">
                    <iframe className="w-full lg:h-[60vh] md:h-[20vh] mt-5 rounded-xl" src="https://www.youtube.com/embed/ZOtAnCV_W-s" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                </div>
            </div>
            <div className="w-[100%] bg-black mt-5 relative bg-cover bg-bottom rounded-lg bg-opacity-40 text-white" style={{ backgroundImage: `url(${LabuanBajo})` }}>
                <div className='p-5'>
                    <h1 className='text-xl font-manrope font-bold'>Tips meminum air kawah biar lidah melepuh 😁</h1>
                    <p className='leading-relaxed my-3 text-sm font-medium'>Lidah melepuh? why nott, kawah bukan untuk dilihat kawan.. tapi untuk di minum.. rasakan
                    kepanasan yang brutal 🔥</p>
                    <div className='flex justify-start items-center gap-4 font-bold font-manrope'>
                        <p>Google</p>
                        <p>Trending</p>
                        <p>Baru</p>
                    </div>
                </div>
            </div>
        </section>
    )
}