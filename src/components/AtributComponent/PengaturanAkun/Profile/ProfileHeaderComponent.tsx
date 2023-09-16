import Link from "next/link";
import { ChangeEvent, useEffect, useRef, useState } from "react";
import { FiArrowLeft } from "react-icons/fi";
import { Penghargaan, XMark } from "../../../../../public/assets/svg";
import Image from "next/image";
import { Button, Dialog, DialogBody } from "@material-tailwind/react";
import {
  Monsters,
  Followers,
  Following,
  FollowersProps,
  FollowingProps,
  MonstersProps,
} from "@/data/ProfileDatas";
import { HiCamera, HiPhoto } from "react-icons/hi2";
import { ImSearch } from "react-icons/im";
import { Inputs } from "@/components/ElementComponent";

const ProfileHeaderComponent = () => {
  const [changeProfile, setChangeProfile] = useState(false);
  const [selectedImage, setSelectedImage] = useState<MonstersProps | null>(
    null
  );

  const [followers, setFollowers] = useState(false);
  const [filteredFollowers, setFilteredFollowers] = useState<any[]>(Followers);
  const [deleteFollowers, setDeleteFollowers] = useState(false);

  const [following, setFollowing] = useState(false);
  const [filteredFollowing, setFilteredFollowing] = useState<any[]>(Following);

  useEffect(() => {
    // Cek apakah ada gambar yang dipilih dalam localStorage saat komponen dimount
    const storedImage = localStorage.getItem("selectedImage");
    if (storedImage) {
      setSelectedImage(JSON.parse(storedImage));
    }
  }, []); // [] menunjukkan bahwa efek hanya akan dijalankan saat komponen dimount

  const handleSelectImage = (img: any) => {
    localStorage.setItem("selectedImage", JSON.stringify(img)); // Simpan gambar ke localStorage
    setSelectedImage(img);
  };

  const getImageUrl = () => {
    if (selectedImage) {
      return selectedImage.image;
    } else {
      return "/assets/image/person.jpg";
    }
  };

  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleButtonClick = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click(); // Klik input file saat div diklik
    }
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = e.target.files?.[0];
    // Lakukan apa pun yang Anda perlu lakukan dengan berkas terpilih di sini
    console.log("File yang dipilih:", selectedFile);
  };

  const handleFilteredFollowers = (event: ChangeEvent<HTMLInputElement>) => {
    // Access input value
    const query: string = event.target.value;
    // Create copy of item list
    let updatedList: FollowersProps[] = [...Followers];
    // Include all elements which includes the search query
    updatedList = updatedList.filter((item) => {
      return item.name.toLowerCase().indexOf(query.toLowerCase()) !== -1;
    });
    // Trigger render with updated values
    setFilteredFollowers(updatedList);
  };

  const handleFilteredFollowing = (event: ChangeEvent<HTMLInputElement>) => {
    // Access input value
    const query: string = event.target.value;
    // Create copy of item list
    let updatedList: FollowingProps[] = [...Following];
    // Include all elements which includes the search query
    updatedList = updatedList.filter((item) => {
      return item.name.toLowerCase().indexOf(query.toLowerCase()) !== -1;
    });
    // Trigger render with updated values
    setFilteredFollowing(updatedList);
  };

  const handleModalChangeProfile = () => setChangeProfile(!changeProfile);

  const handleModalFollowers = () => setFollowers(!followers);
  const handleDeleteFollowers = () => {
    setDeleteFollowers(!deleteFollowers);
    setFollowers(true);
  };

  const handleModalFollowing = () => setFollowing(!following);

  const handleToggleFollow = (id: number) => {
    // Perbarui status follow di struktur data yang sesuai
    setFilteredFollowing((prevFollowing) =>
      prevFollowing.map((user) =>
        user.id === id ? { ...user, isFollowing: !user.isFollowing } : user
      )
    );
  };

  return (
    <div className="bg-primary-yellow-100 bg-profile h-auto">
      <div className="container mx-auto px-4 sm:px-0 pt-8">
        <div className="flex gap-4 mb-6">
          <Link href="/dashboard/pengaturan">
            <FiArrowLeft className="w-6 h-6 text-white" />
          </Link>
          <span>
            <h4 className="font-bold text-white">Profile Saya</h4>
          </span>
        </div>
        <div className="flex flex-col lg:flex-row justify-between py-10">
          <div className="flex gap-6">
            <div className="flex flex-col md:items-center gap-6">
              <div className="w-20 h-20 md:w-32 md:h-32 object-cover object-center rounded-full mx-auto overflow-hidden">
                <Image
                  width={1000}
                  height={1000}
                  alt="Profile Image"
                  src={getImageUrl()}
                  className="w-20 h-20 md:w-32 md:h-32 rounded-full object-cover object-center mx-auto border-4 border-primary-red"
                />
              </div>
              <Button
                className="bg-primary-yellow text-black font-bold p-2 text-xs"
                onClick={handleModalChangeProfile}
              >
                Ganti Foto Profil
              </Button>
            </div>
            <div>
              <h1 className="text-2xl md:text-4xl font-bold text-black mb-4">
                Syaifal Illahi
              </h1>
              <ul className="text-xs md:text-base">
                <li className="mb-1 md:mb-2">
                  <b>Kelas:</b> 12 SMA
                </li>
                <li className="mb-1 md:mb-2">
                  <b>Program:</b> Gold TWT 12 SMA 4 Pertemuan Tahun Ajaran
                  2023/2024
                </li>
                <li className="mb-1 md:mb-2">
                  <b>Lokasi:</b> Jl. Purnawarman 36B, Kota Bandung
                </li>
                <li className="mb-12">
                  <b>ID Siswa:</b> 32948547559
                </li>
              </ul>
              {/* Follow Desktop */}
              <div className="hidden lg:block">
                <div className="flex items-center w-full -mt-6 mb-4">
                  <div
                    className="text-center cursor-pointer border-r-2 border-r-black pr-6 mr-6"
                    onClick={handleModalFollowers}
                  >
                    <h3 className="text-2xl font-bold text-black">65</h3>
                    <p>Pengikut</p>
                  </div>
                  <div
                    className="text-center cursor-pointer"
                    onClick={handleModalFollowing}
                  >
                    <h3 className="text-2xl font-bold text-black">65</h3>
                    <p>Mengikuti</p>
                  </div>
                </div>
              </div>
              {/* End Follow Desktop */}
            </div>
          </div>
          {/* Follow mobile */}
          <div className="flex justify-center items-center w-full -mt-6 mb-4 lg:hidden">
            <div
              className="text-center cursor-pointer border-r-2 border-r-black pr-6 mr-6"
              onClick={handleModalFollowers}
            >
              <h3 className="text-2xl font-bold text-black">65</h3>
              <p>Pengikut</p>
            </div>
            <div
              className="text-center cursor-pointer"
              onClick={handleModalFollowing}
            >
              <h3 className="text-2xl font-bold text-black">65</h3>
              <p>Mengikuti</p>
            </div>
          </div>
          {/* End Follow mobile */}
          <div className="text-center md:mx-auto">
            <span className="flex justify-center">
              <Penghargaan className="w-32 h-32 mb-6 " />
            </span>
            <h3 className="font-bold text-black mb-2">Ranking TOBK Kamu</h3>
            <p>
              Nasional : <b>-</b> | Kota: <b>-</b> | Cabang: <b>-</b> | Gedung:{" "}
              <b>-</b> | Sekolah: <b>-</b>{" "}
            </p>
            <hr className="border-1 border-black my-4" />
            <h3 className="font-bold text-black mb-2">
              Ranking Buku Sakti Kamu
            </h3>
            <p>
              Nasional : <b>15766</b> | Kota: <b>652</b> | Cabang: <b>554</b> |
              Gedung: <b>23</b> | Sekolah:
              <b>11</b>
            </p>
          </div>
        </div>
      </div>

      {/* Modal Edit Profile */}
      <Dialog
        className="border-4 border-primary-red rounded-3xl px-2 h-[30rem] overflow-y-scroll max-w-[95%] md:max-w-fit"
        open={changeProfile}
        size="xs"
        handler={handleModalChangeProfile}
      >
        <DialogBody
          divider
          className="h-auto text-black border-y-0 font-poppins"
        >
          <div className="flex justify-end items-center mt-2 mb-6 relative">
            <XMark
              className="w-4 h-4 cursor-pointer fixed"
              onClick={handleModalChangeProfile}
            />
          </div>
          {/* START:Content */}
          <h1 className="text-center font-bold mb-4 text-xl">
            Ubah Foto Profil
          </h1>
          <div className="w-20 h-20 md:w-32 md:h-32 object-cover object-center rounded-full mx-auto overflow-hidden">
            <Image
              width={1000}
              height={1000}
              alt="Profile Image"
              src={getImageUrl()}
              className="w-20 h-20 md:w-32 md:h-32 rounded-full object-cover object-center mx-auto border-4 border-primary-red"
            />
          </div>

          <div>
            <h2 className="font-semibold text-base mt-6 mb-2">
              Pilih Karakter Kamu
            </h2>
            <div className="grid grid-cols-4 gap-2 md:gap-4">
              {Monsters.map((item, index) => (
                <div
                  role="button"
                  tabIndex={0}
                  key={index}
                  className="border-2 border-primary-red rounded-lg p-2 cursor-pointer max-w-fit"
                  onClick={() => handleSelectImage(item)}
                >
                  <Image
                    src={item.image}
                    width={1000}
                    height={1000}
                    alt={`Monster ${index + 1}`}
                    className="w-20 h-auto mx-auto object-cover object-center"
                  />
                </div>
              ))}
            </div>
          </div>

          <div>
            <h2 className="font-semibold text-base mt-4 mb-2">
              Ambil Foto atau Gambar
            </h2>
            <div className="flex gap-x-2 items-center">
              <div className="border-2 border-primary-red rounded-lg p-2 max-w-fit cursor-pointer">
                <HiCamera className="w-10 h-auto object-cover object-center" />
              </div>
              <div>
                <input
                  type="file"
                  accept="image/*"
                  style={{ display: "none" }}
                  ref={fileInputRef}
                  onChange={handleFileChange}
                />
                <div
                  className="border-2 border-primary-red rounded-lg p-2 max-w-fit cursor-pointer"
                  onClick={handleButtonClick}
                >
                  <HiPhoto className="w-10 h-auto object-cover object-center" />
                </div>
              </div>
            </div>
          </div>
          {/* END:Content */}
          <div className="flex justify-center">
            <button
              className="shadow-button mt-6 mb-4 !py-3 !px-10 text-xs"
              onClick={handleModalChangeProfile}
            >
              OK, Simpan
            </button>
          </div>
        </DialogBody>
      </Dialog>
      {/* End Modal Edit Profile */}

      {/* Modal Pengikut */}
      <Dialog
        className="border-4 border-primary-red rounded-3xl px-2 h-[30rem] overflow-y-scroll max-w-[95%] md:max-w-fit"
        open={followers}
        size="xs"
        handler={handleModalFollowers}
      >
        <DialogBody
          divider
          className="h-auto text-black border-y-0 font-poppins"
        >
          <div className="flex justify-end items-center mt-2 mb-6 relative">
            <XMark
              className="w-4 h-4 cursor-pointer fixed"
              onClick={handleModalFollowers}
            />
          </div>
          {/* START:Content */}
          <h1 className="font-bold mb-4 text-xl">Pengikut</h1>
          <div className="w-full">
            <Inputs
              type="search"
              label="Search"
              onChange={handleFilteredFollowers}
              required={false}
              icon={<ImSearch className="w-5 h-auto" />}
            />
          </div>
          <div className="mt-6">
            {filteredFollowers.map((item) => (
              <div
                key={item.id}
                className="flex justify-between items-center mb-4"
              >
                <div className="flex gap-x-4 items-center">
                  <Image
                    src={item.image}
                    width={500}
                    height={500}
                    alt={item.name}
                    className="w-10 h-10"
                  />
                  <p className="font-semibold text-sm w-2/3">{item.name}</p>
                </div>
                <Button
                  onClick={handleDeleteFollowers}
                  className="text-xs py-2 px-8 bg-primary-red"
                >
                  Hapus
                </Button>
              </div>
            ))}
          </div>
          {/* END:Content */}
        </DialogBody>
      </Dialog>
      {/* End Modal Pengikut */}

      {/* Modal Hapus Followers */}
      <Dialog
        className="border-4 border-primary-red rounded-3xl px-2"
        open={deleteFollowers}
        size="xs"
        handler={handleDeleteFollowers}
      >
        <DialogBody
          divider
          className="h-auto text-black border-y-0 font-poppins"
        >
          <div className="flex justify-end items-center mt-2 mb-6 relative">
            <XMark
              className="w-4 h-4 cursor-pointer fixed"
              onClick={handleDeleteFollowers}
            />
          </div>
          {/* START:Content */}
          <h1 className="font-bold mb-4 text-xl text-center">
            Yakin mau menghapus?
          </h1>
          <p className="mt-6 mb-8">
            Sistem kami tidak akan memberi tahu Al Fajri jika kamu ingin
            menghapusnya dari daftar siswa yang follow kamu
          </p>
          <div className="flex justify-center gap-x-6 items-center mb-4">
            <button
              onClick={handleDeleteFollowers}
              className="outline-shadow-button !px-8 !py-1"
            >
              Batal
            </button>
            <button
              onClick={handleDeleteFollowers}
              className="shadow-button !px-8 !py-1"
            >
              Hapus
            </button>
          </div>
          {/* END:Content */}
        </DialogBody>
      </Dialog>
      {/* End Modal Hapus Followers */}

      {/* Modal Mengikuti */}
      <Dialog
        className="border-4 border-primary-red rounded-3xl px-2 h-[30rem] max-w-[95%] md:max-w-fit overflow-y-scroll"
        open={following}
        size="xs"
        handler={handleModalFollowing}
      >
        <DialogBody
          divider
          className="h-auto text-black border-y-0 font-poppins"
        >
          <div className="flex justify-end items-center mt-2 mb-6 relative">
            <XMark
              className="w-4 h-4 cursor-pointer fixed"
              onClick={handleModalFollowing}
            />
          </div>
          {/* START:Content */}
          <h1 className="font-bold mb-4 text-xl">Mengikuti</h1>
          <div className="w-full">
            <Inputs
              type="search"
              label="Search"
              onChange={handleFilteredFollowers}
              required={false}
              icon={<ImSearch className="w-5 h-auto" />}
            />
          </div>
          <div className="mt-6">
            {filteredFollowing.map((item) => (
              <div
                key={item.id}
                className="flex justify-between items-center mb-4"
              >
                <div className="flex gap-x-4 items-center">
                  <Image
                    src={item.image}
                    width={500}
                    height={500}
                    alt={item.name}
                    className="w-8 md:w-10 h-auto"
                  />
                  <p className="font-semibold text-sm w-2/3">{item.name}</p>
                </div>
                <Button
                  onClick={() => handleToggleFollow(item.id)}
                  className={`text-xs ${
                    item.isFollowing
                      ? "bg-primary-red py-2 px-4 md:px-8"
                      : "bg-white text-primary-red border-2 border-primary-red py-2 px-7 md:px-11"
                  }`}
                >
                  {item.isFollowing ? "Mengikuti" : "Ikuti"}
                </Button>
              </div>
            ))}
          </div>
          {/* END:Content */}
        </DialogBody>
      </Dialog>
      {/* End Modal Mengikuti */}
    </div>
  );
};

export default ProfileHeaderComponent;
