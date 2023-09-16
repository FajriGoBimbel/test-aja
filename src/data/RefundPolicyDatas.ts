interface ListsProps {
  list: string;
}

interface ContentProps {
  content?: string;
  lists?: ListsProps[];
}

interface RefundPolicyProps {
  category: string;
  contents?: ContentProps[];
}

const RefundPolicyDatas: RefundPolicyProps[] = [
  {
    category: "1. Kebijakan Umum",
    contents: [
      {
        content:
          "Kebijakan pengembalian dana ini berlaku untuk semua layanan yang ditawarkan oleh PT Pendidikan Ganesha Operation yang di dalam kebijakan ini selanjutnya disebut dengan “Produk”. Di dalam dokumen kebijakan ini “Kami” merujuk pada PT Pendidikan Ganesha Operation dan “Anda” merujuk pada pelanggan. Kebijakan ini dibuat untuk memberikan panduan yang jelas tentang bagaimana proses pengembalian dana dilakukan dalam berbagai situasi.",
      },
    ],
  },
  {
    category: "2. Pembatalan Oleh Pelanggan",
    contents: [
      {
        content:
          "Pengembalian dana/refund yang disebabkan pembatalan oleh pelanggan dengan alasan apa pun tidak diperkenankan.",
      },
    ],
  },
  {
    category: "3. Pembatalan Oleh Kami",
    contents: [
      {
        content:
          "Pengembalian dana/refund yang disebabkan Produk yang dibeli oleh Anda batal Kami jalankan akan diproses sesuai dengan Prosedur Pengembalian Dana.",
      },
    ],
  },
  {
    category: "4. Keadaan Kahar (Force Majeur)",
    contents: [
      {
        content:
          "Produk yang batal dijalankan akibat bencana alam tidak berlaku pengembalian dana/refund.",
      },
    ],
  },
  {
    category: "5. Prosedur Pengembalian Dana/Refund",
    contents: [
      {
        lists: [
          {
            list: "a. Kami akan menghubungi Anda secara patut untuk menginformasikan pembatalan Produk yang telah Anda beli.",
          },
          {
            list: "b. Jika dalam 14 (empat belas) hari setelah pembatalan Produk diinformasikan Anda tidak memberi tanggapan, Kami tidak bertanggung jawab atas keterlambatan proses pengembalian dana/refund.",
          },
          {
            list: "c. Anda diharuskan datang ke kantor Kami untuk mengajukan pengembalian dana dengan mengisi Formulir Pengembalian Dana, membawa meterai dengan nominal cukup (Rp10.000,-), kuitansi pembayaran, copy/salinan sampul buku tabungan yang memuat nomor rekening Anda, dan copy/salinan Kartu Keluarga.",
          },
          {
            list: "d. Dana akan dikembalikan paling lambat 14 (empat belas) hari kerja setelah semua persyaratan Kami nyatakan valid.",
          },
        ],
      },
    ],
  },
  {
    category:
      "6. Kami mendorong pelanggan untuk membaca dan memahami kebijakan ini sebelum menggunakan layanan kami. Jika Anda memiliki pertanyaan lebih lanjut mengenai kebijakan pengembalian dana/refund ini, Anda dapat menghubungi email: adminsupport@ganeshaoperation.com atau Whatsapp (WA) dengan nomor: 081217935205.",
  },
];

export default RefundPolicyDatas;
