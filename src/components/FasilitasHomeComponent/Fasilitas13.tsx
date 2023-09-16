import Image from "next/image";
import { GBO } from "../../../public/assets/PNG";
import MobilePhone from "../../../public/assets/svg/mobilephone.svg";

interface ColumnProps {
  title: string;
}
const Column1: ColumnProps[] = [
  { title: "Kumpulan Ribuan Soal + Pembahasannya" },
  { title: "Kumpulan Video Pembelajaran dan Video Solusi Soal" },
  { title: "Tahu Peringkat TOBK, Latihan Soal, dan Racing dalam Leaderboard" },
];
const Column3: ColumnProps[] = [
  { title: "Laporan Belajar untuk Siswa dan Orang Tua" },
  {
    title: "Membuat Rencana Belajar dan Ada Push Notification sebagai Reminder",
  },
  { title: "Simulasi Kelulusan pada Kampus dan Jurusan Impian" },
];

const Fasilitas13 = () => {
  return (
    <>
      <p>
        GO Kreasi merupakan terobosan Ganesha Operation dalam pengembangan
        konsep Digital Learning. Banyak banget menu yang mendukung SobatGO dalam
        belajar, seperti latihan soal (TOBK, Buku Sakti, & EMPATI), informasi
        KBM, presensi, VAK, simulasi SNBT, Laporan Tryout, dan masih banyak
        lagi.
        <br />
        <br />
        Melalui GO Kreasi SobatGO bisa belajar di mana saja dan kapan saja,
        SobatGO juga bisa tahu lho progres dari kemampuan kamu untuk
        menyelesaikan soal yang relevan untuk ujian nanti.
      </p>
      <Image
        src={GBO}
        width={1000}
        height={1000}
        alt="GO Bimbel Online"
        className="h-full mt-8 mb-4"
      />
      {/* <div className="flex items-center text-sm text-center mt-10">
        <div className="kolom1">
          {Column1.map((item, index) => (
            <div key={index} className="flex justify-center items-center mb-6">
              <div className="bg-primary-red text-white p-4 w-44 rounded-xl">
                <p>{item.title}</p>
              </div>
              <div className="border-[3px] border-dashed border-primary-red w-20"></div>
            </div>
          ))}
        </div>

        <div className="phone">
          <MobilePhone className="w-auto h-96" />
        </div>

        <div className="kolom3">
          {Column3.map((item, index) => (
            <div key={index} className="flex justify-center items-center mb-6">
              <div className="border-[3px] border-dashed border-primary-red w-20"></div>
              <div className="bg-primary-red text-white p-4 w-44 rounded-xl">
                <p>{item.title}</p>
              </div>
            </div>
          ))}
        </div>
      </div> */}
    </>
  );
};

export default Fasilitas13;
