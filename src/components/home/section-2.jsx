import React, { useState } from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import Skeleton from "./skeleton";

function Section_2()
{
    const width = 280;
    const height = 50;

    let classImg = `rounded-lg mx-auto bg-cover`;

    let classDivImg = `mt-7 relative mb-3`;

    let [skeleton, setSkeleton] = useState(false);

    function sebelumLoad(){
        setSkeleton(true);
    }
    
    if (skeleton == true) {
        setTimeout(() => {
            setSkeleton(false);
        }, 1000);
    }

    return (
            <section className="px-6 pb-20 md:mt-10 md:px-16">
            {/* <Skeleton/> */}
            <div className="lg:px-24 lg:flex justify-between items-center mb-5">
                <div>
                    <p className="text-primary-blue text-sm font-semibold text-center md:text-lg lg:text-start lg:text-base">DESTINASI FAVORIT</p>
                    <h1 className="mt-2 text-2xl font-semibold text-center md:text-3xl my-2 lg:text-start lg:text-4xl"><span><img src="/img/plane-ilustration.png" alt="" className="w-[15%] md:w-[8%] lg:w-[10%] inline" /></span> • Temukan Destinasi Favoritmu</h1>
                </div>
                <div className="hidden lg:block">
                    <h1 className="text-primary-blue font-semibold">Lihat Semua</h1>
                </div>
            </div>

            <div className="md:flex flex-wrap gap-x-10 justify-center items-center lg:gap-x-14">
                <div className={classDivImg}>
                <LazyLoadImage alt="raja-ampat" src="/img/raja-ampat-2.png" width={width} placeholder={<Skeleton/>} className={classImg} />
                {/* {(skeleton == false) ? <img src="/img/raja-ampat-2.png" width={width} className={classImg} alt="" onLoad={sebelumLoad} /> : <Skeleton/> } */}
                    <div className="bg-white bg-opacity-80 absolute bottom-0 left-0 px-10 py-3 rounded-tr-xl">
                        <div className="ml-5 md:ml-0">
                            <h1 className="font-bold">Raja Ampat</h1>
                            <p className="font-medium text-slate-600 text-sm mt-1">Bali</p>
                        </div>
                    </div>
                </div>

                

                <div className={classDivImg}>
                <LazyLoadImage alt="labuan-bajo" src="/img/labuan-bajo-4.png" width={width} placeholder={<Skeleton/>} className={classImg} />
                {/* {(skeleton == false) ? <img src="/img/labuan-bajo-4.png" width={width} className={classImg} alt="" onLoad={sebelumLoad} /> : <Skeleton/> } */}
                    <div className="bg-white bg-opacity-80 absolute bottom-0 left-0 px-10 py-3 rounded-tr-xl">
                        <div className="ml-5 md:ml-0">
                            <h1 className="font-bold">Labuan Bajo</h1>
                            <p className="font-medium text-slate-600 text-sm mt-1">NTT</p>
                        </div>
                    </div>
                </div>
                <div className={classDivImg}>
                    <LazyLoadImage alt="kawah-ijen" src="/img/kawah-ijen-2.png" width={width} placeholder={<Skeleton/>} className={classImg} />
                    {/* {(skeleton == false) ? <img src="/img/kawah-ijen-2.png" width={width} className={classImg} alt="" onLoad={sebelumLoad} /> : <Skeleton/> } */}
                    <div className="bg-white bg-opacity-80 absolute bottom-0 left-0 px-10 py-3 rounded-tr-xl">
                        <div className="ml-5 md:ml-0">
                            <h1 className="font-bold">Kawah Ijen</h1>
                            <p className="font-medium text-slate-600 text-sm mt-1">Jawa Timur</p>
                        </div>
                    </div>
                </div>
                <div className={classDivImg}>
                <LazyLoadImage alt="bromo" src="/img/bromo-3.png" width={width} placeholder={<Skeleton/>} className={classImg} />
                {/* {(skeleton == false) ? <img src="/img/bromo-3.png" width={width} className={classImg} alt="" onLoad={sebelumLoad} /> : <Skeleton/> } */}
                    <div className="bg-white bg-opacity-80 absolute bottom-0 left-0 px-10 py-3 rounded-tr-xl">
                        <div className="ml-5 md:ml-0">
                            <h1 className="font-bold">Bromo</h1>
                            <p className="font-medium text-slate-600 text-sm mt-1">Jawa Timur</p>
                        </div>
                    </div>
                </div>
            </div>
            </section>

    )
}

export default Section_2;