import ERE from "@/data/ERE";

const Fasilitas12 = () => {
  return (
<>
      <p>
        Parents Meeting merupakan pertemuan rutin antara managemen Ganesha
        Operation bareng orang tua SobatGO, pertemuan tersebut untuk
        menyampaikan progres pembelajaran kamu selama belajar di Ganesha
        Operation. Selain itu, Parents Meeting juga sebagai sarana untuk
        membangun komunikasi dan menyampaikan informasi terbaru tentang
        pendidikan kepada orang tua SobatGO.
      </p>
      <ul className="mt-4">
        {ERE.map((item, index) => (
          <li key={index} className="flex flex-col md:flex-row gap-x-8 justify-center md:justify-start items-center mb-4 md:mb-8">
            <div>
              <item.icon className="md:w-20 md:h-20 w-24 h-24" />
              <h3 className="text-center text-xl md:text-base font-semibold mt-1 mb-2 md:mb-0">{item.iconTitle}</h3>
            </div>
            <p>{item.content}</p>
          </li>
        ))}
      </ul>
    </>
  );
};

export default Fasilitas12;
