import { Dialog, DialogBody } from "@material-tailwind/react";
import { PartyPopper, XMark } from "../../../../public/assets/svg";
import useWindowSize from "react-use/lib/useWindowSize";
import dynamic from "next/dynamic";
const Confetti = dynamic(() => import("react-confetti"), {
  ssr: false,
});

interface ModalKumpulkanTobkProps {
  openModal1: boolean;
  openModal2: boolean;
  openModal3: boolean;
  handleOpenModal1: () => void;
  handleOpenModal2: () => void;
  handleOpenModal3: () => void;
  title: string;
  partTest: number;
  test: string;
}

const ModalKumpulkanTobk = ({
  openModal1,
  openModal2,
  openModal3,
  handleOpenModal1,
  handleOpenModal2,
  handleOpenModal3,
  title,
  partTest,
  test,
}: ModalKumpulkanTobkProps) => {
  const { width } = useWindowSize();

  return (
    <>
      <Dialog
        className="border-4 border-primary-red rounded-3xl px-2 h-fit"
        open={openModal1}
        size="sm"
        handler={handleOpenModal1}
      >
        <DialogBody
          divider
          className="h-auto text-black border-y-0 font-poppins"
        >
          <div className="flex justify-end items-center mt-2 mb-6 relative">
            <XMark
              className="w-4 h-4 cursor-pointer fixed"
              onClick={handleOpenModal1}
            />
          </div>
          {/* START:Content */}
          <div>
            <h1 className="font-semibold text-lg text-center mb-8 uppercase">
              Yakin Mau Mengumpulkan?
            </h1>
            <p>
              Kamu yakin ingin mengumpulkan Bagian {partTest} : {test} dari{" "}
              {title} ini? Pastikan semua jawabanmu terisi, ya. Setelah menekan
              tombol <b>“Ya, Kumpulkan”</b> kamu tidak bisa kembali mengerjakan
              Bagian {partTest} : Tes Potensi Skolastik (TPS) ini lagi.
            </p>
          </div>
          {/* END:Content */}
          <div className="flex gap-x-4 justify-end items-center mt-10 mb-4">
            <button
              className="outline-shadow-button !text-xs !px-2 !py-2 md:!text-base md:!px-12 md:!py-2 md:!rounded-xl"
              onClick={handleOpenModal1}
            >
              Tidak, Kembali
            </button>
            <button
              className="shadow-button !text-xs !px-2 !py-2 md:!text-base md:!px-12 md:!py-2 md:!rounded-xl"
              onClick={handleOpenModal2}
            >
              Ya, Kumpulkan
            </button>
          </div>
        </DialogBody>
      </Dialog>
      {/* Dialog 2 */}
      <Dialog
        className="border-4 border-primary-red rounded-3xl px-2 h-fit"
        open={openModal2}
        size="sm"
        handler={handleOpenModal2}
      >
        <DialogBody
          divider
          className="h-auto text-black border-y-0 font-poppins"
        >
          <div className="flex justify-end items-center mt-2 mb-6 relative">
            <XMark
              className="w-4 h-4 cursor-pointer fixed"
              onClick={handleOpenModal2}
            />
          </div>
          {/* START:Content */}
          <div>
            <h1 className="font-semibold text-lg text-center mb-8 uppercase">
              Cek Lagi Jawaban kamu Sob
            </h1>
            <p>
              Cek sekali lagi semua jawaban kamu. Pastikan tidak ada jawaban
              kosong karena setelah menekan tombol <b>“Ya, Kumpulkan”</b>, kamu
              tidak bisa kembali mengerjakan Bagian {partTest} : {test} ini
              lagi.
            </p>
          </div>
          {/* END:Content */}
          <div className="flex gap-x-4 justify-end items-center mt-10 mb-4">
            <button
              className="outline-shadow-button !text-xs !px-2 !py-2 md:!text-base md:!px-12 md:!py-2 md:!rounded-xl"
              onClick={handleOpenModal2}
            >
              Tidak, Kembali
            </button>
            <button
              className="shadow-button !text-xs !px-2 !py-2 md:!text-base md:!px-12 md:!py-2 md:!rounded-xl"
              onClick={handleOpenModal3}
            >
              Ya, Kumpulkan
            </button>
          </div>
        </DialogBody>
      </Dialog>
      {/* Dialog 3 */}
      <Dialog
        className="bg-primary-success-100 rounded-3xl px-2 h-fit"
        open={openModal3}
        size="xs"
        handler={handleOpenModal3}
      >
        <DialogBody
          divider
          className="h-auto text-black border-y-0 font-poppins"
        >
          {/* START:Content */}
          <div>
            <PartyPopper className="w-28 h-auto mx-auto" />
            <h1 className="mt-6 mb-4 text-lg text-primary-success-700 font-bold text-center">
              Yey, Tersimpan!
            </h1>
            <p>
              Kamu berhasil menyimpan Bagian {partTest} : {test} di {title} ini
              ke dalam sistem.
            </p>
          </div>
          <div className="flex justify-center">
            <button
              onClick={handleOpenModal3}
              className="shadow-button !bg-primary-success !text-black !text-base !py-1 mt-6"
            >
              OK
            </button>
          </div>
          {/* END:Content */}
          {/* Tampilkan Confetti saat showConfetti true */}
        </DialogBody>
      </Dialog>
      {openModal3 && (
        <Confetti width={width} height={2000} style={{ zIndex: 999999 }} />
      )}
    </>
  );
};

export default ModalKumpulkanTobk;
