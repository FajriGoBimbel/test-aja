import { Carousel, Typography } from "@material-tailwind/react";
import Image from "next/image";
import { PropsWithChildren } from "react";

const AuthLayout = ({ children }: PropsWithChildren) => {
  return (
    <div className="flex justify-center items-center">
      <div className="lg:basis-1/2">{children}</div>
      <div className="h-screen bg-primary-yellow-100 basis-1/2 flex justify-center items-center hidden lg:flex">
        <div className="w-[80%]">
          <Carousel
            autoplay={true}
            loop={true}
            className="rounded-xl"
            navigation={({ setActiveIndex, activeIndex, length }) => (
              <div className="absolute bottom-4 left-2/4 z-50 flex -translate-x-2/4 gap-2">
                {new Array(length).fill("").map((_, i) => (
                  <span
                    key={i}
                    className={`block h-1 cursor-pointer rounded-2xl transition-all content-[''] ${
                      activeIndex === i ? "bg-white w-8" : "bg-white/50 w-4"
                    }`}
                    onClick={() => setActiveIndex(i)}
                  />
                ))}
              </div>
            )}
          >
            <div className="flex flex-col justify-center items-center">
              <Image
                src="/assets/PNG/1.png"
                alt="Ilustrasi-3"
                width={460}
                height={460}
              />
              <div className="text-center">
                <Typography className="text-2xl text-gray-700 font-bold">
                  Raih Universitas Impian Anda
                </Typography>
                <Typography>
                  Belajar dengan Go bimbel online dan Raih Universitas Impian
                  anda
                </Typography>
              </div>
            </div>
            <div className="flex flex-col justify-center items-center">
              <Image
                src="/assets/PNG/3.png"
                alt="Ilustrasi-3"
                width={460}
                height={460}
              />
              <div className="text-center">
                <Typography className="text-2xl text-gray-700 font-bold">
                  Latih Kemampuan UTBK anda
                </Typography>
                <Typography>
                  Beragam jenis soal yang ada di GO Bimbel Online
                </Typography>
              </div>
            </div>
            <div className="flex flex-col justify-center items-center">
              <Image
                src="/assets/PNG/4.png"
                alt="ilustrasi-4"
                width={460}
                height={460}
              />
              <div className="text-center">
                <Typography className="text-2xl text-gray-700 font-bold">
                  Go Bimbel Online
                </Typography>
                <Typography>
                  Belajar lebih mudah dengan gobimbel online
                </Typography>
              </div>
            </div>
          </Carousel>
        </div>
      </div>
    </div>
  );
};

export default AuthLayout;
