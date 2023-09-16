import {
  Tabs,
  TabsHeader,
  TabsBody,
  Tab,
  TabPanel,
} from "@material-tailwind/react";
import BukuSaktiDatas from "@/data/BukuSaktiDatas";
import Image from "next/image";
import Link from "next/link";
import Slider from "react-slick";

const settings = {
  slidesToShow: 1,
  slidesToScroll: 1,
};

const BukuSakti = () => {
  const values = BukuSaktiDatas.find((item) => item.value === "empati wajib");
  const bukuSaktiTitle = values?.value;
  return (
    <div className="container mx-auto my-20">
      <h1 className="font-bold text-2xl mb-10">Buku Sakti</h1>
      <Tabs id="custom-animation" value={bukuSaktiTitle}>
        <TabsHeader className="overflow-y-scroll w-full">
          {BukuSaktiDatas.map(({ title, value }) => (
            <Tab key={value} value={value} className="text-base font-medium">
              {title}
            </Tab>
          ))}
        </TabsHeader>
        <TabsBody
          animate={{
            initial: { y: 250 },
            mount: { y: 0 },
            unmount: { y: 250 },
          }}
        >
          {BukuSaktiDatas.map((item) => (
            <TabPanel
              key={item.value}
              value={item.value}
              className="text-black mt-4"
            >
              <div>
                <h2 className="font-bold uppercase text-xl mb-4">
                  {item.title}
                </h2>
                <p>{item.content}</p>
              </div>
              {/* utbk */}
              <div>
                <div className="flex gap-x-4 items-center mt-8 mb-6">
                  <h3 className="font-bold w-[21%] text-xl">
                    Mata Pelajaran UTBK
                  </h3>
                  <div className="h-1 w-full bg-primary-red-500"></div>
                </div>
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                  {item.utbkContent.map((item, index) => (
                    <Link
                      href={item.link}
                      key={index}
                      className="grid border-4 border-black text-black rounded-2xl text-center p-4 ease-in-out duration-700 hover:shadow-lg hover:ease-in-out hover:duration-700 hover:-translate-x-2 hover:-translate-y-2 hover:shadow-primary-red"
                    >
                      <Image
                        src={item.icon}
                        width={500}
                        height={500}
                        alt={item.title}
                        className="w-28 h-auto md:mx-auto"
                      />
                      <p className="uppercase mt-1 text-xs md:text-base font-medium px-8 text-center">
                        {item.title}
                      </p>
                    </Link>
                  ))}
                </div>
              </div>
              {/* sekolah */}
              {item.sekolahContent && (
                <div>
                  <div className="flex gap-x-4 items-center mt-8 mb-6">
                    <h3 className="font-bold w-[22%] text-xl">
                      Mata Pelajaran Sekolah
                    </h3>
                    <div className="h-1 w-full bg-primary-red-500"></div>
                  </div>
                  <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                    {item.sekolahContent?.map((item, index) => (
                      <Link
                        href={"https://google.com"}
                        key={index}
                        className="grid items-center border-4 border-black text-black rounded-2xl text-center p-4 ease-in-out duration-700 hover:shadow-lg hover:ease-in-out hover:duration-700 hover:-translate-x-2 hover:-translate-y-2 hover:shadow-primary-red"
                        target="_blank"
                      >
                        <Image
                          src={item.icon}
                          width={500}
                          height={500}
                          alt={item.title}
                          className="w-28 h-auto mx-auto"
                        />
                        <p className="uppercase mt-1 text-base font-medium px-8">
                          {item.title}
                        </p>
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </TabPanel>
          ))}
        </TabsBody>
      </Tabs>
    </div>
  );
};

export default BukuSakti;
