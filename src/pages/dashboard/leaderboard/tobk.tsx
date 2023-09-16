import { ChangeEvent, useState } from "react";
import { topLeaderboard, topLeaderboardKategori } from "@/data/TopLeaderboard";
import {
  Tabs,
  TabsHeader,
  TabsBody,
  Tab,
  TabPanel,
} from "@material-tailwind/react";

import {
  ArrowRight,
  StarsLeft,
  StarsRight,
} from "../../../../public/assets/svg";
import Image from "next/image";
import { FormattedNumber, Inputs } from "@/components/ElementComponent";
import { ImSearch } from "react-icons/im";
import formattedNumber from "@/components/ElementComponent/FormattedNumber";
import { BsFillArrowRightCircleFill } from "react-icons/bs";

const ListLengkapLeaderboard = () => {
  // State untuk melacak indeks data yang sedang ditampilkan
  const [currentIndex, setCurrentIndex] = useState(0);
  const [activeTab, setActiveTab] = useState("Nasional");
  const [itemsToShow, setItemsToShow] = useState(10);
  // Mendapatkan data kategori yang sedang ditampilkan
  const currentCategory = topLeaderboardKategori[currentIndex].category;
  const currentContent = topLeaderboardKategori[currentIndex].content;
  const contentLeaderboard = topLeaderboardKategori.map((item) => item.content);

  const [filteredSiswa, setFilteredSiswa] = useState<any[]>(currentContent);

  console.log(filteredSiswa);
  const handleFilteredSiswa = (event: ChangeEvent<HTMLInputElement>) => {
    const query: string = event.target.value;
    let updatedList: any[] = [...currentContent];

    updatedList = updatedList.filter((item) => {
      return item.nama.toLowerCase().indexOf(query.toLowerCase()) !== -1;
    });

    setFilteredSiswa(updatedList);
  };

  return (
    <div>
      <Tabs value={activeTab} className="max-w-[70%] mx-auto">
        <TabsBody>
          {topLeaderboard.map(({ category, content }) => (
            <TabPanel className="text-black" key={category} value={category}>
              <div className="flex justify-center gap-x-3 items-center mt-8 mb-12">
                <StarsLeft className="w-8 md:w-28 h-auto" />
                <h1 className="top-skor-leaderboard tracking-tighter text-base md:text-2xl text-center text-white font-extrabold uppercase">
                  TOP SKOR {category} TOBK
                </h1>
                <StarsRight className="w-8 md:w-28 h-auto" />
              </div>
              <div
                key={category}
                className="flex flex-row-reverse justify-center items-end max-w-[33.333333%] mx-auto mt-4 mb-8"
              >
                {content.map((item, index) => (
                  <div key={index} className="text-center w-1/3">
                    <Image
                      src={item.person}
                      width={500}
                      height={500}
                      alt={item.name}
                      className="w-20 h-20 mx-auto rounded-full object-cover object-center"
                    />
                    <p className="font-semibold text-xs mt-2">{item.name}</p>
                    <p className="font-bold text-lg mt-2">
                      Skor {formattedNumber(item.score)}
                    </p>
                    <div
                      className={`mx-auto rounded-xl w-28 ${
                        index === 0
                          ? "bg-primary-red h-[30rem]"
                          : index === 1
                          ? "bg-secondary-orange h-[25rem]"
                          : "bg-primary-yellow h-80"
                      }`}
                    ></div>
                  </div>
                ))}
              </div>
            </TabPanel>
          ))}
        </TabsBody>
        <TabsHeader
          className="bg-transparent"
          indicatorProps={{
            className: "bg-primary-red rounded-xl",
          }}
        >
          {topLeaderboardKategori.map(({ category }) => (
            <Tab
              onClick={() => setActiveTab(category)}
              className={`${
                activeTab === category ? "text-white" : ""
              } !py-6 !px-0 shadow-md mx-4 rounded-xl`}
              key={category}
              value={category}
            >
              <h3 className="uppercase font-semibold">{category}</h3>
            </Tab>
          ))}
        </TabsHeader>
        <TabsBody>
          {topLeaderboardKategori.map(({ category, content }) => {
            const handleShowMore = () => {
              setItemsToShow((prevItems) =>
                prevItems === 10 ? content.length : 10
              );
            };
            return (
              <TabPanel className="text-black" key={category} value={category}>
                <Inputs
                  type="search"
                  label="Search"
                  container="w-1/3 mt-10"
                  onChange={handleFilteredSiswa}
                  required={false}
                  icon={<ImSearch className="w-5 h-auto" />}
                />
                <div className="flex justify-between items-center mt-8 mb-4">
                  <h2 className="font-semibold text-xl">
                    Rangking TOBK {category}
                  </h2>
                  {itemsToShow !== 10 ? (
                    <div className="flex gap-x-3 items-center">
                      <p>
                        Rangking <b>1 - 20</b> dari{" "}
                        <b>{FormattedNumber(20000)} Siswa</b>
                      </p>
                      <div className="flex gap-x-3 items-center">
                        <BsFillArrowRightCircleFill className="w-6 h-6 fill-primary-red cursor-pointer rotate-180" />
                        <BsFillArrowRightCircleFill className="w-6 h-6 fill-primary-red cursor-pointer" />
                      </div>
                    </div>
                  ) : (
                    ""
                  )}
                  <button
                    onClick={handleShowMore}
                    className="flex gap-x-2 items-center font-semibold"
                  >
                    {itemsToShow === 10
                      ? "Lihat Selengkapnya"
                      : "Lihat Lebih Sedikit"}
                    <ArrowRight className="w-3 h-3 fill-black" />
                  </button>
                </div>
                <table className="text-black shadow-md w-full mx-auto bg-secondary-graylight-100 !border-0 !border-transparent mb-8">
                  <thead>
                    <tr>
                      <th className="!border-0 !border-transparent">
                        Peringkat
                      </th>
                      <th className="!border-0 !border-transparent">
                        Nama Siswa
                      </th>
                      <th className="!border-0 !border-transparent">
                        {category}
                      </th>
                      <th className="!border-0 !border-transparent">Nilai</th>
                    </tr>
                  </thead>
                  <tbody>
                    {filteredSiswa.slice(0, itemsToShow).map((item, index) => (
                      <tr key={index} className="text-center">
                        <td className="!border-0 !border-transparent">
                          {item.peringkat}
                        </td>
                        <td className="flex gap-x-4 mx-auto !border-0 !border-transparent text-left w-1/3">
                          <Image
                            src={item.image}
                            width={100}
                            height={100}
                            alt={item.nama}
                            className="w-5 h-5 rounded-full object-cover object-center"
                          />
                          {`${item.nama} ${index + 1}`}
                        </td>
                        <td className="!border-0 !border-transparent">
                          {item.region}
                        </td>
                        <td className="!border-0 !border-transparent">
                          {item.nilai}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </TabPanel>
            );
          })}
        </TabsBody>
      </Tabs>
    </div>
  );
};

export default ListLengkapLeaderboard;
