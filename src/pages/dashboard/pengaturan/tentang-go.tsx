import BlankLayout from "@/components/Layouts/BlankLayout";
import Link from "next/link";
import { FaArrowLeft } from "react-icons/fa";
import { Belajar, Berlatih, Bertanding } from "../../../../public/assets/svg";

const threeB = [
  {
    icon: Belajar,
    title: "belajar",
    content:
      "GO bantu kamu untuk memahami teori dan konsepnya setiap belajar di kelas. Kalau masih bingung, ada fasilitas Tutorial Service Time (TST) untuk belajar tambahan di luar KBM",
  },
  {
    icon: Berlatih,
    title: "berlatih",
    content:
      "Sel-sel otakmu perlu dilatih untuk mengerjakan latihan-latihan soal yang setara dengan tingkat kesulitan ujianmu. Untuk itu ada Buku Sakti yang siap membantu",
  },
  {
    icon: Bertanding,
    title: "bertanding",
    content:
      "Setelah berlatih, sekarang saatnya kamu menguji seberapa jauh proses belajarmu dengan TOBK, racing soal, dan battle",
  },
];

const TentangGaneshaOperation = () => {
  return (
    <div className="container mx-auto my-8 px-4 md:px-0 md:my-16">
      <div className="flex gap-4 mb-2 lg:mb-6">
        <Link href="/dashboard/pengaturan">
          <FaArrowLeft className="w-6 h-6" />
        </Link>
        <h1 className="font-bold text-lg">Tentang Ganesha Operation</h1>
      </div>
      <div className="ml-11">
        <p>
          Ganesha Operation berdiri sejak 1 Mei 1984 dan memiliki visi menjadi
          bimbingan belajar terbaik dan terbesar se-Indonesia. Ganesha Operation
          adalah bimbingan belajar yang sukses mengantarkan {">"} 47.000++ siswa
          ke PTN dan PT Kedinasan. Kami merupakan bimbingan belajar tatap muka
          berbasis teknologi yang berhasil meraih 2 penghargaan MURI sebagai
          Bimbel Terbaik dengan kelulusan siswa terbanyak ke PTN dan PT
          Kedinasan se-Indonesia, dan Bimbel Terbesar dengan lokasi terbanyak
          se-Indonesia yang dikelola secara pusat (no franchise).
        </p>
        <div className="mb-4">
          <h2 className="font-bold text-lg mt-4 mb-2">
            Visi Ganesha Operation
          </h2>
          <p>
            Menjadi lembaga bimbingan belajar yang terbaik dan terbesar di
            Indonesia.
          </p>
        </div>
        <div className="mb-4">
          <h2 className="font-bold text-lg mt-4 mb-2">
            Misi Ganesha Operation
          </h2>
          <ol className="list-decimal ml-5">
            <li>
              Mendidik siswa agar berprestasi di tingkat sekolah,
              kota/kabupaten, provinsi, nasional dan internasional.
            </li>
            <li>
              Melakukan inovasi pembelajaran melalui terobosan revolusi belajar
              dan teknologi informasi.
            </li>
            <li>Meningkatkan budaya belajar siswa.</li>
            <li>Meningkatkan mutu pendidikan.</li>
            <li>Mencerdaskan kehidupan bangsa.</li>
          </ol>
        </div>
        <div className="mb-4">
          <h2 className="font-bold text-lg mt-4 mb-2">
            Apa yang Kami Terapkan?
          </h2>
          <p>
            <b>3B</b> ini lah cara GO bantu kamu mencapai target akademik dan
            sekolah impian
          </p>
          <div className="flex gap-x-4 mt-8">
            {threeB.map((item, index) => (
              <div
                key={index}
                className="shadow-md rounded-lg text-center py-8 px-4 w-1/3"
              >
                <item.icon className="w-14 h-14 mx-auto mb-2" />
                <h3 className="font-bold uppercase mb-2">{item.title}</h3>
                <p className="text-sm">{item.content}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

TentangGaneshaOperation.getLayout = (page: any) => {
  return <BlankLayout>{page}</BlankLayout>;
};

export default TentangGaneshaOperation;
