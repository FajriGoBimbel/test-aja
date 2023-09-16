import { IconBookmark } from "../../../../public/assets/svg";
import BookmarkSlider from "./BookmarkSlider";

const Bookmark = () => {
  return (
    <div className="flex px-8 gap-x-4 items-center mx-4 lg:mx-16 mt-10 mb-28 py-6 border-2 border-primary-red rounded-3xl overflow-hidden">
      <div>
        <IconBookmark className="w-14 md:w-28 h-auto mx-auto" />
        <h2 className="font-bold text-xs md:text-base text-center">
          My Bookmark
        </h2>
      </div>
      <BookmarkSlider />
    </div>
  );
};

export default Bookmark;
