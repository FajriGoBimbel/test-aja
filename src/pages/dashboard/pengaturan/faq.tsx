import BlankLayout from "@/components/Layouts/BlankLayout";
import { Fragment, useState } from "react";
import {
  Accordion,
  AccordionBody,
  AccordionHeader,
} from "@material-tailwind/react";
import FaqDatas from "@/data/Faq";
import Link from "next/link";
import { WA } from "../../../../public/assets/svg";
import { FaArrowLeft } from "react-icons/fa";

const Icon = ({ id, open }: any) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={3}
      stroke="#C7172C"
      className={`${
        id === open ? "rotate-180" : ""
      } h-5 w-5 transition-transform`}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M19.5 8.25l-7.5 7.5-7.5-7.5"
      />
    </svg>
  );
};

const Faq = () => {
  const [open, setOpen] = useState(0);

  const handleOpen = (value: number) => setOpen(open === value ? 0 : value);

  return (
    <div className="bg-secondary-graylight-100">
      <div className="container mx-auto py-8 md:py-16">
        <div className="flex gap-4 mb-12">
          <Link href="/dashboard/pengaturan">
            <FaArrowLeft className="w-6 h-6" />
          </Link>
          <h1 className="font-bold text-black text-lg">
            Frequently Asked Question (FAQ)
          </h1>
        </div>
        <div className="px-6 md:px-4 lg:px-40">
          {FaqDatas.map((item, index) => (
            <Fragment key={index}>
              <h3 className="font-semibold text-lg mt-4 mb-3">
                {item.category}
              </h3>
              {item.content.map((itemContent) => (
                <Accordion
                  key={itemContent.id}
                  open={open === itemContent.id}
                  icon={<Icon id={itemContent.id} open={open} />}
                  className="mb-2 rounded-lg border bg-white px-4"
                >
                  <Fragment>
                    <AccordionHeader
                      className={`border-b-0 transition-colors text-sm md:text-lg text-black hover:text-black ${
                        open === itemContent.id
                          ? "text-primary-red hover:text-primary-red"
                          : ""
                      }`}
                      onClick={() => handleOpen(itemContent.id)}
                    >
                      {itemContent.title}
                    </AccordionHeader>
                    <AccordionBody className="pt-0 text-xs md:text-base font-normal text-black">
                      {itemContent.id === 12 ? (
                        <div className="flex gap-x-1">
                          {itemContent.description.map(
                            (link: any, index: number) => (
                              <Link
                                key={index}
                                href={link.link}
                                target="_blank"
                                rel="noopener noreferrer"
                              >
                                {index > 0 ? "&" : ""} {link.title}
                              </Link>
                            )
                          )}
                        </div>
                      ) : (
                        <div
                          dangerouslySetInnerHTML={{
                            __html: itemContent.description,
                          }}
                          className="prose"
                        />
                      )}
                    </AccordionBody>
                  </Fragment>
                </Accordion>
              ))}
            </Fragment>
          ))}
        </div>
      </div>
      <Link
        className="wa text-center fixed bottom-8 right-4 md:bottom-8 md:right-8"
        href="https://api.whatsapp.com/send?phone=628112044722&text=&source=&data="
        target="_blank"
      >
        <WA className="w-8 md:w-14 h-auto mx-auto" />
        <p className="text-[8px] md:text-xs font-semibold mt-2">
          Hubungi Admin
        </p>
      </Link>
    </div>
  );
};

Faq.getLayout = (page: any) => {
  return <BlankLayout>{page}</BlankLayout>;
};

export default Faq;
