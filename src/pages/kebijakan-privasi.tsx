import React from "react";
import KebijakanPrivasiDatas from "@/data/KebijakanPrivasiDatas";
import HomeLayout from "@/components/Layouts/HomeLayout";

const KebijakanPrivasi = () => {
  return (
    <div className="container mx-auto my-12">
      <h1 className="text-xl text-center font-bold mb-4">Kebijakan Privasi</h1>
      {KebijakanPrivasiDatas.contents.map((content, index) => (
        <ol key={index}>
          <li className="flex">
            <p>{index + 1 + ". "}</p>
            <p className="ml-2">{content.content}</p>
          </li>
          {content.lists && (
            <ul className="ml-6">
              {content.lists.map((listItem, listItemIndex) => (
                <li key={listItemIndex}>
                  <p>{listItem.list}</p>
                  {listItem.listSubs && (
                    <ul className="ml-5">
                      {listItem.listSubs.map(
                        (listSubItem, listSubItemIndex) => (
                          <li key={listSubItemIndex}>
                            {listSubItem.listSub}
                            {listSubItem.listSubSubs && (
                              <ul className="list-disc ml-8">
                                {listSubItem.listSubSubs.map(
                                  (listSubSubItem, listSubSubItemIndex) => (
                                    <li key={listSubSubItemIndex}>
                                      {listSubSubItem.listSubSub}
                                    </li>
                                  )
                                )}
                              </ul>
                            )}
                          </li>
                        )
                      )}
                    </ul>
                  )}
                </li>
              ))}
            </ul>
          )}
        </ol>
      ))}
    </div>
  );
};

KebijakanPrivasi.getLayout = (page: any) => {
  return <HomeLayout>{page}</HomeLayout>;
};

export default KebijakanPrivasi;
