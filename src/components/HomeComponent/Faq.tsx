import React, { Fragment, useState } from "react";
import {
  Accordion,
  AccordionBody,
  AccordionHeader,
} from "@material-tailwind/react";
import FaqDatas from "@/data/Faq";
import Link from "next/link";

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
  const [itemsToShow, setItemsToShow] = useState(1);

  const handleOpen = (value: number) => setOpen(open === value ? 0 : value);
  const handleShowMore = () => {
    setItemsToShow((prevItems) => prevItems === 1 ? FaqDatas.length : 1);
  };

  return (
    <div className="bg-secondary-graylight-100">
      <div className="container mx-auto py-8 md:py-16">
        <h1 className="mb-8 ml-4 md:ml-0 text-2xl md:text-3xl font-bold tracking-tight">
          Frequently Asked Question (FAQ)
        </h1>
        <div className="px-6 md:px-4 lg:px-40">
          {FaqDatas.slice(0, itemsToShow).map((item, index) => (
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
        <p className="cursor-pointer text-black text-center text-lg font-bold mt-6" onClick={handleShowMore}>
          {itemsToShow === 1 ? "Lihat Selengkapnya" : "Lihat Lebih Sedikit"}
        </p>
      </div>
    </div>
  );
};

export default Faq;
