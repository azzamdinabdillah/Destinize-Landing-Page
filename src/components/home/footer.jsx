export default function Footer()
{
    return (
        <>
            <section class="text-white md:flex items-start justify-around mx-6 md:px-16 gap-10 lg:mt-10 md:flex-col md:items-start lg:px-32 lg:flex-row lg:justify-between mt-10">
            <div class="text-slate-400 md:w-[100%] lg:w-[50%]">
                <div class="flex justify-start items-center gap-3 mb-5">
                    <img src="/img/brand-icon.png" class="" alt=""/>
                    <h1 class="font-bold text-2xl text-slate-900">Destinize</h1>
                </div>
                <p class="mb-5 leading-relaxed">Destinize adalah website atau layanan aplikasi yang membantu kamu memilih atau merekomendasikan tempat yang dijuluki ‘hidden gems’ agar lebih dikenal dan ramai &nbsp;<span className="text-blue-700 font-bold">Baca Selengkapnya.</span></p>
                <div className="flex items-center gap-2 mb-2 text-sm">
                    <img src="/img/call.png" alt="" />
                    <p className="">081999236495</p>
                </div>
                <div className="flex items-center gap-2 mb-2 text-sm">
                    <img src="/img/email.png" alt="" />
                    <p className="">azzamdinabdillah123@gmail.com</p>
                </div>
                <div className="flex items-center gap-2 mb-2 text-sm">
                    <img src="/img/location-2.png" alt="" />
                    <p className="">Ngadiluwih, Kediri</p>
                </div>
                <p class="mb-2 text-sm mt-5">Design By Syauqizaidan Khairan Khalaf</p>
                <p class="mb-2 text-sm">Code By Azam Din Abdillah</p>
                <p class="mb-2 text-sm">Platform By Muhammad Nauval Azhar</p>
            </div>
            <div className="md:flex justify-center items-start gap-20 lg:gap-32">
                <div class="mt-8 md:mt-0 flex flex-col gap-4 text-slate-400 font-medium text-sm">
                    <h1 class="font-semibold text-lg mb-2 text-slate-900">Tentang</h1>
                    <p>Tentang Kami</p>
                    <p>Blog</p>
                    <p>Karir</p>
                    <p>Pekerjaan</p>
                    <p>Berita</p>
                    <p>Galeri</p>
                    <p>Afilasi</p>
                </div>
                <div class="mt-8 md:mt-0 flex flex-col gap-4 text-slate-400 font-medium text-sm">
                    <h1 class="font-semibold text-lg mb-2 text-slate-900">Support</h1>
                    <p>Kontak Kami</p>
                    <p>Online Chat</p>
                    <p>Whatsapp</p>
                    <p>Telegram</p>
                    <p>Ticket</p>
                    <p>Call Center</p>
                    <p>Bantuan</p>
                </div>
                <div class="mt-8 md:mt-0 flex flex-col gap-4 text-slate-400 font-medium text-sm">
                    <h1 class="font-semibold text-lg mb-2 text-slate-900">FAQ</h1>
                    <p>Akun</p>
                    <p>Organisir</p>
                    <p>Order</p>
                    <p>Pembayaran</p>
                    <p>Pengembalian</p>
                    <p>Copyright</p>
                    <p>Bahasa</p>
                </div>
            </div>
            </section>

            <div className="px-6 md:px-20 lg:px-36 pb-10 md:flex justify-start items-center lg:justify-between text-sm mt-5 md:mt-10 md:flex-col">
                <p className="text-slate-400 w-full">© 2021-2022, All Rights Reserved</p>
                <div className="text-slate-400 flex flex-col gap-3 lg:gap-10 mt-5 md:flex-row md:flex-wrap w-full">
                    <p>Tentang Kami</p>
                    <p>Kontak</p>
                    <p>Privacy Policy</p>
                    <p>Sitemap</p>
                    <p>Panduan Penggunaan</p>
                </div>
            </div>
        </>
    )
}