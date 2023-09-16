import { Button, Card, CardBody, Radio } from "@material-tailwind/react";
import { useState } from "react";
import { Checked, UnChecked } from "../../../../public/assets/svg";

const PresensiComponent = () => {
  const [valueRadio, setValueRadio] = useState("minggu_ini");

  return (
    <div>
      <div className="sm:flex sm:justify-center sm:gap-4 my-6">
        <Radio
          label="Minggu Ini"
          value="minggu_ini"
          onChange={() => setValueRadio("minggu_ini")}
          name="presensi"
          color="red"
          checked={valueRadio === "minggu_ini"}
        />
        <Radio
          label="Minggu Lalu"
          value="minggu_lalu"
          onChange={() => setValueRadio("minggu_lalu")}
          name="presensi"
          color="red"
          checked={valueRadio === "minggu_lalu"}
        />
      </div>
      <div className="grid grid-cols-1 xl:grid-cols-2 gap-6">
        <Card>
          <div className="pt-6 pb-2 flex justify-center">
            <span className="bg-primary-yellow-100 flex items-center text-black text-[10px] font-medium mr-2 px-2.5 py-0.5 rounded-full">
              <h3 className="text-lg md:text-2xl">Senin 1 September 2023</h3>
            </span>
          </div>
          <CardBody className="flex gap-4 md:gap-12">
            <div>
              <div className="h-full flex flex-col justify-between">
                <span className="bg-primary-yellow-100 px-2 md:px-4 py-1 rounded-full">
                  <h3 className="text-sm md:text-lg text-black">13:00</h3>
                </span>
                <div className="h-full flex justify-center">
                  <div className="h-full border-2 border-primary-yellow border-dashed" />
                </div>
                <span className="bg-primary-yellow-100 px-2 md:px-4 py-1 rounded-full">
                  <h3 className="text-sm md:text-lg text-black">13:00</h3>
                </span>
              </div>
            </div>
            <div>
              <h2 className="font-bold mb-6">KBM - Biologi</h2>
              <p className="mb-2">Jam Presensi : -</p>
              <p className="mb-4">Guru : Anies Baswedan (049485)</p>
              <Button className="bg-primary-yellow text-black">
                Beri Feedback
              </Button>
            </div>
            <div className="flex justify-center items-center md:ml-12 xl:ml-0 2xl:ml-12">
              <UnChecked className="w-12 sm:w-16 sm:h-16 h-12" />
            </div>
          </CardBody>
          <hr className="w-[90%] self-center border-[1px]" />
          <CardBody className="flex gap-4 md:gap-12">
            <div>
              <div className="h-full flex flex-col justify-between">
                <span className="bg-primary-yellow-100 px-2 md:px-4 py-1 rounded-full">
                  <h3 className="text-sm md:text-lg text-black">13:00</h3>
                </span>
                <div className="h-full flex justify-center">
                  <div className="h-full border-2 border-primary-yellow border-dashed" />
                </div>
                <span className="bg-primary-yellow-100 px-2 md:px-4 py-1 rounded-full">
                  <h3 className="text-sm md:text-lg text-black">13:00</h3>
                </span>
              </div>
            </div>
            <div>
              <h2 className="font-bold mb-6">KBM - Biologi</h2>
              <p className="mb-2">Jam Presensi : -</p>
              <p className="mb-4">Guru : Anies Baswedan (049485)</p>
              <Button className="bg-primary-yellow text-black">
                Beri Feedback
              </Button>
            </div>
            <div className="flex justify-center items-center md:ml-12 xl:ml-0 2xl:ml-12">
              <Checked className="w-12 sm:w-16 sm:h-16 h-12" />
            </div>
          </CardBody>
        </Card>
        <Card>
          <div className="pt-6 pb-2 flex justify-center">
            <span className="bg-primary-yellow-100 flex items-center text-black text-[10px] font-medium mr-2 px-2.5 py-0.5 rounded-full">
              <h3 className="text-lg md:text-2xl">Senin 1 September 2023</h3>
            </span>
          </div>
          <CardBody className="flex gap-4 md:gap-12">
            <div>
              <div className="h-full flex flex-col justify-between">
                <span className="bg-primary-yellow-100 px-2 md:px-4 py-1 rounded-full">
                  <h3 className="text-sm md:text-lg text-black">13:00</h3>
                </span>
                <div className="h-full flex justify-center">
                  <div className="h-full border-2 border-primary-yellow border-dashed" />
                </div>
                <span className="bg-primary-yellow-100 px-2 md:px-4 py-1 rounded-full">
                  <h3 className="text-sm md:text-lg text-black">13:00</h3>
                </span>
              </div>
            </div>
            <div>
              <h2 className="font-bold mb-6">KBM - Biologi</h2>
              <p className="mb-2">Jam Presensi : -</p>
              <p className="mb-4">Guru : Anies Baswedan (049485)</p>
              <Button className="bg-primary-yellow text-black">
                Beri Feedback
              </Button>
            </div>
            <div className="flex justify-center items-center md:ml-12 xl:ml-0 2xl:ml-12">
              <Checked className="w-12 sm:w-16 sm:h-16 h-12" />
            </div>
          </CardBody>
          <hr className="w-[90%] self-center border-[1px]" />
          <CardBody className="flex gap-4 md:gap-12">
            <div>
              <div className="h-full flex flex-col justify-between">
                <span className="bg-primary-yellow-100 px-2 md:px-4 py-1 rounded-full">
                  <h3 className="text-sm md:text-lg text-black">13:00</h3>
                </span>
                <div className="h-full flex justify-center">
                  <div className="h-full border-2 border-primary-yellow border-dashed" />
                </div>
                <span className="bg-primary-yellow-100 px-2 md:px-4 py-1 rounded-full">
                  <h3 className="text-sm md:text-lg text-black">13:00</h3>
                </span>
              </div>
            </div>
            <div>
              <h2 className="font-bold mb-6">KBM - Biologi</h2>
              <p className="mb-2">Jam Presensi : -</p>
              <p className="mb-4">Guru : Anies Baswedan (049485)</p>
              <Button className="bg-primary-yellow text-black">
                Beri Feedback
              </Button>
            </div>
            <div className="flex justify-center items-center md:ml-12 xl:ml-0 2xl:ml-12">
              <UnChecked className="w-12 sm:w-16 sm:h-16 h-12" />
            </div>
          </CardBody>
        </Card>
        <Card>
          <div className="pt-6 pb-2 flex justify-center">
            <span className="bg-primary-yellow-100 flex items-center text-black text-[10px] font-medium mr-2 px-2.5 py-0.5 rounded-full">
              <h3 className="text-lg md:text-2xl">Senin 1 September 2023</h3>
            </span>
          </div>
          <CardBody className="flex gap-4 md:gap-12">
            <div>
              <div className="h-full flex flex-col justify-between">
                <span className="bg-primary-yellow-100 px-2 md:px-4 py-1 rounded-full">
                  <h3 className="text-sm md:text-lg text-black">13:00</h3>
                </span>
                <div className="h-full flex justify-center">
                  <div className="h-full border-2 border-primary-yellow border-dashed" />
                </div>
                <span className="bg-primary-yellow-100 px-2 md:px-4 py-1 rounded-full">
                  <h3 className="text-sm md:text-lg text-black">13:00</h3>
                </span>
              </div>
            </div>
            <div>
              <h2 className="font-bold mb-6">KBM - Biologi</h2>
              <p className="mb-2">Jam Presensi : -</p>
              <p className="mb-4">Guru : Anies Baswedan (049485)</p>
              <Button className="bg-primary-yellow text-black">
                Beri Feedback
              </Button>
            </div>
            <div className="flex justify-center items-center md:ml-12 xl:ml-0 2xl:ml-12">
              <Checked className="w-12 sm:w-16 sm:h-16 h-12" />
            </div>
          </CardBody>
          <hr className="w-[90%] self-center border-[1px]" />
          <CardBody className="flex gap-4 md:gap-12">
            <div>
              <div className="h-full flex flex-col justify-between">
                <span className="bg-primary-yellow-100 px-2 md:px-4 py-1 rounded-full">
                  <h3 className="text-sm md:text-lg text-black">13:00</h3>
                </span>
                <div className="h-full flex justify-center">
                  <div className="h-full border-2 border-primary-yellow border-dashed" />
                </div>
                <span className="bg-primary-yellow-100 px-2 md:px-4 py-1 rounded-full">
                  <h3 className="text-sm md:text-lg text-black">13:00</h3>
                </span>
              </div>
            </div>
            <div>
              <h2 className="font-bold mb-6">KBM - Biologi</h2>
              <p className="mb-2">Jam Presensi : -</p>
              <p className="mb-4">Guru : Anies Baswedan (049485)</p>
              <Button className="bg-primary-yellow text-black">
                Beri Feedback
              </Button>
            </div>
            <div className="flex justify-center items-center md:ml-12 xl:ml-0 2xl:ml-12">
              <Checked className="w-12 sm:w-16 sm:h-16 h-12" />
            </div>
          </CardBody>
        </Card>
        <Card>
          <div className="pt-6 pb-2 flex justify-center">
            <span className="bg-primary-yellow-100 flex items-center text-black text-[10px] font-medium mr-2 px-2.5 py-0.5 rounded-full">
              <h3 className="text-lg md:text-2xl">Senin 1 September 2023</h3>
            </span>
          </div>
          <CardBody className="flex gap-4 md:gap-12">
            <div>
              <div className="h-full flex flex-col justify-between">
                <span className="bg-primary-yellow-100 px-2 md:px-4 py-1 rounded-full">
                  <h3 className="text-sm md:text-lg text-black">13:00</h3>
                </span>
                <div className="h-full flex justify-center">
                  <div className="h-full border-2 border-primary-yellow border-dashed" />
                </div>
                <span className="bg-primary-yellow-100 px-2 md:px-4 py-1 rounded-full">
                  <h3 className="text-sm md:text-lg text-black">13:00</h3>
                </span>
              </div>
            </div>
            <div>
              <h2 className="font-bold mb-6">KBM - Biologi</h2>
              <p className="mb-2">Jam Presensi : -</p>
              <p className="mb-4">Guru : Anies Baswedan (049485)</p>
              <Button className="bg-primary-yellow text-black">
                Beri Feedback
              </Button>
            </div>
            <div className="flex justify-center items-center md:ml-12 xl:ml-0 2xl:ml-12">
              <Checked className="w-12 sm:w-16 sm:h-16 h-12" />
            </div>
          </CardBody>
          <hr className="w-[90%] self-center border-[1px]" />
          <CardBody className="flex gap-4 md:gap-12">
            <div>
              <div className="h-full flex flex-col justify-between">
                <span className="bg-primary-yellow-100 px-2 md:px-4 py-1 rounded-full">
                  <h3 className="text-sm md:text-lg text-black">13:00</h3>
                </span>
                <div className="h-full flex justify-center">
                  <div className="h-full border-2 border-primary-yellow border-dashed" />
                </div>
                <span className="bg-primary-yellow-100 px-2 md:px-4 py-1 rounded-full">
                  <h3 className="text-sm md:text-lg text-black">13:00</h3>
                </span>
              </div>
            </div>
            <div>
              <h2 className="font-bold mb-6">KBM - Biologi</h2>
              <p className="mb-2">Jam Presensi : -</p>
              <p className="mb-4">Guru : Anies Baswedan (049485)</p>
              <Button className="bg-primary-yellow text-black">
                Beri Feedback
              </Button>
            </div>
            <div className="flex justify-center items-center md:ml-12 xl:ml-0 2xl:ml-12">
              <UnChecked className="w-12 sm:w-16 sm:h-16 h-12" />
            </div>
          </CardBody>
        </Card>
      </div>
    </div>
  );
};

export default PresensiComponent;
