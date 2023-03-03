export default function Section6()
{
    return (
        <section className="px-6 pb-10 pt-5 md:px-16 lg:px-32">
            <div>
                <p className="text-primary-blue font-bold text-center">TESTIMONIAL DESTINIZE</p>
                    <h1 className="text-[35px] font-bold text-center mt-1 lg:text-5xl lg:my-5"><span><img src="/img/chat.png" alt="" className="w-[12%] md:w-[5%] lg:w-[4%] inline" /></span> • Apa Kata Mereka Tentang Kami</h1>

                    <p className="text-base mt-2 leading-relaxed text-center lg:w-[60%] mx-auto">Penasaran apa saja review dari pengguna yang memakai aplikasi dan website Destinize buat nentuin kemana liburan mereka selanjutnya? Yuk cek dibawah!</p>

                    <div className="md:grid grid-cols-2 lg:grid-cols-3 gap-10 place-content-center lg:mt-5">
                        <div className="bg-white shadow-xl mb-5 mt-5 px-10 py-10 flex flex-col justify-center items-center rounded-md">
                            <img src="/img/pak-sandhika.png" alt="" />
                            <p className="text-slate-500 my-5 text-center">Destinize membantu saya
                            Mencari spot tempat wisata baru
                            di Indonesia dengan Mudah</p>
                            <img src="/img/stars.png" alt=""/>
                            <p className="my-5 text-base text-primary-blue font-bold">Sandhika Galih</p>
                            <p className="font-bold text-slate-700">Dosen di WPU</p>
                        </div>
                        <div className="bg-white shadow-xl mb-5 px-10 py-10 flex flex-col justify-center items-center rounded-md">
                            <img src="/img/bang-syauqi.png" alt="" />
                            <p className="text-slate-500 my-5 text-center">Destinize membantu saya
                            mendapatkan jodoh, tidak disangka
                            bahwa jodoh saya adalah CS nya
                            </p>
                            <img src="/img/stars.png" alt=""/>
                            <p className="my-5 text-base text-primary-blue font-bold">Syauqizaidan Khairan Khalaf</p>
                            <p className="font-bold text-slate-700">Dosen di WPU</p>
                        </div>
                        <div className="bg-white shadow-xl mb-5 px-10 py-10 flex flex-col justify-center items-center rounded-md place-self-center col-span-1">
                            <img src="/img/bang-petrik.png" alt="" />
                            <p className="text-slate-500 my-5 text-center">Bikini Bottom menjadi sangat
                            ramai dikunjungi saat saya 
                            memasukkannya di Destinize</p>
                            <img src="/img/stars.png" alt=""/>
                            <p className="my-5 text-base text-primary-blue font-bold">Patrick Sesad</p>
                            <p className="font-bold text-slate-700">Warga Bikini Bottom</p>
                        </div>
                    </div>
            </div>
        </section>
    )
}