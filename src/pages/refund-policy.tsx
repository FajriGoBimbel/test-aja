import { Fragment } from "react";
import RefundPolicyDatas from "@/data/RefundPolicyDatas";
import HomeLayout from "@/components/Layouts/HomeLayout";

const SyaratKetentuan = () => {
  return (
    <div className="container mx-auto my-12">
      <h1 className="text-xl text-center font-bold mb-4">Syarat & Ketentuan</h1>
      {RefundPolicyDatas.map((item, index) => (
        <Fragment key={index}>
          <h2 className="my-1">{item.category}</h2>
          {item.contents?.map((itemContent, indexContent) => (
            <ol key={indexContent}>
              <li>
                <div className="flex ml-4">
                  <p>{itemContent.content}</p>
                </div>
                <div>
                  {itemContent?.lists && (
                    <ul className="ml-4 block">
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
