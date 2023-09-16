import { IconM31, IconM32, IconM33 } from "../../../public/assets/svg";

const Fasilitas9 = () => {
  return (
    <>
      <p>
        Belajar dan latihan soal saja tidak cukup, kamu juga perlu dibakar
        semangatnya dengan motivasi. Hanya di Go yang memberikan seminar
        motivasi bagi siswa kelas 12 SMA dan orang tua dalam seminar
        <b className="font-bold"> Meeting on maximizing Motivation (M3)</b>.
        Seminar ini diadakan secara berkala karena GO memahami pentingnya
        motivasi bagi peningkatkan prestasi siswa.
        <b className="font-bold mt-2 block">GO memiliki 3 tema M3, diantaranya:</b>
      </p>
      <ul className="flex justify-center gap-x-4 items-center mt-4">
        <li className="text-center">
          <IconM31 className="w-20 h-20"/>
          <p className="text-lg font-semibold mt-1 text-black">Vision</p>
        </li>
        <li className="text-center">
          <IconM32 className="w-20 h-20"/>
          <p className="text-lg font-semibold mt-1 text-black">Strategy</p>
        </li>
        <li className="text-center">
          <IconM33 className="w-20 h-20"/>
          <p className="text-lg font-semibold mt-1 text-black">Change</p>
        </li>
      </ul>
      <iframe className='h-80 w-full my-8' src="https://www.youtube.com/embed/D-LTmrhimN0?si=9IPEBVnAw2SpksFV" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen/>
    </>
  );
};

export default Fasilitas9;
