import React from "react";
import { IconBookmark } from "../../../../public/assets/svg";

export interface DataBookmarkProps {
  tugas: string;
  nomorTugas: number;
  nomorSoal: number;
  bab?: string;
}

interface BookmarkDialogProps {
  data: DataBookmarkProps[];
}

const BookmarkItem = ({
  tugas,
  nomorTugas,
  nomorSoal,
  bab,
}: DataBookmarkProps) => (
  <div className="border-b border-primary-red mt-4">
    <div className="flex gap-x-6 mb-4">
      <IconBookmark className="w-5 h-5" />
      <div>
        <h4 className="font-semibold mb-2">
          {tugas} - {nomorTugas}
        </h4>
        <p className="text-sm">
          <b>Nomor soal</b> : {nomorSoal}
        </p>
        {bab && (
          <p className="text-sm">
            <b>Bab</b> : {bab}
          </p>
        )}
      </div>
    </div>
  </div>
);

const BookmarkDialog = ({ data }: BookmarkDialogProps) => (
  <>
    {data.map((item, index) => (
      <BookmarkItem key={index} {...item} />
    ))}
  </>
);

export default BookmarkDialog;
