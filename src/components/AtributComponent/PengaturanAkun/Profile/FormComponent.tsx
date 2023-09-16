import { Buttons, Inputs, Selects } from "@/components/ElementComponent";
import {
  Checkbox,
  Dialog,
  DialogBody,
  Step,
  Stepper,
} from "@material-tailwind/react";
import React from "react";
import {
  provinsi,
  kotaOrKabupaten,
  kecamatan,
  kelurahan,
  kodePos,
  kelas,
  kurikulum,
  kotaAsal,
  namaSekolah,
} from "@/data/SelectDatas";
import { BiLeftArrowAlt, BiRightArrowAlt } from "react-icons/bi";
import { PartyPopper } from "../../../../../public/assets/svg";
import useWindowSize from "react-use/lib/useWindowSize";
import dynamic from "next/dynamic";
const Confetti = dynamic(() => import("react-confetti"), {
  ssr: false,
});

const FormComponent = () => {
  const [activeStep, setActiveStep] = React.useState(0);
  const [isLastStep, setIsLastStep] = React.useState(false);
  const [isFirstStep, setIsFirstStep] = React.useState(false);
  const [open, setOpen] = React.useState(false);

  const handleNext = () => !isLastStep && setActiveStep((cur) => cur + 1);
  const handlePrev = () => !isFirstStep && setActiveStep((cur) => cur - 1);

  const { width } = useWindowSize();
  const handleOpenModal = () => setOpen(!open);

  return (
    <>
      <div className="container mx-auto px-4 sm:px-0">
        <Stepper
          className="max-w-xs mx-auto my-10 cursor-pointer"
          activeStep={activeStep}
          lineClassName="bg-primary-success-300"
          activeLineClassName="bg-primary-success-300 h-2"
          isLastStep={(value) => setIsLastStep(value)}
          isFirstStep={(value) => setIsFirstStep(value)}
        >
          <Step
            className="border-2 !border-primary-success-300 bg-white text-black"
            activeClassName="!bg-primary-success-300 text-white"
            completedClassName="!bg-primary-success-300 text-white"
            onClick={() => setActiveStep(0)}
          >
            1
          </Step>
          <Step
            className="border-2 !border-primary-success-300 bg-white text-black"
            activeClassName="!bg-primary-success-300 text-white"
            completedClassName="!bg-primary-success-300 text-white"
            onClick={() => setActiveStep(1)}
          >
            2
          </Step>
        </Stepper>
        <form>
          {activeStep === 0 && (
            <>
              <div className="data-siswa">
                <div className="flex justify-evenly items-center">
                  <p className="font-bold w-32">DATA SISWA</p>
                  <div className="border-b-4 border-primary-red w-full ml-4" />
                </div>
                <div className="my-4 flex flex-col gap-4">
                  <Inputs type="text" label="Nama Lengkap" required />
                  <Inputs
                    type="text"
                    label="No Handphone"
                    attention="Jika siswa masih SD, bisa gunakan no handphone aktif orang
                  tua/wali"
                    required
                  />
                  <Inputs
                    type="email"
                    label="Alamat Email"
                    attention="Jika siswa masih SD, bisa gunakan email aktif orang
                  tua/wali"
                    required
                  />
                </div>
              </div>
              <div className="alamat-domisili-siswa mt-8">
                <div className="flex items-center">
                  <p className="font-bold w-72">ALAMAT DOMISILI SISWA</p>
                  <div className="border-b-4 border-primary-red w-full ml-4" />
                </div>
                <div className="my-4 flex flex-col gap-4">
                  <Inputs
                    type="text"
                    label="Jalan"
                    attention="Contoh: Jl. Purnawarman No.36 B"
                    required
                  />
                  <Inputs
                    type="text"
                    label="Blok/Nomor"
                    attention="Contoh: BLOK A-1-BIRU"
                    required
                  />
                  <Selects placeholder="Provinsi" options={provinsi} required />
                  <Selects
                    placeholder="Kota/Kabupaten"
                    options={kotaOrKabupaten}
                    required
                  />
                  <Selects
                    placeholder="Kecamatan"
                    options={kecamatan}
                    required
                  />
                  <Selects
                    placeholder="Kelurahan/Desa"
                    options={kelurahan}
                    required
                  />
                  <Selects placeholder="Kode Pos" options={kodePos} required />
                </div>
              </div>
              <div className="data-sekolah-siswa mt-8">
                <div className="flex items-center">
                  <p className="font-bold w-64">DATA SEKOLAH SISWA</p>
                  <div className="border-b-4 border-primary-red w-full ml-4" />
                </div>
                <div className="my-4 flex flex-col gap-4">
                  <Selects placeholder="Kelas" options={kelas} required />
                  <Selects
                    placeholder="Kurikulum"
                    options={kurikulum}
                    required
                  />
                  <Selects
                    placeholder="Kota Asal Sekolah"
                    options={kotaAsal}
                    required
                  />
                  <Selects
                    placeholder="Nama Sekolah"
                    options={namaSekolah}
                    required
                  />
                </div>
              </div>
              <button
                onClick={handleNext}
                className="flex gap-x-1 items-center float-right mt-6 mb-20"
              >
                <p className="font-semibold">Selanjutnya</p>
                <BiRightArrowAlt className="w-8 h-auto" />
              </button>
            </>
          )}
          {activeStep === 1 && (
            <>
              <div className="data-orang-tua mt-8">
                <div className="flex justify-evenly items-center">
                  <p className="font-bold w-48">DATA ORANG TUA</p>
                  <div className="border-b-4 border-primary-red w-full ml-4" />
                </div>
                <div className="my-4 flex flex-col gap-4">
                  <Inputs type="text" label="Nama Lengkap" required />
                  <Inputs
                    type="text"
                    label="No Handphone"
                    checkbox={"no handphone sama dengan siswa"}
                    required
                  />
                  <Inputs
                    type="email"
                    label="Alamat Email"
                    checkbox={"alamat email sama dengan siswa"}
                    required
                  />
                </div>
              </div>
              <div className="alamat-orang-tua mt-8">
                <div className="flex justify-evenly items-center">
                  <p className="font-bold w-[22.5rem]">
                    ALAMAT DOMISILI ORANG TUA
                  </p>
                  <div className="border-b-4 border-primary-red w-full ml-4" />
                </div>
                <div className="my-4 flex flex-col gap-4">
                  <div className="-ml-2 -mt-4 -mb-4">
                    <Checkbox
                      ripple={false}
                      color="green"
                      className="!text-primary-gray-300 text-xs uppercase"
                      label={
                        <span className="text-primary-gray-300 text-xs">
                          alamat orang tua sama dengan siswa
                        </span>
                      }
                    />
                  </div>
                  <Inputs
                    type="text"
                    label="Jalan"
                    attention="Contoh: Jl. Purnawarman No.36 B"
                    required
                  />
                  <Inputs
                    type="text"
                    label="Blok/Nomor"
                    attention="Contoh: BLOK A-1-BIRU"
                    required
                  />
                  <Selects placeholder="Provinsi" options={provinsi} required />
                  <Selects
                    placeholder="Kota/Kabupaten"
                    options={kotaOrKabupaten}
                    required
                  />
                  <Selects
                    placeholder="Kecamatan"
                    options={kecamatan}
                    required
                  />
                  <Selects
                    placeholder="Kelurahan/Desa"
                    options={kelurahan}
                    required
                  />
                  <Selects placeholder="Kode Pos" options={kodePos} required />
                </div>
              </div>
              <div className="flex justify-between items-center mt-8 mb-20">
                <button
                  onClick={handlePrev}
                  className="flex gap-x-1 items-center"
                >
                  <BiLeftArrowAlt className="w-5 h-auto" />
                  <p className="font-semibold">Kembali</p>
                </button>
                <Buttons
                  onClick={handleOpenModal}
                  className="shadow-button"
                  label="OK, Simpan"
                />
              </div>
            </>
          )}
        </form>
      </div>
      <Dialog
        className="bg-primary-success-100 rounded-3xl px-2 h-fit"
        open={open}
        size="xs"
        handler={handleOpenModal}
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
            <p>Kamu berhasil menyimpan data orang tuamu ke dalam sistem</p>
          </div>
          <div className="flex justify-center">
            <button
              onClick={handleOpenModal}
              className="shadow-button !bg-primary-success !text-black !text-base !py-1 mt-6"
            >
              OK
            </button>
          </div>
          {/* END:Content */}
        </DialogBody>
      </Dialog>
      {/* Tampilkan Confetti saat showConfetti true */}
      {open && (
        <Confetti width={width} height={2000} style={{ zIndex: 999999 }} />
      )}
    </>
  );
};

export default FormComponent;
