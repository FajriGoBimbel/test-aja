import React from "react";
import {
  Copyright,
  Facebook,
  PlayStore,
  AppStore,
  Instagram,
  Line,
  LogoHeader,
  Mail,
  MobilePhone,
  Phone,
  WA,
  XTwitter,
  Youtube,
} from "../../../public/assets/svg";
import Link from "next/link";

interface FooterProps {
  icon?: any;
  title: string;
  link: string | any;
}

const HubungiKami: FooterProps[] = [
  { icon: Phone, title: "(022)4218177", link: "#" },
  {
    icon: Mail,
    title: "officialgopusat@gmail.com",
    link: "https://mail.google.com/mail/u/0/?fs=1&to=officialgopusat@gmail.com&su=Tanya+minGO&tf=cm",
  },
  {
    icon: WA,
    title: "+62 811 2468 988",
    link: "https://api.whatsapp.com/send?phone=628112468988&text=&source=&data=",
  },
  {
    icon: Line,
    title: "Ganesha Operation",
    link: "https://line.me/R/ti/p/@769igxyd?from=page&accountId=769igxyd",
  },
];

const InfoLanjutan: FooterProps[] = [
  { title: "Syarat dan Ketentuan", link: "/syarat-ketentuan" },
  { title: "Kebijakan Privasi", link: "/kebijakan-privasi" },
  { title: "Refund Policy", link: "/refund-policy" },
];

const MediaSosial = [
  {
    icon: Youtube,
    link: "https://www.youtube.com/c/GaneshaOperationOfficial/videos",
  },
  {
    icon: Instagram,
    link: "https://www.instagram.com/officialganeshaoperation/",
  },
  {
    icon: Facebook,
    link: "https://id-id.facebook.com/ganesha.operation.official/",
  },
  { icon: XTwitter, link: "https://twitter.com/officialgopusat" },
];

const FooterSection = ({ className }: any) => {
  return (
    <footer className={className}>
      <div className="container mx-auto">
        {/* logo */}
        <div className="flex justify-center">
          <div className="text-center text-white font-bold text-lg">
            <LogoHeader className="w-48 lg:w-[18rem] inline" />
            <h3 className="text-sm">The King of The Fastest Solution</h3>
          </div>
        </div>
        {/* menus */}
        <div className="menus flex flex-col md:flex-row justify-between">
          {/* Kolom1 */}
          <div className="flex flex-col lg:flex-row mt-8 md:mt-10 lg:mt-0 gap-x-4 items-center text-sm md:w-1/3">
            <MobilePhone className="w-60 h-60 md:w-52 md:h-52 lg:w-[25rem] lg:h-[25rem]" />
            <div className="mt-6 px-4 md:px-0 text-white">
              <p className="text-center md:text-left">
                Saat ini aplikasi bimbel online
                <b className="font-bold"> GO KREASI</b> bisa di download di
                Google Play dan App Store
              </p>
              <div className="flex justify-center md:justify-start gap-x-4 mt-4">
                <Link
                  target="_blank"
                  href="https://play.google.com/store/apps/details?id=com.ganeshaoperation.kreasi&hl=in&gl=US"
                >
                  <PlayStore className="h-10 md:h-8 lg:h-18" />
                </Link>
                <Link
                  target="_blank"
                  href="https://apps.apple.com/id/app/gokreasi/id1478372788"
                >
                  <AppStore className="h-10 md:h-8 lg:h-18" />
                </Link>
              </div>
            </div>
          </div>
          {/* Kolom2 */}
          <div className="md:w-1/3 w-full px-4 md:px-0 text-white mt-10 md:grid justify-center">
            <div>
              <h2 className="font-bold text-lg">Hubungi Kami</h2>
              <ul>
                {HubungiKami.map((item, index) => (
                  <li key={index}>
                    <Link
                      target="_blank"
                      className="flex gap-x-4 items-center my-4"
                      href={item.link}
                    >
                      <item.icon className="w-5 h-5" />
                      <p>{item.title}</p>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          {/* Kolom3 */}
          <div className="md:w-1/3 px-4 md:px-0 text-white mt-10 md:grid justify-center">
            <div>
              <h2 className="font-bold text-lg mb-3">Info Lebih Lanjut</h2>
              <ul>
                {InfoLanjutan.map((item, index) => (
                  <li key={index} className="mb-4">
                    <Link
                      target="_blank"
                      rel="noopener noreferrer"
                      href={item.link}
                    >
                      {item.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
        {/* media sosial */}
        <ul className="flex justify-center gap-x-4 mt-4 md:mt-0 items-center">
          {MediaSosial.map((item, index) => (
            <li key={index}>
              <div className="bg-white w-10 h-10 rounded-full flex justify-center items-center">
                <Link target="_blank" href={item.link}>
                  <item.icon className="w-6 h-6" />
                </Link>
              </div>
            </li>
          ))}
        </ul>
        <div className="text-white mt-6 pb-8 px-4 md:px-0 text-sm flex justify-center md:items-center gap-x-2">
          <Copyright className="w-5 h-5" />
          <p>Copyright 2023, Ganesha Operation. All Right Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;
