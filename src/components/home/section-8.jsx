export default function Section_8()
{
    return (
        <section className="px-6 md:px-16 lg:px-32 pb-10 mt-10">
            <div className="bg-[#4372EB] text-white rounded-lg md:flex items-center justify-between gap-20 overflow-hidden">
                <div className="py-5 pl-10 lg:w-[40%]">
                    <h1 className="font-manrope font-extrabold text-2xl leading-relaxed lg:text-4xl lg:leading-relaxed">Masih bingung cari tempat yang cocok? 🤔</h1>
                    <p className="text-slate-200 leading-relaxed my-3 font-manrope">Tenang, kami mempunyai fitur rekomendasi yang membantu kamu mencari tempat berlibur yang tepat dengan menjawab pertanyaan yang kami berikan.</p>
                    <div className="flex justify-start items-center gap-2 mt-5">
                        <p className="font-bold font-manrope">Mulai Sekarang</p>
                        <img src="/img/arrow-right.png" alt="" />
                    </div>
                </div>

                <img src="/img/way-pana.png" alt="" className="bg-cover mt-5 md:w-[40%] md:scale-125" />
            </div>
        </section>
    )
}