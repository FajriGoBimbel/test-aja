import BlankLayout from "@/components/Layouts/BlankLayout";
import Link from "next/link";
import { FaArrowLeft } from "react-icons/fa";

const TataTertibSiswa = () => {
  return (
    <div className="container mx-auto my-8 px-4 md:px-0 md:my-16">
      <div className="flex gap-4 mb-4 lg:mb-12">
        <Link href="/dashboard/pengaturan">
          <FaArrowLeft className="w-6 h-6" />
        </Link>
        <h1 className="font-bold text-lg">Tata Tertib Siswa</h1>
      </div>
      <div className="ml-10">
        <h2 className="text-base lg:text-lg font-medium">
          Peraturan dan Tata Tertib Siswa Ganesha Operation TP 2023/2024
        </h2>
        <ol className="list-decimal ml-5 mt-4 text-sm lg:text-base">
          <li className="mb-4">
            Siswa Ganesha Operation (GO) wajib hadir di Kegiatan Belajar dan
            Mengajar (KBM) dan kegiatan GO lainnya selambat-lambatnya 10 menit
            sebelum kegiatan dimulai. Siswa GO yang terlambat, dilarang masuk
            kelas kecuali mendapatkan izin tertulis dari kepala unit/Customer
            Service sesuai dengan peraturan GO setempat.
          </li>
          <li className="mb-4">
            Siswa GO diwajibkan melakukan presensi sebagai bukti kehadiran
            selama mengikuti pembelajaran di GO. Presensi dilakukan setiap sesi
            jam belajar sesuai hari belajar menggunakan scan QR Code ke
            pengajar.
          </li>
          <li className="mb-4">
            Siswa GO tidak diperbolehkan pindah kelas (mutasi) kecuali jika
            mendapat persetujuan dari kepala unit/kepala sekretariat GO setempat
            dan harus sesuai aturan yang berlaku.
          </li>
          <li className="mb-4">
            Selama berada di lingkungan GO, siswa GO diwajibkan selalu:
            <ul className="list-disc text-xs lg:text-sm ml-5">
              <li>Berpakaian rapi, sopan, tidak memakai sandal jepit</li>
              <li>
                Tidak membawa senjata tajam, dan/atau membawa narkoba jenis
                apapun
              </li>
              <li>Menggunakan amsker selama berada di lingkungan GO</li>
              <li>Tidak saling meminjamkan alat tulis, HP, dll</li>
            </ul>
          </li>
          <li className="mb-4">
            Siswa GO dilarang merokok di lingkungan Ganesha Operation.
          </li>
          <li className="mb-4">
            Siswa GO boleh membawa alat komunikasi (gadget, HP, tablet) selama
            proses KBM di GO tapi alat komunikasi wajib dalam keadaan silet
            mode.
          </li>
          <li className="mb-4">
            Siswa wajib men-downlaod GO KREASI untuk sarana pembelajaran yang
            fleksibel secara online.
          </li>
          <li className="mb-4">
            Siswa GO wajib mengikuti dan menaati seluruh peraturan GO termasuk
            jadwal belajar, jadwal Try Out, siagaPTS, siagaPAS, dan siagaPAT/US.
          </li>
          <li className="mb-4">
            GO berhak memublikasikan kelulusan dan/ataunprestasi siswa.
          </li>
        </ol>
      </div>
    </div>
  );
};

TataTertibSiswa.getLayout = (page: any) => {
  return <BlankLayout>{page}</BlankLayout>;
};

export default TataTertibSiswa;
