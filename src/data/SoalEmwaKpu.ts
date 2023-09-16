interface optionsProps {
  pilihan: string;
  jawaban: boolean;
}

interface soalsProps {
  soal: string[];
  option: optionsProps[];
  tingkat: number;
}

interface SoalEMWAKPUProps {
  isDone: boolean;
  soals: soalsProps[];
}

const SoalEMWAKPU: SoalEMWAKPUProps[] = [
  {
    isDone: false,
    soals: [
      {
        soal: [
          "Jika A sakit, A pergi ke dokter",
          "Jika A ikut arisan, A akan pergi ke rumah tetangga",
          "Apa yang dapat disimpulkan dari A yang tidak pergi ke pasar atau tidak pergi ke rumah tetangga?",
        ],
        option: [
          {
            pilihan: "A tidak sakit atau A tidak ikut arisan",
            jawaban: true,
          },
          {
            pilihan: "A tidak sakit atau A tidak ikut arisan",
            jawaban: false,
          },
          {
            pilihan: "A tidak sakit atau A tidak ikut arisan",
            jawaban: false,
          },
          {
            pilihan: "A tidak sakit atau A tidak ikut arisan",
            jawaban: false,
          },
          { pilihan: "A sakit atau A ikut arisan", jawaban: false },
        ],
        tingkat: 3,
      },
      {
        soal: [
          "Jika B makan es krim, B senang",
          "Jika B senang, B tersenyum",
          "Apa yang dapat disimpulkan jika B makan es krim?",
        ],
        option: [
          { pilihan: "B tidak senang atau B tidak tersenyum", jawaban: true },
          { pilihan: "B senang atau B tersenyum", jawaban: false },
          { pilihan: "B senang tetapi tidak tersenyum", jawaban: false },
          { pilihan: "B tidak makan es krim", jawaban: false },
          {
            pilihan: "Tidak ada kesimpulan yang dapat diambil",
            jawaban: false,
          },
        ],
        tingkat: 2,
      },
      {
        soal: [
          "Jika C berlatih setiap hari, C menjadi lebih baik dalam olahraga",
          "C tidak berlatih setiap hari",
          "Apa yang dapat disimpulkan tentang kemampuan olahraga C?",
        ],
        option: [
          { pilihan: "C tidak berolahraga sama sekali", jawaban: false },
          { pilihan: "C berolahraga kadang-kadang", jawaban: false },
          { pilihan: "C berolahraga setiap hari", jawaban: true },
          { pilihan: "C tidak berubah dalam olahraga", jawaban: false },
          { pilihan: "Tidak ada informasi yang cukup", jawaban: false },
        ],
        tingkat: 4,
      },
      {
        soal: [
          "Jika D membawa payung, maka D tidak akan basah",
          "D basah karena hujan",
          "Apakah D membawa payung?",
        ],
        option: [
          { pilihan: "Ya, D membawa payung", jawaban: false },
          { pilihan: "Tidak, D tidak membawa payung", jawaban: true },
          { pilihan: "D membawa payung tetapi payung rusak", jawaban: false },
          { pilihan: "Tidak ada informasi yang cukup", jawaban: false },
          { pilihan: "Tidak ada jawaban yang benar", jawaban: false },
        ],
        tingkat: 5,
      },
      {
        soal: [
          "Jika E belajar dengan tekun, E akan berhasil dalam ujian",
          "E berhasil dalam ujian",
          "Apakah E belajar dengan tekun?",
        ],
        option: [
          { pilihan: "Ya, E belajar dengan tekun", jawaban: false },
          { pilihan: "Tidak, E tidak belajar dengan tekun", jawaban: false },
          { pilihan: "E beruntung dalam ujian", jawaban: false },
          { pilihan: "Tidak ada informasi yang cukup", jawaban: false },
          { pilihan: "Tidak ada jawaban yang benar", jawaban: true },
        ],
        tingkat: 1,
      },
    ],
  },
];

export default SoalEMWAKPU;
