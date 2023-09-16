import BookmarkDialog, { DataBookmarkProps } from "./BookmarkDialog";

const Data: DataBookmarkProps[] = [
  {
    tugas: "Latihan Ekstra",
    nomorTugas: 786,
    nomorSoal: 2,
    bab: "Penarikan Kesimpulan",
  },
  { tugas: "Empati Mandiri", nomorTugas: 122, nomorSoal: 4 },
  { tugas: "Empati Mandiri", nomorTugas: 123, nomorSoal: 4 },
];

const PenalaranMtk = () => {
  return (
   <BookmarkDialog data={Data}/>
  );
};

export default PenalaranMtk;
