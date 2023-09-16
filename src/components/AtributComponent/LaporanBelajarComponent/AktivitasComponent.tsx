import {
  Card,
  CardBody,
  Radio,
  Timeline,
  TimelineBody,
  TimelineConnector,
  TimelineHeader,
  TimelineIcon,
  TimelineItem,
  Typography,
} from "@material-tailwind/react";
import { useState } from "react";

const AktivitasComponent = () => {
  const [valueRadio, setValueRadio] = useState("hari_ini");

  return (
    <div>
      <div className="sm:flex sm:justify-center sm:gap-4 my-6">
        <Radio
          label="Hari Ini"
          value="hari_ini"
          onChange={() => setValueRadio("hari_ini")}
          name="aktivitas"
          color="red"
          checked={valueRadio === "hari_ini"}
        />
        <Radio
          label="Minggu Ini"
          value="minggu_ini"
          onChange={() => setValueRadio("minggu_ini")}
          name="aktivitas"
          color="red"
          checked={valueRadio === "minggu_ini"}
        />
      </div>
      <div>
        <Timeline>
          <TimelineItem>
            <TimelineConnector />
            <TimelineHeader className="h-3">
              <TimelineIcon />
              <div className="flex flex-col">
                {valueRadio === "minggu_ini" && <h3>Senin, 15 Agustus 2023</h3>}
                <p>18:25</p>
              </div>
            </TimelineHeader>
            <TimelineBody className="pb-8 pt-4">
              <Card className="mb-3">
                <CardBody className="flex gap-4">
                  <div className="text-center flex flex-col justify-center items-center border-2 rounded-2xl p-4">
                    <h3>EMWA</h3>
                    <p>098764</p>
                  </div>
                  <div className="flex flex-col justify-between">
                    <h3 className="text-xl font-medium text-black mb-4">
                      EMWA 12 SMA IPA-K13R-S1-IPA-TA. 23/24
                    </h3>
                    <p>KPU | 12 SMA IPA | 4 Soal</p>
                  </div>
                </CardBody>
              </Card>
              <Card className="mb-3">
                <CardBody className="flex gap-4">
                  <div className="text-center flex flex-col justify-center items-center border-2 rounded-2xl p-4">
                    <h3>EMWA</h3>
                    <p>098764</p>
                  </div>
                  <div className="flex flex-col justify-between">
                    <h3 className="text-xl font-medium text-black mb-4">
                      EMWA 12 SMA IPA-K13R-S1-IPA-TA. 23/24
                    </h3>
                    <p>KPU | 12 SMA IPA | 4 Soal</p>
                  </div>
                </CardBody>
              </Card>
              <Card className="mb-3">
                <CardBody className="flex gap-4">
                  <div className="text-center flex flex-col justify-center items-center border-2 rounded-2xl p-4">
                    <h3>EMWA</h3>
                    <p>098764</p>
                  </div>
                  <div className="flex flex-col justify-between">
                    <h3 className="text-xl font-medium text-black mb-4">
                      EMWA 12 SMA IPA-K13R-S1-IPA-TA. 23/24
                    </h3>
                    <p>KPU | 12 SMA IPA | 4 Soal</p>
                  </div>
                </CardBody>
              </Card>
            </TimelineBody>
          </TimelineItem>
          <TimelineItem>
            <TimelineConnector />
            <TimelineHeader className="h-3">
              <TimelineIcon />
              <div className="flex flex-col">
                {valueRadio === "minggu_ini" && <h3>Senin, 15 Agustus 2023</h3>}
                <p>18:25</p>
              </div>
            </TimelineHeader>
            <TimelineBody className="pb-8 pt-4">
              <Card className="mb-3">
                <CardBody className="flex gap-4">
                  <div className="text-center flex flex-col justify-center items-center border-2 rounded-2xl p-4">
                    <h3>EMWA</h3>
                    <p>098764</p>
                  </div>
                  <div className="flex flex-col justify-between">
                    <h3 className="text-xl font-medium text-black mb-4">
                      EMWA 12 SMA IPA-K13R-S1-IPA-TA. 23/24
                    </h3>
                    <p>KPU | 12 SMA IPA | 4 Soal</p>
                  </div>
                </CardBody>
              </Card>
              <Card className="mb-3">
                <CardBody className="flex gap-4">
                  <div className="text-center flex flex-col justify-center items-center border-2 rounded-2xl p-4">
                    <h3>EMWA</h3>
                    <p>098764</p>
                  </div>
                  <div className="flex flex-col justify-between">
                    <h3 className="text-xl font-medium text-black mb-4">
                      EMWA 12 SMA IPA-K13R-S1-IPA-TA. 23/24
                    </h3>
                    <p>KPU | 12 SMA IPA | 4 Soal</p>
                  </div>
                </CardBody>
              </Card>
              <Card className="mb-3">
                <CardBody className="flex gap-4">
                  <div className="text-center flex flex-col justify-center items-center border-2 rounded-2xl p-4">
                    <h3>EMWA</h3>
                    <p>098764</p>
                  </div>
                  <div className="flex flex-col justify-between">
                    <h3 className="text-xl font-medium text-black mb-4">
                      EMWA 12 SMA IPA-K13R-S1-IPA-TA. 23/24
                    </h3>
                    <p>KPU | 12 SMA IPA | 4 Soal</p>
                  </div>
                </CardBody>
              </Card>
            </TimelineBody>
          </TimelineItem>
          <TimelineItem>
            <TimelineConnector />
            <TimelineHeader className="h-3">
              <TimelineIcon />
              <div className="flex flex-col">
                {valueRadio === "minggu_ini" && <h3>Senin, 15 Agustus 2023</h3>}
                <p>18:25</p>
              </div>
            </TimelineHeader>
            <TimelineBody className="pb-8 pt-4">
              <Card className="mb-3">
                <CardBody className="flex gap-4">
                  <div className="text-center flex flex-col justify-center items-center border-2 rounded-2xl p-4">
                    <h3>EMWA</h3>
                    <p>098764</p>
                  </div>
                  <div className="flex flex-col justify-between">
                    <h3 className="text-xl font-medium text-black mb-4">
                      EMWA 12 SMA IPA-K13R-S1-IPA-TA. 23/24
                    </h3>
                    <p>KPU | 12 SMA IPA | 4 Soal</p>
                  </div>
                </CardBody>
              </Card>
              <Card className="mb-3">
                <CardBody className="flex gap-4">
                  <div className="text-center flex flex-col justify-center items-center border-2 rounded-2xl p-4">
                    <h3>EMWA</h3>
                    <p>098764</p>
                  </div>
                  <div className="flex flex-col justify-between">
                    <h3 className="text-xl font-medium text-black mb-4">
                      EMWA 12 SMA IPA-K13R-S1-IPA-TA. 23/24
                    </h3>
                    <p>KPU | 12 SMA IPA | 4 Soal</p>
                  </div>
                </CardBody>
              </Card>
            </TimelineBody>
          </TimelineItem>
        </Timeline>
      </div>
    </div>
  );
};

export default AktivitasComponent;
