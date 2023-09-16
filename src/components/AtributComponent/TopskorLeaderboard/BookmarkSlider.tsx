import BookmarkDatas from "@/data/BookmarkDatas";
import { settingDashboardMyBookmark } from "@/utils/SetingSlider";
import { Dialog, DialogBody } from "@material-tailwind/react";
import React, { useState } from "react";
import { BiChevronRight } from "react-icons/bi";
import Slider from "react-slick";
import { XMark } from "../../../../public/assets/svg";
import Image from "next/image";

const BookmarkSlider = () => {
  const [open, setOpen] = useState<boolean[]>(
    Array(BookmarkDatas.length).fill(false)
  );

  const toggleDialog = (index: number) => {
    const newOpenState = [...open];
    newOpenState[index] = !newOpenState[index];
    setOpen(newOpenState);
  };

  return (
    <div className="container">
      <Slider {...settingDashboardMyBookmark}>
        {BookmarkDatas.map((item, index) => (
          <div key={index} className="px-2">
            {/* ! Masalahnya karna image */}
            <div className="bg-primary-yellow text-black p-3 rounded-3xl">
              <Image
                src={item.image}
                width={500}
                height={500}
                alt="matematika"
                className="w-auto h-auto rounded-xl mx-auto"
              />
              <div
                role="button"
                tabIndex={0}
                onClick={() => toggleDialog(index)}
              >
                <h3 className="font-semibold text-sm line-clamp-1 w-40 text-ellipsis mt-2 mb-1">
                  {item.title}
                </h3>
                <div className="flex justify-between items-center">
                  <p className="text-xs">{item.total} Soal</p>
                  <BiChevronRight className="w-3 h-3 fill-black" />
                </div>
              </div>
              {/* START:Dialog Modal */}
              <Dialog
                className="border-4 border-primary-red outline-none rounded-3xl px-2 h-fit max-w-[90%] md:max-w-auto"
                open={open[index]}
                size="xs"
                handler={() => toggleDialog(index)}
              >
                <DialogBody
                  divider
                  className="h-[28rem] overflow-y-scroll no-scrollbar text-black border-y-0 font-poppins"
                >
                  <div className="flex justify-end items-center mt-2 mb-6 relative">
                    <XMark
                      className="w-4 h-4 cursor-pointer fixed"
                      onClick={() => toggleDialog(index)}
                    />
                  </div>
                  {/* START:Content */}
                  <h2 className="font-semibold text-2xl mb-4">My Bookmark</h2>
                  <div className="text-sm md:text-base">
                    <h3>
                      <b>Mata Pelajaran :</b> {item.title}
                    </h3>
                    <h3>
                      <b>Jumlah Soal Yang Disimpan :</b> {item.total} Soal
                    </h3>
                  </div>
                  {<item.link />}
                  {/* END:Content */}
                </DialogBody>
              </Dialog>
              {/* END:Dialog Modal */}
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default BookmarkSlider;
