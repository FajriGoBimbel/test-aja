import {
  Row1Tobk,
  Row2Tobk,
  Row3Tobk,
  Row4Tobk,
  Row5Tobk,
} from "@/components/AtributComponent/Tobk";
import { UtbkCalendar } from "@/components/ElementComponent";

const TOBK = () => {
  return (
    <div className="container mx-auto">
      {/* header */}
      <div className="flex justify-between items-center sm:items-start mt-6 sm:mt-20 mx-4">
        <h1 className="text-base sm:text-2xl font-semibold">
          TOBK (Try Out Berbasis Komputer)
        </h1>
        <UtbkCalendar year={2024} day={299} />
      </div>

      <div className="my-10 md:mt-0 mx-4">
        <Row1Tobk />
        <div className="flex justify-end">
          <hr className="w-1/3 lg:w-[15%] border-2 border-dashed border-black rotate-90 mt-16 md:mt-32 lg:mt-28 md:mb-24 lg:mb-20 mr-28 md:mr-0 lg:mr-28"></hr>
        </div>
        <Row2Tobk />
        <div className="flex justify-start">
          <hr className="w-1/3 lg:w-[15%] border-2 border-dashed border-black rotate-90 mt-16 md:mt-32 md:mb-24 lg:mt-28 mr-28 ml-28 md:ml-0 lg:ml-28"></hr>
        </div>
        <Row3Tobk />
        <div className="flex justify-end">
          <hr className="w-1/3 lg:w-[15%] border-2 border-dashed border-black rotate-90 mt-16 md:mt-32 md:mb-24 lg:mt-28 mr-28 md:mr-0 lg:mr-28"></hr>
        </div>
        <Row4Tobk />
        <div className="flex justify-start">
          <hr className="w-1/3 lg:w-[15%] border-2 border-dashed border-black rotate-90 mt-16 md:mt-32 md:-mb-4 lg:mb-0 lg:mt-28 ml-28 md:ml-0 lg:ml-28"></hr>
        </div>
        <Row5Tobk />
      </div>
    </div>
  );
};

export default TOBK;
