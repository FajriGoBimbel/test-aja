import { Fragment } from "react";
import SyaratKetentuanDatas from "@/data/SyaratKetentuanDatas";
import HomeLayout from "@/components/Layouts/HomeLayout";

const SyaratKetentuan = () => {
  return (
    <div className="container mx-auto my-12">
      <h1 className="text-xl text-center font-bold mb-4">Syarat & Ketentuan</h1>
      {SyaratKetentuanDatas.map((item, index) => (
        <Fragment key={index}>
          <h2 className="text-lg font-semibold my-2">{item.category}</h2>
          {item.contents.map((itemContent, indexContent) => (
            <ol key={indexContent}>
              <li>
                <div className="flex ml-6">
                  <p className="w-4">
                    {item.contents.length > 1 && indexContent + 1 + ". "}
                  </p>
                  <p className="ml-2">{itemContent.content}</p>
                </div>
                <div>
                  {itemContent.lists && (
                    <ul className="ml-12 block">
                      {itemContent.lists.map((listItem, listIndex) => (
                        <li key={listIndex}>{listItem.list}</li>
                      ))}
                    </ul>
                  )}
                </div>
              </li>
            </ol>
          ))}
        </Fragment>
      ))}
    </div>
  );
};

SyaratKetentuan.getLayout = (page: any) => {
  return <HomeLayout>{page}</HomeLayout>;
};

export default SyaratKetentuan;
